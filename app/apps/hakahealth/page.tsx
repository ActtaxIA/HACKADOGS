'use client'

import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import AuthModal from '@/components/AuthModal'
import { Heart, Calendar, TrendingUp, Activity, FileText, Bell, ChevronRight, Plus } from 'lucide-react'
import Link from 'next/link'

export default function HakaHealthPage() {
  const { isAuthenticated, isLoading } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)

  // Mostrar modal si no está autenticado
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
      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => {
          setShowAuthModal(false)
          window.location.href = '/apps'
        }}
        appName="HakaHealth"
      />

      {/* Contenido de la app (solo visible si está autenticado) */}
      {isAuthenticated && (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-20">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-8 -mt-20">
            <div className="container mx-auto px-4 pt-20">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <Heart className="w-8 h-8 mr-3" />
                    <h1 className="text-4xl font-bold">HakaHealth</h1>
                  </div>
                  <p className="text-green-100 text-lg">Historial médico y salud de tu perro</p>
                </div>
                <Link 
                  href="/apps"
                  className="text-white hover:text-green-100 transition-colors text-sm font-medium"
                >
                  ← Volver a Apps
                </Link>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-12">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm">Próxima Vacuna</span>
                  <Calendar className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">15 días</p>
                <p className="text-xs text-gray-500 mt-1">Antirrábica anual</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm">Peso Actual</span>
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">24.5 kg</p>
                <p className="text-xs text-green-600 mt-1">↑ +0.5kg este mes</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm">Visitas Vet</span>
                  <Activity className="w-5 h-5 text-orange-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">8</p>
                <p className="text-xs text-gray-500 mt-1">Este año</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm">Medicamentos</span>
                  <FileText className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">2</p>
                <p className="text-xs text-gray-500 mt-1">Activos</p>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left Column - Vacunas y Próximas Citas */}
              <div className="md:col-span-2 space-y-6">
                {/* Próximas Vacunas */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-green-600 text-white px-6 py-4 flex items-center justify-between">
                    <h2 className="text-xl font-bold flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Calendario de Vacunación
                    </h2>
                    <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm transition-colors flex items-center">
                      <Plus className="w-4 h-4 mr-1" />
                      Añadir
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                        <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                          15
                        </div>
                        <div className="ml-4 flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-gray-900">Antirrábica Anual</h3>
                            <span className="text-sm text-yellow-700 font-medium">En 15 días</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">15 de Enero de 2026</p>
                          <p className="text-xs text-gray-500 mt-1">Clínica Veterinaria San Francisco</p>
                        </div>
                      </div>

                      <div className="flex items-start p-4 bg-gray-50 border-l-4 border-gray-300 rounded-r-lg">
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold">
                          45
                        </div>
                        <div className="ml-4 flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-gray-900">Polivalente</h3>
                            <span className="text-sm text-gray-600">En 45 días</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">15 de Febrero de 2026</p>
                        </div>
                      </div>

                      <div className="flex items-start p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg opacity-75">
                        <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                          ✓
                        </div>
                        <div className="ml-4 flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-gray-900">Antirrábica</h3>
                            <span className="text-sm text-green-700">Completada</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">15 de Diciembre de 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Historial Médico */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
                    <h2 className="text-xl font-bold flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      Historial Médico
                    </h2>
                    <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm transition-colors flex items-center">
                      <Plus className="w-4 h-4 mr-1" />
                      Añadir
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {[
                        { date: '20 Dic 2024', title: 'Revisión General', vet: 'Dra. María García', notes: 'Estado general excelente. Continuar con rutina actual.' },
                        { date: '15 Nov 2024', title: 'Vacuna Antirrábica', vet: 'Dr. Pedro López', notes: 'Aplicada sin reacciones adversas.' },
                        { date: '10 Oct 2024', title: 'Chequeo Dental', vet: 'Dra. María García', notes: 'Limpieza dental realizada. Mejoría notable.' },
                      ].map((record, index) => (
                        <div key={index} className="border-l-2 border-gray-200 pl-4 hover:border-blue-500 transition-colors cursor-pointer">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-sm text-gray-500">{record.date}</p>
                              <h3 className="font-semibold text-gray-900 mt-1">{record.title}</h3>
                              <p className="text-sm text-gray-600 mt-1">Por: {record.vet}</p>
                              <p className="text-sm text-gray-500 mt-2">{record.notes}</p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-400" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Medicamentos y Peso */}
              <div className="space-y-6">
                {/* Medicamentos Activos */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-purple-600 text-white px-6 py-4">
                    <h2 className="text-lg font-bold flex items-center">
                      <Activity className="w-5 h-5 mr-2" />
                      Medicamentos
                    </h2>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h3 className="font-semibold text-gray-900">Antipulgas</h3>
                      <p className="text-sm text-gray-600 mt-1">Cada 30 días</p>
                      <p className="text-xs text-purple-600 font-medium mt-2">Próxima: 5 de Enero</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h3 className="font-semibold text-gray-900">Desparasitante</h3>
                      <p className="text-sm text-gray-600 mt-1">Cada 3 meses</p>
                      <p className="text-xs text-purple-600 font-medium mt-2">Próxima: 20 de Febrero</p>
                    </div>
                  </div>
                </div>

                {/* Evolución del Peso */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-orange-600 text-white px-6 py-4">
                    <h2 className="text-lg font-bold flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Evolución del Peso
                    </h2>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      {[
                        { date: 'Enero 2026', weight: '24.5', trend: 'up' },
                        { date: 'Diciembre 2025', weight: '24.0', trend: 'up' },
                        { date: 'Noviembre 2025', weight: '23.5', trend: 'same' },
                        { date: 'Octubre 2025', weight: '23.5', trend: 'down' },
                      ].map((record, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">{record.date}</span>
                          <div className="flex items-center">
                            <span className="font-semibold text-gray-900 mr-2">{record.weight} kg</span>
                            {record.trend === 'up' && <span className="text-green-600">↑</span>}
                            {record.trend === 'down' && <span className="text-red-600">↓</span>}
                            {record.trend === 'same' && <span className="text-gray-400">→</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recordatorios */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-yellow-600 text-white px-6 py-4">
                    <h2 className="text-lg font-bold flex items-center">
                      <Bell className="w-5 h-5 mr-2" />
                      Recordatorios
                    </h2>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Vacuna en 15 días</p>
                        <p className="text-xs text-gray-600">Antirrábica anual</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Antipulgas en 4 días</p>
                        <p className="text-xs text-gray-600">Aplicación mensual</p>
                      </div>
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
