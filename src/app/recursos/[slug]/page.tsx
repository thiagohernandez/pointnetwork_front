import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";

// Componentes
import CardEbook from "@/components/ui/cards/card-ebook";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import { HeroResources } from "@/components/ui/hero";

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
  const resource = await getResourceBySlug(params.slug);

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
      images: [
        {
          url: resource.img || "/default-resource-image.jpg",
          width: 1200,
          height: 630,
          alt: resource.title,
        },
      ],
    },
  };
}

// Componente principal da página
export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = params;

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
      <main className="pt-24 pb-20">
        <Container>
          <div className="mb-12">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden p-8 md:p-12">
              {/* Cabeçalho */}
              <div className="max-w-3xl mb-10">
                <Heading
                  headingLevel={1}
                  className="text-3xl md:text-4xl lg:text-5xl mb-6 text-slate-900"
                >
                  {resourceData.title}
                </Heading>
                <p className="text-lg text-slate-600">
                  {resourceData.description}
                </p>
              </div>

              {/* Preview do recurso */}
              <div className="mb-12">
                {resourceData.img && (
                  <div className="rounded-xl overflow-hidden mb-6">
                    <Image
                      src={resourceData.img}
                      alt={resourceData.title}
                      width={1200}
                      height={630}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}

                {/* Detalhes adicionais do recurso */}
                <div className="prose max-w-none">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: resourceData.content || "",
                    }}
                  />
                </div>
              </div>

              {/* Card de download */}
              <div className="max-w-3xl mx-auto">
                <CardEbook resourceCard={resourceData} />
              </div>
            </div>
          </div>
        </Container>
      </main>
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
