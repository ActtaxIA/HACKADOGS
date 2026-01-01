/**
 * QR Code Generation Library
 * Genera códigos QR para perfiles de perros
 */

/**
 * Genera un código QR usando una API pública
 * @param data - Datos a codificar en el QR
 * @param size - Tamaño del QR en píxeles (default: 300)
 * @returns URL del QR code como imagen
 */
export function generateQRCodeURL(data: string, size: number = 300): string {
  // Usar API pública de QR Code
  const encodedData = encodeURIComponent(data)
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodedData}`
}

/**
 * Genera URL para el perfil público de un perro
 * @param dogId - ID del perro
 * @returns URL completa al perfil
 */
export function getDogProfileURL(dogId: string): string {
  const baseURL = process.env.NEXT_PUBLIC_APP_URL || 'https://hakadogs.com'
  return `${baseURL}/qr/${dogId}`
}

/**
 * Genera QR code para un perro específico
 * @param dogId - ID del perro
 * @param size - Tamaño del QR
 * @returns URL del QR code
 */
export function generateDogQR(dogId: string, size: number = 300): string {
  const profileURL = getDogProfileURL(dogId)
  return generateQRCodeURL(profileURL, size)
}

/**
 * Información completa para QR de perro
 * Genera un vCard para contacto de emergencia
 */
export interface DogQRInfo {
  dogName: string
  ownerName: string
  ownerPhone: string
  ownerEmail?: string
  microchip?: string
  emergencyNotes?: string
}

/**
 * Genera un vCard para QR code
 */
export function generateDogVCard(info: DogQRInfo): string {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${info.ownerName}`,
    `TEL:${info.ownerPhone}`,
    info.ownerEmail ? `EMAIL:${info.ownerEmail}` : '',
    `NOTE:Dueño de ${info.dogName}${info.microchip ? ` - Microchip: ${info.microchip}` : ''}${info.emergencyNotes ? ` - ${info.emergencyNotes}` : ''}`,
    'END:VCARD'
  ].filter(Boolean).join('\n')

  return vcard
}

/**
 * Genera QR con vCard del dueño
 */
export function generateDogContactQR(info: DogQRInfo, size: number = 300): string {
  const vcard = generateDogVCard(info)
  return generateQRCodeURL(vcard, size)
}

/**
 * Descarga un QR code como imagen
 */
export async function downloadQRCode(qrURL: string, filename: string = 'qr-code.png') {
  try {
    const response = await fetch(qrURL)
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    window.URL.revokeObjectURL(url)
  } catch (error) {
    console.error('Error downloading QR code:', error)
    throw error
  }
}

/**
 * Genera datos JSON completos del perro para QR
 */
export interface DogQRData {
  id: string
  name: string
  breed?: string
  microchip?: string
  owner: {
    name: string
    phone: string
    email?: string
  }
  emergency?: string
  profileURL: string
}

export function generateDogQRData(data: DogQRData): string {
  return JSON.stringify({
    type: 'dog_profile',
    ...data
  })
}

/**
 * Estilos de QR disponibles
 */
export type QRStyle = 'normal' | 'rounded' | 'dots'

/**
 * Genera QR con estilo personalizado (requiere API premium o librería client-side)
 * Por ahora retorna URL estándar
 */
export function generateStyledQR(
  data: string, 
  size: number = 300,
  style: QRStyle = 'normal'
): string {
  // En producción, usar librería como qrcode o API premium
  return generateQRCodeURL(data, size)
}

/**
 * Valida que un string sea una URL válida de perfil de perro
 */
export function isValidDogProfileURL(url: string): boolean {
  try {
    const urlObj = new URL(url)
    return urlObj.pathname.startsWith('/qr/') || urlObj.pathname.startsWith('/app/community/perfiles/')
  } catch {
    return false
  }
}

/**
 * Extrae el ID del perro de una URL de perfil
 */
export function extractDogIdFromURL(url: string): string | null {
  try {
    const urlObj = new URL(url)
    const matches = urlObj.pathname.match(/\/qr\/([a-f0-9-]+)/) || 
                   urlObj.pathname.match(/\/perfiles\/([a-f0-9-]+)/)
    return matches ? matches[1] : null
  } catch {
    return null
  }
}
