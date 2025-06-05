interface WhyPointNetworkDataProps {
  title: string;
  subtitle?: string;
  url?: string;
  textLink?: string;
  description: string;
  cards?: {
    icon?: React.ReactNode;
    title: string;
    description: string;
    variant?: string;
    image?: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  }[];
}
export const whyPointNetworkData: WhyPointNetworkDataProps = {
  title:
    "Levamos <strong>mais de 25 anos trabalhando em parceira</strong> com administradoras de condomínos, síndicos, pequenas e médias empresas e <strong>entendemos todos os desafios do seu negócio.</strong>",
  subtitle: "Por que escolher uma de nossas plataformas?",
  url: "/quem-somos",
  textLink: "Saiba mais sobre a Point",
  description:
    "Criada em 2000, a Point é conhecida por sua <strong>abordagem inovadora</strong> no desenvolvimento de <strong>sistemas de gestão para empresas do setor condominial</strong> de todo o Brasil.",
};
