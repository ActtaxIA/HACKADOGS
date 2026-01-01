'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { GraduationCap, Heart, Baby, Users, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: GraduationCap,
    title: 'Educación Básica',
    slug: 'educacion-basica',
    description: 'Programa completo de obediencia y comandos esenciales para una convivencia perfecta.',
    duration: '8-10 sesiones',
    includes: [
      'Comandos básicos (sentado, quieto, aquí, junto)',
      'Paseo sin tirones',
      'Llamada efectiva',
      'Control de impulsos',
      'Socialización controlada'
    ],
    ideal: 'Perros de todas las edades sin problemas graves de conducta',
    color: 'forest'
  },
  {
    icon: Heart,
    title: 'Modificación de Conducta',
    slug: 'modificacion-conducta',
    description: 'Solución profesional para problemas de comportamiento específicos.',
    duration: '12-15 sesiones',
    includes: [
      'Agresividad hacia personas u otros perros',
      'Ansiedad por separación',
      'Ladridos excesivos',
      'Miedos y fobias',
      'Destructividad en casa'
    ],
    ideal: 'Perros con problemas de conducta establecidos',
    color: 'terracotta'
  },
  {
    icon: Baby,
    title: 'Educación de Cachorros',
    slug: 'cachorros',
    description: 'Programa especializado para cachorros de 2 a 6 meses. Bases sólidas desde el inicio.',
    duration: '6-8 sesiones',
    includes: [
      'Socialización temprana',
      'Control de mordida',
      'Educación en casa (pipí, etc)',
      'Primeros comandos básicos',
      'Prevención de problemas futuros'
    ],
    ideal: 'Cachorros de 2 a 6 meses de edad',
    color: 'gold'
  },
  {
    icon: Users,
    title: 'Clases Grupales',
    slug: 'clases-grupales',
    description: 'Socialización controlada y aprendizaje en grupo con otros perros.',
    duration: 'Sesiones semanales',
    includes: [
      'Socialización con otros perros',
      'Trabajo en entorno distraído',
      'Obediencia básica en grupo',
      'Juegos educativos',
      'Comunidad de propietarios'
    ],
    ideal: 'Perros con educación básica previa',
    color: 'sage'
  }
]

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-cream rounded-2xl p-8 hover:shadow-xl transition-all"
            >
              <div className={`w-16 h-16 bg-${service.color}/10 rounded-xl flex items-center justify-center mb-6`}>
                <service.icon className={`text-${service.color}`} size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-forest-dark mb-2">
                {service.title}
              </h3>
              
              <p className="text-sage font-semibold mb-4">
                {service.duration}
              </p>
              
              <p className="text-gray-700 mb-6">
                {service.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-bold text-forest-dark mb-3">Incluye:</h4>
                <ul className="space-y-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start space-x-2 text-sm">
                      <CheckCircle className="text-forest flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                  <strong className="text-forest-dark">Ideal para:</strong> {service.ideal}
                </p>
              </div>
              
              <Link 
                href={`/servicios/${service.slug}`}
                className="btn-primary w-full text-center"
              >
                Más Información
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
