import { useState, useEffect } from 'react'

export default function Loader({ onDone }) {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => {
      setFadeOut(true)
    }, 1800)

    const t2 = setTimeout(() => {
      setVisible(false)
      onDone()
    }, 2400)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#FAFAF8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '24px',
        transition: 'opacity 0.6s ease',
        opacity: fadeOut ? 0 : 1,
      }}
    >
      {/* Logo Box */}
      <div
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '20px',
          backgroundColor: '#F59E0B',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 40px rgba(245,158,11,0.5)',
          animation: 'logoPulse 1.2s ease-in-out infinite',
        }}
      >
        <span style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: '36px',
          fontWeight: 900,
          color: 'white',
          lineHeight: 1,
        }}>
          S
        </span>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', gap: '8px' }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#F59E0B',
              animation: `dotBounce 0.8s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Loading text */}
      <p style={{
        fontFamily: 'Manrope, sans-serif',
        fontSize: '12px',
        fontWeight: 600,
        color: '#6B7280',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
      }}>
        Loading...
      </p>

      {/* Keyframe styles */}
      <style>{`
        @keyframes logoPulse {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.08) rotate(5deg); }
        }
        @keyframes dotBounce {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(-8px); opacity: 1; }
        }
      `}</style>
    </div>
  )
}