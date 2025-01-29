import { Menu } from 'lucide-react';
import { useState } from 'react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Articles', href: '#articles' },
    { label: 'Connect', href: 'https://www.linkedin.com/in/rakshita-murugan-24b1a3314/' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-cream/90 dark:bg-charcoal/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl font-serif font-medium text-charcoal dark:text-cream">RM</span>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'Connect' ? '_blank' : undefined}
                  rel={item.label === 'Connect' ? 'noopener noreferrer' : undefined}
                  className="font-serif text-charcoal dark:text-cream hover:text-coral dark:hover:text-coral transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-charcoal dark:text-cream hover:bg-cream/10 dark:hover:bg-charcoal/10"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === 'Connect' ? '_blank' : undefined}
                rel={item.label === 'Connect' ? 'noopener noreferrer' : undefined}
                className="block px-3 py-2 rounded-md text-base font-medium text-charcoal dark:text-cream hover:bg-cream/10 dark:hover:bg-charcoal/10"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
