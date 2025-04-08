"use client"
import CircleImage from '@/components/circle-image'
import SliderService from '@/components/slider-service'
import TransitionPage from '@/components/transition.page'
import Link from 'next/link'
import React from 'react'

export default function ServicesPage() {
  const [activeTab, setActiveTab] = React.useState('description');

  return (
    <>
      <TransitionPage />
      <CircleImage />
      <div className="max-w-5xl mx-auto  md:mt-24 mt-40  text-white px-4 sm:px-6 py-6 md:py-8">
        {/* Encabezado más compacto */}
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Meus <span className="text-accent">Serviços</span>
          </h1>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-2 mb-4"></div>
        </div>

        {/* Pestañas más pequeñas */}
        <div className="flex justify-center mb-6">
          <div className="flex bg-white/10 rounded-lg p-0.5 text-sm">
            <button
              onClick={() => setActiveTab('description')}
              className={`px-4 py-1.5 rounded-md transition-all ${activeTab === 'description' ? 'bg-accent text-white' : 'text-gray-300 hover:bg-white/5'}`}
            >
              📋 Descrição
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-4 py-1.5 rounded-md transition-all ${activeTab === 'services' ? 'bg-accent text-white' : 'text-gray-300 hover:bg-white/5'}`}
            >
              🛠️ Serviços
            </button>
          </div>
        </div>

        {/* Contenido compacto */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 md:p-6 max-w-2xl mx-auto">
  {activeTab === 'description' ? (
    <div className="animate-fadeIn">
      <h2 className="text-xl md:text-2xl text-center font-semibold text-white mb-3 md:mb-4">
        Desenvolvimento Web <span className="text-accent">🚀</span>
      </h2>
      
      <p className="text-gray-300 text-center text-sm md:text-base mb-3 md:mb-4">
        Soluções <span className="text-accent font-medium">performáticas</span> com as melhores tecnologias:
      </p>
      
      <ul className="mb-4 md:mb-5 space-y-2 text-sm md:text-base">
        {[
          { icon: '⚡', name: 'Next.js', desc: 'Aplicações rápidas e otimizadas para SEO' },
          { icon: '🎨', name: 'Tailwind CSS', desc: 'Designs responsivos e personalizados' },
          { icon: '🧠', name: 'TypeScript', desc: 'Código seguro e escalável' },
          { icon: '🔧', name: 'Node.js', desc: 'Backend robusto e de alta performance' }
        ].map((item, index) => (
          <li key={index} className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="flex items-center">
              <span className="text-accent mr-2 text-lg">{item.icon}</span>
              <div className="text-center sm:text-left">
                <strong>{item.name}</strong>
                <span className="hidden sm:inline"> - {item.desc}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="text-center mt-4 md:mt-5">
        <Link
          href="https://wa.me/+5585989329627?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.%20Podemos%20falar?"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 md:px-5 md:py-2.5 text-sm md:text-base rounded-md bg-accent hover:bg-accent/80 transition-all hover:scale-105"
        >
          ✨ Fale comigo agora
        </Link>
      </div>
    </div>
  ) : (
    <div className="animate-fadeIn">
      <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-5 text-center">
        Meus Serviços
      </h2>
      <SliderService />
    </div>
  )}
</div>
      </div>
    </>
  )
}