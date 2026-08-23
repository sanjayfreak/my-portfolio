import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

function Counter({ target, suffix = '+' }) {
  const [count, setCount] = useState(0)
  const ref = useRef()
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.ceil(target / 40)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 40)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function About() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, amount: 0.2, margin: "0px 0px -100px 0px" })

  return (
    <section id="about" className="relative py-28 px-8 md:px-20 bg-bg-primary overflow-hidden">
      {/* Watermark */}
      <span className="absolute top-10 right-10 font-playfair font-black text-[160px] text-text-primary opacity-[0.03] select-none leading-none">
        01
      </span>

      <div ref={ref} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT — Photo */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative">
            {/* Circle Photo Frame */}
            <div
              className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden"
              style={{
                boxShadow: '0 0 0 6px #F59E0B, 0 0 40px rgba(245,158,11,0.4)'
              }}
            >
              {/* Replace this div with your photo */}
              <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                <span className="font-playfair text-8xl font-black text-accent-amber opacity-30">S</span>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 glass px-4 py-2.5 rounded-full flex items-center gap-2 shadow-lg"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-accent-green animate-pulse" />
              <span className="font-manrope text-xs font-semibold text-text-primary">
                Available for Internship
              </span>
            </motion.div>

            {/* Decorative floating shapes */}
            <motion.div
              className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-accent-gold opacity-20"
              animate={{ rotate: [0, 15, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-8 left-10 w-10 h-10 rounded-full bg-accent-green opacity-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
          </div>
        </motion.div>

        {/* RIGHT — Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          {/* Label */}
          <p className="font-manrope text-accent-amber text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            About Me
          </p>

          {/* Heading */}
          <h2 className="font-playfair font-black text-4xl md:text-5xl text-text-primary leading-tight mb-6">
            Developer by day,<br />
            designer by instinct.
          </h2>

          {/* Bio */}
          <p className="font-lato text-text-secondary text-lg leading-relaxed mb-8">
           I am a 3rd-year B.Tech student in Computer Science and Business Systems with a focus on full-stack web development. I build scalable and efficient web applications, handling both frontend and backend development, including APIs and database integration. My approach emphasizes clean architecture, performance, and user-centric design. I continuously work on improving my problem-solving abilities, system design knowledge, and deployment skills to meet industry standards. I am seeking opportunities to contribute to real-world projects and grow as a software engineer
          </p>

          {/* Stats */}
          <div className="flex gap-10 mb-10 flex-wrap">
            {[
              { value: 3, suffix: '+', label: 'Projects' },
              { value: 3, suffix: '', label: 'Internships' },
              { value: 27, suffix: "'", label: "B.Tech CSBS" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-playfair text-3xl font-black text-accent-amber">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </span>
                <span className="font-manrope text-xs text-text-secondary mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Story Link */}
          <motion.button
            className="font-manrope text-text-primary font-semibold flex items-center gap-2 group relative"
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            
            <motion.span
              className="absolute -bottom-1 left-0 h-0.5 bg-accent-gold rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}