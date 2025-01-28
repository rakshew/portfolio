
import { ArticleCard } from './ArticleCard';

const BLOG_POSTS = [
  {
    title: "Literature & Culture",
    description: "Exploring the intersection of literature and modern culture",
    url: "https://kumizh.substack.com/welcome",
    type: "Literature Blog"
  },
  {
    title: "Technical Writing",
    description: "Deep dives into blockchain and Web3 technology",
    url: "https://mirror.xyz/0x832397b6B371905402F7aA50340dabD1f8Ebb656",
    type: "Technical Blog"
  }
] as const;

export const Articles = () => {
  return (
    <section id="articles" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif mb-12">Featured Writing</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((blog) => (
            <ArticleCard key={blog.title} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};
