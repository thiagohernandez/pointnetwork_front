import Container from "@/components/ui/container";

const ListFeaturesWhyPoint = () => {
  return (
    <div className="py-16 lg:py-32 bg-slate-300">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 justify-between">
          <div className="flex flex-col gap-2 font-semibold tracking-tight">
            <h3 className="text-lg font-semibold tracking-tight text-network-primary">
              01
            </h3>
            <p className="text-id-gray [&_strong]:text-id-gray-dark">
              <strong>Comunicação Clara e Aberta:</strong> Mantemos nossos
              clientes sempre informados sobre o andamento de projetos,
              atualizações de software e quaisquer questões relevantes. Nossa
              comunicação é clara, objetiva e acessível, sem jargões técnicos
              desnecessários.
            </p>
          </div>
          <div className="flex flex-col gap-2 font-semibold tracking-tight">
            <h3 className="text-lg font-semibold tracking-tight text-network-primary">
              02
            </h3>
            <p className="text-id-gray [&_strong]:text-id-gray-dark">
              <strong>Honestidade e Integridade:</strong> Agimos com honestidade
              e integridade em todas as nossas interações. Cumprimos nossos
              compromissos, admitimos nossos erros e buscamos sempre a melhor
              solução para nossos clientes.
            </p>
          </div>
          <div className="flex flex-col gap-2 font-semibold tracking-tight">
            <h3 className="text-lg font-semibold tracking-tight text-network-primary">
              03
            </h3>
            <p className="text-id-gray [&_strong]:text-id-gray-dark">
              <strong>Segurança de Dados:</strong> Priorizamos a segurança dos
              dados de nossos clientes, implementando medidas rigorosas para
              proteger suas informações contra acessos não autorizados e outras
              ameaças.
            </p>
          </div>
          <div className="flex flex-col gap-2 font-semibold tracking-tight">
            <h3 className="text-lg font-semibold tracking-tight text-network-primary">
              04
            </h3>
            <p className="text-id-gray [&_strong]:text-id-gray-dark">
              <strong>Canais de Comunicação Abertos:</strong> Mantemos diversos
              canais de comunicação abertos para que nossos clientes possam
              entrar em contato conosco a qualquer momento. Estamos sempre
              dispostos a ouvir sugestões, críticas e feedbacks.
            </p>
          </div>
        </div>
      </Container>
      <div className="py-16 lg:pt-32 lg:pb-24 bg-slate-300">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 justify-between">
            <div className="flex md:col-span-2 font-semibold tracking-tight text-lg text-id-gray lg:pr-24">
              Acreditamos que a transparência é a chave para construir
              relacionamentos duradouros e bem-sucedidos. Ao escolher a
              PointNetwork, você pode ter a certeza de que estará trabalhando
              com um parceiro confiável e comprometido com a sua satisfação.
            </div>
            <div className="flex md:col-span-2 font-semibold tracking-tight text-network-primary text-3xl lg:pr-24">
              Juntos, podemos construir um futuro mais transparente e eficiente
              para a gestão do seu negócio.
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ListFeaturesWhyPoint;
