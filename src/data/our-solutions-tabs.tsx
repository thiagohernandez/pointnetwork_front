import { IconWhatsApp } from "@/components/ui/icons";
import { TabData } from "@/types/types";
import {
  BanknoteIcon,
  MessageSquare,
  GlobeLock,
  CircleDollarSign,
  ChartSpline,
  TabletSmartphone,
  BookMarked,
  BellRing,
  Fingerprint,
  PackageCheck,
  MessageCircleCode,
  Receipt,
  WalletCards,
  Gauge,
} from "lucide-react";

export const tabsSolutionsData: TabData[] = [
  {
    id: "administradoras",
    title: "Administradoras e Síndicos profissionais",

    content: {
      header: "Administradoras e Síndicos profissionais",
      subheader:
        "<strong>Automatize processos e otimize</strong> a gestão condominial com eficiência.",
      url: "solucoes/administradoras-e-sindicos-profissionais",
      image: "/user-saas-point-condominio.jpg",
      features: [
        {
          icon: <GlobeLock className="h-6 w-6" />,
          title: "Plataforma 100% na nuvem para acesso remoto.",
          description: "",
        },
        {
          icon: <CircleDollarSign className="h-6 w-6" />,
          title:
            "Emissão de boletos, conciliação bancária e régua de cobrança automática.",
          description: "",
        },
        {
          icon: <IconWhatsApp className="h-6 w-6" />,
          title: "Assembleia online e comunicação via WhatsApp e e-mail.",
          description: "",
        },
        {
          icon: <ChartSpline className="h-6 w-6" />,
          title:
            "Relatórios financeiros detalhados para prestação de contas transparente.",
          description: "",
        },
      ],
    },
  },
  {
    id: "moradores",
    title: "Moradores de condomínio",
    content: {
      header: "Moradores de condomínio",
      subheader:
        "<strong>Mais praticidade</strong> e conveniência no dia a dia.",
      url: "solucoes/moradores-de-condominio",
      image: "/user-saas-point-condominio-003.jpg",
      features: [
        {
          icon: <TabletSmartphone className="h-6 w-6" />,
          title:
            "Aplicativo para reservas de áreas comuns e segunda via de boletos.",
          description: "",
        },
        {
          icon: <BookMarked className="h-6 w-6" />,
          title:
            "Livro de ocorrências digital para comunicação rápida com a gestão.",
          description: "",
        },
        {
          icon: <MessageSquare className="h-6 w-6" />,
          title: "Participação em assembleias online e enquetes em tempo real.",
          description: "",
        },
        {
          icon: <BellRing className="h-6 w-6" />,
          title:
            "Avisos e notificações automáticas via app, e-mail e WhatsApp.",
          description: "",
        },
      ],
    },
  },
  {
    id: "portarias",
    title: "Portarias e controle de acesso",
    content: {
      header: "Portarias e controle de acesso",
      subheader:
        "<strong>Segurança reforçada</strong> para condomínios e empresas.",
      url: "solucoes/controle-de-acesso",
      image: "/user-saas-point-condominio-004.jpg",
      features: [
        {
          icon: <Fingerprint className="h-6 w-6" />,
          title:
            "Controle de acessos via reconhecimento facial, biometria e TAG veicular.",
          description: "",
        },
        {
          icon: <BellRing className="h-6 w-6" />,
          title: "Registro e notificação de visitantes em tempo real.",
          description: "",
        },
        {
          icon: <PackageCheck className="h-6 w-6" />,
          title:
            "Monitoramento de encomendas e entregas com histórico digital.",
          description: "",
        },
        {
          icon: <MessageCircleCode className="h-6 w-6" />,
          title:
            "Comunicação integrada entre portaria, moradores e administração.",
          description: "",
        },
      ],
    },
  },
  {
    id: "financeira",
    title: "Gestão financeira",
    content: {
      header: "Gestão financeira",
      subheader:
        "<strong>Simplifique a contabilidade</strong> e otimize o fluxo de caixa.",
      url: "solucoes/gestao-financeira",
      image: "/user-saas-point-condominio-002.jpg",
      features: [
        {
          icon: <Receipt className="h-6 w-6" />,
          title: "Emissão automática de notas fiscais e boletos digitais.",
          description: "",
        },
        {
          icon: <Gauge className="h-6 w-6" />,
          title:
            "Dashboard financeiro intuitivo para controle total das finanças.",
          description: "",
        },
        {
          icon: <BanknoteIcon className="h-6 w-6" />,
          title:
            "Contas a pagar, a receber e conciliação bancária em um só lugar.",
          description: "",
        },
        {
          icon: <WalletCards className="h-6 w-6" />,
          title: "Cobrança automatizada via PIX, cartão e boleto.",
          description: "",
        },
      ],
    },
  },
];
