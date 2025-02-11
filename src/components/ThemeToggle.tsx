
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => {
  return (
    <Button
      onClick={onToggle}
      className="fixed top-4 right-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
      variant="outline"
    >
      {isDark ? (
        <Sun className="h-6 w-6 text-yellow-500" />
      ) : (
        <Moon className="h-6 w-6 text-purple-600" />
      )}
    </Button>
  );
};
