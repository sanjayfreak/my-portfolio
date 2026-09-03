import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useIsMobile, useIsTablet } from '../hooks/useMediaQuery'

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
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  // Below 1024px the two-sided timeline is too cramped — run it down the left edge
  const singleColumn = isTablet

  const card = (exp) => (
    <div
      style={{
        background: 'rgba(255,255,255,0.7)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.5)',
        borderRadius: '20px',
        padding: isMobile ? '20px' : '28px',
        boxShadow: '0 8px 32px rgba(245,158,11,0.1)',
      }}
    >
      <span
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: '11px',
          color: '#D97706',
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}
      >
        {exp.date}
      </span>
      <h3
        style={{
          fontFamily: '"Playfair Display", serif',
          fontWeight: 700,
          fontSize: isMobile ? '18px' : '20px',
          color: '#1A1A2E',
          marginTop: '8px',
          marginBottom: '4px',
          lineHeight: 1.3,
        }}
      >
        {exp.role}
      </h3>
      <p
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: '13px',
          color: '#F59E0B',
          fontWeight: 500,
          marginBottom: '12px',
        }}
      >
        {exp.company}
      </p>
      <p
        style={{
          fontFamily: 'Lato, sans-serif',
          fontSize: isMobile ? '13px' : '14px',
          color: '#6B7280',
          lineHeight: 1.7,
        }}
      >
        {exp.desc}
      </p>
    </div>
  )

  const node = (i) => (
    <motion.div
      style={{
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: '#F59E0B',
        border: '4px solid #FAFAF8',
        zIndex: 10,
        flexShrink: 0,
        boxShadow: '0 0 0 0 rgba(245,158,11,0.4)',
      }}
      animate={{
        boxShadow: [
          '0 0 0 0 rgba(245,158,11,0.4)',
          '0 0 0 12px rgba(245,158,11,0)',
          '0 0 0 0 rgba(245,158,11,0)',
        ],
      }}
      transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
    />
  )

  return (
    <section
      id="experience"
      style={{
        position: 'relative',
        padding: isMobile ? '72px 20px' : isTablet ? '96px 40px' : '112px 80px',
        backgroundColor: '#FAFAF8',
        overflow: 'hidden',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: isMobile ? '20px' : '40px',
          right: isMobile ? '12px' : '40px',
          fontFamily: '"Playfair Display", serif',
          fontWeight: 900,
          fontSize: isMobile ? '84px' : '160px',
          color: '#1A1A2E',
          opacity: 0.03,
          userSelect: 'none',
          lineHeight: 1,
          pointerEvents: 'none',
        }}
      >
        05
      </span>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? '44px' : '64px',
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
        >
          <p
            style={{
              fontFamily: 'Manrope, sans-serif',
              color: '#D97706',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            Journey
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 900,
              fontSize: 'clamp(26px, 6vw, 48px)',
              color: '#1A1A2E',
            }}
          >
            Experience &amp; Education
          </h2>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Timeline Line — centered on desktop, left rail on smaller screens */}
          <div
            style={{
              position: 'absolute',
              left: singleColumn ? '10px' : '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              background:
                'linear-gradient(to bottom, #F59E0B, #D97706, transparent)',
              transform: singleColumn ? 'none' : 'translateX(-50%)',
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '32px' : '64px',
            }}
          >
            {experiences.map((exp, i) =>
              singleColumn ? (
                <motion.div
                  key={`m-${i}`}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    gap: '20px',
                  }}
                  initial={{ opacity: 0, x: 0, y: 30 }}
                  animate={
                    inView
                      ? { opacity: 1, x: 0, y: 0 }
                      : { opacity: 0, x: 0, y: 30 }
                  }
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                >
                  <div style={{ paddingTop: '22px', flexShrink: 0 }}>
                    {node(i)}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>{card(exp)}</div>
                </motion.div>
              ) : (
                <motion.div
                  key={`d-${i}`}
                  style={{
                    display: 'flex',
                    flexDirection: exp.side === 'right' ? 'row-reverse' : 'row',
                    alignItems: 'center',
                    gap: '32px',
                  }}
                  initial={{ opacity: 0, x: exp.side === 'left' ? -60 : 60, y: 0 }}
                  animate={
                    inView
                      ? { opacity: 1, x: 0, y: 0 }
                      : { opacity: 0, x: exp.side === 'left' ? -60 : 60, y: 0 }
                  }
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                >
                  <div style={{ width: '45%' }}>{card(exp)}</div>
                  <div
                    style={{
                      width: '10%',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {node(i)}
                  </div>
                  <div style={{ width: '45%' }} />
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
