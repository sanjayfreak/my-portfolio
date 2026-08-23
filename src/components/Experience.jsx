import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    date: '1 Month Internship',
    role: 'Web Technologies Intern',
    company: 'Test Yentra',
    desc: 'Completed a Web Technologies internship and developed a responsive music streaming website inspired by platforms like Spotify, focusing on modern UI design and web development.',
    side: 'left',
  },
  {
    date: '1 Month Internship',
    role: 'Intern',
    company: 'Sutherland',
    desc: 'Completed a one-month internship at Sutherland, gaining practical exposure to a professional work environment, team collaboration, and industry practices.',
    side: 'right',
  },
  {
    date: '2023 – Present',
    role: 'B.Tech Computer Science and Business Systems',
    company: 'Panimalar Engineering College',
    desc: 'Pursuing a degree in Computer Science and Business Systems with a focus on software development, web technologies, data analytics, and problem solving.',
    side: 'left',
  },
]

export default function Experience() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      id="experience"
      style={{
        position: 'relative',
        padding: '112px 80px',
        backgroundColor: '#F0EDE8',
        overflow: 'hidden',
      }}
    >
      <span style={{
        position: 'absolute', top: '40px', right: '40px',
        fontFamily: '"Playfair Display", serif', fontWeight: 900,
        fontSize: '160px', color: '#1A1A2E', opacity: 0.03,
        userSelect: 'none', lineHeight: 1, pointerEvents: 'none',
      }}>04</span>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        <motion.div
          ref={ref}
          style={{ textAlign: 'center', marginBottom: '64px' }}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
        >
          <p style={{
            fontFamily: 'Manrope, sans-serif', color: '#D97706',
            fontSize: '11px', fontWeight: 600, letterSpacing: '0.3em',
            textTransform: 'uppercase', marginBottom: '16px',
          }}>Journey</p>
          <h2 style={{
            fontFamily: '"Playfair Display", serif', fontWeight: 900,
            fontSize: 'clamp(32px, 4vw, 48px)', color: '#1A1A2E',
          }}>Experience & Education</h2>
        </motion.div>

        <div style={{ position: 'relative' }}>

          {/* Center Line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, #F59E0B, #D97706, transparent)',
            transform: 'translateX(-50%)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: exp.side === 'right' ? 'row-reverse' : 'row',
                  alignItems: 'center',
                  gap: '32px',
                }}
                initial={{ opacity: 0, x: exp.side === 'left' ? -60 : 60 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: exp.side === 'left' ? -60 : 60 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
              >
                {/* Card */}
                <div style={{ width: '45%' }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.7)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.5)',
                    borderRadius: '20px',
                    padding: '28px',
                    boxShadow: '0 8px 32px rgba(245,158,11,0.1)',
                  }}>
                    <span style={{
                      fontFamily: 'Manrope, sans-serif', fontSize: '11px',
                      color: '#D97706', fontWeight: 600,
                      letterSpacing: '0.15em', textTransform: 'uppercase',
                    }}>{exp.date}</span>
                    <h3 style={{
                      fontFamily: '"Playfair Display", serif', fontWeight: 700,
                      fontSize: '20px', color: '#1A1A2E',
                      marginTop: '8px', marginBottom: '4px',
                    }}>{exp.role}</h3>
                    <p style={{
                      fontFamily: 'Manrope, sans-serif', fontSize: '13px',
                      color: '#F59E0B', fontWeight: 500, marginBottom: '12px',
                    }}>{exp.company}</p>
                    <p style={{
                      fontFamily: 'Lato, sans-serif', fontSize: '14px',
                      color: '#6B7280', lineHeight: 1.7,
                    }}>{exp.desc}</p>
                  </div>
                </div>

                {/* Center Node */}
                <div style={{ width: '10%', display: 'flex', justifyContent: 'center' }}>
                  <motion.div
                    style={{
                      width: '20px', height: '20px',
                      borderRadius: '50%',
                      backgroundColor: '#F59E0B',
                      border: '4px solid #F0EDE8',
                      zIndex: 10,
                      boxShadow: '0 0 0 0 rgba(245,158,11,0.4)',
                    }}
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(245,158,11,0.4)',
                        '0 0 0 12px rgba(245,158,11,0)',
                        '0 0 0 0 rgba(245,158,11,0)',
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  />
                </div>

                <div style={{ width: '45%' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}