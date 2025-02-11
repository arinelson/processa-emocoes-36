
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import html2canvas from "html2canvas";

const Index = () => {
  const [reflections, setReflections] = useState<{ [key: string]: string }>({});

  const steps = [
    {
      letter: "P",
      title: "Parar e Refletir",
      description: "Dê uma pausa e reconheça que uma emoção forte está presente.",
      placeholder: "O que estou sentindo agora?",
      color: "purple",
    },
    {
      letter: "R",
      title: "Registrar Emoções",
      description: "Anote suas emoções para ganhar clareza sobre elas.",
      placeholder: "Quais emoções estou experimentando?",
      color: "pink",
    },
    {
      letter: "O",
      title: "Observar Emoções",
      description: "Analise o que está acontecendo sem julgamento.",
      placeholder: "De onde vem essa emoção?",
      color: "blue",
    },
    {
      letter: "C",
      title: "Consolidar os Motivos",
      description: "Identifique os gatilhos que causaram a emoção.",
      placeholder: "Por que estou me sentindo assim?",
      color: "violet",
    },
    {
      letter: "E",
      title: "Elencar os Motivos que Posso Controlar",
      description: "Separe os aspectos da situação que estão sob seu controle.",
      placeholder: "O que, nesta situação, eu posso controlar ou influenciar?",
      color: "indigo",
    },
    {
      letter: "S",
      title: "Soltar o que Não Posso Controlar",
      description: "Aceite o que está fora do seu controle e libere a preocupação com isso.",
      placeholder: "O que está fora do meu controle e preciso deixar ir?",
      color: "purple",
    },
    {
      letter: "S",
      title: "Selecionar Prioridade",
      description: "Defina o próximo passo mais importante com base no que foi identificado.",
      placeholder: "Qual é a ação mais importante a tomar agora?",
      color: "blue",
    },
    {
      letter: "A",
      title: "Agir com Propósito",
      description: "Tome uma atitude intencional, alinhada com seus valores.",
      placeholder: "Como posso agir de forma construtiva e intencional nesta situação?",
      color: "teal",
    },
  ];

  const handleDownload = async () => {
    const element = document.getElementById("processa-content");
    if (element) {
      const canvas = await html2canvas(element);
      const data = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = data;
      link.download = "minha-reflexao-processa.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8" id="processa-content">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">
            PROCESSA: O Ato de Gerenciar Suas Emoções
          </h1>
          <p className="text-xl text-gray-600 mb-8">Por Kyara Santos</p>
          <img
            src="/lovable-uploads/52375afd-7206-498b-b304-e923239e96ad.png"
            alt="Gerenciando Emoções Intensas"
            className="mx-auto max-w-full h-auto rounded-lg shadow-lg mb-12"
          />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4 mb-4">
                <span
                  className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-bold text-xl bg-${step.color}-600`}
                >
                  {step.letter}
                </span>
                <h2 className="text-xl font-semibold text-gray-800">{step.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <Textarea
                placeholder={step.placeholder}
                className="w-full min-h-[120px] p-3 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={reflections[step.title] || ""}
                onChange={(e) => setReflections({ ...reflections, [step.title]: e.target.value })}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={handleDownload}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-transform duration-300 hover:scale-105"
          >
            Baixar Minha Reflexão
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
