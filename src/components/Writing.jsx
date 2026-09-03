import { motion } from "framer-motion";
import { IconArrowUpRight, IconArticle } from "@tabler/icons-react";

const articles = [
  {
    title:
      "Cannot find symbol: class Entity — My pom.xml Said MongoDB, My Code Said MySQL",
    summary:
      "A build error caused by JPA annotations left behind after switching the project to MongoDB.",
    date: "Aug 9, 2026",
    tag: "Troubleshooting",
    link: "https://dev.to/sanjayfreak",
  },
  {
    title:
      "From MySQL to MongoDB in Spring Boot — Everything That Changed in My Code",
    summary:
      "Entities, repositories and IDs: what actually had to change when moving a Spring Boot app to MongoDB.",
    date: "Aug 19, 2026",
    tag: "Tutorial",
    link: "https://dev.to/sanjayfreak",
  },
  {
    title:
      "I Used the Wrong @Id Import in Spring Boot and MongoDB. It Worked Anyway",
    summary:
      "Why the wrong annotation import still compiled and ran, and where it quietly breaks.",
    date: "Aug 28, 2026",
    tag: "Opinion",
    link: "https://dev.to/sanjayfreak",
  },
];

const Writing = () => {
  return (
    <section id="writing" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Writing</h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          I write about the bugs and design decisions I run into while building
          with Java and Spring Boot. Published on Dev.to.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <motion.a
            key={article.title}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/25"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center gap-2 text-sm text-gray-400">
                  <IconArticle size={18} />
                  {article.tag}
                </span>
                <IconArrowUpRight
                  size={18}
                  className="text-gray-400 transition group-hover:text-white"
                />
              </div>

              <h3 className="text-lg font-semibold mb-2 leading-snug">
                {article.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {article.summary}
              </p>
            </div>

            <span className="mt-6 text-xs text-gray-500">{article.date}</span>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10"
      >
        <a
          href="https://dev.to/sanjayfreak"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
        >
          Read all articles on Dev.to
          <IconArrowUpRight size={16} />
        </a>
      </motion.div>
    </section>
  );
};

export default Writing;