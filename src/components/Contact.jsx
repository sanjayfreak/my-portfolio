import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from '@tabler/icons-react'

export default function Contact() {
  const ref = useRef()
  const inView = useInView(ref, {
    once: true,
    amount: 0.2,
  })

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState('idle')
  // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      return
    }

    setStatus('sending')

    try {
      const formData = new FormData()

      formData.append(
        'access_key',
        'aa977813-d82d-4f46-b5ee-5c12744c0fad'
      )

      formData.append('name', form.name)
      formData.append('email', form.email)
      formData.append('message', form.message)

      // Email subject
      formData.append(
        'subject',
        'New Portfolio Contact Message'
      )

      // Name shown in your email
      formData.append(
        'from_name',
        'Sanjay Portfolio'
      )

      // Spam protection
      formData.append('botcheck', '')

      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData,
        }
      )

      const data = await response.json()

      if (data.success) {
        setStatus('success')

        setForm({
          name: '',
          email: '',
          message: '',
        })

        setTimeout(() => {
          setStatus('idle')
        }, 4000)
      } else {
        console.error('Web3Forms Error:', data)
        setStatus('error')

        setTimeout(() => {
          setStatus('idle')
        }, 4000)
      }
    } catch (error) {
      console.error('Contact Form Error:', error)

      setStatus('error')

      setTimeout(() => {
        setStatus('idle')
      }, 4000)
    }
  }

  return (
    <section
      id="contact"
      className="relative py-28 px-8 md:px-20 overflow-hidden"
      style={{
        background: '#1A1A2E',
      }}
    >
      {/* Watermark */}
      <span
        className="absolute top-10 right-10 font-playfair font-black text-[160px] text-white opacity-[0.03] select-none leading-none"
      >
        05
      </span>

      {/* Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div
        className="max-w-6xl mx-auto relative z-10"
        ref={ref}
      >
        {/* ================= HEADING ================= */}
        <motion.div
          className="text-center mb-16"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
          }}
        >
          <p
            className="font-manrope text-xs font-semibold tracking-[0.3em] uppercase mb-4"
            style={{
              color: '#F59E0B',
            }}
          >
            Get In Touch
          </p>

          <h2 className="font-playfair font-black text-4xl md:text-5xl text-white leading-tight">
            Let's Build Something
            <br />

            <span
              style={{
                background:
                  'linear-gradient(135deg, #D97706, #F59E0B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Great Together.
            </span>
          </h2>

          <p
            className="font-lato text-lg mt-6"
            style={{
              color: '#9CA3AF',
            }}
          >
            Open to internships, freelance work, and collaborations.
          </p>
        </motion.div>

        {/* ================= TWO COLUMNS ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* ================= FORM ================= */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              style={{
                width: '100%',
                padding: '16px 20px',
                borderRadius: '12px',
                background:
                  'rgba(255,255,255,0.08)',
                border:
                  '1px solid rgba(255,255,255,0.15)',
                color: 'white',
                fontFamily:
                  'Lato, sans-serif',
                fontSize: '14px',
                outline: 'none',
              }}
              onFocus={(e) =>
                (e.target.style.borderColor =
                  '#F59E0B')
              }
              onBlur={(e) =>
                (e.target.style.borderColor =
                  'rgba(255,255,255,0.15)')
              }
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              style={{
                width: '100%',
                padding: '16px 20px',
                borderRadius: '12px',
                background:
                  'rgba(255,255,255,0.08)',
                border:
                  '1px solid rgba(255,255,255,0.15)',
                color: 'white',
                fontFamily:
                  'Lato, sans-serif',
                fontSize: '14px',
                outline: 'none',
              }}
              onFocus={(e) =>
                (e.target.style.borderColor =
                  '#F59E0B')
              }
              onBlur={(e) =>
                (e.target.style.borderColor =
                  'rgba(255,255,255,0.15)')
              }
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message..."
              required
              rows={5}
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              style={{
                width: '100%',
                padding: '16px 20px',
                borderRadius: '12px',
                background:
                  'rgba(255,255,255,0.08)',
                border:
                  '1px solid rgba(255,255,255,0.15)',
                color: 'white',
                fontFamily:
                  'Lato, sans-serif',
                fontSize: '14px',
                outline: 'none',
                resize: 'none',
              }}
              onFocus={(e) =>
                (e.target.style.borderColor =
                  '#F59E0B')
              }
              onBlur={(e) =>
                (e.target.style.borderColor =
                  'rgba(255,255,255,0.15)')
              }
            />

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '12px',
                background:
                  'linear-gradient(135deg, #F59E0B, #D97706)',
                color: 'white',
                fontFamily:
                  'Manrope, sans-serif',
                fontWeight: 600,
                fontSize: '14px',
                border: 'none',
                cursor:
                  status === 'sending'
                    ? 'not-allowed'
                    : 'pointer',
                position: 'relative',
                overflow: 'hidden',
                opacity:
                  status === 'sending'
                    ? 0.7
                    : 1,
              }}
              whileHover={
                status !== 'sending'
                  ? {
                      scale: 1.02,
                      boxShadow:
                        '0 12px 30px rgba(245,158,11,0.4)',
                    }
                  : {}
              }
              whileTap={
                status !== 'sending'
                  ? {
                      scale: 0.98,
                    }
                  : {}
              }
            >
              {/* Shimmer */}
              {status !== 'sending' &&
                status !== 'success' && (
                  <motion.div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                    }}
                    animate={{
                      x: [
                        '-100%',
                        '200%',
                      ],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                )}

              {/* Button Text */}
              {status === 'sending' &&
                'Sending...'}

              {status === 'success' &&
                '✓ Message Sent!'}

              {status === 'error' &&
                '✕ Try Again'}

              {status === 'idle' &&
                'Send Message →'}
            </motion.button>

            {/* Status Message */}
            {status === 'success' && (
              <p
                style={{
                  textAlign: 'center',
                  color: '#34D399',
                  fontFamily:
                    'Manrope, sans-serif',
                  fontSize: '13px',
                }}
              >
                Your message has been sent
                successfully. I'll get back to
                you soon!
              </p>
            )}

            {status === 'error' && (
              <p
                style={{
                  textAlign: 'center',
                  color: '#F87171',
                  fontFamily:
                    'Manrope, sans-serif',
                  fontSize: '13px',
                }}
              >
                Something went wrong. Please
                try again.
              </p>
            )}
          </motion.form>

          {/* ================= CONTACT INFO ================= */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
          >
            {[
              {
                icon: IconMail,
                label: 'Email',
                value:
                  'sanjaykumarcsbs@gmail.com',
                href:
                  'mailto:sanjaykumarcsbs@gmail.com',
              },
              {
                icon: IconBrandLinkedin,
                label: 'LinkedIn',
                value:
                  'sanjaykumar812',
                href:
                  'https://www.linkedin.com/',
              },
              {
                icon: IconBrandGithub,
                label: 'GitHub',
                value:
                  'sanjayfreak',
                href:
                  'https://github.com/sanjayfreak',
              },
            ].map(
              ({
                icon: Icon,
                label,
                value,
                href,
              }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 group"
                  style={{
                    textDecoration: 'none',
                  }}
                  whileHover={{
                    x: 6,
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      background:
                        'rgba(245,158,11,0.15)',
                      border:
                        '1px solid rgba(245,158,11,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent:
                        'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon
                      size={24}
                      color="#F59E0B"
                    />
                  </div>

                  <div>
                    <p
                      style={{
                        fontFamily:
                          'Manrope',
                        fontSize: '11px',
                        color:
                          '#9CA3AF',
                        textTransform:
                          'uppercase',
                        letterSpacing:
                          '0.1em',
                      }}
                    >
                      {label}
                    </p>

                    <p
                      style={{
                        fontFamily:
                          'Manrope',
                        fontSize: '14px',
                        color: 'white',
                        fontWeight: 500,
                        marginTop: '4px',
                      }}
                      className="group-hover:text-accent-gold transition-colors"
                    >
                      {value}
                    </p>
                  </div>
                </motion.a>
              )
            )}

            {/* Footer */}
            <div
              style={{
                marginTop: '32px',
                paddingTop: '32px',
                borderTop:
                  '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <p
                style={{
                  fontFamily: 'Lato',
                  fontSize: '13px',
                  color: '#6B7280',
                  textAlign: 'center',
                }}
              >
                © 2026 Sanjay. Crafted with
                ❤️ and React.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}