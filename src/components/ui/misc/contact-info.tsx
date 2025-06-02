import React from "react";
import StatusHour from "@/components/ui/misc/status-hour";

const ContactInfo = () => {
  return (
    <div className="lg:w-1/3 bg-slate-200 px-6 py-8 lg:px-16 lg:py-16 rounded-tr-none rounded-bl-lg rounded-br-lg lg:rounded-br-lg lg:rounded-tr-lg text-left tracking-tight">
      <h2 className="text-xs tracking-wider font-bold text-slate-800 mb-6">
        POINT CONDOMÍNIO
      </h2>

      <div className="space-y-6">
        <div className="flex items-start gap-2 text-sm text-slate-700">
          <address className="not-italic">
            <p>Rua Treze de Maio, 235</p>
            <p>Mogi Mirim - SP</p>
            <p>CEP: 13800-170</p>
          </address>
        </div>

        <div>
          <p className="text-slate-700 mb-1 text-sm">Ligue para a gente</p>
          <a
            href="tel:+551935496041"
            className="text-network-primary text-xl font-medium hover:underline"
          >
            <small>(19)</small> 3549-6041
          </a>
        </div>

        <div>
          <p className="text-slate-700 mb-1 text-sm">
            Envie um email para gente
          </p>
          <a
            href="mailto:contato@pointcondominio.com.br"
            className="text-network-primary hover:underline text-sm font-semibold"
          >
            contato@pointcondominio.com.br
          </a>
        </div>

        <div className="pt-4">
          <h3 className="text-xs tracking-wider font-bold text-slate-800 mb-4">
            HORÁRIO DE ATENDIMENTO
          </h3>

          <StatusHour />

          <div className="flex items-start gap-2 text-slate-700 text-sm">
            <div>
              <p>
                <strong>Segunda - Sexta:</strong> 9h00 às 18h30
              </p>
              <p>
                <strong>Sábado, Domingo e Feriados:</strong> Fechado
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
