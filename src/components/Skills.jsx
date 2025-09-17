import React, { useState } from 'react'
import { Code, Database, Palette, Wrench } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skillCategories = [
    {
      title: 'Linguagens',
      icon: Code,
      color: 'emerald',
      skills: [
        { name: 'HTML5', level: 95, description: 'Estruturação semântica e acessível' },
        { name: 'CSS3', level: 90, description: 'Layouts responsivos e animações' },
        { name: 'JavaScript', level: 85, description: 'ES6+, DOM manipulation, APIs' }
      ]
    },
    {
      title: 'Frameworks & Bibliotecas',
      icon: Database,
      color: 'blue',
      skills: [
        { name: 'React', level: 80, description: 'Hooks, Context API, componentes' },
        { name: 'Git/GitHub', level: 85, description: 'Controle de versão e colaboração' }
      ]
    },
    {
      title: 'Ferramentas & APIs',
      icon: Wrench,
      color: 'orange',
      skills: [
        { name: 'RESTful APIs', level: 75, description: 'Integração e consumo de APIs' },
        { name: 'Firebase', level: 70, description: 'Backend as a Service' },
        { name: 'VS Code', level: 90, description: 'Ambiente de desenvolvimento' }
      ]
    },
    {
      title: 'Design & UX',
      icon: Palette,
      color: 'purple',
      skills: [
        { name: 'Responsive Design', level: 90, description: 'Mobile-first, layouts adaptativos' },
        { name: 'UX/UI Design', level: 75, description: 'Experiência do usuário centrada' }
      ]
    }
  ]

  const getColorClasses = (color, type = 'bg') => {
    const colors = {
      emerald: {
        bg: 'bg-emerald-500',
        text: 'text-emerald-400',
        border: 'border-emerald-400',
        hover: 'hover:bg-emerald-500/20'
      },
      blue: {
        bg: 'bg-blue-500',
        text: 'text-blue-400',
        border: 'border-blue-400',
        hover: 'hover:bg-blue-500/20'
      },
      orange: {
        bg: 'bg-orange-500',
        text: 'text-orange-400',
        border: 'border-orange-400',
        hover: 'hover:bg-orange-500/20'
      },
      purple: {
        bg: 'bg-purple-500',
        text: 'text-purple-400',
        border: 'border-purple-400',
        hover: 'hover:bg-purple-500/20'
      }
    }
    return colors[color][type] || ''
  }

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Minhas <span className="text-emerald-400">Habilidades</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções incríveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${getColorClasses(category.color, 'bg')}/20 flex items-center justify-center`}>
                  <category.icon className={getColorClasses(category.color, 'text')} size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <Card 
                    key={skillIndex}
                    className={`bg-slate-800/50 border-slate-700 ${getColorClasses(category.color, 'hover')} transition-all duration-300 cursor-pointer transform hover:scale-105`}
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-white">{skill.name}</h4>
                        <span className={`text-sm font-medium ${getColorClasses(category.color, 'text')}`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-slate-700 rounded-full h-2 mb-3">
                        <div 
                          className={`h-2 rounded-full ${getColorClasses(category.color, 'bg')} transition-all duration-1000 ease-out`}
                          style={{ 
                            width: hoveredSkill === `${categoryIndex}-${skillIndex}` ? `${skill.level}%` : '0%' 
                          }}
                        />
                      </div>
                      
                      <p className="text-sm text-gray-400">{skill.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Outras Competências</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Trabalho em Equipe', 'Gestão de Pressão', 'Resolução de Problemas',
              'Comunicação', 'Aprendizado Contínuo', 'Metodologias Ágeis'
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-full border border-slate-600 hover:border-emerald-400 hover:text-emerald-400 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

