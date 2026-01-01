'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import Link from 'next/link'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  appName: string
}

export default function AuthModal({ isOpen, onClose, appName }: AuthModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Icon */}
          <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Acceso Exclusivo
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            <strong>{appName}</strong> es una herramienta exclusiva para usuarios registrados. 
            Inicia sesión o regístrate para acceder a todas las funcionalidades.
          </p>

          {/* Benefits */}
          <div className="bg-orange-50 rounded-lg p-4 mb-6 text-left">
            <p className="text-sm font-semibold text-gray-900 mb-2">Con tu cuenta tendrás acceso a:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✓</span>
                <span>Seguimiento personalizado del progreso</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✓</span>
                <span>Historial completo de sesiones</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✓</span>
                <span>Comunicación directa con el educador</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✓</span>
                <span>Acceso a las 3 aplicaciones premium</span>
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Link
              href="/registrarse"
              className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg"
            >
              Registrarse Gratis
            </Link>
            <Link
              href="/iniciar-sesion"
              className="block w-full bg-white text-orange-600 font-semibold py-3 px-6 rounded-lg border-2 border-orange-600 hover:bg-orange-50 transition-all"
            >
              Iniciar Sesión
            </Link>
          </div>

          {/* Footer Note */}
          <p className="text-xs text-gray-500 mt-4">
            ¿Necesitas ayuda? <Link href="/contacto" className="text-orange-600 hover:underline">Contáctanos</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
