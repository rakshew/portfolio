import { Navigation } from './components/Navigation';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Articles } from './components/Articles';

export default function App() {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-charcoal text-light-text dark:text-cream transition-colors duration-300">
      <Navigation />
      <ThemeToggle />
      <Hero />
      <About />
      <Articles />
    </div>
  );
}
