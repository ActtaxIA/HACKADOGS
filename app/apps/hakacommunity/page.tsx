'use client'

import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import AuthModal from '@/components/AuthModal'
import { Users, MessageCircle, Calendar, MapPin, Heart, TrendingUp, Trophy, UserPlus, ChevronRight, Search } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function HakaCommunityPage() {
  const { isAuthenticated, isLoading } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)

  if (!isLoading && !isAuthenticated) {
    if (!showAuthModal) {
      setShowAuthModal(true)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
      </div>
    )
  }

  return (
    <>
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => {
          setShowAuthModal(false)
          window.location.href = '/apps'
        }}
        appName="HakaCommunity"
      />

      {isAuthenticated && (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-20">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-8 -mt-20">
            <div className="container mx-auto px-4 pt-20">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <Users className="w-8 h-8 mr-3" />
                    <h1 className="text-4xl font-bold">HakaCommunity</h1>
                  </div>
                  <p className="text-blue-100 text-lg">Conecta con otros amantes de los perros</p>
                </div>
                <Link 
                  href="/apps"
                  className="text-white hover:text-blue-100 transition-colors text-sm font-medium"
                >
                  ← Volver a Apps
                </Link>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-12">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm">Amigos</span>
                  <UserPlus className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">24</p>
                <p className="text-xs text-gray-500 mt-1">+3 esta semana</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm">Eventos</span>
                  <Calendar className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-xs text-gray-500 mt-1">Próximos</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm">Mensajes</span>
                  <MessageCircle className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">12</p>
                <p className="text-xs text-green-600 mt-1">5 sin leer</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm">Publicaciones</span>
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">87</p>
                <p className="text-xs text-gray-500 mt-1">Me gusta recibidos</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feed Principal */}
              <div className="md:col-span-2 space-y-6">
                {/* Crear Publicación */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      TU
                    </div>
                    <input 
                      type="text"
                      placeholder="¿Qué estás haciendo con tu perro hoy?"
                      className="flex-1 bg-gray-100 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-sm font-medium">
                      Publicar
                    </button>
                  </div>
                </div>

                {/* Feed de Publicaciones */}
                <div className="space-y-6">
                  {/* Publicación 1 */}
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                          MG
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">María García</h3>
                          <p className="text-xs text-gray-500">Hace 2 horas • Murcia</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        ¡Toby ha completado su primer mes de entrenamiento! 🎉 Estamos super orgullosos de sus progresos. 
                        Ya no tira de la correa y viene siempre que le llamamos. #HakaDogs #Entrenamiento
                      </p>
                      <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                        <Image 
                          src="/images/EwXEDf2XMAMGhqN.jpg" 
                          alt="Perro entrenando"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex items-center justify-between text-sm pt-4 border-t">
                        <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                          <Heart className="w-5 h-5 mr-2" />
                          15 Me gusta
                        </button>
                        <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                          <MessageCircle className="w-5 h-5 mr-2" />
                          8 Comentarios
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Publicación 2 */}
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                          JM
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Juan Martínez</h3>
                          <p className="text-xs text-gray-500">Hace 5 horas • Cartagena</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Quedada en el Parque Torres este sábado a las 11:00. ¿Quién se anima? 
                        Será perfecto para socialización. ¡Traed agua y premios! 🐕
                      </p>
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
                        <div className="flex items-start">
                          <Calendar className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                          <div>
                            <p className="font-semibold text-gray-900">Quedada Canina</p>
                            <p className="text-sm text-gray-600 mt-1">Sábado 4 de Enero • 11:00</p>
                            <p className="text-sm text-gray-600">Parque Torres, Cartagena</p>
                            <p className="text-xs text-blue-600 font-medium mt-2">12 personas asistirán</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm pt-4 border-t">
                        <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                          <Heart className="w-5 h-5 mr-2" />
                          23 Me gusta
                        </button>
                        <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                          <MessageCircle className="w-5 h-5 mr-2" />
                          12 Comentarios
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Publicación 3 */}
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                          LS
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Laura Sánchez</h3>
                          <p className="text-xs text-gray-500">Hace 1 día • Alicante</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        ¿Alguien tiene experiencia con perros reactivos? Rocky ladra a todos los perros que ve. 
                        Ya hemos empezado con Alfredo pero me gustaría leer vuestras experiencias 🙏
                      </p>
                      <div className="flex items-center justify-between text-sm pt-4 border-t">
                        <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                          <Heart className="w-5 h-5 mr-2" />
                          8 Me gusta
                        </button>
                        <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                          <MessageCircle className="w-5 h-5 mr-2" />
                          24 Comentarios
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Próximos Eventos */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-green-600 text-white px-6 py-4">
                    <h2 className="text-lg font-bold flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Próximos Eventos
                    </h2>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="border-l-4 border-green-500 pl-4 cursor-pointer hover:bg-gray-50 transition-colors p-2 -ml-2 -my-2 rounded-r-lg">
                      <h3 className="font-semibold text-gray-900 text-sm">Quedada Parque Torres</h3>
                      <p className="text-xs text-gray-600 mt-1">Sábado 4 Ene • 11:00</p>
                      <p className="text-xs text-green-600 font-medium mt-1">12 asistentes</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4 cursor-pointer hover:bg-gray-50 transition-colors p-2 -ml-2 -my-2 rounded-r-lg">
                      <h3 className="font-semibold text-gray-900 text-sm">Clase Grupal - Nivel Básico</h3>
                      <p className="text-xs text-gray-600 mt-1">Domingo 5 Ene • 10:00</p>
                      <p className="text-xs text-blue-600 font-medium mt-1">8 asistentes</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4 cursor-pointer hover:bg-gray-50 transition-colors p-2 -ml-2 -my-2 rounded-r-lg">
                      <h3 className="font-semibold text-gray-900 text-sm">Ruta Senderismo Sierra Espuña</h3>
                      <p className="text-xs text-gray-600 mt-1">Sábado 11 Ene • 09:00</p>
                      <p className="text-xs text-purple-600 font-medium mt-1">15 asistentes</p>
                    </div>
                    <Link 
                      href="/app/community/eventos"
                      className="block text-center text-blue-600 hover:text-blue-700 text-sm font-medium mt-4"
                    >
                      Ver todos los eventos →
                    </Link>
                  </div>
                </div>

                {/* Perfiles Sugeridos */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-purple-600 text-white px-6 py-4">
                    <h2 className="text-lg font-bold flex items-center">
                      <UserPlus className="w-5 h-5 mr-2" />
                      Conecta con
                    </h2>
                  </div>
                  <div className="p-6 space-y-4">
                    {[
                      { name: 'Pedro Ruiz', location: 'Murcia', dogs: '2 perros' },
                      { name: 'Ana Torres', location: 'Cartagena', dogs: '1 perro' },
                      { name: 'Carlos López', location: 'Molina', dogs: '3 perros' },
                    ].map((user, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                            <p className="text-xs text-gray-500">{user.location} • {user.dogs}</p>
                          </div>
                        </div>
                        <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-xs hover:bg-blue-700 transition-colors">
                          Seguir
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rankings */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-yellow-600 text-white px-6 py-4">
                    <h2 className="text-lg font-bold flex items-center">
                      <Trophy className="w-5 h-5 mr-2" />
                      Top Entrenadores
                    </h2>
                  </div>
                  <div className="p-6 space-y-3">
                    {[
                      { rank: 1, name: 'María G.', points: '1,250' },
                      { rank: 2, name: 'Juan M.', points: '1,180' },
                      { rank: 3, name: 'Laura S.', points: '1,050' },
                      { rank: 12, name: 'Tú', points: '680' },
                    ].map((user, i) => (
                      <div key={i} className={`flex items-center justify-between ${user.rank === 12 ? 'bg-blue-50 p-2 rounded-lg -mx-2' : ''}`}>
                        <div className="flex items-center">
                          <span className={`text-sm font-bold mr-3 ${
                            user.rank === 1 ? 'text-yellow-500' : 
                            user.rank === 2 ? 'text-gray-400' : 
                            user.rank === 3 ? 'text-orange-500' : 
                            'text-gray-600'
                          }`}>
                            #{user.rank}
                          </span>
                          <span className="text-sm font-medium text-gray-900">{user.name}</span>
                        </div>
                        <span className="text-sm text-gray-600">{user.points} pts</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buscar */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-blue-600 text-white px-6 py-4">
                    <h2 className="text-lg font-bold flex items-center">
                      <Search className="w-5 h-5 mr-2" />
                      Buscar
                    </h2>
                  </div>
                  <div className="p-6">
                    <input 
                      type="text"
                      placeholder="Buscar personas, grupos..."
                      className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="mt-4 space-y-2">
                      <Link href="/app/community/foro" className="block text-sm text-blue-600 hover:text-blue-700">
                        Ver Foro →
                      </Link>
                      <Link href="/app/community/eventos" className="block text-sm text-blue-600 hover:text-blue-700">
                        Explorar Eventos →
                      </Link>
                      <Link href="/app/community/buscar" className="block text-sm text-blue-600 hover:text-blue-700">
                        Buscar Amigos →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

