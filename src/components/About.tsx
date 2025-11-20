import { motion } from 'framer-motion';
import { ProfileImage } from './common/ProfileImage';

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mb-16"
        >
          <div className="w-64 h-64 overflow-hidden shadow-xl mb-6">
            <ProfileImage className="w-full h-full object-cover" />
          </div>
          <h2 className="text-3xl font-serif text-center">Rakshita</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="prose prose-lg dark:prose-invert"
        >
          <p className="text-lg leading-relaxed mb-6 font-serif">
            On the road between smart contracts and ghazals, you'll find me — a Business Administration student who believes innovation meanders from the confluence of technology and human experience. When I'm not crafting marketing strategies or diving deep into Web3 protocols, you might catch me translating complex legal documents into human-readable prose (yes, really).
          </p>
          <p className="text-lg leading-relaxed mb-6 font-serif">
            Here to make finance more fascinating and crypto less bewildering, one project at a time.
          </p>
          <p className="text-lg leading-relaxed mb-6 font-serif">
            Currently based in the best: Singapore.
          </p>
          <p className="text-lg leading-relaxed font-serif">
            P.S: While my journey isn't stored on a ledger (yet), you can download my resume{' '}
            <a 
              href="https://drive.google.com/file/d/1FeilI1e9bKK9wN4W7_rdjrrXNcTpIieO/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-coral hover:text-opacity-80 transition-colors duration-300 underline"
            >
              here
            </a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
