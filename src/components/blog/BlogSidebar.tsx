"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useCategories } from "@/hooks/useBlogQueries";

interface BlogSidebarProps {
  currentCategoryId?: string;
}

export function BlogSidebar({ currentCategoryId }: BlogSidebarProps) {
  // const [searchQuery, setSearchQuery] = useState("");

  const {
    data: categories = [],
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useCategories();

  // const filteredCategories = categories.filter((category) =>
  //   category.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  if (categoriesLoading) {
    return (
      <div className="space-y-6">
        <div className="w-full">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-slate-200 rounded w-32"></div>
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="h-4 bg-slate-200 rounded w-24"></div>
                  <div className="h-4 bg-slate-200 rounded w-6"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (categoriesError) {
    return (
      <div className="space-y-6">
        <div className="w-full">
          <div className="text-center py-8">
            <h3 className="text-lg font-semibold text-red-600 mb-2">
              Erro ao carregar categorias
            </h3>
            <p className="text-slate-600 text-sm">
              Não foi possível carregar as categorias. Tente novamente mais
              tarde.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Categories Widget */}
      <div className="w-full">
        <h3 className="text-xl font-semibold text-slate-700 mb-4 flex items-center px-3 tracking-tight">
          Categorias
        </h3>

        {/* All Posts Link */}
        <div className="mb-4">
          <Link
            href="/blog"
            className={`flex items-center justify-between p-3 rounded-lg transition-colors group ${
              !currentCategoryId
                ? "bg-network-primary/5 text-network-primary border border-network-primary/10"
                : "hover:bg-slate-50 text-network-primary hover:text-secondary"
            }`}
          >
            <span className="font-medium">Todos os Posts</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Categories List */}
        <div className="space-y-2">
          {categories.length > 0 ? (
            categories.map((category) => (
              <Link
                key={category.id}
                href={`/blog/categoria/${category.slug}`}
                className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors group ${
                  currentCategoryId === category.id
                    ? "bg-network-primary/5 text-network-primary border border-network-primary/10"
                    : "hover:bg-slate-50 text-network-primary hover:text-secondary"
                }`}
              >
                <div className="flex-1">
                  <h4 className="font-medium">{category.name}</h4>
                  {category.description && (
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {category.description}
                    </p>
                  )}
                </div>
                <div className="flex items-center ml-3">
                  <span className="text-xs bg-slate-100 text-network-primary px-2 py-1 rounded-full mr-2">
                    {category.postCount}
                  </span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))
          ) : (
            <p className="text-sm text-slate-500 text-center py-4">
              Nenhuma categoria disponível
            </p>
          )}
        </div>
      </div>

      {/* Recent Posts Widget */}
      {/* <RecentPostsWidget /> */}
    </div>
  );
}

// Recent Posts Widget Component
// function RecentPostsWidget() {
//   const {
//     data: recentPosts = [],
//     isLoading: recentPostsLoading,
//     error: recentPostsError,
//   } = useRecentPosts(5);

//   if (recentPostsLoading) {
//     return (
//       <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
//         <div className="animate-pulse">
//           <div className="h-4 bg-slate-200 rounded w-32 mb-4"></div>
//           <div className="space-y-3">
//             {Array.from({ length: 3 }).map((_, i) => (
//               <div key={i} className="flex space-x-3">
//                 <div className="w-16 h-16 bg-slate-200 rounded"></div>
//                 <div className="flex-1">
//                   <div className="h-4 bg-slate-200 rounded w-full mb-2"></div>
//                   <div className="h-3 bg-slate-200 rounded w-20"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (recentPostsError) {
//     return (
//       <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
//         <h3 className="text-lg font-semibold text-slate-900 mb-4">
//           Posts Recentes
//         </h3>
//         <div className="text-center py-4">
//           <p className="text-sm text-slate-500">
//             Erro ao carregar posts recentes
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
//       <h3 className="text-lg font-semibold text-slate-900 mb-4">
//         Posts Recentes
//       </h3>

//       <div className="space-y-4">
//         {recentPosts.map((post) => (
//           <Link
//             key={post.id}
//             href={`/blog/${post.slug}`}
//             className="flex space-x-3 group hover:bg-slate-50 p-2 rounded-lg transition-colors"
//           >
//             {post.featuredImage && (
//               <div className="w-16 h-16 flex-shrink-0">
//                 <img
//                   src={post.featuredImage.url}
//                   alt={post.featuredImage.alt || post.title}
//                   className="w-full h-full object-cover rounded"
//                 />
//               </div>
//             )}
//             <div className="flex-1 min-w-0">
//               <h4 className="text-sm font-medium text-slate-900 line-clamp-2 group-hover:text-purple-600">
//                 {post.title}
//               </h4>
//               <p className="text-xs text-slate-500 mt-1">
//                 {new Date(post.publishedDate).toLocaleDateString("pt-BR")}
//               </p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
