'use client'

import { motion } from 'framer-motion'
import { Phone, Calendar, Home, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    title: 'Contacto Inicial',
    description: 'Llamada o formulario. Hablamos sobre tu perro y sus necesidades específicas.'
  },
  {
    icon: Calendar,
    title: 'Primera Sesión',
    description: 'Evaluación completa del comportamiento y definición de objetivos personalizados.'
  },
  {
    icon: Home,
    title: 'Programa Personalizado',
    description: 'Sesiones adaptadas a tu ritmo. Trabajo tanto en casa como en exteriores.'
  },
  {
    icon: TrendingUp,
    title: 'Seguimiento y Resultados',
    description: 'Apoyo continuo, seguimiento del progreso y ajustes según sea necesario.'
  }
]

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-forest-dark to-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Cómo Trabajamos?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Proceso simple y efectivo, adaptado a cada perro y familia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto">
                  <step.icon size={32} className="text-forest-dark" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gold/30"></div>
                )}
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <div className="text-gold font-bold text-sm mb-2">Paso {index + 1}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
