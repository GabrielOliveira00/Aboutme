import React, { useState, useEffect } from 'react'
import { ChevronDown, Code, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import heroBackground from '../assets/images/hero-background.png'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = [
    'Desenvolvedor Front-End',
    'Apaixonado por Código',
    'Criador de Experiências',
  ]

  useEffect(() => {
    const currentText = texts[currentIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, texts])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-400/20 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-16 h-16 bg-orange-400/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-blue-400/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-400/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <span className="text-emerald-400 text-xl font-medium">Olá, eu sou</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            Gabriel de Azevedo
            <span className="block text-emerald-400">Oliveira</span>
          </h1>

          <div className="mb-8 h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Tecnólogo em Desenvolvimento Web com pós-graduações em Engenharia de Software e UX. 
            Transformo ideias em experiências digitais incríveis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={scrollToAbout}
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              <Code className="mr-2" size={20} />
              Conhecer Meu Trabalho
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              <Heart className="mr-2" size={20} />
              Vamos Conversar
            </Button>
          </div>

          <div className="animate-bounce">
            <ChevronDown 
              size={32} 
              className="text-gray-400 mx-auto cursor-pointer hover:text-emerald-400 transition-colors"
              onClick={scrollToAbout}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

