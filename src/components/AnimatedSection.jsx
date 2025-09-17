import React, { useEffect, useRef, useState } from 'react'

const AnimatedSection = ({ children, className = '', delay = 0, animation = 'fade-up' }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-1000 ease-out'
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return `${baseClass} opacity-0 translate-y-8`
        case 'fade-left':
          return `${baseClass} opacity-0 translate-x-8`
        case 'fade-right':
          return `${baseClass} opacity-0 -translate-x-8`
        case 'scale':
          return `${baseClass} opacity-0 scale-95`
        case 'rotate':
          return `${baseClass} opacity-0 rotate-3`
        default:
          return `${baseClass} opacity-0`
      }
    }
    
    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0`
  }

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}

export default AnimatedSection

