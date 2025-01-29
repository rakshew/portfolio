interface NavLinkProps {
  href: string;
  label: string;
  external?: boolean;
  onClick?: () => void;
}

export const NavLink = ({ href, label, external, onClick }: NavLinkProps) => {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="font-serif text-charcoal dark:text-cream hover:text-coral transition-colors duration-300"
      onClick={onClick}
    >
      {label}
    </a>
  );
};
