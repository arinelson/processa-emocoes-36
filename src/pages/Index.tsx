
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4 py-8" id="processa-content">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            PROCESSA: O Ato de Gerenciar Suas Emoções
          </h1>
          <p className="text-xl text-gray-600 mb-8">Por Kyara Santos</p>
          <div className="relative w-full max-w-3xl mx-auto mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-md"></div>
            <img
              src="/lovable-uploads/52375afd-7206-498b-b304-e923239e96ad.png"
              alt="Gerenciando Emoções Intensas"
              className="relative rounded-lg shadow-2xl w-full h-auto object-cover transform transition-transform duration-700 hover:scale-[1.01]"
            />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-white/80 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              <div className="flex items-center gap-6 mb-6">
                <span
                  className="w-16 h-16 flex items-center justify-center rounded-full text-white font-bold text-2xl shadow-lg transform transition-transform duration-300 hover:scale-110 bg-gradient-to-r from-pink-500 to-pink-600 animate-glow"
                >
                  {step.letter}
                </span>
                <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                  {step.title}
                </h2>
              </div>
              <p className="text-gray-600 mb-6 text-lg">{step.description}</p>
              <Textarea
                placeholder={step.placeholder}
                className="w-full min-h-[120px] p-4 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300"
                value={reflections[step.title] || ""}
                onChange={(e) => setReflections({ ...reflections, [step.title]: e.target.value })}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            onClick={handleDownload}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 hover:from-purple-700 hover:to-pink-700"
          >
            Baixar Minha Reflexão
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          0% {
            box-shadow: 0 0 5px #D946EF, 0 0 10px #D946EF, 0 0 15px #D946EF;
          }
          50% {
            box-shadow: 0 0 10px #D946EF, 0 0 20px #D946EF, 0 0 30px #D946EF;
          }
          100% {
            box-shadow: 0 0 5px #D946EF, 0 0 10px #D946EF, 0 0 15px #D946EF;
          }
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;
