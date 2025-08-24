"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/container";
import { BlogCard } from "./BlogCard";
import { BlogFilters } from "./BlogFilters";
import { BlogPagination } from "./BlogPagination";

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
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse {
  docs: Post[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

export function BlogList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
    totalDocs: 0,
    hasNextPage: false,
    hasPrevPage: false,
  });
  
  // Filters
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const fetchPosts = async (page: number = 1, category?: string, search?: string) => {
    try {
      setLoading(true);
      
      const params = new URLSearchParams({
        page: page.toString(),
        limit: "9",
        where: JSON.stringify({
          status: { equals: "published" },
          ...(category && { categories: { in: [category] } }),
          ...(search && { 
            or: [
              { title: { contains: search } },
              { excerpt: { contains: search } }
            ]
          })
        }),
        sort: "-publishedDate",
        populate: "author,categories,featuredImage"
      });

      const response = await fetch(`/api/posts?${params}`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      
      const data: ApiResponse = await response.json();
      
      setPosts(data.docs);
      setPagination({
        page: data.page,
        totalPages: data.totalPages,
        totalDocs: data.totalDocs,
        hasNextPage: data.hasNextPage,
        hasPrevPage: data.hasPrevPage,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/categories?limit=100");
      if (response.ok) {
        const data = await response.json();
        setCategories(data.docs);
      }
    } catch (err) {
      console.error("Failed to fetch categories:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchPosts(1, selectedCategory, searchQuery);
  }, [selectedCategory, searchQuery]);

  const handlePageChange = (newPage: number) => {
    fetchPosts(newPage, selectedCategory, searchQuery);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  if (error) {
    return (
      <Container>
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Erro ao carregar posts</h2>
          <p className="text-slate-600">{error}</p>
          <button
            onClick={() => fetchPosts(1, selectedCategory, searchQuery)}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Tentar novamente
          </button>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <BlogFilters
        categories={categories}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
      />

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-slate-200 h-48 rounded-lg mb-4"></div>
              <div className="bg-slate-200 h-4 rounded mb-2"></div>
              <div className="bg-slate-200 h-4 rounded w-3/4 mb-2"></div>
              <div className="bg-slate-200 h-3 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : posts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          {pagination.totalPages > 1 && (
            <div className="mt-16">
              <BlogPagination
                currentPage={pagination.page}
                totalPages={pagination.totalPages}
                hasNextPage={pagination.hasNextPage}
                hasPrevPage={pagination.hasPrevPage}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Nenhum post encontrado</h2>
          <p className="text-slate-600">
            {searchQuery || selectedCategory
              ? "Tente ajustar seus filtros de busca."
              : "Não há posts publicados no momento."}
          </p>
        </div>
      )}
    </Container>
  );
}