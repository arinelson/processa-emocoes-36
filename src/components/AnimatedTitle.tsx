
import { useEffect, useState } from "react";

interface AnimatedTitleProps {
  isDark: boolean;
}

export const AnimatedTitle = ({ isDark }: AnimatedTitleProps) => {
  const [currentText, setCurrentText] = useState("SUAS EMOÇÕES");
  const [key, setKey] = useState(0);
  const texts = ["SUAS EMOÇÕES", "SUAS ESCOLHAS", "SUA VIDA", "SEU CONTROLE"];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      setCurrentText(texts[currentIndex]);
      setKey(prev => prev + 1);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className={`text-2xl md:text-3xl font-semibold mb-4 flex flex-col items-center`}>
      <div className="flex items-center justify-center gap-2">
        <span className={`bg-clip-text text-transparent bg-gradient-to-r ${isDark ? 'from-purple-300 to-pink-300' : 'from-purple-500 to-pink-500'} whitespace-nowrap`}>
          O Ato de Gerenciar
        </span>
        <div className="relative h-[36px] flex items-center justify-start min-w-[150px]">
          <span 
            key={key} 
            className={`animate-typewriter ${isDark ? 'text-purple-300' : 'text-purple-600'} absolute left-0`}
            style={{
              width: currentText === "SUA VIDA" ? "90px" : 
                    currentText === "SEU CONTROLE" ? "140px" : "150px"
            }}
          >
            {currentText}
          </span>
        </div>
      </div>
    </h2>
  );
};
