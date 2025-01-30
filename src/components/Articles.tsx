import { motion } from 'framer-motion';

export const Articles = () => {
  const blogs = [
    {
      title: "Literature & Culture",
      description: "literary sehnsucht? here's an open-source water pump for poetry. quenching my thirst, circa 2021",
      url: "https://kumizh.substack.com/welcome",
      type: "Literature Blog"
    },
    {
      title: "Technical Writing",
      description: "a lemonade stand by the highway, but offering paced-out web3 discourse",
      url: "https://mirror.xyz/0x832397b6B371905402F7aA50340dabD1f8Ebb656",
      type: "Technical Blog"
    }
  ];

  return (
    <section id="articles" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif mb-12">Featured Writing</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <motion.a
              key={blog.title}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-lg bg-cream/5 dark:bg-charcoal/5 hover:bg-cream/10 dark:hover:bg-charcoal/10 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-sm text-coral mb-2 block">{blog.type}</span>
              <h3 className="text-xl font-serif mb-2">{blog.title}</h3>
              <p className="text-charcoal/80 dark:text-cream/80">{blog.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
