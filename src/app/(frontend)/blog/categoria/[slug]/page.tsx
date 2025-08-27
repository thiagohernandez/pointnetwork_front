import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/ui/footer/footer";
import { Header } from "@/components/ui/header";
import Container from "@/components/ui/container";
import { BlogList } from "@/components/blog/BlogList";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import HeroBasic from "@/components/ui/hero/hero-basic";

interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

async function getCategory(slug: string): Promise<Category | null> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000";
    const response = await fetch(
      `${baseUrl}/api/categories?where[slug][equals]=${slug}&limit=1`,
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
    console.error("Error fetching category:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategory(slug);

  if (!category) {
    return {
      title: "Categoria não encontrada | PointNetwork Blog",
      description: "A categoria solicitada não foi encontrada.",
    };
  }

  return {
    title: `${category.name} | PointNetwork Blog`,
    description: category.description || `Posts da categoria ${category.name}`,
    openGraph: {
      title: `${category.name} | PointNetwork Blog`,
      description:
        category.description || `Posts da categoria ${category.name}`,
      type: "website",
    },
  };
}

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{
    page?: string;
    search?: string;
  }>;
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { slug } = await params;
  const searchParamsData = await searchParams;
  const category = await getCategory(slug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <Header />
      <HeroBasic
        title={category.name}
        description={category.description ? category.description : ""}
      />

      <main className="bg-slate-50 py-16 lg:py-32">
        <Container>
          {/* Content with Sidebar */}
          <div className="flex flex-col lg:flex-row gap-12 justify-between">
            {/* Main Content */}
            <div className="flex-1">
              <BlogList
                initialPage={parseInt(searchParamsData.page || "1")}
                initialCategory={category.id}
                initialSearch={searchParamsData.search || ""}
                showFilters={false}
              />
            </div>
            {/* Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              <BlogSidebar currentCategoryId={category.id} />
            </aside>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
