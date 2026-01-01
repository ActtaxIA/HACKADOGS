export const APP_CONFIG = {
  name: 'Hakadogs',
  description: 'Educación Canina Profesional',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  contact: {
    phone: '685648241',
    email: 'info@hakadogs.com',
    location: 'Archena, Región de Murcia'
  },
  social: {
    facebook: '#',
    instagram: '#'
  }
}

export const HAKAHEALTH_CONFIG = {
  name: 'HakaHealth',
  color: 'red',
  description: 'Salud y Seguimiento',
  features: [
    'Historial médico completo',
    'Recordatorios de vacunas',
    'Directorio de veterinarios',
    'Seguimiento de peso',
    'Progreso de educación'
  ]
}

export const HAKATRAINER_CONFIG = {
  name: 'HakaTrainer',
  color: 'blue',
  description: 'Entrenamiento y Juegos',
  features: [
    '50+ ejercicios con videos',
    'Juegos mentales y físicos',
    'Sistema de logros',
    'Seguimiento de progreso',
    'Planes personalizados'
  ]
}

export const HAKACOMMUNITY_CONFIG = {
  name: 'HakaCommunity',
  color: 'green',
  description: 'Red Social Canina',
  features: [
    'Buscar amigos caninos',
    'Foro de la comunidad',
    'Eventos y quedadas',
    'Mapa de recursos',
    'Chat y mensajería'
  ]
}

export const DOG_SIZES = [
  { value: 'small', label: 'Pequeño (< 10kg)' },
  { value: 'medium', label: 'Mediano (10-25kg)' },
  { value: 'large', label: 'Grande (25-45kg)' },
  { value: 'giant', label: 'Gigante (> 45kg)' }
]

export const DOG_PERSONALITY_TAGS = [
  'Juguetón', 'Tranquilo', 'Energético', 'Tímido', 'Sociable',
  'Protector', 'Curioso', 'Independiente', 'Cariñoso', 'Activo',
  'Guardián', 'Explorador', 'Dormilón'
]

export const DOG_INTERESTS = [
  'Nadar', 'Correr', 'Jugar a la pelota', 'Pasear', 'Socializar',
  'Trucos', 'Agility', 'Buscar', 'Perseguir', 'Tug of war'
]

export const VACCINE_TYPES = [
  { value: 'core', label: 'Vacuna Core (Esencial)' },
  { value: 'non-core', label: 'Vacuna No-Core (Opcional)' },
  { value: 'rabies', label: 'Rabia' }
]

export const COMMON_VACCINES = [
  'Polivalente (Parvovirus, Moquillo, Hepatitis)',
  'Rabia',
  'Tos de las perreras',
  'Leishmaniosis',
  'Leptospirosis'
]

export const EXERCISE_CATEGORIES = [
  'Obediencia Básica',
  'Trucos Avanzados',
  'Modificación de Conducta',
  'Juegos Mentales',
  'Ejercicio Físico',
  'Socialización'
]

export const EXERCISE_DIFFICULTY = [
  { value: 'beginner', label: 'Principiante' },
  { value: 'intermediate', label: 'Intermedio' },
  { value: 'advanced', label: 'Avanzado' }
]
