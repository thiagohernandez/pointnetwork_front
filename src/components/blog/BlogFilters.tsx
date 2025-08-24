"use client";

import { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface BlogFiltersProps {
  categories: Category[];
  selectedCategory: string;
  searchQuery: string;
  onCategoryChange: (categoryId: string) => void;
  onSearchChange: (query: string) => void;
}

export function BlogFilters({
  categories,
  selectedCategory,
  searchQuery,
  onCategoryChange,
  onSearchChange,
}: BlogFiltersProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const clearFilters = () => {
    onCategoryChange("");
    onSearchChange("");
  };

  const hasActiveFilters = selectedCategory || searchQuery;

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <form onSubmit={handleSearchSubmit} className="relative max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Pesquisar posts..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 h-12"
          />
        </div>
      </form>

      {/* Filter Toggle Button (Mobile) */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="md:hidden flex items-center space-x-2"
        >
          <Filter className="w-4 h-4" />
          <span>Filtros</span>
          {hasActiveFilters && (
            <span className="ml-2 w-2 h-2 bg-purple-600 rounded-full"></span>
          )}
        </Button>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            onClick={clearFilters}
            className="flex items-center space-x-2 text-slate-600 hover:text-slate-800"
          >
            <X className="w-4 h-4" />
            <span>Limpar filtros</span>
          </Button>
        )}
      </div>

      {/* Categories Filter */}
      <div className={`space-y-3 ${!isFilterOpen ? 'hidden md:block' : 'block'}`}>
        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
          Categorias
        </h3>
        
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onCategoryChange("")}
            className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
              !selectedCategory
                ? "bg-purple-600 text-white border-purple-600"
                : "bg-white text-slate-700 border-slate-200 hover:border-purple-300 hover:text-purple-600"
            }`}
          >
            Todas
          </button>
          
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
                selectedCategory === category.id
                  ? "bg-purple-600 text-white border-purple-600"
                  : "bg-white text-slate-700 border-slate-200 hover:border-purple-300 hover:text-purple-600"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-slate-600">Filtros ativos:</span>
              
              {searchQuery && (
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                  &quot;{searchQuery}&quot;
                  <button
                    onClick={() => onSearchChange("")}
                    className="ml-1 text-purple-600 hover:text-purple-800"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              
              {selectedCategory && (
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                  {categories.find(c => c.id === selectedCategory)?.name}
                  <button
                    onClick={() => onCategoryChange("")}
                    className="ml-1 text-purple-600 hover:text-purple-800"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}