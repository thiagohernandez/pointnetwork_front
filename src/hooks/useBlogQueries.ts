import { useQuery } from "@tanstack/react-query";

// Get the API base URL from environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || "";

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
  description?: string;
  postCount?: number;
}

interface CategoryApiResponse {
  docs: Category[];
  totalDocs: number;
}

// Fetch posts with filters
export const usePosts = (page: number = 1, category?: string, search?: string) => {
  return useQuery({
    queryKey: ["posts", page, category, search],
    queryFn: async (): Promise<ApiResponse> => {
      // Build URL parameters manually to match working format from sidebar
      const params = new URLSearchParams();
      params.set("page", page.toString());
      params.set("limit", "9");
      params.set("sort", "-publishedDate");
      params.set("populate", "author,categories,featuredImage");
      params.set("where[status][equals]", "published");

      if (category) {
        params.set("where[categories][in][]", category);
      }

      if (search) {
        // For search, we might need to use the JSON format
        const searchClause = {
          or: [
            { title: { contains: search } },
            { excerpt: { contains: search } },
          ],
        };
        const existingWhere: any = { status: { equals: "published" } };
        if (category) {
          existingWhere.categories = { in: [category] };
        }
        const combinedWhere = { ...existingWhere, ...searchClause };
        params.delete("where[status][equals]");
        if (category) params.delete("where[categories][in][]");
        params.set("where", JSON.stringify(combinedWhere));
      }

      const response = await fetch(`${API_BASE_URL}/api/posts?${params}`);

      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      return response.json();
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

// Fetch categories
export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async (): Promise<Category[]> => {
      const response = await fetch(`${API_BASE_URL}/api/categories?limit=100&sort=name`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }

      const data: CategoryApiResponse = await response.json();
      
      // Fetch post count for each category
      const categoriesWithCount = await Promise.all(
        data.docs.map(async (category: Category) => {
          try {
            const postsResponse = await fetch(
              `${API_BASE_URL}/api/posts?where[categories][in][]=${category.id}&where[status][equals]=published&limit=0`
            );
            
            if (postsResponse.ok) {
              const postsData = await postsResponse.json();
              return { ...category, postCount: postsData.totalDocs || 0 };
            }
            
            return { ...category, postCount: 0 };
          } catch {
            return { ...category, postCount: 0 };
          }
        })
      );
      
      return categoriesWithCount.filter(cat => cat.postCount > 0);
    },
    staleTime: 1000 * 60 * 10, // 10 minutes - categories don't change often
  });
};

// Fetch recent posts
export const useRecentPosts = (limit: number = 5) => {
  return useQuery({
    queryKey: ["recent-posts", limit],
    queryFn: async (): Promise<Post[]> => {
      const response = await fetch(
        `${API_BASE_URL}/api/posts?where[status][equals]=published&sort=-publishedDate&limit=${limit}&populate=featuredImage`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch recent posts");
      }

      const data: ApiResponse = await response.json();
      return data.docs || [];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

// Fetch single post by slug
export const usePost = (slug: string) => {
  return useQuery({
    queryKey: ["post", slug],
    queryFn: async (): Promise<Post | null> => {
      const response = await fetch(
        `${API_BASE_URL}/api/posts?where[slug][equals]=${slug}&where[status][equals]=published&populate=author,categories,featuredImage`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch post");
      }

      const data: ApiResponse = await response.json();

      if (data.docs && data.docs.length > 0) {
        return data.docs[0];
      }

      return null;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!slug, // Only run query if slug exists
  });
};