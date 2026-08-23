import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollPosition } from '../hooks/useScrollPosition'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const scrollY = useScrollPosition()
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = scrollY > 80

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setActive(id)
    setMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          padding: '14px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          background: scrolled ? 'rgba(250,250,248,0.9)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(245,158,11,0.2)' : 'none',
          boxShadow: scrolled ? '0 4px 20px rgba(245,158,11,0.08)' : 'none',
          transition: 'all 0.4s ease',
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Logo */}
        <motion.div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.08, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            backgroundColor: '#F59E0B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(245,158,11,0.35)',
            flexShrink: 0,
          }}
        >
          <span style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '22px',
            fontWeight: 900,
            color: 'white',
            lineHeight: 1,
          }}>S</span>
        </motion.div>

        {/* Desktop Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '36px',
        }}>
          {links.map((link, i) => (
  <button
    key={link}
    onClick={() => scrollTo(link)}
    onMouseEnter={e => e.target.style.color = '#F59E0B'}
    onMouseLeave={e => e.target.style.color = active === link ? '#D97706' : '#1A1A2E'}
    style={{
      position: 'relative',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'Manrope, sans-serif',
      fontSize: '14px',
      fontWeight: 500,
      color: active === link ? '#D97706' : '#1A1A2E',
      padding: '4px 0',
      transition: 'none',
      outline: 'none',
    }}
  >
    {link}
    {active === link && (
      <div style={{
        position: 'absolute',
        bottom: '-2px',
        left: 0,
        right: 0,
        height: '2px',
        backgroundColor: '#F59E0B',
        borderRadius: '2px',
      }} />
    )}
  </button>
))}
        </div>

        {/* Hire Me Button */}
        <motion.button
          onClick={() => scrollTo('Contact')}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 8px 25px rgba(245,158,11,0.45)',
          }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{
            padding: '11px 26px',
            backgroundColor: '#F59E0B',
            color: 'white',
            fontFamily: 'Manrope, sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            borderRadius: '50px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(245,158,11,0.3)',
            flexShrink: 0,
          }}
        >
          Hire Me →
        </motion.button>
      </motion.nav>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 998,
              backgroundColor: '#FAFAF8',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '40px',
            }}
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {links.map((link, i) => (
              <motion.button
                key={link}
                onClick={() => scrollTo(link)}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: '"Playfair Display", serif',
                  fontSize: '40px',
                  fontWeight: 700,
                  color: '#1A1A2E',
                }}
                whileHover={{ color: '#D97706', x: 8 }}
              >
                {link}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => scrollTo('Contact')}
              style={{
                marginTop: '16px',
                padding: '14px 32px',
                backgroundColor: '#F59E0B',
                color: 'white',
                fontFamily: 'Manrope, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Hire Me →
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}