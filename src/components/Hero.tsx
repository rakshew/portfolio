import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src="/hero-bg.jpg"
          alt="Astronaut holding a coral flower with celestial spheres"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-light-bg dark:to-charcoal opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight text-charcoal dark:text-cream">
            <br />
            <br />
            
          </h1>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed mb-8 font-serif text-charcoal/90 dark:text-cream/90">
            
          </p>
        </motion.div>
      </div>

      {/* Footer Text */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center font-serif text-charcoal/60 dark:text-cream/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1 }}
      >
        floating in this blissed space,
      </motion.div>
    </section>
  );
};
