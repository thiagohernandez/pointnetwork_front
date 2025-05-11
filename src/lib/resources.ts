import { ResourceProps } from "@/types/types";
import { ResourcesData } from "@/data/resources-data";

// Exemplo de implementação - substitua por sua fonte de dados real
const resources = ResourcesData;

export async function getResourceBySlug(
  slug: string
): Promise<ResourceProps | null> {
  // Em um cenário real, você buscaria esses dados de uma API ou banco de dados
  const resource = resources.find((r) => r.slug === slug);
  return resource || null;
}

export async function getAllResources(): Promise<ResourceProps[]> {
  // Em um cenário real, você buscaria todos os recursos disponíveis
  return resources;
}

export async function getRelatedResources(
  currentSlug: string
): Promise<ResourceProps[]> {
  // Retorna recursos relacionados, excluindo o atual
  return resources.filter((r) => r.slug !== currentSlug).slice(0, 3);
}
