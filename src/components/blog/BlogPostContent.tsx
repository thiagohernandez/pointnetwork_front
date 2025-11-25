"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Clock } from "lucide-react";
import { usePost } from "@/hooks/useBlogQueries";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const estimateReadingTime = (content: any): number => {
  if (!content) return 1;

  const extractText = (node: any): string => {
    if (typeof node === "string") return node;
    if (node?.text) return node.text;
    if (node?.children) {
      return node.children.map(extractText).join(" ");
    }
    return "";
  };

  const text = extractText(content);
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return Math.max(1, readingTime);
};

const renderContent = (content: any) => {
  if (!content || !content.root) {
    return <p className="text-slate-600">Conteúdo não disponível.</p>;
  }

  const renderNode = (node: any, index: number): React.ReactNode => {
    if (!node) return null;

    switch (node.type) {
      case "paragraph":
        return (
          <p key={index} className="mb-6 text-slate-700 leading-relaxed">
            {node.children?.map((child: any, childIndex: number) =>
              renderNode(child, childIndex)
            )}
          </p>
        );

      case "heading":
        const headingLevel = node.tag || "h2";
        const headingClasses = {
          h1: "text-3xl font-bold mb-6 text-slate-900",
          h2: "text-2xl font-bold mb-4 text-slate-900",
          h3: "text-xl font-semibold mb-3 text-slate-900",
          h4: "text-lg font-semibold mb-2 text-slate-900",
          h5: "text-base font-semibold mb-2 text-slate-900",
          h6: "text-sm font-semibold mb-2 text-slate-900",
        };

        const className =
          headingClasses[headingLevel as keyof typeof headingClasses] ||
          headingClasses.h2;
        const content = node.children?.map((child: any, childIndex: number) =>
          renderNode(child, childIndex)
        );

        switch (headingLevel) {
          case "h1":
            return (
              <h1 key={index} className={className}>
                {content}
              </h1>
            );
          case "h2":
            return (
              <h2 key={index} className={className}>
                {content}
              </h2>
            );
          case "h3":
            return (
              <h3 key={index} className={className}>
                {content}
              </h3>
            );
          case "h4":
            return (
              <h4 key={index} className={className}>
                {content}
              </h4>
            );
          case "h5":
            return (
              <h5 key={index} className={className}>
                {content}
              </h5>
            );
          case "h6":
            return (
              <h6 key={index} className={className}>
                {content}
              </h6>
            );
          default:
            return (
              <h2 key={index} className={className}>
                {content}
              </h2>
            );
        }

      case "text":
        let textElement = node.text;

        if (node.format & 1) {
          textElement = <strong key={index}>{textElement}</strong>;
        }
        if (node.format & 2) {
          textElement = <em key={index}>{textElement}</em>;
        }

        return textElement;

      case "list":
        const ListTag = node.listType === "bullet" ? "ul" : "ol";
        return (
          <ListTag key={index} className="mb-6 pl-6 space-y-2">
            {node.children?.map((child: any, childIndex: number) =>
              renderNode(child, childIndex)
            )}
          </ListTag>
        );

      case "listitem":
        return (
          <li key={index} className="text-slate-700">
            {node.children?.map((child: any, childIndex: number) =>
              renderNode(child, childIndex)
            )}
          </li>
        );

      default:
        if (node.children) {
          return node.children.map((child: any, childIndex: number) =>
            renderNode(child, childIndex)
          );
        }
        return null;
    }
  };

  return (
    <div className="prose prose-lg max-w-none">
      {content.root.children?.map((node: any, index: number) =>
        renderNode(node, index)
      )}
    </div>
  );
};

interface BlogPostContentProps {
  slug: string;
}

export function BlogPostContent({ slug }: BlogPostContentProps) {
  const { data: post, isLoading, error } = usePost(slug);

  if (isLoading) {
    return (
      <div className="max-w-4xl">
        <div className="animate-pulse">
          <div className="mb-12">
            <div className="h-8 bg-slate-200 rounded mb-4"></div>
            <div className="h-4 bg-slate-200 rounded w-3/4 mb-6"></div>
            <div className="flex gap-6 mb-8">
              <div className="h-4 bg-slate-200 rounded w-24"></div>
              <div className="h-4 bg-slate-200 rounded w-24"></div>
              <div className="h-4 bg-slate-200 rounded w-24"></div>
            </div>
          </div>
          <div className="h-96 bg-slate-200 rounded-xl mb-12"></div>
          <div className="space-y-4">
            <div className="h-4 bg-slate-200 rounded"></div>
            <div className="h-4 bg-slate-200 rounded"></div>
            <div className="h-4 bg-slate-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Erro ao carregar post
        </h2>
        <p className="text-slate-600 mb-4">
          {error instanceof Error ? error.message : "Ocorreu um erro"}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Post não encontrado
        </h2>
        <p className="text-slate-600 mb-4">
          O post solicitado não foi encontrado.
        </p>
        <Link
          href="/blog"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Voltar ao blog
        </Link>
      </div>
    );
  }

  const readingTime = estimateReadingTime(post.content);

  return (
    <article className="max-w-4xl">
      {/* Header */}
      <header className="mb-12">
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span>{post.author.name}</span>
          </div>

          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.publishedDate}>
              {formatDate(post.publishedDate)}
            </time>
          </div>

          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>{readingTime} min de leitura</span>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {post.featuredImage && (
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={post.featuredImage.url}
            alt={post.featuredImage.alt || post.title}
            width={1200}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>
      )}

      {/* Content */}
      <div className="mb-12">{renderContent(post.content)}</div>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="mb-12 p-6 bg-slate-50 rounded-xl">
          <h3 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tagObj, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 text-sm bg-white text-slate-600 rounded-full border border-slate-200"
              >
                #{tagObj.tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Categories */}
      {post.categories.length > 0 && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <Link
                key={category.id}
                href={`/blog/categoria/${category.slug}`}
                className="inline-block px-3 py-1 text-xs font-semibold text-purple-700 bg-purple-100 rounded-full hover:bg-purple-200 transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Author Bio */}
      {post.author.bio && (
        <div className="border-t border-slate-200 pt-8">
          <div className="flex items-start space-x-4">
            {post.author.avatar ? (
              <Image
                src={post.author.avatar.url}
                alt={post.author.name}
                width={64}
                height={64}
                className="rounded-full"
              />
            ) : (
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">
                  {post.author.name.charAt(0)}
                </span>
              </div>
            )}

            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-1">
                {post.author.name}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {post.author.bio}
              </p>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
