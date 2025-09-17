import React, { useEffect, useState } from 'react'

const ParallaxBackground = ({ children, speed = 0.5, className = '' }) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`relative ${className}`}>
      <div 
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translateY(${scrollY * speed}px)`
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default ParallaxBackground

