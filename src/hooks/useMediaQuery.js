import { useState, useEffect } from 'react'

/**
 * Small helper so inline-styled components can react to screen size.
 * Safe on first render (reads matchMedia synchronously when available).
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mql = window.matchMedia(query)
    const onChange = (e) => setMatches(e.matches)
    setMatches(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])

  return matches
}

// Phones
export const useIsMobile = () => useMediaQuery('(max-width: 767px)')
// Phones + small tablets
export const useIsTablet = () => useMediaQuery('(max-width: 1023px)')
// Touch screens (no real hover / no mouse pointer)
export const useIsTouch = () =>
  useMediaQuery('(hover: none), (pointer: coarse)')
