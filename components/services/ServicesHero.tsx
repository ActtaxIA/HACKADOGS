'use client'

import { motion } from 'framer-motion'

export default function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-cream via-white to-sage/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block px-4 py-2 bg-forest/10 rounded-full mb-6">
            <span className="text-forest font-semibold text-sm">Servicios Profesionales</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-forest-dark mb-6">
            Nuestros Servicios
          </h1>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Programas personalizados de educación canina adaptados a las necesidades 
            específicas de tu perro y tu familia. Métodos positivos, efectivos y respetuosos.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
