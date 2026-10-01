import { useEffect, useRef, useState } from "react"

interface IntersectionObserverOptions {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
}

export const useIsVisible = (
  options?: IntersectionObserverOptions,
  once = false
) => {
  const optionsRef = useRef(options)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const targetRef = useRef<Element | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.unobserve(entry.target)
            observer.disconnect()
          }
        } else {
          setIsVisible(false)
        }
      })
    }, optionsRef.current)

    const target = targetRef.current

    if (target) {
      observer.observe(target)
    }

    return () => {
      if (target) {
        observer.unobserve(target)
      }
      observer.disconnect()
    }
  }, [once])

  return { isVisible, targetRef }
}
