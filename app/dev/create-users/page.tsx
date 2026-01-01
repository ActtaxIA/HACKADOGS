'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { UserPlus, CheckCircle, XCircle, Loader } from 'lucide-react'

export default function CreateTestUsersPage() {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<any[]>([])

  const createUsers = async () => {
    setLoading(true)
    setResults([])
    const supabase = createClient()
    const newResults = []

    // Usuario Admin
    try {
      const { data: adminData, error: adminError } = await supabase.auth.signUp({
        email: 'narciso.pardo@outlook.com',
        password: '14356830Np',
        options: {
          data: {
            name: 'Narciso Pardo',
            role: 'admin',
            full_name: 'Narciso Pardo',
          },
        },
      })

      if (adminError) {
        newResults.push({
          type: 'admin',
          success: false,
          email: 'narciso.pardo@outlook.com',
          error: adminError.message,
        })
      } else {
        newResults.push({
          type: 'admin',
          success: true,
          email: 'narciso.pardo@outlook.com',
          password: '14356830Np',
          id: adminData.user?.id,
        })
      }
    } catch (error: any) {
      newResults.push({
        type: 'admin',
        success: false,
        email: 'narciso.pardo@outlook.com',
        error: error.message,
      })
    }

    // Usuario Regular
    try {
      const { data: userData, error: userError } = await supabase.auth.signUp({
        email: 'user@hakadogs.com',
        password: '14356830Np',
        options: {
          data: {
            name: 'Usuario Demo',
            role: 'user',
            full_name: 'Usuario Demo',
          },
        },
      })

      if (userError) {
        newResults.push({
          type: 'user',
          success: false,
          email: 'user@hakadogs.com',
          error: userError.message,
        })
      } else {
        newResults.push({
          type: 'user',
          success: true,
          email: 'user@hakadogs.com',
          password: '14356830Np',
          id: userData.user?.id,
        })
      }
    } catch (error: any) {
      newResults.push({
        type: 'user',
        success: false,
        email: 'user@hakadogs.com',
        error: error.message,
      })
    }

    setResults(newResults)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-6">
            <div className="flex items-center">
              <UserPlus className="w-8 h-8 mr-3" />
              <div>
                <h1 className="text-3xl font-bold">Crear Usuarios de Prueba</h1>
                <p className="text-blue-100 mt-1">Sistema de desarrollo HakaDogs</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
              <h2 className="font-semibold text-blue-900 mb-2">Usuarios a crear:</h2>
              <div className="space-y-2 text-sm text-blue-800">
                <div className="flex items-center">
                  <span className="font-medium mr-2">👨‍💼 ADMIN:</span>
                  <span>narciso.pardo@outlook.com</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium mr-2">👤 USER:</span>
                  <span>user@hakadogs.com</span>
                </div>
                <div className="mt-2 pt-2 border-t border-blue-200">
                  <span className="font-medium">🔑 Password ambos:</span> 14356830Np
                </div>
              </div>
            </div>

            {/* Botón */}
            <button
              onClick={createUsers}
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 mr-2 animate-spin" />
                  Creando usuarios...
                </>
              ) : (
                <>
                  <UserPlus className="w-5 h-5 mr-2" />
                  Crear Usuarios de Prueba
                </>
              )}
            </button>

            {/* Resultados */}
            {results.length > 0 && (
              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-bold text-gray-900">Resultados:</h3>
                {results.map((result, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-l-4 ${
                      result.success
                        ? 'bg-green-50 border-green-500'
                        : 'bg-red-50 border-red-500'
                    }`}
                  >
                    <div className="flex items-start">
                      {result.success ? (
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">
                          {result.type === 'admin' ? '👨‍💼 Usuario ADMIN' : '👤 Usuario REGULAR'}
                        </p>
                        <p className="text-sm text-gray-700 mt-1">📧 {result.email}</p>
                        {result.success ? (
                          <>
                            <p className="text-sm text-green-700 mt-1">🔑 {result.password}</p>
                            <p className="text-xs text-gray-600 mt-1">ID: {result.id}</p>
                            <p className="text-xs text-green-600 font-medium mt-2">
                              ✅ Creado exitosamente
                            </p>
                          </>
                        ) : (
                          <p className="text-sm text-red-700 mt-2">❌ Error: {result.error}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Credenciales Finales */}
                {results.some((r) => r.success) && (
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200 mt-6">
                    <h4 className="font-bold text-gray-900 mb-4 text-center">
                      ✨ Credenciales de Acceso
                    </h4>
                    <div className="space-y-4">
                      {results
                        .filter((r) => r.success)
                        .map((result, idx) => (
                          <div
                            key={idx}
                            className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
                          >
                            <p className="font-semibold text-gray-900 mb-2">
                              {result.type === 'admin' ? '👨‍💼 ADMIN' : '👤 USER'}
                            </p>
                            <div className="space-y-1 text-sm">
                              <p className="text-gray-700">
                                <span className="font-medium">Email:</span> {result.email}
                              </p>
                              <p className="text-gray-700">
                                <span className="font-medium">Password:</span> {result.password}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                    <div className="mt-4 text-center">
                      <a
                        href="/auth/login"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        Ir a Iniciar Sesión →
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Información adicional */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600">
                <strong>Nota:</strong> Estos usuarios son para desarrollo y pruebas. Si Supabase
                requiere confirmación por email, verifica tu bandeja de entrada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

