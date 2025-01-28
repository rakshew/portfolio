import { motion } from 'framer-motion';

interface ArticleCardProps {
  title: string;
  description: string;
  url: string;
  type: string;
}

export const ArticleCard = ({ title, description, url, type }: ArticleCardProps) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 rounded-lg bg-cream/5 dark:bg-charcoal/5 hover:bg-cream/10 dark:hover:bg-charcoal/10 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <span className="text-sm text-coral mb-2 block">{type}</span>
      <h3 className="text-xl font-serif mb-2">{title}</h3>
      <p className="text-charcoal/80 dark:text-cream/80">{description}</p>
    </motion.a>
  );
};
