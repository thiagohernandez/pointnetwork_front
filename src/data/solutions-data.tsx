import { IconDevices } from "@/components/ui/icons";
import {
  MessagesSquareIcon,
  MonitorSmartphoneIcon,
  QrCode,
  SmilePlusIcon,
} from "lucide-react";

import { CardFeature } from "@/components/ui/cards";

import { LandmarkIcon, HandCoinsIcon, TimerResetIcon } from "lucide-react";

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
              title="Tenha controle das finanças"
              icon={<LandmarkIcon />}
              className="![&_card-content]:text-[#36583F]"
            >
              <p>
                Oferecemos uma ampla solução para automatizar 100% do seu
                financeiro, integrando sua conta bancária com nossos módulos
                financeiros, otimizando o tempo e garantindo dados confiáveis.
              </p>
            </CardFeature>
          ),
        },
        {
          id: 2,
          content: (
            <CardFeature
              title="Recursos para gerar receita e combater inadimplência"
              icon={<HandCoinsIcon />}
            >
              <p>
                Com PointCondominio, além de economizar tempo na gestão dos
                condomínios, temos um leque de soluções para gerar receita e
                todas as ferramentas necessárias para reduzir e combater a
                inadimplência.
              </p>
            </CardFeature>
          ),
        },
        {
          id: 3,
          content: (
            <CardFeature
              title="Solução cloud em tempo reeal"
              icon={<TimerResetIcon />}
            >
              <p>
                Acesso a plataforma de qualquer dispositivo em qualquer lugar
                sem se preocupar com gastos de infraestrutura e segurança.
                Investimos grande parte de nossos esforços para oferecer
                servidores estáveis e altamente seguros.
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
              title="Plataforma online para moradores"
              icon={<MonitorSmartphoneIcon />}
              className="![&_card-content]:text-[#36583F]"
            >
              <p>
                Nosso módulo de convivência irá oferecer diversos serviços para
                os moradores, melhorando a experiência e a satisfação com os
                seus serviços prestados. Além de proporcionar diversas
                ferramentas de autosserviço aos moradores reduzindo uma
                importante carga de trabalho das administradoras.
              </p>
            </CardFeature>
          ),
        },
        {
          id: 5,
          content: (
            <CardFeature
              title="Transparência e melhoria na comunicação"
              icon={<MessagesSquareIcon />}
            >
              <p>
                Os moradores terão fácil acesso a solicitar segunda via de
                boleto, canais de comunicação com o síndico e administradora,
                reserva de áreas comuns, prestação de contas e o mais
                importante, acesso à informação de qualquer lugar.
              </p>
            </CardFeature>
          ),
        },
        {
          id: 6,
          content: (
            <CardFeature title="Reduzir conflitos" icon={<SmilePlusIcon />}>
              <p>
                Com nossa plataforma os moradores terão em um único lugar um
                espaço para ter voz, poder se comunicar com outros moradores e
                encontrar facilmente diversas informações do condomínio,
                evitando problemas de comunicação e reduzindo os conflitos entre
                síndico e moradores.
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

export const solutionsControleAcessoPage = {
  id: "solutionsPage3",
  title: "Controle de acesso para portarias",
  desc: "Solução definitiva para otimizar a segurança e a gestão de portarias em condomínios. Simplificamos processos como o recebimento de encomendas, registro de incidentes e controle de acesso de moradores e visitantes, tudo em uma plataforma única e intuitiva.",
  productURL: "pointid.com.br",
  accentColor: "text-id-green",
  bgColor: "bg-id-gray-dark",
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
