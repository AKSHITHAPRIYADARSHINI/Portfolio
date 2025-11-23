import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts, getMediumPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

type Post = {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  type: "local" | "external";
  link?: string | null;
};

export default async function BlogPage() {
  const localPosts = await getBlogPosts();
  const mediumPosts = await getMediumPosts();

  // Combine posts
  const allPosts: Post[] = [
    ...localPosts.map((post) => ({
      slug: post.slug,
      title: post.metadata.title,
      publishedAt: post.metadata.publishedAt,
      summary: post.metadata.summary,
      type: "local" as const,
      link: null,
    })),
    ...mediumPosts.map((post) => ({
      slug: post.slug,
      title: post.title,
      publishedAt: post.publishedAt,
      summary: post.summary,
      type: "external" as const,
      link: post.link,
    })),
  ];

  // Sort by date (newest first)
  const sortedPosts = allPosts.sort((a, b) => {
    const dateA = new Date(a.publishedAt).getTime();
    const dateB = new Date(b.publishedAt).getTime();
    return dateB - dateA;
  });

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">Blog</h1>
      </BlurFade>
      {sortedPosts.map((post, id) => (
        <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
          {post.type === "external" ? (
            <a
              className="flex flex-col space-y-1 mb-4 hover:opacity-80 transition-opacity"
              href={post.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">
                  {post.title}
                  <span className="ml-2">↗</span>
                </p>
                <p className="h-6 text-xs text-muted-foreground">
                  {post.publishedAt}
                </p>
              </div>
            </a>
          ) : (
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">{post.title}</p>
                <p className="h-6 text-xs text-muted-foreground">
                  {post.publishedAt}
                </p>
              </div>
            </Link>
          )}
        </BlurFade>
      ))}
    </section>
  );
}