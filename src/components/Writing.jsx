import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { IconArrowUpRight } from '@tabler/icons-react'

const articles = [
  {
    title: 'Cannot find symbol: class Entity — My pom.xml Said MongoDB, My Code Said MySQL',
    summary: 'A build error caused by JPA annotations left behind after switching the project to MongoDB.',
    date: 'Aug 9, 2026',
    tag: 'Troubleshooting',
    link: 'https://dev.to/sanjayfreak',
  },
  {
    title: 'From MySQL to MongoDB in Spring Boot — Everything That Changed in My Code',
    summary: 'Entities, repositories and IDs: what actually had to change when moving a Spring Boot app to MongoDB.',
    date: 'Aug 19, 2026',
    tag: 'Tutorial',
    link: 'https://dev.to/sanjayfreak',
  },
  {
    title: 'I Used the Wrong @Id Import in Spring Boot and MongoDB. It Worked Anyway',
    summary: 'Why the wrong annotation import still compiled and ran, and where it quietly breaks.',
    date: 'Aug 28, 2026',
    tag: 'Opinion',
    link: 'https://dev.to/sanjayfreak',
  },
]

export default function Writing() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, amount: 0.2, margin: "0px 0px -100px 0px" })

  return (
    <section id="writing" className="relative py-20 md:py-28 px-5 sm:px-8 md:px-20 bg-bg-secondary overflow-hidden">
      {/* Watermark */}
      <span className="absolute top-5 right-3 md:top-10 md:right-10 font-playfair font-black text-[84px] md:text-[160px] text-text-primary opacity-[0.03] select-none leading-none pointer-events-none">
        04
      </span>

      <div ref={ref} className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-14 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="font-manrope text-accent-amber text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Writing
          </p>
          <h2 className="font-playfair font-black text-3xl sm:text-4xl md:text-5xl text-text-primary leading-tight">
            What I Write About
          </h2>
          <p className="font-lato text-text-secondary text-base sm:text-lg leading-relaxed mt-5 max-w-2xl mx-auto">
            I write about the bugs and design decisions I run into while building with Java and Spring Boot. Published on Dev.to.
          </p>
        </motion.div>

        {/* Article Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group flex flex-col justify-between rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 + i * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-manrope text-[11px] font-semibold tracking-[0.15em] uppercase text-accent-amber">
                    {article.tag}
                  </span>
                  <IconArrowUpRight
                    size={18}
                    className="text-text-secondary transition-colors group-hover:text-accent-amber"
                  />
                </div>

                <h3 className="font-playfair font-black text-lg sm:text-xl text-text-primary leading-snug mb-3">
                  {article.title}
                </h3>

                <p className="font-lato text-text-secondary text-sm leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <span className="font-manrope text-xs text-text-secondary mt-6">
                {article.date}
              </span>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="https://dev.to/sanjayfreak"
            target="_blank"
            rel="noopener noreferrer"
            className="font-manrope text-text-primary font-semibold inline-flex items-center gap-2"
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            Read all articles on Dev.to
            <IconArrowUpRight size={18} className="text-accent-amber" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}