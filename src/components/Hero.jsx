import { motion } from 'framer-motion'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconChevronDown,
} from '@tabler/icons-react'
import heroVideo from '../assest/gemini.mp4'
import resume from '../assest/clgresume.pdf'
import { useIsMobile, useIsTablet } from '../hooks/useMediaQuery'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        minHeight: isMobile ? '100svh' : '100vh',
        overflow: 'hidden',
        backgroundColor: '#111827',
        display: 'flex',
        alignItems: 'center',
        margin: 0,
        padding: isMobile ? '96px 0 64px' : 0,
        left: 0,
      }}
    >
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: isMobile ? 'center' : 'left center',
          zIndex: 0,
          display: 'block',
          margin: 0,
          padding: 0,
          transform: isMobile ? 'none' : 'scaleX(1.18)',
        }}
      />

      {/* Overlay — sideways fade on desktop, top-down on phones so text stays readable */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: isMobile
            ? 'linear-gradient(to bottom, rgba(250,250,248,0.97) 0%, rgba(250,250,248,0.92) 55%, rgba(250,250,248,0.6) 100%)'
            : 'linear-gradient(to right, rgba(250,250,248,0.95) 0%, rgba(250,250,248,0.85) 40%, rgba(250,250,248,0.3) 70%, transparent 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          padding: isMobile ? '0 20px' : isTablet ? '0 40px' : '0 80px',
        }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div style={{ maxWidth: '560px' }}>
          <motion.p
            variants={item}
            style={{
              fontFamily: 'Manrope, sans-serif',
              color: '#D97706',
              letterSpacing: '0.3em',
              fontSize: isMobile ? '11px' : '12px',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: isMobile ? '16px' : '24px',
            }}
          >
            Portfolio · 2025
          </motion.p>

          <motion.h1
            variants={item}
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 900,
              color: '#1A1A2E',
              lineHeight: 1.1,
              fontSize: 'clamp(36px, 9vw, 80px)',
              marginBottom: isMobile ? '18px' : '24px',
            }}
          >
            Crafting Code<br />
            <span
              style={{
                background: 'linear-gradient(135deg, #D97706, #F59E0B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              That Matters.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            style={{
              fontFamily: 'Lato, sans-serif',
              color: '#6B7280',
              fontSize: isMobile ? '15px' : '18px',
              lineHeight: 1.7,
              marginBottom: isMobile ? '28px' : '40px',
              maxWidth: '420px',
            }}
          >
            Hi, I'm <strong style={{ color: '#1A1A2E' }}>Sanjay</strong> — a
            Full Stack Developer specializing in building scalable web
            applications with clean, efficient code and user-focused design.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: isMobile ? '28px' : '40px',
            }}
          >
            <motion.button
              style={{
                flex: isMobile ? '1 1 140px' : '0 0 auto',
                padding: '14px 24px',
                background: '#F59E0B',
                color: 'white',
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 600,
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                minHeight: '48px',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(245,158,11,0.4)',
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View Projects
            </motion.button>

            <motion.a
              href={resume}
              download="Sanjay_Resume.pdf"
              style={{
                flex: isMobile ? '1 1 140px' : '0 0 auto',
                padding: '14px 24px',
                background: 'transparent',
                color: '#D97706',
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 600,
                borderRadius: '50px',
                border: '2px solid #D97706',
                cursor: 'pointer',
                fontSize: '14px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '48px',
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(217,119,6,0.08)',
              }}
              whileTap={{ scale: 0.97 }}
            >
              Download CV
            </motion.a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={item} style={{ display: 'flex', gap: '14px' }}>
            {[
              {
                icon: IconBrandGithub,
                href: 'https://github.com/sanjayfreak',
                label: 'GitHub',
              },
              {
                icon: IconBrandLinkedin,
                href: 'https://www.linkedin.com/in/sanjaykumar812',
                label: 'LinkedIn',
              },
              {
                icon: IconBrandX,
                href: 'https://x.com/sanjafreak812',
                label: 'X',
              },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.6)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6B7280',
                  textDecoration: 'none',
                  flexShrink: 0,
                }}
                whileHover={{
                  scale: 1.15,
                  boxShadow: '0 0 20px rgba(245,158,11,0.3)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue — desktop only, it collides with content on short phone screens */}
      {!isMobile && (
        <motion.div
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
          }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          onClick={() =>
            document
              .getElementById('about')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <span
            style={{
              fontFamily: 'Manrope',
              fontSize: '11px',
              color: '#6B7280',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Scroll
          </span>
          <IconChevronDown size={20} color="#F59E0B" />
        </motion.div>
      )}
    </section>
  )
}
