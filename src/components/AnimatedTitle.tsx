
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface AnimatedTitleProps {
  isDark: boolean;
}

export const AnimatedTitle = ({ isDark }: AnimatedTitleProps) => {
  const [currentText, setCurrentText] = useState("SUAS EMOÇÕES");
  const [key, setKey] = useState(0);
  const texts = ["SUAS EMOÇÕES", "SUAS ESCOLHAS", "SUA VIDA", "SEU CONTROLE"];
  const isMobile = useIsMobile();

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      setCurrentText(texts[currentIndex]);
      setKey(prev => prev + 1);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const getTextWidth = (text: string) => {
    if (isMobile) {
      // Larguras menores para dispositivos móveis
      switch (text) {
        case "SUA VIDA":
          return "70px";
        case "SEU CONTROLE":
          return "110px";
        default:
          return "120px";
      }
    } else {
      // Larguras para desktop
      switch (text) {
        case "SUA VIDA":
          return "90px";
        case "SEU CONTROLE":
          return "140px";
        default:
          return "150px";
      }
    }
  };

  return (
    <h2 className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-4 flex flex-col items-center`}>
      <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap sm:flex-nowrap px-4">
        <span className={`bg-clip-text text-transparent bg-gradient-to-r ${isDark ? 'from-purple-300 to-pink-300' : 'from-purple-500 to-pink-500'} whitespace-nowrap`}>
          O Ato de Gerenciar
        </span>
        <div className={`relative h-[28px] sm:h-[32px] md:h-[36px] flex items-center justify-start ${
          isMobile ? "min-w-[120px]" : "min-w-[150px]"
        }`}>
          <span 
            key={key} 
            className={`animate-typewriter ${isDark ? 'text-purple-300' : 'text-purple-600'} absolute left-0`}
            style={{
              width: getTextWidth(currentText)
            }}
          >
            {currentText}
          </span>
        </div>
      </div>
    </h2>
  );
};
