import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://hakadogs.com' // Cambiar por tu dominio real

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/cliente/',
          '/app/health/historial/',
          '/app/trainer/mi-progreso/',
          '/_next/',
          '/qr/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

