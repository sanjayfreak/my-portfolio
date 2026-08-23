import { motion } from 'framer-motion'
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconBrandX, IconChevronDown } from '@tabler/icons-react'
import heroVideo from '../assest/gemini.mp4'
import resume from '../assest/clgresume.pdf' // <-- ADD YOUR PDF HERE

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        width: '100vw',
        maxWidth: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#111827',
        display: 'flex',
        alignItems: 'center',
        margin: 0,
        padding: 0,
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
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          minWidth: '100vw',
          minHeight: '100vh',
          objectFit: 'cover',
          objectPosition: 'left center',
          zIndex: 0,
          display: 'block',
          margin: 0,
          padding: 0,
          transform: 'scaleX(1.18)',
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(to right, rgba(250,250,248,0.95) 0%, rgba(250,250,248,0.85) 40%, rgba(250,250,248,0.3) 70%, transparent 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          padding: '0 80px',
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
              fontSize: '12px',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: '24px',
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
              fontSize: 'clamp(48px, 6vw, 80px)',
              marginBottom: '24px',
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
              fontSize: '18px',
              lineHeight: 1.7,
              marginBottom: '40px',
              maxWidth: '420px',
            }}
          >
            Hi, I'm <strong style={{ color: '#1A1A2E' }}>Sanjay</strong> — a Full Stack Developer specializing in building scalable web applications with clean, efficient code and user-focused design.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '40px',
            }}
          >
            <motion.button
              style={{
                padding: '14px 28px',
                background: '#F59E0B',
                color: 'white',
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 600,
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(245,158,11,0.4)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View Projects
            </motion.button>

            {/* ✅ FIXED BUTTON */}
            <motion.a
              href={resume}
              download="Sanjay_Resume.pdf"
              style={{
                padding: '14px 28px',
                background: 'transparent',
                color: '#D97706',
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 600,
                borderRadius: '50px',
                border: '2px solid #D97706',
                cursor: 'pointer',
                fontSize: '14px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(217,119,6,0.08)' }}
              whileTap={{ scale: 0.97 }}
            >
              Download CV
            </motion.a>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={item}
            style={{ display: 'flex', gap: '16px' }}
          >
            {[
              { icon: IconBrandGithub, href: 'https://github.com/sanjayfreak' },
              { icon: IconBrandLinkedin, href: 'https://www.linkedin.com/in/sanjaykumar812' },
              { icon: IconBrandX, href: 'https://x.com/sanjafreak812' }
            ].map(({ icon: Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.6)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6B7280',
                  textDecoration: 'none',
                }}
                whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(245,158,11,0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll */}
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
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
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
    </section>
  )
}