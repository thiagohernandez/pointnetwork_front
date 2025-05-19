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
    url: "solucoes/point-condominio",
    urlLogin: "https://pointcontdominio.com.br/login",
    variant: "solution-card__point-condominio",
  },
  {
    id: "ourSolutionsCards2",
    title: "Controle de acesso",
    productName: "PointID",
    desc: "Simplificamos processos como o recebimento de encomendas, registro de incidentes e controle de acesso de moradores e visitantes, tudo em uma plataforma única e intuitiva.",
    icon: <LogoPointID />,
    url: "solucoes/point-id",
    urlLogin: "https://pointid.com.br/login",
    variant: "solution-card__point-id",
  },
  {
    id: "ourSolutionsCards3",
    title: "Gestão contabíl",
    productName: "PointSaas",
    desc: "Automatize processos e tenha controle total da gestão financeira da sua empresa com nosso software intuitivo e 100% online.",
    icon: <LogoPointSaas />,
    url: "solucoes/point-saas",
    urlLogin: "https://pointsaas.com.br/login",
    variant: "solution-card__point-saas",
  },
];
