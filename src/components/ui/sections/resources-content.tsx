"use client";
import Container from "@/components/ui/container";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { CardEbook } from "@/components/ui/cards";

import { ResourcesData } from "@/data/resources-data";

export function ResourcesContent() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section>
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Card 1 */}
          {ResourcesData.map((resource) => (
            <motion.div key={resource.id} variants={item}>
              <CardEbook resourceCard={resource} />
            </motion.div>
          ))}

          {/* Materiais Gratuitos */}
          <motion.div
            variants={item}
            className="flex flex-col bg-[#D7DFE8] rounded-xl overflow-hidden p-6 gap-6"
          >
            <h4 className="tracking-tight text-network-primary font-semibold text-sm">
              MATERIAIS GRATUITOS
            </h4>
            <p className="text-slate-700 font-semibold tracking-tight mb-2">
              Somos especialistas em soluções de gestão condominial, controle de
              acesso e automação financeira. Acreditamos que conhecimento é o
              primeiro passo para a transformação — e estamos aqui para te
              ajudar a dar esse salto.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 mt-0.5 text-network-primary" />
                <span className="text-slate-700 font-semibold tracking-tight">
                  Conteúdos rápidos e de fácil compreensão
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 mt-0.5 text-network-primary" />
                <span className="text-slate-700 font-semibold tracking-tight">
                  Opiniões de profissionais
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 mt-0.5 text-network-primary" />
                <span className="text-slate-700 font-semibold tracking-tight">
                  Aplicação de imediato
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
