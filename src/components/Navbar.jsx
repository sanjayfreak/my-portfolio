import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { useIsMobile } from '../hooks/useMediaQuery'

const links = ['About', 'Skills', 'Projects', 'Writing', 'Experience', 'Contact']

export default function Navbar() {
  const scrollY = useScrollPosition()
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useIsMobile()
  const scrolled = scrollY > 80

  // Stop the page scrolling behind the open mobile menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Close the menu if the screen grows back to desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false)
  }, [isMobile])

  const scrollTo = (id) => {
    setMenuOpen(false)
    setActive(id)
    // let the menu close first so the scroll lock is released
    setTimeout(() => {
      document
        .getElementById(id.toLowerCase())
        ?.scrollIntoView({ behavior: 'smooth' })
    }, 60)
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
          padding: isMobile ? '12px 18px' : '14px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
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
            width: isMobile ? '40px' : '44px',
            height: isMobile ? '40px' : '44px',
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
          <span
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: isMobile ? '20px' : '22px',
              fontWeight: 900,
              color: 'white',
              lineHeight: 1,
            }}
          >
            S
          </span>
        </motion.div>

        {/* Desktop Links — hidden on phones */}
        {!isMobile && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '36px',
            }}
          >
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                onMouseEnter={(e) => (e.target.style.color = '#F59E0B')}
                onMouseLeave={(e) =>
                  (e.target.style.color =
                    active === link ? '#D97706' : '#1A1A2E')
                }
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
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: '#F59E0B',
                      borderRadius: '2px',
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Desktop: Hire Me — Mobile: hamburger */}
        {isMobile ? (
          <motion.button
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            whileTap={{ scale: 0.92 }}
            style={{
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '12px',
              border: '1px solid rgba(245,158,11,0.3)',
              background: 'rgba(255,255,255,0.7)',
              backdropFilter: 'blur(20px)',
              cursor: 'pointer',
              color: '#1A1A2E',
              flexShrink: 0,
              zIndex: 1000,
            }}
          >
            {menuOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
          </motion.button>
        ) : (
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
        )}
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
              gap: '24px',
              padding: '80px 24px 40px',
              overflowY: 'auto',
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
                  fontSize: 'clamp(28px, 8vw, 40px)',
                  fontWeight: 700,
                  color: '#1A1A2E',
                  padding: '4px 8px',
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
                marginTop: '8px',
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
