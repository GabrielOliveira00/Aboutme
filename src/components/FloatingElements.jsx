import React from 'react'
import { Code, Heart, Zap, Star, Coffee, Lightbulb } from 'lucide-react'

const FloatingElements = () => {
  const elements = [
    { Icon: Code, color: 'text-emerald-400', size: 24, delay: '0s', duration: '6s' },
    { Icon: Heart, color: 'text-red-400', size: 20, delay: '1s', duration: '8s' },
    { Icon: Zap, color: 'text-yellow-400', size: 18, delay: '2s', duration: '7s' },
    { Icon: Star, color: 'text-purple-400', size: 16, delay: '3s', duration: '9s' },
    { Icon: Coffee, color: 'text-orange-400', size: 22, delay: '4s', duration: '5s' },
    { Icon: Lightbulb, color: 'text-blue-400', size: 20, delay: '5s', duration: '6s' }
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: element.delay,
            animationDuration: element.duration
          }}
        >
          <element.Icon 
            className={element.color} 
            size={element.size}
          />
        </div>
      ))}
      
      {/* CSS for float animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(5deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
          75% { transform: translateY(-15px) rotate(3deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default FloatingElements

