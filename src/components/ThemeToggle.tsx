import { useTheme } from "../components/Theme-provider";
import { Sun, Moon } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 transition"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-gray-800" />
      ) : (
        <Sun className="h-5 w-5 text-yellow-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
