import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { motion } from 'framer-motion';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed z-50 bottom-8 right-8 p-3 rounded-full bg-cream/90 dark:bg-charcoal/90 border border-charcoal/10 dark:border-cream/10 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 dark:focus:ring-offset-charcoal"
      aria-label="Toggle theme"
      whileTap={{ scale: 0.9 }}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-charcoal dark:text-cream" />
      ) : (
        <Moon className="w-5 h-5 text-charcoal dark:text-cream" />
      )}
    </motion.button>
  );
};
