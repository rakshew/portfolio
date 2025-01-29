import { Menu } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from './NavLink';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Articles', href: '#articles' },
  { label: 'Connect', href: 'https://www.linkedin.com/in/rakshita-murugan-24b1a3314/', external: true }
] as const;

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-cream/90 dark:bg-charcoal/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl font-serif font-medium">RM</span>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <NavLink key={item.label} {...item} />
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-cream/10 dark:hover:bg-charcoal/10"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                {...item}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
