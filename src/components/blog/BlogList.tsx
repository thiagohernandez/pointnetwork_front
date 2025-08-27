"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { BlogCard } from "./BlogCard";
import { BlogFilters } from "./BlogFilters";
import { BlogPagination } from "./BlogPagination";
import { usePosts, useCategories } from "@/hooks/useBlogQueries";

interface BlogListProps {
  initialPage: number;
  initialCategory: string;
  initialSearch: string;
  showFilters?: boolean;
}

export function BlogList({
  initialPage,
  initialCategory,
  initialSearch,
  showFilters = true,
}: BlogListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get current values from URL
  const currentPage = parseInt(
    searchParams.get("page") || initialPage.toString()
  );
  // For category pages, use initialCategory if no category in search params
  // For main blog page, use search params category or empty string
  const selectedCategory = searchParams.get("category") || initialCategory;
  const searchQuery = searchParams.get("search") || initialSearch;

  // React Query hooks
  const {
    data: postsData,
    isLoading: postsLoading,
    error: postsError,
  } = usePosts(currentPage, selectedCategory, searchQuery);

  const { data: categories = [], isLoading: categoriesLoading } =
    useCategories();

  const posts = postsData?.docs || [];
  const pagination = postsData
    ? {
        page: postsData.page,
        totalPages: postsData.totalPages,
        totalDocs: postsData.totalDocs,
        hasNextPage: postsData.hasNextPage,
        hasPrevPage: postsData.hasPrevPage,
      }
    : {
        page: 1,
        totalPages: 1,
        totalDocs: 0,
        hasNextPage: false,
        hasPrevPage: false,
      };

  // Helper function to update URL parameters
  const updateUrlParams = (updates: {
    page?: number;
    category?: string;
    search?: string;
  }) => {
    const params = new URLSearchParams(searchParams);

    if (updates.page !== undefined) {
      if (updates.page === 1) {
        params.delete("page");
      } else {
        params.set("page", updates.page.toString());
      }
    }

    if (updates.category !== undefined) {
      if (updates.category === "") {
        params.delete("category");
      } else {
        params.set("category", updates.category);
      }
    }

    if (updates.search !== undefined) {
      if (updates.search === "") {
        params.delete("search");
      } else {
        params.set("search", updates.search);
      }
    }

    const queryString = params.toString();
    const newUrl = queryString ? `/blog?${queryString}` : "/blog";
    router.push(newUrl);
  };

  const handlePageChange = (newPage: number) => {
    updateUrlParams({ page: newPage });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryChange = (categoryId: string) => {
    updateUrlParams({ category: categoryId, page: 1 });
  };

  const handleSearchChange = (query: string) => {
    updateUrlParams({ search: query, page: 1 });
  };

  if (postsError) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Erro ao carregar posts
        </h2>
        <p className="text-slate-600">
          {postsError instanceof Error ? postsError.message : "Ocorreu um erro"}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  return (
    <div>
      {postsLoading || categoriesLoading ? (
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
          <div className="grid grid-cols-1 gap-8">
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
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Nenhum post encontrado
          </h2>
          <p className="text-slate-600">
            {searchQuery || selectedCategory
              ? "Tente ajustar seus filtros de busca."
              : "Não há posts publicados no momento."}
          </p>
        </div>
      )}
    </div>
  );
}
