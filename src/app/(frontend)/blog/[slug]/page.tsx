import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import Footer from "@/components/ui/footer/footer";
import { Header } from "@/components/ui/header";
import Container from "@/components/ui/container";
import HeroBasic from "@/components/ui/hero/hero-basic";
import { BlogSidebar } from "@/components/blog/BlogSidebar";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: any;
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
  tags: Array<{
    tag: string;
  }>;
  publishedDate: string;
  status: "draft" | "published";
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: Array<{ keyword: string }>;
  };
  createdAt: string;
  updatedAt: string;
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    // Use full URL for server-side requests, relative URL for client-side
    const baseUrl =
      process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000";
    const response = await fetch(
      `${baseUrl}/api/posts?where[slug][equals]=${slug}&where[status][equals]=published&populate=author,categories,featuredImage`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    if (data.docs && data.docs.length > 0) {
      return data.docs[0];
    }

    return null;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post não encontrado | PointNetwork Blog",
      description: "O post solicitado não foi encontrado.",
    };
  }

  const title = post.seo?.metaTitle || post.title;
  const description = post.seo?.metaDescription || post.excerpt;
  const keywords = post.seo?.keywords?.map((k) => k.keyword) || [];

  return {
    title: `${title} | PointNetwork Blog`,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author.name],
      images: post.featuredImage
        ? [
            {
              url: post.featuredImage.url,
              alt: post.featuredImage.alt || post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: post.featuredImage ? [post.featuredImage.url] : undefined,
    },
  };
}

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

  // Extract text from Lexical content (simplified)
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

// Render Lexical content (simplified version)
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
          // Bold
          textElement = <strong key={index}>{textElement}</strong>;
        }
        if (node.format & 2) {
          // Italic
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

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const readingTime = estimateReadingTime(post.content);

  return (
    <>
      <Header />
      <HeroBasic
        title={post.title}
        description="Fique por dentro das últimas novidades sobre gestão de condomínios, tecnologia e inovação"
      />

      <main className="py-12 lg:py-20">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 justify-between">
            {/* Main Content */}
            <div className="flex-1">
              <article className="max-w-4xl">
                {/* Header */}
                <header className="mb-12">
                  {/* Categories */}

                  {/* Title */}
                  {/* <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {post.title}
              </h1> */}

                  {/* Excerpt */}
                  {/* <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p> */}

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

                {/* Author Bio */}
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
            </div>
            {/* Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              <BlogSidebar />
            </aside>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
