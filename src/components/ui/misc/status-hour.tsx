"use client";
import React, { useEffect, useState } from "react";

const StatusHour = () => {
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const agora = new Date();

    // Convertendo para horário de Brasília (GMT-3)
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "America/Sao_Paulo",
      hour: "numeric",
      weekday: "long",
      hour12: false,
    };

    const formatado = new Intl.DateTimeFormat("pt-BR", options).formatToParts(
      agora
    );
    const hora = Number(formatado.find((p) => p.type === "hour")?.value);

    // Método correto para obter o dia da semana (0 = domingo, 1 = segunda, etc.)
    const dataLocal = new Date(
      agora.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })
    );
    const dia = dataLocal.getDay();

    // Verificar se é dia útil (segunda a sexta = 1 a 5) e horário comercial (9h às 18h)
    const dentroDoHorario = dia >= 1 && dia <= 5 && hora >= 9 && hora < 18;
    setAberto(dentroDoHorario);
  }, []);

  return (
    <div className="flex items-center gap-0.5 mb-3">
      <div className="status-icon -ml-[10px]">
        <div className={`rounded-full blob ${aberto ? "green" : "red"}`}></div>
      </div>

      <span
        className={`${
          aberto ? "text-emerald-500" : "text-red-500"
        } text-sm tracking-tight font-semibold`}
      >
        {aberto ? "Estamos Abertos" : "Estamos Fechados"}
      </span>
    </div>
  );
};

export default StatusHour;
