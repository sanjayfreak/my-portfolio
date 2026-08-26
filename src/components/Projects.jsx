import { motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react'

import sm from '../assest/sm.png'
import em from '../assest/em.png'
import { useIsMobile, useIsTablet } from '../hooks/useMediaQuery'

const projects = [
  {
    num: '01',
    title: 'AI-Based Smart Task Manager',
    description:
      'A full-stack task management platform with AI-powered insights, secure authentication, real-time task tracking, and performance analytics.',
    tags: ['React', 'Spring Boot', 'MongoDB', 'JWT'],
    image: sm,
    bgColor: 'linear-gradient(135deg, #FEF3C7, #FDE68A)',
    align: 'left',
    liveUrl: 'https://smart-task-manager-21xn.onrender.com/',
  },
  {
    num: '02',
    title: 'AI-Based Employee Performance Monitoring System',
    description:
      'An intelligent employee analytics platform that uses AI-driven insights to evaluate performance, track productivity, and provide personalized improvement recommendations.',
    tags: ['React', 'Spring Boot', 'MongoDB', 'AI'],
    image: em,
    bgColor: 'linear-gradient(135deg, #DCFCE7, #BBF7D0)',
    align: 'right',
    // TODO: paste this project's Render URL here to show its Live Demo button
    liveUrl: '',
  },
]

function ProjectCard({ project }) {
  const ref = useRef()
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const stacked = isTablet // stack image over text on phones and small tablets

  const inView = useInView(ref, { once: true, amount: 0.2 })

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-50, 50], [3, -3])
  const rotateY = useTransform(x, [-50, 50], [-3, 3])

  return (
    <motion.div
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: stacked
          ? 'column'
          : project.align === 'right'
          ? 'row-reverse'
          : 'row',
        gap: stacked ? '24px' : '60px',
        alignItems: stacked ? 'stretch' : 'center',
      }}
      initial={
        stacked
          ? { opacity: 0, x: 0, y: 40 }
          : { opacity: 0, x: project.align === 'left' ? -60 : 60, y: 0 }
      }
      animate={
        inView
          ? { opacity: 1, x: 0, y: 0 }
          : stacked
          ? { opacity: 0, x: 0, y: 40 }
          : { opacity: 0, x: project.align === 'left' ? -60 : 60, y: 0 }
      }
      transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      {/* ================= IMAGE ================= */}
      <motion.div
        style={{
          width: stacked ? '100%' : '58%',
          perspective: '1000px',
        }}
        onMouseMove={
          stacked
            ? undefined
            : (e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                x.set(e.clientX - rect.left - rect.width / 2)
                y.set(e.clientY - rect.top - rect.height / 2)
              }
        }
        onMouseLeave={
          stacked
            ? undefined
            : () => {
                x.set(0)
                y.set(0)
              }
        }
      >
        <motion.div
          style={{
            borderRadius: stacked ? '16px' : '20px',
            overflow: 'hidden',
            background: project.bgColor,
            aspectRatio: '16/9',
            position: 'relative',
            rotateX: stacked ? 0 : rotateX,
            rotateY: stacked ? 0 : rotateY,
            transformStyle: 'preserve-3d',
            boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
          }}
          whileHover={
            stacked
              ? undefined
              : {
                  scale: 1.02,
                  boxShadow: '0 20px 60px rgba(245,158,11,0.2)',
                }
          }
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </motion.div>
      </motion.div>

      {/* ================= PROJECT INFO ================= */}
      <div style={{ width: stacked ? '100%' : '42%', minWidth: 0 }}>
        {/* Project Number */}
        <span
          style={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 900,
            fontSize: isMobile ? '52px' : '80px',
            color: '#1A1A2E',
            opacity: 0.06,
            display: 'block',
            lineHeight: 1,
          }}
        >
          {project.num}
        </span>

        {/* Title */}
        <h3
          style={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            fontSize: isMobile ? '22px' : '28px',
            color: '#1A1A2E',
            marginBottom: isMobile ? '12px' : '16px',
            lineHeight: 1.25,
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: 'Lato, sans-serif',
            color: '#6B7280',
            lineHeight: 1.7,
            marginBottom: isMobile ? '18px' : '24px',
            fontSize: isMobile ? '14px' : '15px',
          }}
        >
          {project.description}
        </p>

        {/* Technologies */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: isMobile ? '22px' : '32px',
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: '6px 14px',
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(245,158,11,0.2)',
                borderRadius: '50px',
                fontFamily: 'Manrope, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                color: '#1A1A2E',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open the live demo of ${project.title} in a new tab`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 22px',
                minHeight: '44px',
                backgroundColor: 'transparent',
                color: '#D97706',
                fontFamily: 'Manrope, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                borderRadius: '50px',
                border: '2px solid #D97706',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(217,119,6,0.06)',
              }}
              whileTap={{ scale: 0.97 }}
            >
              Live Demo →
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef()
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()

  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      id="projects"
      style={{
        position: 'relative',
        padding: isMobile ? '72px 20px' : isTablet ? '96px 40px' : '112px 80px',
        backgroundColor: '#FAFAF8',
        overflow: 'hidden',
      }}
    >
      {/* Background Number */}
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
        03
      </span>

      {/* Main Container */}
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section Heading */}
        <motion.div
          ref={ref}
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? '48px' : '80px',
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
            My Work
          </p>

          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 900,
              fontSize: 'clamp(28px, 6vw, 48px)',
              color: '#1A1A2E',
            }}
          >
            Featured Work
          </h2>
        </motion.div>

        {/* Projects */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '64px' : '100px',
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.num} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
