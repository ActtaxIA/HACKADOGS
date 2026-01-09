'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, ShoppingCart, Clock, CheckCircle, Lock, Award, TrendingUp, Play, Download } from 'lucide-react'
import { motion } from 'framer-motion'

interface Curso {
  id: string
  title: string
  description: string
  price: number
  duration: string
  difficulty: string
  icon: string
  color: string
  progress: number
  isPurchased: boolean
  isFree: boolean
  completedLessons: number
  totalLessons: number
}

export default function MiEscuelaPage() {
  // Mock data - esto vendrá de Supabase después
  const [cursos] = useState<Curso[]>([
    {
      id: 'curso-gratuito',
      title: 'Introducción a la Educación Canina',
      description: 'Curso gratuito completo con los fundamentos de la educación canina positiva.',
      price: 0,
      duration: '45 min',
      difficulty: 'Básico',
      icon: '🎓',
      color: 'from-gold to-yellow-400',
      progress: 0,
      isPurchased: true,
      isFree: true,
      completedLessons: 0,
      totalLessons: 5
    },
    {
      id: 'sentarse',
      title: 'Cómo Enseñar a tu Perro a Sentarse',
      description: 'Aprende el comando más básico y fundamental de la educación canina.',
      price: 9.99,
      duration: '30 min',
      difficulty: 'Básico',
      icon: '🎯',
      color: 'from-blue-500 to-blue-600',
      progress: 100,
      isPurchased: true,
      isFree: false,
      completedLessons: 4,
      totalLessons: 4
    },
    {
      id: 'venir',
      title: 'Cómo Enseñar a tu Perro a Venir',
      description: 'La llamada más importante para la seguridad de tu perro.',
      price: 14.99,
      duration: '45 min',
      difficulty: 'Básico',
      icon: '📢',
      color: 'from-green-500 to-green-600',
      progress: 60,
      isPurchased: true,
      isFree: false,
      completedLessons: 3,
      totalLessons: 5
    }
  ])

  const cursosDisponibles = [
    {
      id: 'no-tirar',
      title: 'Caminar sin Tirar de la Correa',
      price: 19.99,
      duration: '1 hora',
      difficulty: 'Intermedio',
      icon: '🚶',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'morder',
      title: 'Solucionar que tu Perro Muerda',
      price: 24.99,
      duration: '1.5 horas',
      difficulty: 'Intermedio',
      icon: '🦷',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'no-saltar',
      title: 'No Saltar sobre las Personas',
      price: 12.99,
      duration: '40 min',
      difficulty: 'Básico',
      icon: '🦘',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'socializar',
      title: 'Socializar con Otros Perros',
      price: 29.99,
      duration: '2 horas',
      difficulty: 'Avanzado',
      icon: '🐕',
      color: 'from-cyan-500 to-cyan-600'
    }
  ]

  const stats = {
    cursosCompletados: cursos.filter(c => c.progress === 100).length,
    cursosEnProgreso: cursos.filter(c => c.progress > 0 && c.progress < 100).length,
    horasTotales: cursos.reduce((acc, c) => acc + parseInt(c.duration), 0),
    progresosGeneral: Math.round(cursos.reduce((acc, c) => acc + c.progress, 0) / cursos.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-forest to-sage text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">Mi Escuela</h1>
                <p className="text-white/90">Bienvenido a tu panel de cursos</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <CheckCircle className="w-6 h-6" />
                  <span className="text-2xl font-bold">{stats.cursosCompletados}</span>
                </div>
                <p className="text-sm text-white/80">Cursos Completados</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="w-6 h-6" />
                  <span className="text-2xl font-bold">{stats.cursosEnProgreso}</span>
                </div>
                <p className="text-sm text-white/80">En Progreso</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <Clock className="w-6 h-6" />
                  <span className="text-2xl font-bold">{stats.horasTotales}</span>
                </div>
                <p className="text-sm text-white/80">Horas Totales</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <Award className="w-6 h-6" />
                  <span className="text-2xl font-bold">{stats.progresosGeneral}%</span>
                </div>
                <p className="text-sm text-white/80">Progreso General</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mis Cursos */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Mis Cursos</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cursos.map((curso, index) => (
                <motion.div
                  key={curso.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${curso.color} p-6 text-white relative`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl">{curso.icon}</span>
                      {curso.isFree && (
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                          GRATUITO
                        </span>
                      )}
                      {curso.progress === 100 && (
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          COMPLETADO
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{curso.title}</h3>
                    <p className="text-white/90 text-sm mb-4">{curso.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="mb-2">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span>Progreso</span>
                        <span>{curso.progress}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div 
                          className="bg-white rounded-full h-2 transition-all duration-500"
                          style={{ width: `${curso.progress}%` }}
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-white/80">
                      <span>{curso.completedLessons}/{curso.totalLessons} lecciones</span>
                      <span>{curso.duration}</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-6">
                    <Link
                      href={`/cursos/mi-escuela/${curso.id}`}
                      className={`w-full bg-gradient-to-r ${curso.color} text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-all flex items-center justify-center whitespace-nowrap`}
                    >
                      <Play className="w-5 h-5 mr-2" />
                      {curso.progress === 0 ? 'Comenzar Curso' : curso.progress === 100 ? 'Revisar Curso' : 'Continuar Curso'}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cursos Disponibles */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Cursos Disponibles para Comprar</h2>
              <Link
                href="/cursos"
                className="text-forest font-semibold hover:text-forest-dark transition flex items-center"
              >
                Ver todos los cursos
                <ShoppingCart className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cursosDisponibles.map((curso, index) => (
                <motion.div
                  key={curso.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className={`bg-gradient-to-r ${curso.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl">{curso.icon}</span>
                      <Lock className="w-5 h-5 text-white/60" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{curso.title}</h3>
                    <div className="flex items-center text-xs text-white/80 space-x-4 mb-4">
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {curso.duration}
                      </span>
                      <span>{curso.difficulty}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">{curso.price}€</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <Link
                      href={`/cursos/comprar/${curso.id}`}
                      className={`w-full bg-gradient-to-r ${curso.color} text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-all flex items-center justify-center text-sm`}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Comprar Curso
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-forest to-sage rounded-2xl p-8 md:p-12 text-white text-center">
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              ¿Necesitas ayuda personalizada?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Si necesitas asesoramiento directo, consulta nuestros servicios de educación canina presencial.
            </p>
            <Link
              href="/servicios"
              className="inline-block bg-white text-forest font-bold py-3 px-8 rounded-lg hover:bg-white/90 transition-all"
            >
              Ver Servicios Presenciales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
