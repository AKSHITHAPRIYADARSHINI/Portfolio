import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Markdown from "react-markdown";

interface UnifiedCardProps {
  title: string;
  subtitle: string;
  date: string;
  category?: string;
  credentialUrl?: string;
  description?: string;
  tags?: string[];
  isClickable?: boolean;
}

export function UnifiedCard({
  title,
  subtitle,
  date,
  category,
  credentialUrl,
  description,
  tags,
  isClickable = false,
}: UnifiedCardProps) {
  const cardContent = (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
          <time className="font-sans text-xs">{date}</time>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {category && (
          <div className="mt-4 flex flex-wrap gap-1">
            <Badge className="px-1 py-0 text-[10px]" variant="secondary">
              {category}
            </Badge>
          </div>
        )}
      </CardContent>
      {credentialUrl && (
        <div className="px-2 pb-2 pt-2">
          <Link
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-500 hover:underline flex items-center gap-1"
          >
            View Certificate →
          </Link>
        </div>
      )}
    </Card>
  );

  if (isClickable && credentialUrl) {
    return (
      <Link href={credentialUrl} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}