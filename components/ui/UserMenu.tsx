'use client'

import { useEffect, useState } from 'react'
import { getLocalSession, signOutLocal } from '@/lib/auth/mockAuth'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { User, LogOut, Settings, Dog } from 'lucide-react'

export default function UserMenu() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const getUser = () => {
      const { data } = getLocalSession()
      setUser(data?.session?.user || null)
    }

    getUser()
    
    // Escuchar cambios en localStorage
    const handleStorageChange = () => {
      getUser()
    }
    
    window.addEventListener('storage', handleStorageChange)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  const handleLogout = () => {
    signOutLocal()
    setUser(null)
    setIsOpen(false)
    router.push('/')
    router.refresh()
  }

  if (!user) {
    return (
      <div className="flex items-center space-x-4">
        <Link href="/auth/login" className="btn-secondary">
          Iniciar Sesión
        </Link>
        <Link href="/auth/registro" className="btn-primary">
          Registrarse
        </Link>
      </div>
    )
  }

  const userName = user.user_metadata?.name || 'Usuario'
  const userRole = user.user_metadata?.role || 'user'

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg px-3 py-2 transition"
      >
        <div className="w-10 h-10 bg-forest rounded-full flex items-center justify-center">
          <User size={20} className="text-white" />
        </div>
        <div className="hidden md:block text-left">
          <p className="font-semibold text-forest-dark text-sm">
            {userName}
          </p>
          <p className="text-xs text-gray-600">{user.email}</p>
        </div>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-20">
            {userRole === 'admin' && (
              <Link
                href="/admin/dashboard"
                className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition"
                onClick={() => setIsOpen(false)}
              >
                <Settings size={18} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Panel Admin</span>
              </Link>
            )}
            
            {/* Mi Perfil */}
            <Link
              href="/cliente/perfil"
              className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition"
              onClick={(e) => {
                console.log('🔍 Click en Mi Perfil detectado')
                setIsOpen(false)
              }}
            >
              <User size={18} className="text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Mi Perfil</span>
            </Link>

            <div className="border-t border-gray-200 my-2" />
            
            {/* Apps Individuales */}
            <div className="px-4 py-2">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Mis Apps</p>
            </div>
            
            <Link
              href="/apps/hakahealth"
              className="flex items-center space-x-3 px-4 py-3 hover:bg-green-50 transition group"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition">
                <span className="text-green-600 text-lg">💚</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">HakaHealth</p>
                <p className="text-xs text-gray-500">Salud veterinaria</p>
              </div>
            </Link>
            
            <Link
              href="/apps/hakatrainer"
              className="flex items-center space-x-3 px-4 py-3 hover:bg-orange-50 transition group"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition">
                <span className="text-orange-600 text-lg">🎯</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">HakaTrainer</p>
                <p className="text-xs text-gray-500">Adiestramiento</p>
              </div>
            </Link>
            
            <Link
              href="/apps/hakacommunity"
              className="flex items-center space-x-3 px-4 py-3 hover:bg-blue-50 transition group"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition">
                <span className="text-blue-600 text-lg">👥</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">HakaCommunity</p>
                <p className="text-xs text-gray-500">Comunidad</p>
              </div>
            </Link>

            <div className="border-t border-gray-200 my-2" />

            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 px-4 py-3 hover:bg-red-50 transition w-full text-left"
            >
              <LogOut size={18} className="text-red-600" />
              <span className="text-sm font-medium text-red-600">Cerrar Sesión</span>
            </button>
          </div>
        </>
      )}
    </div>
  )
}
