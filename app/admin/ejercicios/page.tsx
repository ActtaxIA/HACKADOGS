'use client'

import { useEffect, useState } from 'react'
import { getLocalSession } from '@/lib/auth/mockAuth'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react'

// Mock data para ejercicios
const mockExercises = [
  {
    id: '1',
    title: 'Sentado (Sit)',
    description: 'Enseña a tu perro el comando básico sentado',
    category: 'Obediencia Básica',
    difficulty: 'beginner',
    duration: 5,
    published: true,
    featured: true,
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Quieto (Stay)',
    description: 'Comando para que el perro permanezca quieto',
    category: 'Obediencia Básica',
    difficulty: 'beginner',
    duration: 10,
    published: true,
    featured: false,
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    title: 'Aquí (Come)',
    description: 'Llamada efectiva para que venga',
    category: 'Obediencia Básica',
    difficulty: 'beginner',
    duration: 15,
    published: true,
    featured: true,
    created_at: new Date().toISOString()
  }
]

export default function AdminEjerciciosPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [exercises] = useState(mockExercises)

  useEffect(() => {
    const checkAuth = () => {
      const { data } = getLocalSession()

      if (!data?.session) {
        router.push('/auth/login')
        return
      }

      const userRole = data.session.user.user_metadata?.role
      if (userRole !== 'admin') {
        router.push('/apps')
        return
      }

      setUser(data.session.user)
      setLoading(false)
    }

    checkAuth()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-forest rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando ejercicios...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="bg-gradient-to-r from-forest-dark to-forest text-white -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-28">
          <Link href="/admin/dashboard" className="inline-flex items-center text-white/80 hover:text-white mb-4">
            <ArrowLeft size={20} className="mr-2" />
            Volver al Panel
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Gestión de Ejercicios</h1>
              <p className="text-white/90 mt-2">HakaTrainer - Biblioteca de ejercicios</p>
            </div>
            <Link href="/admin/ejercicios/nuevo" className="bg-white text-forest-dark hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition inline-flex items-center">
              <Plus size={20} className="mr-2" />
              Nuevo Ejercicio
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Estadísticas */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6">
            <p className="text-3xl font-bold text-forest-dark">{exercises.length}</p>
            <p className="text-sm text-gray-600">Total</p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <p className="text-3xl font-bold text-green-600">
              {exercises.filter(e => e.published).length}
            </p>
            <p className="text-sm text-gray-600">Publicados</p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <p className="text-3xl font-bold text-yellow-600">
              {exercises.filter(e => !e.published).length}
            </p>
            <p className="text-sm text-gray-600">Borradores</p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <p className="text-3xl font-bold text-blue-600">
              {exercises.filter(e => e.featured).length}
            </p>
            <p className="text-sm text-gray-600">Destacados</p>
          </div>
        </div>

        {/* Tabla de Ejercicios */}
        <div className="bg-white rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Ejercicio</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Categoría</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Dificultad</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Duración</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Estado</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {exercises.length > 0 ? (
                  exercises.map((exercise) => (
                    <tr key={exercise.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-semibold text-forest-dark">{exercise.title}</p>
                          <p className="text-sm text-gray-600 line-clamp-1">{exercise.description}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm px-2 py-1 bg-blue-100 text-blue-600 rounded">
                          {exercise.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-sm px-2 py-1 rounded ${
                          exercise.difficulty === 'beginner' ? 'bg-green-100 text-green-600' :
                          exercise.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-red-100 text-red-600'
                        }`}>
                          {exercise.difficulty === 'beginner' ? 'Principiante' :
                           exercise.difficulty === 'intermediate' ? 'Intermedio' : 'Avanzado'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {exercise.duration} min
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          {exercise.published ? (
                            <span className="flex items-center text-sm text-green-600">
                              <Eye size={16} className="mr-1" />
                              Publicado
                            </span>
                          ) : (
                            <span className="flex items-center text-sm text-gray-500">
                              <EyeOff size={16} className="mr-1" />
                              Borrador
                            </span>
                          )}
                          {exercise.featured && (
                            <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded">
                              ⭐ Destacado
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end space-x-2">
                          <Link
                            href={`/admin/ejercicios/${exercise.id}`}
                            className="p-2 hover:bg-blue-50 rounded-lg transition text-blue-600"
                          >
                            <Edit size={18} />
                          </Link>
                          <button className="p-2 hover:bg-red-50 rounded-lg transition text-red-600">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                      No hay ejercicios creados aún
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
