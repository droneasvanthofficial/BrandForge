import { useEffect, useRef, useState } from 'react'

export function useScrollReveal() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    const node = ref.current
    if (node) observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}
