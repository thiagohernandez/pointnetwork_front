import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";

// Componentes
import { cn } from "@/lib/utils";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import { HeroResources } from "@/components/ui/hero";
import { IconPatternNetwork } from "@/components/ui/icons";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

import { ArrowRight, Check } from "lucide-react";
import BlogLastsPosts from "@/components/ui/sections/blog-lasts-posts";

// Tipos e utilidades
import { getResourceBySlug, getAllResources } from "@/lib/resources";

// Tipos para as props da página
interface ResourcePageProps {
  params: {
    slug: string;
  };
}

// Geração dinâmica de metadata para SEO
export async function generateMetadata({
  params,
}: ResourcePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const resource = await getResourceBySlug(slug);

  if (!resource) {
    return {
      title: "Recurso não encontrado | Point Network",
      description: "O recurso solicitado não foi encontrado.",
    };
  }

  return {
    title: `${resource.title} | Point Network`,
    description: resource.description,
    openGraph: {
      title: resource.title,
      description: resource.description,
      //   images: [
      //     {
      //       url: resource.img || "/default-resource-image.jpg",
      //       width: 1200,
      //       height: 630,
      //       alt: resource.title,
      //     },
      //   ],
    },
  };
}

// Componente principal da página
export default async function ResourcePage({ params }: ResourcePageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Busca os dados do recurso com base no slug
  const resourceData = await getResourceBySlug(slug);

  // Se o recurso não for encontrado, redireciona para a página 404
  if (!resourceData) {
    notFound();
  }

  return (
    <>
      <HeroResources
        title={resourceData.title}
        description={resourceData.description}
        image={resourceData.imgHero}
      />
      <main>
        <div className="bg-porcelain py-16 lg:py-32">
          <Container>
            <div className="overflow-hidden lg:p-8 md:p-12 flex gap-8 lg:gap-24">
              <div className="flex flex-col gap-2 justify-between w-full lg:w-3/4">
                <div
                  className="max-w-lg text-2xl font-semibold tracking-tight text-id-gray [&_strong]:font-semibold [&_strong]:text-id-gray-dark [&_p]:mb-6"
                  dangerouslySetInnerHTML={{
                    __html: resourceData.content || "",
                  }}
                />
                <div className="w-full">
                  <Heading
                    headingLevel={3}
                    className="text-network-primary text-2xl mb-6"
                  >
                    O que você vai aprender
                  </Heading>
                  {resourceData.learn.length > 0 && (
                    <ul className="space-y-4">
                      {resourceData.learn.map((item, index) => (
                        <li
                          key={`item-resource-${index}`}
                          className="flex items-start gap-3"
                        >
                          <Check className="h-5 w-5 mt-0.5 text-network-primary" />
                          <span className="text-slate-700 font-semibold tracking-tight">
                            {item.content}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="flex [&_svg]:w-full overflow-hidden justify-center">
                <IconPatternNetwork />
              </div>
            </div>
          </Container>
        </div>
        <div className="bg-white pt-16 lg:pt-32">
          <Container>
            <div className="flex gap-8 lg:gap-24">
              <div className="lg:w-3/4 lg:order-2 flex flex-col justify-between">
                <div className="max-w-xl">
                  <Heading
                    headingLevel={3}
                    className="text-network-primary text-2xl mb-6"
                  >
                    Para quem é esse material?
                  </Heading>
                  {resourceData.target.length > 0 && (
                    <ul className="space-y-4">
                      {resourceData.target.map((item, index) => (
                        <li
                          key={`item-resource-${index}`}
                          className="flex items-start gap-3"
                        >
                          <Check className="h-5 w-5 mt-0.5 text-network-primary" />
                          <span className="text-slate-700 font-semibold tracking-tight">
                            {item.content}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="max-w-xl flex flex-col gap-6 mt-6">
                  <h3 className="text-network-primary font-semibold text-3xl tracking-tight">
                    <strong className="font-bold text-secondary">
                      Mais de 300 administradoras
                    </strong>{" "}
                    já baixaram este conteúdo para transformar seus processos em{" "}
                    {`${new Date().getFullYear()}`}.
                  </h3>
                  <div className="block">
                    <Link
                      className={cn(
                        buttonVariants({ variant: "primary" }),
                        "inline-flex px-6"
                      )}
                      href="#downloadResource"
                    >
                      Baixe grátis <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rounded-r-xl bg-secondary min-h-[50vh] overflow-hidden">
                <Image
                  src={resourceData.imgHero}
                  alt={resourceData.title}
                  width={820}
                  height={790}
                  className="w-full h-auto"
                  quality={100}
                />
              </div>
            </div>
          </Container>
        </div>
      </main>
      <BlogLastsPosts />
    </>
  );
}

// Pré-geração das rotas estáticas para os recursos existentes
export async function generateStaticParams() {
  const resources = await getAllResources();

  return resources.map((resource) => ({
    slug: resource.slug,
  }));
}
