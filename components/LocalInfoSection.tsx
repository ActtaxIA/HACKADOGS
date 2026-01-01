'use client'

import { motion } from 'framer-motion'
import { AlertCircle, Thermometer, Building2, FileText } from 'lucide-react'

interface LocalChallenge {
  icon: 'heat' | 'urban' | 'regulation'
  title: string
  description: string
  solution: string
}

interface LocalInfoProps {
  cityName: string
  challenges: LocalChallenge[]
  localTip?: string
}

const iconMap = {
  heat: Thermometer,
  urban: Building2,
  regulation: FileText
}

const colorMap = {
  heat: 'orange',
  urban: 'blue',
  regulation: 'purple'
}

export default function LocalInfoSection({ cityName, challenges, localTip }: LocalInfoProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-forest-dark mb-4">
            Vivir con un Perro en {cityName}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Desafíos específicos de la zona y cómo los abordamos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {challenges.map((challenge, index) => {
            const Icon = iconMap[challenge.icon]
            const color = colorMap[challenge.icon]
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-cream rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 bg-${color}-100 rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className={`text-${color}-600`} size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-forest-dark mb-3">
                  {challenge.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {challenge.description}
                </p>
                
                <div className="bg-white rounded-lg p-4 border-l-4 border-forest">
                  <p className="text-sm font-semibold text-forest-dark mb-1">Nuestra Solución:</p>
                  <p className="text-sm text-gray-600">{challenge.solution}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {localTip && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-gold/20 to-sage/20 rounded-2xl p-8 border-2 border-gold/30"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <AlertCircle className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-forest-dark mb-2">
                  Consejo Local para {cityName}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {localTip}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
