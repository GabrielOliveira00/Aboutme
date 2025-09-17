import React from 'react'
import { GraduationCap, User, MapPin, Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import gabrielAvatar from '../assets/images/gabriel-avatar.png'

const About = () => {
  const education = [
    {
      degree: 'Tecnólogo em Desenvolvimento Web',
      institution: 'Faculdade UnoPar',
      year: '2023'
    },
    {
      degree: 'Pós-graduação em Engenharia de Software',
      institution: 'Faculdade UnoPar',
      year: '2024'
    },
    {
      degree: 'Pós-graduação em Experiência do Usuário',
      institution: 'Faculdade UnoPar',
      year: '2024'
    }
  ]

  const personalInfo = [
    { icon: User, label: 'Nome', value: 'Gabriel de Azevedo Oliveira' },
    { icon: Calendar, label: 'Idade', value: '33 anos' },
    { icon: MapPin, label: 'Localização', value: 'Brasil' },
    { icon: GraduationCap, label: 'Formação', value: 'Tecnólogo + 2 Pós-graduações' }
  ]

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre <span className="text-emerald-400">Mim</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Conheça um pouco mais sobre minha jornada e experiência
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-8">
                <img 
                  src={gabrielAvatar} 
                  alt="Gabriel de Azevedo Oliveira"
                  className="w-64 h-64 rounded-full mx-auto lg:mx-0 object-cover border-4 border-emerald-400 shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👨‍💻</span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <info.icon className="text-emerald-400" size={20} />
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Quem sou eu?</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Sou um desenvolvedor front-end apaixonado por criar experiências digitais 
                  excepcionais. Com formação sólida em desenvolvimento web e especializações 
                  em engenharia de software e UX, combino conhecimento técnico com visão de design.
                </p>
                <p>
                  Gosto de trabalhar em equipe e prospero sob pressão, sempre buscando 
                  soluções inovadoras para desafios complexos. Minha abordagem é centrada 
                  no usuário, garantindo que cada projeto não apenas funcione perfeitamente, 
                  mas também proporcione uma experiência memorável.
                </p>
                <p>
                  Quando não estou codando, você me encontrará praticando arquearia, 
                  pescando ou curtindo momentos com meus cachorros. Essas paixões me 
                  ensinam paciência, precisão e foco - qualidades que trago para meu trabalho.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Formação Acadêmica</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-emerald-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="text-emerald-400" size={24} />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">{edu.degree}</h4>
                          <p className="text-gray-400 mb-2">{edu.institution}</p>
                          <span className="text-sm text-emerald-400 font-medium">{edu.year}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

