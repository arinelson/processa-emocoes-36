
import { Checkbox } from "@/components/ui/checkbox";

interface EmotionChecklistProps {
  selectedEmotions: string[];
  onToggle: (emotion: string) => void;
  isDark: boolean;
}

export const EmotionChecklist = ({ selectedEmotions, onToggle, isDark }: EmotionChecklistProps) => {
  const emotionChecklist = [
    "Me sinto mais consciente das minhas emoções",
    "Consigo identificar melhor os gatilhos emocionais",
    "Tenho maior clareza sobre o que posso controlar",
    "Me sinto mais leve após a reflexão",
    "Identifiquei ações práticas que posso tomar",
    "Reconheço melhor meus padrões emocionais",
    "Me sinto mais preparado(a) para lidar com situações similares",
    "Tenho mais aceitação sobre o que não posso controlar"
  ];

  return (
    <div className={`max-w-3xl mx-auto mt-16 mb-12 p-8 rounded-xl shadow-lg backdrop-blur-sm ${
      isDark ? 'bg-gray-800/80 text-white' : 'bg-white/80'
    }`}>
      <h2 className={`text-2xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r ${
        isDark ? 'from-purple-300 to-purple-500' : 'from-purple-400 to-purple-600'
      }`}>
        Reflexão Final: Como você se sente agora?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {emotionChecklist.map((emotion, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Checkbox
              id={`emotion-${index}`}
              checked={selectedEmotions.includes(emotion)}
              onCheckedChange={() => onToggle(emotion)}
              className={`mt-1 ${isDark ? 'border-purple-400' : 'border-purple-600'}`}
            />
            <label
              htmlFor={`emotion-${index}`}
              className={`text-sm md:text-base cursor-pointer ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {emotion}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
