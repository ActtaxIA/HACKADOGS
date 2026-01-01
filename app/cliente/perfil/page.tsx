'use client'

import { useEffect, useState } from 'react'
import { getLocalSession } from '@/lib/auth/mockAuth'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  ArrowLeft, User, Mail, Phone, Dog, Heart, Target, Users, 
  Calendar, TrendingUp, Award, Activity, Plus, ArrowRight 
} from 'lucide-react'

interface Pet {
  id: string
  name: string
  breed: string
  age: number
  birthDate?: string
  sex?: string
  weight?: number
  color?: string
  photo?: string
}

export default function UserProfilePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [pets, setPets] = useState<Pet[]>([])

  useEffect(() => {
    const checkAuth = () => {
      const { data } = getLocalSession()

      if (!data?.session) {
        router.push('/auth/login')
        return
      }

      setUser(data.session.user)
      
      // Cargar mascotas
      const storedPets = localStorage.getItem(`pets_${data.session.user.id}`)
      if (storedPets) {
        setPets(JSON.parse(storedPets))
      }

      setLoading(false)
    }

    checkAuth()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-forest rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando perfil...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-forest-dark to-forest text-white -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-28">
          <Link href="/apps" className="inline-flex items-center text-white/80 hover:text-white mb-4">
            <ArrowLeft size={20} className="mr-2" />
            Volver a Apps
          </Link>
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <User size={40} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{user?.user_metadata?.name || user?.email}</h1>
              <p className="text-white/90 mt-1">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Mascotas</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{pets.length}</p>
              </div>
              <Dog className="w-12 h-12 text-blue-600 opacity-80" />
            </div>
            <Link 
              href="/cliente/mascotas"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-4 inline-flex items-center"
            >
              Gestionar <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Salud</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">5</p>
              </div>
              <Heart className="w-12 h-12 text-green-600 opacity-80" />
            </div>
            <Link 
              href="/apps/hakahealth"
              className="text-green-600 hover:text-green-800 text-sm font-medium mt-4 inline-flex items-center"
            >
              Ver salud <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Entrenamientos</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
              </div>
              <Target className="w-12 h-12 text-orange-600 opacity-80" />
            </div>
            <Link 
              href="/apps/hakatrainer"
              className="text-orange-600 hover:text-orange-800 text-sm font-medium mt-4 inline-flex items-center"
            >
              Entrenar <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Amigos</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">24</p>
              </div>
              <Users className="w-12 h-12 text-purple-600 opacity-80" />
            </div>
            <Link 
              href="/apps/hakacommunity"
              className="text-purple-600 hover:text-purple-800 text-sm font-medium mt-4 inline-flex items-center"
            >
              Comunidad <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Mis Mascotas */}
          <div className="md:col-span-2 space-y-6">
            {/* Mascotas Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Mis Mascotas</h2>
                <Link href="/cliente/mascotas" className="btn-secondary text-sm">
                  <Plus size={16} className="inline mr-2" />
                  Gestionar
                </Link>
              </div>

              {pets.length === 0 ? (
                <div className="text-center py-8">
                  <Dog size={48} className="mx-auto text-gray-300 mb-3" />
                  <p className="text-gray-600 mb-4">Aún no has añadido mascotas</p>
                  <Link href="/cliente/mascotas" className="btn-primary inline-flex items-center">
                    <Plus size={16} className="mr-2" />
                    Añadir Primera Mascota
                  </Link>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-4">
                  {pets.slice(0, 4).map((pet) => (
                    <div key={pet.id} className="border-2 border-gray-200 rounded-lg p-4 hover:border-forest transition">
                      <div className="flex items-center space-x-3">
                        <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                          {pet.photo ? (
                            <img src={pet.photo} alt={pet.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full bg-forest/10 flex items-center justify-center">
                              <Dog size={28} className="text-forest" />
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{pet.name}</h3>
                          <p className="text-sm text-gray-600">{pet.breed}</p>
                          {pet.age > 0 && (
                            <p className="text-xs text-gray-500">{pet.age} {pet.age === 1 ? 'año' : 'años'}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {pets.length > 4 && (
                <Link 
                  href="/cliente/mascotas"
                  className="block text-center text-forest hover:text-forest-dark font-semibold mt-4"
                >
                  Ver todas las mascotas ({pets.length})
                </Link>
              )}
            </div>

            {/* Actividad Reciente */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Actividad Reciente</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 pb-4 border-b">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart size={20} className="text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium">Vacuna registrada</p>
                    <p className="text-sm text-gray-600">Rabia - Max</p>
                    <p className="text-xs text-gray-500 mt-1">Hace 2 días</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 pb-4 border-b">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target size={20} className="text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium">Sesión completada</p>
                    <p className="text-sm text-gray-600">Entrenamiento de llamada</p>
                    <p className="text-xs text-gray-500 mt-1">Hace 3 días</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users size={20} className="text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium">Nueva quedada</p>
                    <p className="text-sm text-gray-600">Parque Torres - Sábado 10:00</p>
                    <p className="text-xs text-gray-500 mt-1">Hace 5 días</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Información Personal */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">Información Personal</h3>
                <Link href="/cliente/perfil/editar" className="text-forest hover:text-forest-dark text-sm">
                  Editar
                </Link>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail size={16} className="text-gray-400" />
                  <span className="text-gray-700 break-all">{user?.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone size={16} className="text-gray-400" />
                  <span className="text-gray-700">{user?.user_metadata?.phone || 'No especificado'}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <User size={16} className="text-gray-400" />
                  <span className="text-gray-700 capitalize">{user?.user_metadata?.role || 'Usuario'}</span>
                </div>
              </div>
            </div>

            {/* Progreso Semanal */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-gray-900 mb-4">Progreso Semanal</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-700">Entrenamientos</span>
                    <span className="font-semibold text-orange-600">3/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-700">Chequeos</span>
                    <span className="font-semibold text-green-600">2/2</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-700">Socialización</span>
                    <span className="font-semibold text-purple-600">1/3</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '33%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Logros */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-gray-900 mb-4">Logros Recientes</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Award size={20} className="text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Semana Perfecta</p>
                    <p className="text-xs text-gray-600">Completaste todos los entrenamientos</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Activity size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Racha de 7 días</p>
                    <p className="text-xs text-gray-600">¡Sigue así!</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Progreso Excelente</p>
                    <p className="text-xs text-gray-600">Max ha mejorado un 85%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accesos Rápidos */}
            <div className="bg-gradient-to-br from-forest to-sage rounded-xl shadow-md p-6 text-white">
              <h3 className="font-bold mb-4">Accesos Rápidos</h3>
              
              <div className="space-y-2">
                <Link 
                  href="/cliente/mascotas"
                  className="block bg-white/20 hover:bg-white/30 rounded-lg p-3 transition"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Gestionar Mascotas</span>
                    <Dog size={16} />
                  </div>
                </Link>

                <Link 
                  href="/apps/hakahealth"
                  className="block bg-white/20 hover:bg-white/30 rounded-lg p-3 transition"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Registrar Vacuna</span>
                    <Heart size={16} />
                  </div>
                </Link>

                <Link 
                  href="/apps/hakatrainer"
                  className="block bg-white/20 hover:bg-white/30 rounded-lg p-3 transition"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Nuevo Entrenamiento</span>
                    <Target size={16} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
