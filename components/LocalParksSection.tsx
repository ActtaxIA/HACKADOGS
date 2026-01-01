'use client'

import { MapPin, Clock, CheckCircle, Trees, Waves } from 'lucide-react'
import { motion } from 'framer-motion'

interface Park {
  name: string
  location: string
  size?: string
  features: string[]
  schedule?: string
  highlight?: string
}

interface LocalParksProps {
  cityName: string
  parks: Park[]
  description?: string
}

export default function LocalParksSection({ cityName, parks, description }: LocalParksProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-sage/10 to-forest/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-forest-dark mb-4">
            Parques y Zonas Caninas en {cityName}
          </h2>
          {description && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {parks.map((park, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Trees className="text-forest" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-forest-dark">{park.name}</h3>
                  <p className="text-sm text-gray-500 flex items-center mt-1">
                    <MapPin size={14} className="mr-1" />
                    {park.location}
                  </p>
                </div>
              </div>

              {park.size && (
                <div className="mb-3 text-sm text-gray-600">
                  <strong>Superficie:</strong> {park.size}
                </div>
              )}

              {park.schedule && (
                <div className="mb-3 text-sm text-gray-600 flex items-center">
                  <Clock size={16} className="mr-2 text-forest" />
                  <span>{park.schedule}</span>
                </div>
              )}

              {park.highlight && (
                <div className="mb-4 p-3 bg-gold/10 rounded-lg">
                  <p className="text-sm text-forest-dark font-semibold flex items-start">
                    <Waves size={16} className="mr-2 mt-0.5 flex-shrink-0 text-gold" />
                    {park.highlight}
                  </p>
                </div>
              )}

              <div className="space-y-2">
                {park.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-white rounded-2xl p-8 text-center"
        >
          <p className="text-gray-700 mb-4">
            <strong>¿Sabías que?</strong> Los parques caninos son fundamentales para la socialización 
            y el ejercicio de tu perro. Recuerda siempre supervisar a tu mascota y seguir las normas del parque.
          </p>
          <p className="text-sm text-gray-500">
            💡 Consejo: Evita las horas de máximo calor en verano. Los mejores horarios son temprano 
            por la mañana o al atardecer.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
