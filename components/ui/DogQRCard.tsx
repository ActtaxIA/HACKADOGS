'use client'

import { useState } from 'react'
import { Download, Share2, QrCode } from 'lucide-react'
import { generateDogQR, getDogProfileURL, downloadQRCode } from '@/lib/qrcode'

interface DogQRCardProps {
  dogId: string
  dogName: string
  size?: number
}

export default function DogQRCard({ dogId, dogName, size = 300 }: DogQRCardProps) {
  const [downloading, setDownloading] = useState(false)
  
  const qrURL = generateDogQR(dogId, size)
  const profileURL = getDogProfileURL(dogId)

  const handleDownload = async () => {
    setDownloading(true)
    try {
      await downloadQRCode(qrURL, `${dogName.toLowerCase().replace(/\s+/g, '-')}-qr.png`)
    } catch (error) {
      alert('Error al descargar el QR')
    }
    setDownloading(false)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Perfil de ${dogName}`,
          text: `Mira el perfil de mi perro ${dogName}`,
          url: profileURL
        })
      } catch (error) {
        // User cancelled or error
      }
    } else {
      // Fallback: copiar al portapapeles
      navigator.clipboard.writeText(profileURL)
      alert('URL copiada al portapapeles')
    }
  }

  return (
    <div className="bg-white rounded-xl p-8 text-center">
      <div className="mb-6">
        <div className="w-16 h-16 bg-forest-dark/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <QrCode size={32} className="text-forest-dark" />
        </div>
        <h3 className="text-2xl font-bold text-forest-dark mb-2">
          Código QR de {dogName}
        </h3>
        <p className="text-gray-600">
          Escanea para acceder al perfil público
        </p>
      </div>

      {/* QR Code */}
      <div className="bg-white p-6 rounded-xl border-4 border-forest-dark/10 mb-6 inline-block">
        <img 
          src={qrURL} 
          alt={`QR Code de ${dogName}`}
          className="w-full max-w-xs mx-auto"
        />
      </div>

      {/* URL */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-600 mb-1">URL del perfil</p>
        <p className="text-sm font-mono text-forest-dark break-all">
          {profileURL}
        </p>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="flex-1 btn-primary inline-flex items-center justify-center disabled:opacity-50"
        >
          {downloading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Descargando...
            </>
          ) : (
            <>
              <Download size={20} className="mr-2" />
              Descargar QR
            </>
          )}
        </button>

        <button
          onClick={handleShare}
          className="flex-1 btn-secondary inline-flex items-center justify-center"
        >
          <Share2 size={20} className="mr-2" />
          Compartir
        </button>
      </div>

      <div className="mt-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
        <p className="text-sm text-blue-900">
          <strong>💡 Tip:</strong> Imprime este QR y ponlo en el collar de {dogName} para que cualquiera pueda contactarte si se pierde.
        </p>
      </div>
    </div>
  )
}
