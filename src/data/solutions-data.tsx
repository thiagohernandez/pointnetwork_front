import { IconDevices } from "@/components/ui/icons";
import { QrCode } from "lucide-react";

export const solutionsAdministradorasPage = {
  id: "solutionsPage1",
  title: "Simplifique a gestão condominial com PointCondomínio",
  desc: "Mais eficiência, transparência e controle na gestão condominial. Tudo em um único sistema.",
  productURL: "pointcondominio.com.br",
  accentColor: "text-network-primary",
  bgColor: "bg-[#170E33]",
  featuresBoxes: [
    {
      icon: <IconDevices />,
      title: "Plataforma online para moradores",
      description:
        "Sistema online com mais de 50 módulos para otimizar a vida em condomínio, automatizar processos e oferecer aos moradores ferramentas para visualizar todas as informações do condomínio em qualquer hora e lugar.",
      img: {
        src: "/bg-pointcondominio-box-solution-001.png",
        width: 489,
        height: 326,
      },
      backgroundColor: "bg-porcelain/50",
      textColor: "text-id-gray-dark",
    },
    {
      icon: <QrCode />,
      title: "Autosserviço e digitalização de processos",
      description:
        "Os moradores poderão em um só lugar reservar áreas comuns, solicitar segunda via de boleto, acessar a assembléia digital, votar em enquetes, e muitas outras funcionalidades em um sistema 100% online e seguro.",
      img: {
        src: "/bg-pointcondominio-box-solution-002.png",
        width: 358,
        height: 316,
      },
      backgroundColor: "bg-network-primary",
      textColor: "text-white",
    },
  ],
  centeredContent: {
    title: "A central digital do seu condomínio",
    description:
      "Com o PointCondomínio, os moradores podem desfrutar de um <strong>módulo de convivência completo, com aplicativo do condômino</strong> que oferece segunda via de boletos, reserva de áreas comuns, acesso a documentos, livro de ocorrências, mensagens e notificações, assembleia online e muito mais.",
    ctaLink: "#contact",
    cxtaText: "Fale com um especialista",
    video: "/videos/pointcondominio-solutions-video.mp4",
  },
  mainFeatures: [
    {
      content: "Dasboard intuitivo",
    },
    {
      content: "EFD-Reinf",
    },
    ,
    {
      content: "Book digital",
    },
    {
      content: "Assembleia online",
    },
    {
      content: "App leituras de consumo",
    },
    {
      content: "Remessa de pagamentos",
    },
    {
      content: "Background check",
    },
    {
      content: "Aprovação de pagamentos",
    },
    {
      content: "Aprovação da prestação de contas online ",
    },
    {
      content: "Assinatura digital",
    },
    {
      content: "Emissão de boleto digital",
    },
    {
      content: "Conta bancária digital",
    },
    {
      content: "Parcelamento e recorrência via cartão de crédito",
    },
    {
      content: "Integração com Chatbot",
    },
    {
      content: "Aplicativo white-label",
    },
    {
      content: "Gestão de documentos da administração",
    },
    {
      content: "Régua de cobrança por e-mail e Whatsapp",
    },
    {
      content: "Whatsapp integrado",
    },
    {
      content: "Módulo de convivência do morador via aplicativo e web",
    },
  ],
  slug: "administradoras-e-sindicos-profissionais",
};
