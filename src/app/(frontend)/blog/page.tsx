import React from "react";
import type { Metadata } from "next";
import Footer from "@/components/ui/footer/footer";
import { Header } from "@/components/ui/header";
import { HeroBasic } from "@/components/ui/hero";
import { generateMetadata } from "@/components/seo/metadata";
import { BlogList } from "@/components/blog/BlogList";

export const metadata: Metadata = generateMetadata({
  title: "Blog | PointNetwork",
  description: "Fique por dentro das últimas novidades sobre gestão de condomínios, tecnologia e inovação.",
  keywords: [
    "blog gestão condomínios",
    "tecnologia predial",
    "inovação condominial",
    "sindicos",
    "administradoras"
  ],
});

interface BlogPageProps {
  searchParams: Promise<{
    page?: string;
    category?: string;
    search?: string;
  }>;
}

const Blog = async ({ searchParams }: BlogPageProps) => {
  const params = await searchParams;
  
  return (
    <>
      <Header />
      <HeroBasic
        title="Blog"
        description="Fique por dentro das últimas novidades sobre gestão de condomínios, tecnologia e inovação"
      />
      <main className="bg-slate-50 py-16 lg:py-32">
        <BlogList 
          initialPage={parseInt(params.page || "1")}
          initialCategory={params.category || ""}
          initialSearch={params.search || ""}
        />
      </main>
      <Footer />
    </>
  );
};

export default Blog;