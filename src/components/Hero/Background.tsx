import { motion } from 'framer-motion';

export const Background = () => {
  return (
    <div className="absolute inset-0 bg-charcoal">
      <motion.img
        src="/hero-bg.jpg"
        alt="Astronaut holding a coral flower with celestial spheres"
        className="w-full h-full object-cover"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
    </div>
  );
};
