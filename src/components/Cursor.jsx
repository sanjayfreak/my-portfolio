import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useIsTouch } from '../hooks/useMediaQuery'

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const isTouch = useIsTouch()

  useEffect(() => {
    // No custom cursor on phones/tablets — there is no pointer to follow
    if (isTouch) return

    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)

    const onEnter = () => setHovered(true)
    const onLeave = () => setHovered(false)

    const addHover = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    addHover()

    const observer = new MutationObserver(addHover)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', move)
      observer.disconnect()
    }
  }, [isTouch])

  if (isTouch) return null

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border-2 border-accent-gold"
        animate={{
          x: pos.x - (hovered ? 20 : 12),
          y: pos.y - (hovered ? 20 : 12),
          width: hovered ? 40 : 24,
          height: hovered ? 40 : 24,
          opacity: 0.8,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-accent-gold"
        animate={{ x: pos.x - 3, y: pos.y - 3 }}
        transition={{ type: 'spring', stiffness: 800, damping: 35 }}
        style={{ width: 6, height: 6 }}
      />
    </>
  )
}
