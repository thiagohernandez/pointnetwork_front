import {
  LogoPointCondominio,
  LogoPointID,
  LogoPointSaas,
} from "@/components/ui/logo";

export const ourSolutionsCardsData = [
  {
    id: "ourSolutionsCards1",
    title: "Gestão condominial",
    productName: "Point Condomínio",
    desc: "Sabendo das particularidades da gestão de um condomínio, disponibilizamos diversos módulos que permitem gerenciar de qualquer lugar e dispositivo de maneira fácil e segura um ou vários condomínios.",
    icon: <LogoPointCondominio />,
    url: "solucoes/administradoras-e-sindicos-profissionais",
    urlLogin: "https://www.pointcondominio.com.br/condominio",
    variant: "solution-card__point-condominio",
  },
  {
    id: "ourSolutionsCards2",
    title: "Controle de acesso",
    productName: "PointID",
    desc: "Simplificamos processos como o recebimento de encomendas, registro de incidentes e controle de acesso de moradores e visitantes, tudo em uma plataforma única e intuitiva.",
    icon: <LogoPointID />,
    url: "solucoes/controle-de-acesso",
    urlLogin: "https://portaria.pointcondominio.com.br/",
    variant: "solution-card__point-id",
  },
  {
    id: "ourSolutionsCards3",
    title: "Gestão financeira",
    productName: "PointSaas",
    desc: "Automatize processos e tenha controle total da gestão financeira da sua empresa com nosso software intuitivo e 100% online.",
    icon: <LogoPointSaas />,
    url: "solucoes/gestao-financeira",
    urlLogin: "https://pointsaas.com.br/empresa",
    variant: "solution-card__point-saas",
  },
];
