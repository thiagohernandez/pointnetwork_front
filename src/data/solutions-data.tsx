import { IconDevices } from "@/components/ui/icons";
import { QrCode } from "lucide-react";

import { CardFeature } from "@/components/ui/cards";
import {
  IconFingerprint,
  IconUserCheck,
  IconPackage,
  IconAlert,
  IconWhatsApp,
  IconCalendar,
  IconKey,
  IconUsers,
} from "@/components/ui/icons";

import { AppWindowIcon } from "lucide-react";

export const solutionsAdministradorasPage = {
  id: "solutionsPage1",
  title: "Simplifique a gestão condominial com PointCondomínio",
  desc: "Mais eficiência, transparência e controle na gestão condominial. Tudo em um único sistema.",
  productURL: "pointcondominio.com.br",
  accentColor: "text-network-primary",
  bgColor: "bg-[#170E33]",
  featuresVideo: {
    title: "Benefícios para síndicos, administradoras e moradores.",
    description:
      "Tudo em um só lugar, <strong>o sistema de gestão condominial mais completo</strong> do mercado.",
    bgColor: "#F1F5F9",
    video: "/videos/pointID-boa-vizinhanca.mp4",
    cardSets: [
      [
        {
          id: 1,
          content: (
            <CardFeature
              title="Controle de acessos"
              icon={<IconFingerprint />}
              className="![&_card-content]:text-[#36583F]"
            >
              <p>
                Integrado com hardware de reconhecimento facial e biométrico
                para máxima segurança.
              </p>
            </CardFeature>
          ),
        },
        {
          id: 2,
          content: (
            <CardFeature
              title="Registro e liberação de visitantes"
              icon={<IconUserCheck />}
            >
              <p>
                Reduz o tempo de espera na portaria e melhora a experiência de
                visitantes e moradores.
              </p>
            </CardFeature>
          ),
        },
        {
          id: 3,
          content: (
            <CardFeature
              title="Gestão de encomendas e chaves"
              icon={<IconPackage />}
            >
              <p>
                Garante que todas as entregas sejam registradas e notificadas,
                aumentando a segurança e a organização.
              </p>
            </CardFeature>
          ),
        },
      ],
      [
        {
          id: 4,
          content: (
            <CardFeature
              title="Registro de ocorrências e notificações automáticas"
              icon={<IconAlert />}
              className="![&_card-content]:text-[#36583F]"
            >
              <p>
                Mantém todos os envolvidos informados em tempo real, facilitando
                a resolução rápida de problemas.
              </p>
            </CardFeature>
          ),
        },
        {
          id: 5,
          content: (
            <CardFeature
              title="Chat integrado com WhatsApp"
              icon={<IconWhatsApp />}
            >
              <p>
                Reduz o tempo de espera na portaria e melhora a experiência de
                visitantes e moradores.
              </p>
            </CardFeature>
          ),
        },
        {
          id: 6,
          content: (
            <CardFeature title="Dashboard intuitivo" icon={<AppWindowIcon />}>
              <p>
                Facilita a gestão diária do condomínio, proporcionando uma visão
                clara e organizada das atividades.
              </p>
            </CardFeature>
          ),
        },
      ],
      [
        {
          id: 7,
          content: (
            <CardFeature
              title="Histórico de visitas"
              icon={<IconCalendar />}
              className="![&_card-content]:text-[#36583F]"
            >
              <p>
                Aumenta a transparência e a segurança, permitindo rastrear e
                verificar acessos passados.
              </p>
            </CardFeature>
          ),
        },
        {
          id: 8,
          content: (
            <CardFeature
              title="Acompanhamento de eventos e reservas de áreas comuns"
              icon={<IconKey />}
            >
              <p>
                Melhora a organização e o planejamento de atividades
                comunitárias, evitando conflitos de horário e uso.
              </p>
            </CardFeature>
          ),
        },
        {
          id: 9,
          content: (
            <CardFeature
              title="Gestão de perfis de acesso"
              icon={<IconUsers />}
            >
              <p>
                Personaliza os níveis de acesso, garantindo que cada usuário
                tenha permissões adequadas às suas necessidades.
              </p>
            </CardFeature>
          ),
        },
      ],
    ],
  },
  centeredContent: {
    title:
      "Nossa solução é completa para garantir uma gestão simplificada e prática",
    description:
      "<p>Ao contratar o PointCondomínio você tem <strong>acesso a quase 50 módulos</strong> divididos em soluções para “Gestores & Administradores” e “Síndicos & Moradores”, sem cobrança extra por nenhum deles!</p><p>A PointCondomínio estará ao seu lado para a integração dos sistemas, com <strong>suporte integral e gratuito durante todo o processo!</strong></p>",
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

export const solutionsMoradoresPage = {
  id: "solutionsPage2",
  title: "Tudo que você precisa do seu condomínio na palma da sua mão",
  desc: "Troque mensagens com moradores, tenha um canal de comunicação direto com o síndico e a administradora. Saiba de tudo com transparência e esqueça as penosas reuniões de condomínio.",
  productURL: "pointcondominio.com.br",
  accentColor: "text-network-primary",
  bgColor: "bg-[#2E2F7D]",
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
      "Com o PointCondomínio, os moradores podem desfrutar de um módulo de convivência completo, com aplicativo do condômino que oferece segunda via de boletos, reserva de áreas comuns, acesso a documentos, livro de ocorrências, mensagens e notificações, assembleia online e muito mais.",
    ctaLink: "#contact",
    cxtaText: "Fale com um especialista",
    video: "/videos/pointcondominio-solutions-video-moradores.mp4",
  },
  mainFeatures: [
    {
      content: "Reserva de áreas comuns",
    },
    {
      content: "2ª via de boleto",
    },
    ,
    {
      content: "Eventos",
    },
    {
      content: "Quadro de avisos",
    },
    {
      content: "Livro de ocorrências",
    },
    {
      content: "Telefones uteís",
    },
    {
      content: "Controle de contratos",
    },
    {
      content: "Livro de ocorrências",
    },
    {
      content: "Enquetes e votação online",
    },
    {
      content: "Classificados",
    },
    {
      content: "Calendário de manutenção periódica",
    },
    {
      content: "Cadastro de funcionários",
    },
    {
      content: "Galeria de fotos",
    },
    {
      content: "Obras e evidências",
    },
    {
      content: "Prestação de contas",
    },
    {
      content: "Avisos de infrações",
    },
    {
      content: "Mensagens",
    },
    {
      content: "Documentos da administração",
    },
    {
      content: "Guia do comércio",
    },
    {
      content: "Assembléia online",
    },
  ],
  slug: "moradores-de-condominio",
};
