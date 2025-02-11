
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import html2canvas from "html2canvas";
import { Moon, Sun } from "lucide-react";

const Index = () => {
  const [reflections, setReflections] = useState<{ [key: string]: string }>({});
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const steps = [
    {
      letter: "P",
      title: "Parar e Refletir",
      description: "Dê uma pausa e reconheça que uma emoção forte está presente.",
      placeholder: "O que estou sentindo agora?",
    },
    {
      letter: "R",
      title: "Registrar Emoções",
      description: "Anote suas emoções para ganhar clareza sobre elas.",
      placeholder: "Quais emoções estou experimentando?",
    },
    {
      letter: "O",
      title: "Observar Emoções",
      description: "Analise o que está acontecendo sem julgamento.",
      placeholder: "De onde vem essa emoção?",
    },
    {
      letter: "C",
      title: "Consolidar os Motivos",
      description: "Identifique os gatilhos que causaram a emoção.",
      placeholder: "Por que estou me sentindo assim?",
    },
    {
      letter: "E",
      title: "Elencar os Motivos que Posso Controlar",
      description: "Separe os aspectos da situação que estão sob seu controle.",
      placeholder: "O que, nesta situação, eu posso controlar ou influenciar?",
    },
    {
      letter: "S",
      title: "Soltar o que Não Posso Controlar",
      description: "Aceite o que está fora do seu controle e libere a preocupação com isso.",
      placeholder: "O que está fora do meu controle e preciso deixar ir?",
    },
    {
      letter: "S",
      title: "Selecionar Prioridade",
      description: "Defina o próximo passo mais importante com base no que foi identificado.",
      placeholder: "Qual é a ação mais importante a tomar agora?",
    },
    {
      letter: "A",
      title: "Agir com Propósito",
      description: "Tome uma atitude intencional, alinhada com seus valores.",
      placeholder: "Como posso agir de forma construtiva e intencional nesta situação?",
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
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-gray-900' 
        : 'bg-gradient-to-br from-[#E5DEFF] to-[#FDE1D3]'
    }`}>
      <Button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
        variant="outline"
      >
        {isDark ? (
          <Sun className="h-6 w-6 text-yellow-500" />
        ) : (
          <Moon className="h-6 w-6 text-purple-600" />
        )}
      </Button>

      <div className="container mx-auto px-4 py-8" id="processa-content">
        <header className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${isDark ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600'} mb-4`}>
            PROCESSA: O Ato de Gerenciar Suas Emoções
          </h1>
          <p className={`text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Por Kyara Santos</p>
          <div className="relative w-full max-w-3xl mx-auto mb-12">
            <div className={`absolute inset-0 rounded-lg blur-md ${isDark ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30' : 'bg-gradient-to-r from-purple-500/20 to-pink-500/20'}`}></div>
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
              className={`backdrop-blur-sm rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
                isDark ? 'bg-gray-800/80 text-white' : 'bg-white/80'
              }`}
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-center transform transition-transform duration-300 hover:scale-110 animate-glow">
                    <span className="text-white font-bold text-2xl">{step.letter}</span>
                  </div>
                </div>
                <h2 className={`text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r ${
                  isDark ? 'from-purple-300 to-purple-500' : 'from-purple-400 to-purple-600'
                }`}>
                  {step.title}
                </h2>
              </div>
              <p className={`mb-6 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {step.description}
              </p>
              <Textarea
                placeholder={step.placeholder}
                className={`w-full min-h-[120px] p-4 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-700/50 text-white placeholder-gray-400 border-gray-600' 
                    : 'bg-white/50 text-gray-900 placeholder-gray-500 border-gray-200'
                }`}
                value={reflections[step.title] || ""}
                onChange={(e) => setReflections({ ...reflections, [step.title]: e.target.value })}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            onClick={handleDownload}
            className={`px-10 py-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 ${
              isDark
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
            } text-white`}
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
