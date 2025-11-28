import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage?: {
    id: string;
    url: string;
    alt?: string;
  };
  author: {
    id: string;
    name: string;
    bio?: string;
    avatar?: {
      url: string;
    };
  };
  categories: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
  publishedDate: string;
}

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article className="group  transition-all duration-300 overflow-hidden">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[32/12] rounded-xl overflow-hidden">
          {post.featuredImage ? (
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.alt || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">
                {post.title.charAt(0)}
              </span>
            </div>
          )}

          {post.categories.length > 0 && (
            <div className="absolute top-4 left-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-purple-600 rounded-full">
                {post.categories[0].name}
              </span>
            </div>
          )}
        </div>
      </Link>

      <div className="py-6">
        <div className="flex items-center text-sm text-slate-500 mb-3 space-x-4">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.publishedDate}>
              {formatDate(post.publishedDate)}
            </time>
          </div>
          <div className="flex items-center space-x-1">
            <User className="w-4 h-4" />
            <span>{post.author.name}</span>
          </div>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-xl font-semibold text-network-primary mb-3 line-clamp-2 group-hover:text-primary transition-colors tracking-tight">
            {post.title}
          </h2>
        </Link>

        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-sm font-semibold text-network-primary hover:text-purple-700 transition-colors"
        >
          Continue lendo
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </article>
  );
}
