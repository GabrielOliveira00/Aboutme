import React from 'react'
import { Heart, Code, Coffee } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold text-white">
              <span className="text-emerald-400">MDY</span>
              <span className="text-orange-400">.dev</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Desenvolvedor Front-End apaixonado por criar experiências digitais 
              excepcionais que fazem a diferença na vida das pessoas.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Links Rápidos</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Sobre', href: '#about' },
                { label: 'Habilidades', href: '#skills' },
                { label: 'Projetos', href: '#projects' },
                { label: 'Paixões', href: '#passions' },
                { label: 'Contato', href: '#contact' }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contato</h3>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="text-emerald-400">Email:</span> mgabriel.moliveira@gmail.com
              </p>
              <p className="text-gray-400">
                <span className="text-emerald-400">Telefone:</span> +55 (15) 98816-6000
              </p>
              <p className="text-gray-400">
                <span className="text-emerald-400">Localização:</span> Sorocaba-SP, Brasil
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Gabriel de Azevedo Oliveira.</span>
              <span>Feito com</span>
              <Heart className="text-red-400" size={16} />
              <span>e</span>
              <Code className="text-emerald-400" size={16} />
              <span>e muito</span>
              <Coffee className="text-orange-400" size={16} />
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Desenvolvido com:</span>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 bg-slate-800 rounded text-blue-400">React</span>
                <span className="px-2 py-1 bg-slate-800 rounded text-purple-400">Tailwind</span>
                <span className="px-2 py-1 bg-slate-800 rounded text-orange-400">Vite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

