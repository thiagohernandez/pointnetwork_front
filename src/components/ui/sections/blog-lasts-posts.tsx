import React from "react";
import Image from "next/image";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

import { blogFakeData } from "@/data/blog-fake-data";

const BlogLastsPosts = () => {
  return (
    <div className="py-16 lg:py-32">
      <Container>
        <div className="flex flex-col gap-0 justify-start text-left">
          <Heading
            headingLevel={2}
            className="mb-4 text-6xl font-semibold tracking-tight text-slate-800"
          >
            Blog
          </Heading>
          <Link
            className={cn(
              buttonVariants({ variant: "link" }),
              "text-network-primary justify-start text-left !p-0 mb-10 hover:no-underline"
            )}
            href="/blog"
          >
            Ver todas as notícias <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogFakeData.posts.map((item) => (
            <Link
              key={item.id}
              href={`/blog/${item.id}`}
              className="flex flex-col group"
            >
              <div className="mb-4 bg-network-primary rounded-md overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto group-hover:opacity-50 transition-all group-hover:scale-125"
                  width={903}
                  height={355}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary tracking-tight group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-800 text-sm tracking-tight">
                {item.excerpt}
              </p>
              <div className="text-network-primary text-sm font-semibold mt-4 inline-flex items-center gap-2 tracking-tight group-hover:text-primary transition-colors">
                Continuar lendo
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BlogLastsPosts;
