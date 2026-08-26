import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'
import { useIsMobile, useIsTablet } from '../hooks/useMediaQuery'

const categories = {
  Languages: [
    { name: 'JavaScript', emoji: '🟨' },
    { name: 'Java', emoji: '☕' },
    { name: 'HTML', emoji: '🧱' },
    { name: 'CSS', emoji: '🎨' },
    { name: 'SQL', emoji: '🗄️' },
    { name: 'RestAPI', emoji: '🔗' },
  ],
  Frameworks: [
    { name: 'React.js', emoji: '⚛️' },
    { name: 'SpringBoot', emoji: '⚙️' },
    { name: 'MYSQL', emoji: '🌱' },
    { name: 'Hibernate/JPA', emoji: '🔗' },
    { name: 'Tailwind CSS', emoji: '💨' },
    { name: 'MongoDB', emoji: '🍃' },
  ],
  Tools: [
    { name: 'Git', emoji: '🔀' },
    { name: 'VS Code', emoji: '💻' },
    { name: 'GitHub', emoji: '🐙' },
    { name: 'Docker', emoji: '🐳' },
    { name: 'Postman', emoji: '📮' },
    { name: 'AI Tools', emoji: '🧠' },
  ],
}

export default function Skills() {
  const [tab, setTab] = useState('Languages')
  const ref = useRef()
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const typeText = useTypewriter(
    "const developer = { passionate: true, available: true, skills: 'full-stack' };",
    55,
    inView ? 600 : 99999
  )

  return (
    <section
      id="skills"
      style={{
        position: 'relative',
        padding: isMobile ? '72px 20px' : isTablet ? '96px 40px' : '112px 80px',
        backgroundColor: '#F0EDE8',
        overflow: 'hidden',
      }}
    >
      {/* Watermark */}
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
        02
      </span>

      <div ref={ref} style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Heading */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '64px' }}
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
            Expertise
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 900,
              fontSize: 'clamp(28px, 6vw, 48px)',
              color: '#1A1A2E',
            }}
          >
            What I Work With
          </h2>
        </motion.div>

        {/* Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: isMobile ? '8px' : '12px',
            marginBottom: isMobile ? '32px' : '48px',
            flexWrap: 'wrap',
          }}
        >
          {Object.keys(categories).map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setTab(cat)}
              whileTap={{ scale: 0.96 }}
              style={{
                position: 'relative',
                padding: isMobile ? '10px 18px' : '10px 24px',
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Manrope, sans-serif',
                fontSize: isMobile ? '13px' : '14px',
                fontWeight: 600,
                minHeight: '44px',
                backgroundColor: tab === cat ? '#F59E0B' : 'transparent',
                color: tab === cat ? 'white' : '#6B7280',
                transition: 'all 0.2s ease',
                boxShadow:
                  tab === cat ? '0 4px 15px rgba(245,158,11,0.3)' : 'none',
              }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile
                ? 'repeat(2, minmax(0, 1fr))'
                : isTablet
                ? 'repeat(2, minmax(0, 1fr))'
                : 'repeat(3, minmax(0, 1fr))',
              gap: isMobile ? '12px' : '16px',
              marginBottom: isMobile ? '44px' : '64px',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {categories[tab].map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: '0 0 25px rgba(245,158,11,0.25)',
                }}
                style={{
                  background: 'rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.5)',
                  borderRadius: '16px',
                  padding: isMobile ? '14px' : '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '10px' : '16px',
                  cursor: 'default',
                  minWidth: 0,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                }}
              >
                <span style={{ fontSize: isMobile ? '22px' : '28px' }}>
                  {skill.emoji}
                </span>
                <span
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 600,
                    color: '#1A1A2E',
                    fontSize: isMobile ? '13px' : '14px',
                    minWidth: 0,
                    overflowWrap: 'break-word',
                  }}
                >
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Terminal */}
        <motion.div
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div
            style={{
              backgroundColor: '#1F2937',
              padding: isMobile ? '10px 14px' : '12px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#EF4444', flexShrink: 0 }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#F59E0B', flexShrink: 0 }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#22C55E', flexShrink: 0 }} />
            <span
              style={{
                marginLeft: isMobile ? '8px' : '16px',
                fontFamily: 'Manrope, sans-serif',
                fontSize: '12px',
                color: '#9CA3AF',
              }}
            >
              terminal
            </span>
          </div>
          <div
            style={{
              backgroundColor: '#030712',
              padding: isMobile ? '18px 14px' : '24px',
              minHeight: '80px',
            }}
          >
            <span
              style={{
                color: '#22C55E',
                fontFamily: 'Manrope, sans-serif',
                fontSize: isMobile ? '12px' : '14px',
              }}
            >
              ❯{' '}
            </span>
            <span
              style={{
                fontFamily: 'monospace',
                fontSize: isMobile ? '11px' : '14px',
                color: '#F59E0B',
                overflowWrap: 'anywhere',
                wordBreak: 'break-word',
              }}
            >
              {typeText}
            </span>
            <motion.span
              style={{
                display: 'inline-block',
                width: '2px',
                height: '16px',
                backgroundColor: '#F59E0B',
                marginLeft: '2px',
                verticalAlign: 'middle',
              }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
