import { useState, useEffect } from 'react'

export function useTypewriter(text, speed = 60, startDelay = 0) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const delay = setTimeout(() => setStarted(true), startDelay)
    return () => clearTimeout(delay)
  }, [startDelay])

  useEffect(() => {
    if (!started) return
    if (displayed.length >= text.length) return
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1))
    }, speed)
    return () => clearTimeout(timer)
  }, [displayed, text, speed, started])

  return displayed
}