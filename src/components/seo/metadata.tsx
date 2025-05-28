import { Metadata } from "next";

type MetadataProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  twitterCard?: "summary" | "summary_large_image";
  twitterHandle?: string;
  noIndex?: boolean;
};

export function generateMetadata({
  title = "PointNetwork | Simplifique a Gestão, Maximize Resultados!",
  description = "Automatizando processos e agilizando a gestão, facilitando a comunicação e auxiliando nossos clientes a aumentarem sua receita de forma tangível e duradoura.",
  keywords = [],
  ogImage = "/og-default.jpg",
  ogUrl,
  canonical,
  twitterCard = "summary_large_image",
  twitterHandle,
  noIndex = false,
}: MetadataProps): Metadata {
  const ogImageUrl = ogImage.startsWith("http")
    ? ogImage
    : `${
        process.env.NEXT_PUBLIC_SITE_URL || "https://pointnetwork.com.br"
      }${ogImage}`;
  return {
    metadataBase: new URL(
      `${process.env.NEXT_PUBLIC_SITE_URL || "https://pointnetwork.com.br"}`
    ),
    title,
    description,
    keywords: keywords.join(", "),
    openGraph: {
      title,
      description,
      images: [{ url: ogImageUrl }],
      url: ogUrl,
      type: "website",
    },
    twitter: {
      card: twitterCard,
      title,
      description,
      images: [{ url: ogImageUrl }],
      ...(twitterHandle && { creator: twitterHandle }),
    },
    alternates: {
      canonical: canonical,
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
