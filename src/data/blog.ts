import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import Parser from "rss-parser";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

type BlogPost = {
  title: string;
  publishedAt: string;
  summary: string;
  slug: string;
  content: "local" | "external";
  link?: string;
  source?: string;
};

function getMDXFiles(dir: string) {
  return fs
    .readdirSync(dir)
    .filter(
      (file) =>
        path.extname(file) === ".mdx"
    );
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string) {
  const filePath = path.join("content", `${slug}.mdx`);
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata,
    slug,
  };
}

async function getAllPosts(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file));
      let { metadata, source } = await getPost(slug);
      return {
        metadata,
        slug,
        source,
      };
    })
  );
}

export async function getBlogPosts() {
  return getAllPosts(path.join(process.cwd(), "content"));
}

// Get Medium posts from RSS feed
export async function getMediumPosts(): Promise<BlogPost[]> {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL(
      "https://medium.com/feed/@zukakzepri" // Replace with your Medium username
    );

    return feed.items.map((item) => ({
      title: item.title || "Untitled",
      publishedAt: item.pubDate || new Date().toISOString(),
      summary: item.contentSnippet?.substring(0, 150) || "No summary available",
      link: item.link,
      content: "external" as const,
      slug: item.link?.split("/").pop() || "",
    }));
  } catch (error) {
    console.error("Error fetching Medium posts:", error);
    return [];
  }
}

// Combine local MDX and Medium posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const localPosts = await getBlogPosts();
  const mediumPosts = await getMediumPosts();

  const combined: BlogPost[] = [
    ...localPosts.map((post) => ({
      title: post.metadata.title,
      publishedAt: post.metadata.publishedAt,
      summary: post.metadata.summary,
      slug: post.slug,
      content: "local" as const,
      source: post.source,
    })),
    ...mediumPosts,
  ];

  // Sort by date (newest first)
  return combined.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

// Keep existing BLOG_POSTS for backward compatibility
export const BLOG_POSTS = [
  //{
  //title: "Hello World",
  //publishedAt: "2024-06-18",
  //summary: "My first post on my new blog.",
  //slug: "hello-world",
  //content: "local" as const,
  //},
];