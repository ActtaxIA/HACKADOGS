// Datos extendidos para páginas locales con contenido único

interface Park {
  name: string
  location: string
  size?: string
  features: string[]
  schedule?: string
  highlight?: string
}

interface LocalChallenge {
  icon: 'heat' | 'urban' | 'regulation'
  title: string
  description: string
  solution: string
}

interface Testimonial {
  name: string
  neighborhood: string
  rating: number
  text: string
  problem: string
}

export interface ExtendedCityData {
  slug: string
  parks: Park[]
  challenges: LocalChallenge[]
  localTip: string
  testimonials: Testimonial[]
}

export const extendedCityData: Record<string, ExtendedCityData> = {
  'murcia': {
    slug: 'murcia',
    parks: [
      {
        name: 'Pipicán Jardín del Malecón',
        location: 'Centro - Junto al Río Segura',
        size: '600 m²',
        features: [
          'Ubicación céntrica',
          'Superficie vallada',
          'Bebederos para perros',
          'Bancos con sombra',
          'Limpieza 4 veces/semana'
        ],
        schedule: 'Abierto 7:00 - 23:00h',
        highlight: 'El pipicán más céntrico de Murcia'
      },
      {
        name: 'Parque Canino El Carmen',
        location: 'Barrio del Carmen',
        size: '500 m²',
        features: [
          'Zona de agility',
          'Doble puerta de seguridad',
          'Dispensadores de bolsas',
          'Iluminación LED',
          'Papeleras específicas'
        ],
        schedule: 'Abierto 24h',
        highlight: 'Con obstáculos de agility'
      },
      {
        name: 'ZECA Sangonera La Verde',
        location: 'Urbanización Girasoles',
        size: '1.000 m²',
        features: [
          'Amplio espacio vallado',
          'Zonas de sombra natural',
          'Fuente de agua',
          'Separación perros grandes/pequeños',
          'Parking cercano'
        ],
        highlight: 'El más grande de la zona'
      },
      {
        name: 'Pipicán La Alberca',
        location: 'Pedanía La Alberca',
        size: '400 m²',
        features: [
          'Zona residencial tranquila',
          'Césped artificial',
          'Bebedero automático',
          'Bancos cubiertos'
        ]
      },
      {
        name: 'Parque Canino Espinardo',
        location: 'Campus Universitario',
        size: '550 m²',
        features: [
          'Cerca de zona universitaria',
          'Muy frecuentado',
          'Buena socialización',
          'Iluminación nocturna'
        ]
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Calor Extremo en Verano',
        description: 'Murcia alcanza temperaturas de hasta 42°C en julio y agosto. El asfalto puede quemar las almohadillas de tu perro y causar golpes de calor.',
        solution: 'Enseñamos a tu perro a pasear en horarios frescos (antes de las 9h y después de las 21h). Técnicas de adaptación al calor y rutas con sombra.'
      },
      {
        icon: 'urban',
        title: 'Convivencia en Pisos',
        description: 'La mayoría de viviendas en Murcia capital son pisos sin jardín. Los perros necesitan ejercicio y estimulación mental adecuada.',
        solution: 'Programas específicos de ejercicio indoor, rutas de paseo optimizadas y técnicas para evitar ansiedad en espacios reducidos.'
      },
      {
        icon: 'regulation',
        title: 'Normativa Municipal',
        description: 'Murcia tiene 54 zonas de esparcimiento canino con normativas específicas. Multas de hasta 750€ por no recoger excrementos.',
        solution: 'Te informamos de todas las normativas locales, zonas permitidas y horarios. Educación en civismo urbano para tu perro.'
      }
    ],
    localTip: 'En Murcia, con más de 54 pipicanes distribuidos en barrios y pedanías, te recomendamos rotar entre varios parques para que tu perro conozca diferentes entornos y socialice con distintos grupos de perros. Esto enriquece enormemente su experiencia.',
    testimonials: [
      {
        name: 'María García',
        neighborhood: 'El Carmen',
        rating: 5,
        text: 'Mi golden retriever no soportaba los paseos en verano. Alfredo nos enseñó a gestionar el calor y ahora disfrutamos incluso en julio. Las apps son súper útiles para llevar el control.',
        problem: 'Golpes de calor en verano'
      },
      {
        name: 'Juan Martínez',
        neighborhood: 'La Flota',
        rating: 5,
        text: 'Vivimos en un piso pequeño y Toby destrozaba muebles por ansiedad. En 3 meses ha cambiado completamente. El seguimiento por WhatsApp ha sido clave.',
        problem: 'Ansiedad por separación'
      },
      {
        name: 'Laura Sánchez',
        neighborhood: 'Espinardo',
        rating: 5,
        text: 'Profesional, cercano y con un método que realmente funciona. Mi perra ha mejorado muchísimo su comportamiento con otros perros en el pipicán.',
        problem: 'Agresividad con otros perros'
      },
      {
        name: 'Carlos López',
        neighborhood: 'El Palmar',
        rating: 5,
        text: 'Las sesiones a domicilio son lo mejor. Trabajar en casa hace que los resultados sean mucho más rápidos. Y tener todo en la app es muy cómodo.',
        problem: 'Ladridos excesivos en casa'
      }
    ]
  },
  
  'cartagena': {
    slug: 'cartagena',
    parks: [
      {
        name: 'Parque Canino de la Rosa',
        location: 'Junto al Parque de la Rosa',
        size: '1.500 m²',
        features: [
          'El más grande de Cartagena',
          'Elementos de agility profesionales',
          'Doble puerta de seguridad',
          'Bebederos múltiples',
          'Zona de descanso con bancos'
        ],
        schedule: 'Abierto 24h',
        highlight: 'Único parque canino oficial de Cartagena con equipamiento completo'
      },
      {
        name: 'Parque de Los Juncos (zona informal)',
        location: 'Los Juncos',
        size: 'Zona amplia',
        features: [
          'Muy frecuentado por vecinos',
          'Socialización activa',
          'Sin vallas (requiere control)'
        ],
        highlight: 'Punto de encuentro habitual de la comunidad canina'
      },
      {
        name: 'Zona Antonio Vallejo (en proyecto)',
        location: 'Junto al Estadio Cartagonova',
        features: [
          'Proyecto aprobado',
          'Próxima apertura',
          'Zona residencial en crecimiento'
        ],
        highlight: 'Nueva zona canina prevista para 2026'
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Clima Costero y Calor',
        description: 'Cartagena combina calor intenso con humedad alta por estar en la costa. Temperaturas de 35°C+ en verano con sensación térmica mayor.',
        solution: 'Adaptación específica para clima costero. Rutas por zonas con brisa marina. Hidratación optimizada y detección temprana de golpes de calor.'
      },
      {
        icon: 'urban',
        title: 'Perros y Entorno Playero',
        description: 'Muchos perros en Cartagena viven cerca de playas. Necesitan educación específica para zonas costeras: no beber agua salada, no perseguir gaviotas.',
        solution: 'Programa específico de educación playera. Control en entornos con distracciones (olas, arena, otros bañistas). Seguridad en zonas costeras.'
      },
      {
        icon: 'regulation',
        title: 'Pocos Parques Caninos',
        description: 'Cartagena solo cuenta con 1 parque canino oficial para 218.000 habitantes. Necesidad de alternativas para ejercicio seguro.',
        solution: 'Te enseñamos rutas alternativas seguras, horarios óptimos en parques públicos, y cómo maximizar el uso del parque de la Rosa.'
      }
    ],
    localTip: 'Si vives en Cartagena, aprovecha las primeras horas de la mañana para llevar a tu perro al Parque de la Rosa antes de que haga demasiado calor. Los paseos por el paseo marítimo son ideales al atardecer, cuando baja la temperatura y hay brisa.',
    testimonials: [
      {
        name: 'Pedro Ruiz',
        neighborhood: 'Los Dolores',
        rating: 5,
        text: 'Mi pastor alemán tiraba tanto de la correa que pasear era un sufrimiento. Ahora caminamos juntos tranquilamente incluso por La Manga llena de gente.',
        problem: 'Tirones de correa'
      },
      {
        name: 'Ana Fernández',
        neighborhood: 'Santa Lucía',
        rating: 5,
        text: 'Necesitábamos ayuda urgente con los ladridos de nuestro beagle. Los vecinos se quejaban. En 6 semanas el cambio ha sido increíble.',
        problem: 'Ladridos excesivos'
      },
      {
        name: 'Miguel Torres',
        neighborhood: 'Cabo de Palos',
        rating: 5,
        text: 'Vivimos cerca de la playa y mi perra se volvía loca persiguiendo gaviotas. Ahora puedo soltarla tranquilo. Trabajo excelente.',
        problem: 'Persecución de aves'
      }
    ]
  },
  
  'alicante': {
    slug: 'alicante',
    parks: [
      {
        name: 'Parque Canino La Tuna',
        location: 'Ladera Monte Benacantil - Barrio San Antón',
        size: '800 m²',
        features: [
          'Vistas al Castillo de Santa Bárbara',
          'Zona de agility completa',
          'Bebederos automáticos',
          'Buena ventilación natural',
          'Parking cercano'
        ],
        highlight: 'Ubicación privilegiada con vistas'
      },
      {
        name: 'Parque Canino Camino del Faro',
        location: 'Cabo de las Huertas',
        size: '400 m²',
        features: [
          'Zona tranquila junto al mar',
          'Pinos que dan sombra natural',
          'Fuente adaptada',
          'Bancos para descanso',
          'Vallas altas de seguridad'
        ],
        highlight: 'Perfecto para perros que disfrutan la brisa marina'
      },
      {
        name: 'Parque de Sergio Melgares (PAU 5)',
        location: 'Playa San Juan',
        size: '5.000 m²',
        features: [
          'Parque extenso dog-friendly',
          'Zona pipicán vallada',
          'Lagos artificiales',
          'Senderos amplios',
          '"El Rinconcito" - Memorial de mascotas',
          'Múltiples zonas de césped'
        ],
        schedule: 'Abierto 24h',
        highlight: 'El parque más completo de Alicante para disfrutar con tu perro'
      },
      {
        name: 'Parque del Mar',
        location: 'Cerca Estación de Autobuses',
        size: 'Muy extenso',
        features: [
          'Zonas verdes amplias',
          'Caminos de arena',
          'Fuentes y cascadas',
          'Vegetación abundante (sombra)',
          'Múltiples accesos'
        ],
        highlight: 'Ideal para paseos largos y relajados'
      },
      {
        name: 'Parque Canino El Campello',
        location: 'El Campello (cerca Alicante)',
        size: '600 m²',
        features: [
          'A 500m de Playa Canina Punta del Riu',
          'Césped natural',
          'Juegos de agility',
          'Árboles con sombra',
          'Zona ideal para combinar playa + parque'
        ],
        highlight: 'Combina parque canino y playa dog-friendly'
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Calor Mediterráneo Intenso',
        description: 'Alicante supera los 35°C en verano con alta humedad. El paseo marítimo y calles del centro alcanzan temperaturas de asfalto peligrosas.',
        solution: 'Rutas diseñadas por zonas con sombra. Horarios adaptados al clima mediterráneo. Técnicas de refrigeración y prevención de golpes de calor.'
      },
      {
        icon: 'urban',
        title: 'Turismo y Aglomeraciones',
        description: 'Alicante recibe millones de turistas. Tu perro necesita estar cómodo en entornos con mucha gente, terrazas llenas y niños corriendo.',
        solution: 'Entrenamiento específico para entornos urbanos concurridos. Control en zonas turísticas. Socialización con personas de todo tipo.'
      },
      {
        icon: 'regulation',
        title: 'Normativa Playera',
        description: 'Alicante tiene playas caninas específicas con normativa propia. No todos los perros están cómodos en la playa inicialmente.',
        solution: 'Te enseñamos la normativa de cada playa canina, cómo introducir a tu perro al mar de forma segura, y comportamiento adecuado en playas.'
      }
    ],
    localTip: 'Alicante cuenta con varios parques dog-friendly excelentes. Te recomendamos alternar entre el Parque de Sergio Melgares para socialización intensa y el Parque del Mar para paseos más tranquilos. Si vives en San Juan, tienes el combo perfecto: parque canino + playa canina a 500m.',
    testimonials: [
      {
        name: 'Elena Mora',
        neighborhood: 'San Juan Playa',
        rating: 5,
        text: 'Tenía un cachorro de labrador que se volvía loco en la playa. Ahora disfruta del mar de forma controlada y segura. Las apps de seguimiento son geniales.',
        problem: 'Hiperactividad en playa'
      },
      {
        name: 'David Parra',
        neighborhood: 'Centro',
        rating: 5,
        text: 'Mi yorkshire ladraba a todos los turistas en la Explanada. Era insoportable. Ahora paseamos tranquilos por el centro. Cambio radical.',
        problem: 'Ladridos a desconocidos'
      },
      {
        name: 'Carmen Gil',
        neighborhood: 'Cabo de las Huertas',
        rating: 5,
        text: 'Alfredo vino a casa y trabajamos los tirones de correa en mi propio barrio. Resultados muy rápidos. Lo recomiendo 100%.',
        problem: 'Tirones de correa'
      }
    ]
  },

  'molina-de-segura': {
    slug: 'molina-de-segura',
    parks: [
      {
        name: 'Parque Canino de la Compañía',
        location: 'Centro - Parque de la Compañía',
        size: '450 m²',
        features: [
          'Zona vallada segura',
          'Bebederos automáticos',
          'Bancos con sombra',
          'Dispensadores de bolsas',
          'Buena iluminación'
        ],
        schedule: 'Abierto 24h'
      },
      {
        name: 'Zona Canina Paraje La Murta',
        location: 'Zona natural de La Murta',
        features: [
          'Entorno natural privilegiado',
          'Rutas de senderismo cercanas',
          'Amplio espacio para correr',
          'Zona fresca y arbolada'
        ],
        highlight: 'Perfecto para perros que aman la naturaleza'
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Calor Industrial',
        description: 'Molina es una ciudad industrial con veranos muy calurosos. Las zonas industriales acumulan mucho calor, alcanzando los 40°C fácilmente.',
        solution: 'Rutas alejadas de polígonos industriales. Horarios adaptados al clima local. Entrenamiento para paseos en zonas residenciales con más vegetación.'
      },
      {
        icon: 'urban',
        title: 'Casas con Patio',
        description: 'Muchas viviendas en Molina tienen patio. Los perros necesitan educación específica para no ladrar excesivamente a vecinos o transeúntes.',
        solution: 'Programa anti-ladridos específico para perros en patios. Control de territorialidad. Convivencia armónica con vecinos.'
      },
      {
        icon: 'regulation',
        title: 'Convivencia Vecinal',
        description: 'Ciudad con alta densidad de perros. Importante respetar normas de convivencia y zonas permitidas para evitar conflictos.',
        solution: 'Educación en civismo urbano. Uso correcto de pipicanes. Socialización controlada para evitar problemas con otros perros.'
      }
    ],
    localTip: 'En Molina de Segura, aprovecha el Paraje de La Murta para paseos largos los fines de semana. Es un entorno natural perfecto para que tu perro explore y haga ejercicio intenso lejos del calor de la ciudad.',
    testimonials: [
      {
        name: 'Antonio Gómez',
        neighborhood: 'El Llano',
        rating: 5,
        text: 'Mi pitbull ladraba constantemente en el patio molestando a los vecinos. Alfredo nos ayudó a resolver el problema completamente. Ahora hay paz.',
        problem: 'Ladridos en patio'
      },
      {
        name: 'Rosa Jiménez',
        neighborhood: 'Centro',
        rating: 5,
        text: 'Necesitaba que mi perra caminara bien con correa por las calles del centro. En pocas sesiones conseguimos el objetivo. Muy profesional.',
        problem: 'Tirones de correa'
      },
      {
        name: 'José Luis Pérez',
        neighborhood: 'La Compañía',
        rating: 5,
        text: 'Trabajo en el polígono y mi pastor alemán sufría mucho el calor. Me enseñaron cómo adaptar los paseos y ahora está mucho mejor.',
        problem: 'Golpes de calor'
      }
    ]
  },

  'las-torres-de-cotillas': {
    slug: 'las-torres-de-cotillas',
    parks: [
      {
        name: 'Pipicán Municipal',
        location: 'Parque Municipal',
        size: '350 m²',
        features: [
          'Zona vallada',
          'Superficie de arena',
          'Bebedero',
          'Papeleras específicas',
          'Bancos'
        ]
      },
      {
        name: 'Zona Verde del Calvario',
        location: 'Ermita del Calvario',
        features: [
          'Zona abierta para paseos',
          'Vistas panorámicas',
          'Ambiente tranquilo'
        ]
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Clima Seco y Caluroso',
        description: 'Las Torres tiene veranos muy secos con temperaturas superiores a 38°C. Poco arbolado en algunas zonas residenciales.',
        solution: 'Identificación de rutas con sombra. Hidratación optimizada. Adaptación a clima continental extremo.'
      },
      {
        icon: 'urban',
        title: 'Ciudad en Crecimiento',
        description: 'Las Torres está creciendo rápidamente. Nuevas urbanizaciones con muchos perros jóvenes que necesitan socialización.',
        solution: 'Programas de socialización temprana para cachorros. Adaptación a entornos urbanos nuevos. Convivencia en comunidades.'
      },
      {
        icon: 'regulation',
        title: 'Normativa Municipal',
        description: 'El ayuntamiento ha reforzado controles sobre tenencia responsable. Multas por excrementos y perros sueltos fuera de zonas habilitadas.',
        solution: 'Formación en normativa local. Educación para uso correcto de espacios públicos. Tenencia responsable certificada.'
      }
    ],
    localTip: 'Las Torres de Cotillas está creciendo mucho. Si vives en una urbanización nueva, es fundamental socializar a tu perro desde cachorro con los vecinos y sus mascotas para una convivencia perfecta.',
    testimonials: [
      {
        name: 'Carmen Ruiz',
        neighborhood: 'Los Pulpites',
        rating: 5,
        text: 'Compramos casa nueva y mi beagle no se adaptaba. Ladraba a todo. Con ayuda profesional ahora está perfectamente integrado.',
        problem: 'Ansiedad por cambio de hogar'
      },
      {
        name: 'Miguel Sánchez',
        neighborhood: 'Centro',
        rating: 5,
        text: 'Mi cachorro de labrador era muy movido. Las sesiones a domicilio fueron perfectas. Ahora es un perro equilibrado.',
        problem: 'Hiperactividad cachorro'
      },
      {
        name: 'Isabel Navarro',
        neighborhood: 'La Loma',
        rating: 5,
        text: 'Problemas de convivencia con vecinos por ladridos. Alfredo resolvió todo rápido y bien. Muy recomendable.',
        problem: 'Ladridos excesivos'
      }
    ]
  },

  'cieza': {
    slug: 'cieza',
    parks: [
      {
        name: 'Parque Canino Municipal',
        location: 'Paseo',
        size: '400 m²',
        features: [
          'Vallado perimetral',
          'Zona de juegos',
          'Bebederos',
          'Iluminación nocturna'
        ]
      },
      {
        name: 'Zona del Río Segura',
        location: 'Márgenes del Río Segura',
        features: [
          'Paseos junto al río',
          'Zonas naturales amplias',
          'Ambiente fresco',
          'Ideal para paseos largos'
        ],
        highlight: 'Perfecto en verano por la brisa del río'
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Calor Extremo del Valle',
        description: 'Cieza está en el Valle del Segura con temperaturas que superan los 42°C en julio-agosto. Uno de los puntos más calurosos de España.',
        solution: 'Estrategias específicas para clima extremo. Paseos muy tempranos o muy tardíos. Detección de síntomas de golpe de calor.'
      },
      {
        icon: 'urban',
        title: 'Perros en Entorno Rural',
        description: 'Cieza combina zona urbana con entorno rural. Perros necesitan adaptarse a tractores, animales de granja, y entorno agrícola.',
        solution: 'Desensibilización a ruidos rurales (tractores, maquinaria). Control con animales de granja. Seguridad en entornos mixtos.'
      },
      {
        icon: 'regulation',
        title: 'Zonas Agrícolas',
        description: 'Importante no acceder a zonas de cultivo privadas. Respeto a propiedades agrícolas y caminos rurales.',
        solution: 'Educación sobre zonas permitidas. Control en caminos rurales. Respeto a propiedades privadas y cultivos.'
      }
    ],
    localTip: 'Cieza tiene un clima muy extremo en verano. Aprovecha las zonas cercanas al Río Segura para pasear - la brisa del río refresca varios grados la temperatura y tu perro lo agradecerá enormemente.',
    testimonials: [
      {
        name: 'Francisco Martínez',
        neighborhood: 'Centro',
        rating: 5,
        text: 'Mi pointer perseguía pájaros en los campos. Era peligroso. Ahora tiene control perfecto incluso en zonas rurales.',
        problem: 'Persecución de aves'
      },
      {
        name: 'María José López',
        neighborhood: 'Barrio San Sebastián',
        rating: 5,
        text: 'El calor de Cieza es brutal. Aprendí a gestionar los paseos en verano sin arriesgar a mi perro. Excelente asesoramiento.',
        problem: 'Golpes de calor'
      },
      {
        name: 'Juan García',
        neighborhood: 'La Ermita',
        rating: 5,
        text: 'Mi border collie se ponía nervioso con tractores y maquinaria agrícola. Trabajo perfecto de desensibilización.',
        problem: 'Miedo a ruidos rurales'
      }
    ]
  },

  'archena': {
    slug: 'archena',
    parks: [
      {
        name: 'Zona Canina Municipal',
        location: 'Parque Municipal',
        size: '300 m²',
        features: [
          'Vallado completo',
          'Zona de sombra',
          'Bebedero',
          'Dispensadores de bolsas'
        ]
      },
      {
        name: 'Zona Río Segura',
        location: 'Paseo del Río',
        features: [
          'Paseo fluvial extenso',
          'Ambiente natural',
          'Zonas de baño (río)',
          'Rutas de senderismo'
        ],
        highlight: 'Zona termal y paseo junto al río'
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Calor y Humedad Termal',
        description: 'Archena es zona termal con calor + humedad. Clima especialmente exigente para perros en verano cerca del balneario.',
        solution: 'Gestión de calor húmedo. Rutas por zonas altas alejadas del agua termal. Adaptación a microclima local.'
      },
      {
        icon: 'urban',
        title: 'Turismo Termal',
        description: 'Archena recibe muchos turistas por el balneario. Perros necesitan estar tranquilos en entornos con visitantes.',
        solution: 'Socialización con personas mayores (perfil termal). Comportamiento en zonas turísticas. Control en entornos concurridos.'
      },
      {
        icon: 'regulation',
        title: 'Zona Balneario',
        description: 'Restricciones específicas en zona del balneario. No todos los espacios permiten perros cerca de instalaciones termales.',
        solution: 'Conocimiento de zonas permitidas. Rutas alternativas. Respeto a espacios de salud y bienestar.'
      }
    ],
    localTip: 'Archena tiene un microclima especial por el balneario. Para pasear en verano, aléjate de la zona termal y sube hacia las zonas altas del pueblo donde hay más brisa y menos humedad.',
    testimonials: [
      {
        name: 'Ana Hernández',
        neighborhood: 'El Balneario',
        rating: 5,
        text: 'Vivo cerca del balneario y mi perro se agobiaba con tanta gente mayor. Ahora camina tranquilo entre visitantes.',
        problem: 'Nerviosismo con turistas'
      },
      {
        name: 'Pedro Soriano',
        neighborhood: 'Centro',
        rating: 5,
        text: 'La humedad de la zona termal afectaba mucho a mi bulldog francés. Aprendí a gestionar sus paseos perfectamente.',
        problem: 'Dificultad respiratoria por humedad'
      },
      {
        name: 'Lucía Martínez',
        neighborhood: 'Río Segura',
        rating: 5,
        text: 'Mi perra se metía al río en zonas peligrosas. El entrenamiento de control a distancia ha sido fundamental.',
        problem: 'Escapadas al río'
      }
    ]
  },

  'fortuna': {
    slug: 'fortuna',
    parks: [
      {
        name: 'Pipicán Municipal',
        location: 'Zona Centro',
        size: '250 m²',
        features: [
          'Vallado perimetral',
          'Bebedero',
          'Bancos',
          'Papeleras'
        ]
      },
      {
        name: 'Entorno del Castillo',
        location: 'Subida al Castillo',
        features: [
          'Rutas de senderismo',
          'Vistas panorámicas',
          'Zona natural',
          'Ejercicio intenso'
        ],
        highlight: 'Ideal para perros activos'
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Calor del Interior',
        description: 'Fortuna tiene clima continental con veranos muy calurosos. Zona interior con poca brisa y temperaturas extremas.',
        solution: 'Rutas de montaña en verano (más frescas). Adaptación a calor seco. Paseos en zonas altas del pueblo.'
      },
      {
        icon: 'urban',
        title: 'Pueblo Tranquilo',
        description: 'Fortuna es un pueblo pequeño y tranquilo. Perros acostumbrados aquí pueden tener problemas en ciudades grandes.',
        solution: 'Socialización para perros de pueblo. Preparación para visitas a ciudades. Adaptación a diferentes entornos.'
      },
      {
        icon: 'regulation',
        title: 'Entorno Rural',
        description: 'Zona con campos de cultivo y ganado cercano. Importante control de perros cerca de animales de granja.',
        solution: 'Control con animales de granja. Respeto a zonas agrícolas. Seguridad en caminos rurales.'
      }
    ],
    localTip: 'Fortuna es perfecta para perros activos. Aprovecha las rutas hacia el Castillo para dar paseos con desnivel - es excelente ejercicio y en verano la altura hace que esté más fresco que en el pueblo.',
    testimonials: [
      {
        name: 'José Antonio Ruiz',
        neighborhood: 'Centro',
        rating: 5,
        text: 'Mi perro de caza se escapaba persiguiendo conejos. El trabajo de llamada a distancia ha sido perfecto.',
        problem: 'Escapadas de caza'
      },
      {
        name: 'Marta González',
        neighborhood: 'Las Casicas',
        rating: 5,
        text: 'Necesitaba preparar a mi perra para mudarnos a Murcia capital. El entrenamiento de adaptación urbana fue clave.',
        problem: 'Adaptación a ciudad'
      },
      {
        name: 'Alberto Sánchez',
        neighborhood: 'El Castillo',
        rating: 5,
        text: 'Mi border collie necesitaba mucho ejercicio. Las rutas de montaña y el plan de actividades han sido perfectos.',
        problem: 'Exceso de energía'
      }
    ]
  },

  'ulea': {
    slug: 'ulea',
    parks: [
      {
        name: 'Zona Verde Municipal',
        location: 'Centro del pueblo',
        size: '200 m²',
        features: [
          'Espacio vallado pequeño',
          'Bebedero',
          'Zona de sombra natural',
          'Ambiente familiar'
        ]
      },
      {
        name: 'Entorno del Valle de Ricote',
        location: 'Valle de Ricote',
        features: [
          'Rutas naturales espectaculares',
          'Paisaje de huerta tradicional',
          'Río Segura cercano',
          'Senderismo en naturaleza'
        ],
        highlight: 'Uno de los entornos naturales más bonitos de Murcia'
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Calor del Valle',
        description: 'Ulea está en el Valle de Ricote, zona de calor intenso en verano. Microclima cálido por estar en valle encajonado.',
        solution: 'Aprovechamiento de zonas junto al río (más frescas). Paseos muy tempranos. Gestión de calor en valle.'
      },
      {
        icon: 'urban',
        title: 'Pueblo Muy Pequeño',
        description: 'Ulea tiene solo 1.000 habitantes. Perros muy habituados a entorno tranquilo necesitan socialización extra.',
        solution: 'Socialización proactiva con visitas a pueblos cercanos. Exposición controlada a diferentes entornos. Prevención de miedos urbanos.'
      },
      {
        icon: 'regulation',
        title: 'Entorno Rural-Natural',
        description: 'Zona con mucha fauna silvestre, cultivos tradicionales y ganado. Control especialmente importante.',
        solution: 'Control con fauna silvestre. Respeto a huertos tradicionales. Seguridad en caminos de montaña.'
      }
    ],
    localTip: 'Ulea está en el corazón del Valle de Ricote, un entorno natural privilegiado. Aprovecha las rutas de senderismo del valle para dar paseos espectaculares con tu perro - es uno de los paisajes más bonitos de la región.',
    testimonials: [
      {
        name: 'Manuel Fernández',
        neighborhood: 'Centro',
        rating: 5,
        text: 'Mi pointer perseguía todo lo que se movía en el campo. El entrenamiento de control ha sido fundamental para su seguridad.',
        problem: 'Instinto de caza'
      },
      {
        name: 'Josefa Martínez',
        neighborhood: 'La Fuente',
        rating: 5,
        text: 'Queríamos llevar a nuestro perro a Murcia de visita pero se asustaba. La preparación gradual funcionó perfecto.',
        problem: 'Miedo a la ciudad'
      },
      {
        name: 'Andrés López',
        neighborhood: 'Valle',
        rating: 5,
        text: 'Vivo en una casa de campo y mi pastor tenía problemas territoriales con visitantes. Ahora todo perfecto.',
        problem: 'Agresividad territorial'
      }
    ]
  },

  'valencia': {
    slug: 'valencia',
    parks: [
      {
        name: 'Jardín del Turia - Circuito Agility',
        location: 'Tramo IV - Bajo Pont de Les Arts',
        size: '9 km de jardín (circuito ~200m²)',
        features: [
          'Circuito Agility profesional completo',
          'Mesas, balancines, pasarelas',
          'Túneles, saltos, slalom',
          'Carteles explicativos',
          'Más de 9 km de paseo'
        ],
        schedule: 'Abierto 24h',
        highlight: 'El circuito de agility más completo de Valencia'
      },
      {
        name: 'Parque de Cabecera',
        location: 'Zona Oeste - Junto al Bioparc',
        size: '1.000 m²+ zona canina',
        features: [
          'Extensas zonas verdes',
          'Lago artificial',
          'Zona canina vallada',
          'Ambiente tranquilo',
          'Parking cercano'
        ],
        highlight: 'El más natural y tranquilo'
      },
      {
        name: 'Parque Central',
        location: 'Barrio Ruzafa - Zona 18',
        size: '1.382 m²',
        features: [
          'Parque moderno inaugurado 2020',
          'Valla de 1,5m de altura',
          'Dispensadores bolsas',
          'Fuentes de agua',
          'Bancos con sombra',
          'Muy completo y nuevo'
        ],
        schedule: 'Abierto 24h',
        highlight: 'El más moderno de Valencia'
      },
      {
        name: 'Parque Canino Marxalenes',
        location: 'Zona Norte - Parque de Marxalenes',
        size: '700 m²',
        features: [
          'Recientemente renovado',
          'Zonas separadas por tamaño',
          'Iluminación óptima',
          'Limpieza frecuente',
          'Fuentes adaptadas'
        ],
        highlight: 'Punto de referencia zona norte'
      },
      {
        name: 'Parque de la Rambleta',
        location: 'Distrito Jesús',
        size: '1.000 m²',
        features: [
          'Zona de socialización amplia',
          'Muy frecuentado',
          'Buena socialización',
          'Accesos múltiples'
        ]
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Calor y Humedad Mediterránea',
        description: 'Valencia combina calor (35°C+) con humedad alta por estar en la costa. Sensación térmica muy elevada en verano.',
        solution: 'Rutas por Jardín del Turia (más fresco). Paseos matinales o nocturnos. Hidratación constante. Uso de parques con sombra abundante.'
      },
      {
        icon: 'urban',
        title: 'Ciudad Grande y Activa',
        description: 'Valencia es la tercera ciudad de España. Tráfico intenso, mucha gente, turismo, eventos. Perros necesitan adaptación urbana completa.',
        solution: 'Socialización en entornos urbanos intensos. Control en zonas turísticas. Adaptación a ruidos de ciudad (tráfico, obras, eventos).'
      },
      {
        icon: 'regulation',
        title: 'Más de 90 Zonas Caninas',
        description: 'Valencia tiene +90 espacios para perros con normativas específicas. Solo se puede soltar en zonas autorizadas, multas importantes.',
        solution: 'Conocimiento completo de zonas permitidas. Educación para uso correcto de pipicanes. Respeto absoluto a normativa municipal.'
      }
    ],
    localTip: 'Valencia tiene más de 90 zonas caninas - aprovéchalas rotando entre varias para que tu perro conozca diferentes entornos. El Jardín del Turia es perfecto para paseos largos, y el Parque Central para socialización intensa.',
    testimonials: [
      {
        name: 'Carlos Martínez',
        neighborhood: 'Ruzafa',
        rating: 5,
        text: 'Mi husky siberiano sufría mucho el calor valenciano. Me enseñaron estrategias específicas y ahora está perfecto.',
        problem: 'Golpes de calor'
      },
      {
        name: 'Laura Sánchez',
        neighborhood: 'Benimaclet',
        rating: 5,
        text: 'Vivir en Valencia con perro requiere educación urbana. Mi perra ahora camina perfecta por el centro lleno de gente.',
        problem: 'Nerviosismo en ciudad'
      },
      {
        name: 'Miguel Torres',
        neighborhood: 'Mestalla',
        rating: 5,
        text: 'Los días de partido mi perro se ponía nervioso con el ruido. El trabajo de desensibilización ha sido clave.',
        problem: 'Miedo a ruidos urbanos'
      },
      {
        name: 'Patricia Ruiz',
        neighborhood: 'El Carmen',
        rating: 5,
        text: 'Necesitaba que mi border collie se comportara bien en terrazas del centro. Ahora disfrutamos juntos de Valencia.',
        problem: 'Comportamiento en terrazas'
      }
    ]
  },

  'albacete': {
    slug: 'albacete',
    parks: [
      {
        name: 'Parque Canino Abelardo Sánchez',
        location: 'Parque Abelardo Sánchez',
        size: '800 m²',
        features: [
          'Dentro del parque más grande de Albacete',
          'Zona vallada amplia',
          'Bebederos múltiples',
          'Bancos con sombra',
          'Muy frecuentado'
        ],
        highlight: 'El parque canino principal de la ciudad'
      },
      {
        name: 'Zona Canina Parque Lineal',
        location: 'Parque Lineal',
        size: '500 m²',
        features: [
          'Zona moderna',
          'Buena iluminación',
          'Superficie adecuada',
          'Dispensadores de bolsas'
        ]
      },
      {
        name: 'Pipicán de la Pulgosa',
        location: 'Barrio La Pulgosa',
        size: '400 m²',
        features: [
          'Zona residencial',
          'Vallado completo',
          'Bebedero',
          'Ambiente familiar'
        ]
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Clima Continental Extremo',
        description: 'Albacete tiene clima continental muy marcado: veranos de 38°C e inviernos de -5°C. Adaptación necesaria a ambos extremos.',
        solution: 'Gestión de calor extremo en verano Y frío intenso en invierno. Protección en ambas estaciones. Adaptación a amplitud térmica.'
      },
      {
        icon: 'urban',
        title: 'Viento de la Mancha',
        description: 'Albacete es conocida por el viento fuerte. Perros sensibles necesitan habituarse a rachas intensas y polvo.',
        solution: 'Desensibilización a viento fuerte. Protección ocular en días de polvo. Adaptación a condiciones climáticas adversas.'
      },
      {
        icon: 'regulation',
        title: 'Ciudad Castellano-Manchega',
        description: 'Normativa específica de Castilla-La Mancha. Importante conocer ordenanzas locales y provinciales.',
        solution: 'Conocimiento de normativa autonómica y local. Educación en civismo urbano castellano-manchego.'
      }
    ],
    localTip: 'El clima de Albacete es muy extremo - mucho calor en verano y mucho frío en invierno. Prepara a tu perro para ambas estaciones y ten especial cuidado con los días de viento fuerte, característicos de La Mancha.',
    testimonials: [
      {
        name: 'Javier Molina',
        neighborhood: 'Centro',
        rating: 5,
        text: 'El viento de Albacete asustaba mucho a mi galgo. El trabajo de habituación ha sido fundamental.',
        problem: 'Miedo al viento'
      },
      {
        name: 'Cristina López',
        neighborhood: 'La Pulgosa',
        rating: 5,
        text: 'Mi pastor alemán sufría tanto el calor del verano como el frío del invierno. Ahora está adaptado a todo.',
        problem: 'Sensibilidad climática'
      },
      {
        name: 'Roberto García',
        neighborhood: 'Franciscanos',
        rating: 5,
        text: 'Problemas de convivencia en la comunidad. Las sesiones a domicilio resolvieron todo perfectamente.',
        problem: 'Ladridos en escalera'
      }
    ]
  },

  'madrid': {
    slug: 'madrid',
    parks: [
      {
        name: 'Parque Canino de La Vaguada',
        location: 'Barrio de Pilar',
        size: '4.000 m²',
        features: [
          'El parque canino más grande de España',
          'Zonas separadas por tamaño de perro',
          'Circuito de agility completo',
          'Múltiples fuentes y bebederos',
          'Iluminación nocturna LED',
          'Limpieza diaria'
        ],
        schedule: 'Abierto 24h',
        highlight: 'El pipicán más grande y completo de Madrid'
      },
      {
        name: 'Parque del Retiro - Zona Canina',
        location: 'Retiro - Entrada Alfonso XII',
        size: '3.500 m²',
        features: [
          'Ubicación privilegiada',
          'En el parque más emblemático',
          'Zona vallada amplia',
          'Entorno arbolado',
          'Muy concurrido'
        ],
        highlight: 'El más céntrico y emblemático'
      },
      {
        name: 'Parque Canino Madrid Río',
        location: 'Madrid Río - Sector 1',
        size: '2.500 m²',
        features: [
          'Junto al río Manzanares',
          'Zona de agility',
          'Fuentes adaptadas',
          'Bancos con sombra',
          'Acceso desde carril bici'
        ]
      },
      {
        name: 'Casa de Campo - Área Canina',
        location: 'Casa de Campo - Zona Pinar',
        features: [
          'Entorno natural extenso',
          'Rutas de senderismo',
          'Zonas de bosque',
          'Ideal para perros activos'
        ],
        highlight: 'El pulmón verde de Madrid'
      }
    ],
    challenges: [
      {
        icon: 'urban',
        title: 'Gran Ciudad: Estrés Urbano',
        description: 'Madrid es la capital, con 3.3 millones de habitantes. Tráfico intenso, ruido constante, metro, autobuses, aglomeraciones. Entorno muy exigente.',
        solution: 'Socialización urbana completa. Desensibilización a ruidos de ciudad. Control en espacios concurridos. Adaptación al transporte público.'
      },
      {
        icon: 'heat',
        title: 'Clima Continental Extremo',
        description: 'Veranos de 40°C e inviernos de -5°C. Madrid tiene una amplitud térmica muy grande que afecta a los perros.',
        solution: 'Adaptación a calor extremo y frío intenso. Protección en ambas estaciones. Gestión de paseos según temperatura.'
      },
      {
        icon: 'regulation',
        title: 'Más de 700 Zonas Caninas',
        description: 'Madrid tiene más de 700 espacios para perros. Normativa municipal estricta con multas de hasta 3.000€.',
        solution: 'Conocimiento completo de normativa madrileña. Uso correcto de pipicanes. Civismo urbano y tenencia responsable.'
      }
    ],
    localTip: 'Madrid tiene más de 700 zonas caninas - más que ninguna otra ciudad española. Aprovecha la Casa de Campo para paseos largos en naturaleza y el Retiro para socialización urbana. Madrid Río es perfecto para combinar paseo + ejercicio.',
    testimonials: [
      {
        name: 'Alberto Sánchez',
        neighborhood: 'Chamberí',
        rating: 5,
        text: 'Vivir en Madrid centro con un perro grande era complicado. Las técnicas de paseo urbano han cambiado nuestra vida.',
        problem: 'Estrés en ciudad'
      },
      {
        name: 'Patricia Gómez',
        neighborhood: 'Retiro',
        rating: 5,
        text: 'Mi teckel ladraba en el metro a todo el mundo. Ahora viajamos tranquilos en transporte público.',
        problem: 'Ladridos en metro'
      },
      {
        name: 'Javier Martín',
        neighborhood: 'Moncloa',
        rating: 5,
        text: 'Mi golden retriever tiraba de la correa por toda la Gran Vía. El entrenamiento ha sido perfecto.',
        problem: 'Tirones de correa'
      }
    ]
  },

  'barcelona': {
    slug: 'barcelona',
    parks: [
      {
        name: 'Parc Canino de la Ciutadella',
        location: 'Parc de la Ciutadella',
        size: '2.000 m²',
        features: [
          'En el parque más emblemático',
          'Zona vallada amplia',
          'Circuito de agility',
          'Muy frecuentado',
          'Ambiente cosmopolita'
        ],
        highlight: 'El más céntrico de Barcelona'
      },
      {
        name: 'Parc Canino del Guinardó',
        location: 'Parc del Guinardó',
        size: '1.500 m²',
        features: [
          'En zona alta con vistas',
          'Menos concurrido',
          'Buena ventilación',
          'Zona arbolada',
          'Ideal para perros tranquilos'
        ]
      },
      {
        name: 'Zona Canina Diagonal Mar',
        location: 'Parc del Centre del Poblenou',
        size: '3.000 m²',
        features: [
          'Zona moderna junto al mar',
          'Parque muy amplio',
          'Brisa marina',
          'Instalaciones nuevas',
          'Parking cercano'
        ]
      },
      {
        name: 'Parc Canino de Can Dragó',
        location: 'Nou Barris',
        size: '1.000 m²',
        features: [
          'Zona residencial',
          'Bien equipado',
          'Bebederos múltiples',
          'Bancos con sombra'
        ]
      }
    ],
    challenges: [
      {
        icon: 'urban',
        title: 'Segunda Ciudad de España',
        description: 'Barcelona tiene 1.6M habitantes + turismo masivo. Tráfico, metro, ruido, eventos, manifestaciones. Entorno urbano muy exigente.',
        solution: 'Socialización en entornos metropolitanos. Control en zonas turísticas. Adaptación a multitudes y TMB (metro/bus).'
      },
      {
        icon: 'heat',
        title: 'Calor Mediterráneo y Humedad',
        description: 'Barcelona combina calor veraniego (32°C+) con humedad alta por el mar. Sensación térmica elevada.',
        solution: 'Gestión de calor húmedo costero. Paseos por zonas con brisa marina. Hidratación constante.'
      },
      {
        icon: 'regulation',
        title: 'Más de 150 Áreas Caninas',
        description: 'Barcelona tiene 150+ zonas caninas. Normativa estricta, multas de hasta 3.000€. Ordenanza específica de tenencia animal.',
        solution: 'Conocimiento profundo de ordenanza de Barcelona. Uso correcto de áreas caninas. Civismo y convivencia urbana.'
      }
    ],
    localTip: 'Barcelona tiene más de 150 áreas caninas repartidas por toda la ciudad. Rota entre varios parques para que tu perro conozca diferentes entornos. La Ciutadella es perfecta para socialización, y Diagonal Mar para disfrutar la brisa del mar.',
    testimonials: [
      {
        name: 'Marc Soler',
        neighborhood: 'Eixample',
        rating: 5,
        text: 'Viure a l\'Eixample amb un gos gran era complicat. Ara passegem tranquils fins i tot per Passeig de Gràcia.',
        problem: 'Estrés urbà'
      },
      {
        name: 'Laura Puig',
        neighborhood: 'Gràcia',
        rating: 5,
        text: 'El meu gos es posava nerviós amb tanta gent als carrers. El treball ha estat perfecte.',
        problem: 'Nerviosisme amb turistes'
      },
      {
        name: 'David Romero',
        neighborhood: 'Poble Sec',
        rating: 5,
        text: 'Problemas con el metro - mi perro se asustaba. Ahora viajamos sin problemas por toda Barcelona.',
        problem: 'Miedo al metro'
      }
    ]
  },

  'almeria': {
    slug: 'almeria',
    parks: [
      {
        name: 'Parque Canino Nicolás Salmerón',
        location: 'Paseo Nicolás Salmerón - Frente al mar',
        size: '600 m²',
        features: [
          'Ubicación privilegiada junto al mar',
          'Brisa marina constante',
          'Vistas al Mediterráneo',
          'Zona vallada',
          'Bebederos',
          'Muy céntrico'
        ],
        highlight: 'El único parque canino con vistas al mar'
      },
      {
        name: 'Zona Canina Parque de las Familias',
        location: 'Nueva Almería',
        size: '500 m²',
        features: [
          'Zona moderna',
          'Bien equipado',
          'Iluminación LED',
          'Bancos con sombra',
          'Parking cercano'
        ]
      },
      {
        name: 'Área Canina Cabo de Gata',
        location: 'Cabo de Gata',
        features: [
          'Entorno natural protegido',
          'Playas dog-friendly cercanas',
          'Rutas de senderismo',
          'Paisaje espectacular'
        ],
        highlight: 'Naturaleza salvaje del Cabo de Gata'
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Calor Desértico',
        description: 'Almería tiene el clima más seco y cálido de Europa continental. Temperaturas de 40°C+ con sol muy intenso todo el año.',
        solution: 'Gestión de calor extremo y sol constante. Paseos muy tempranos o nocturnos. Protección solar. Hidratación máxima.'
      },
      {
        icon: 'urban',
        title: 'Perros y Playa',
        description: 'Almería es ciudad costera con muchas playas. Perros necesitan educación específica para entornos playeros y maritimos.',
        solution: 'Educación playera específica. Control con agua de mar. Seguridad en entornos costeros. Adaptación a arena y oleaje.'
      },
      {
        icon: 'regulation',
        title: 'Parque Natural Cabo de Gata',
        description: 'Zona de Parque Natural con normativa específica. Restricciones en épocas de cría de aves y zonas protegidas.',
        solution: 'Conocimiento de normativa del Parque Natural. Respeto a fauna protegida. Rutas permitidas en espacios naturales.'
      }
    ],
    localTip: 'Almería tiene 300+ días de sol al año. Aprovecha la brisa marina del Paseo Nicolás Salmerón para pasear en verano - la temperatura junto al mar es varios grados más baja que en el interior de la ciudad.',
    testimonials: [
      {
        name: 'Antonio Fernández',
        neighborhood: 'Zapillo',
        rating: 5,
        text: 'Mi labrador quería meterse al mar constantemente. El entrenamiento de control en playa ha sido perfecto.',
        problem: 'Obsesión con el agua'
      },
      {
        name: 'María Carmen Ruiz',
        neighborhood: 'Nueva Almería',
        rating: 5,
        text: 'El calor de Almería es brutal. Aprendí a gestionar los paseos sin poner en riesgo a mi bulldog francés.',
        problem: 'Golpes de calor'
      },
      {
        name: 'José Manuel López',
        neighborhood: 'Cabo de Gata',
        rating: 5,
        text: 'Vivo en el parque natural y mi pointer perseguía aves protegidas. El trabajo de control ha sido fundamental.',
        problem: 'Persecución de fauna'
      }
    ]
  },

  // MURCIA - Ciudades restantes
  'lorca': {
    slug: 'lorca',
    parks: [
      {
        name: 'Parque Canino Alameda de Cervantes',
        location: 'Centro - Alameda',
        size: '600 m²',
        features: [
          'Zona céntrica',
          'Vallado perimetral',
          'Bebederos',
          'Bancos con sombra'
        ]
      },
      {
        name: 'Parque Almenara',
        location: 'Zona Norte',
        features: [
          'Parque extenso',
          'Rutas para paseo',
          'Zonas verdes amplias',
          'Entorno familiar'
        ]
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Calor del Alto Guadalentín',
        description: 'Lorca tiene veranos extremadamente calurosos (40°C+). Zona interior con calor seco e intenso.',
        solution: 'Paseos en horas muy tempranas o nocturnas. Gestión de calor extremo. Rutas con sombra.'
      },
      {
        icon: 'urban',
        title: 'Ciudad Media en Crecimiento',
        description: 'Lorca es una ciudad mediana con zonas urbanas y rurales. Perros necesitan adaptarse a ambos entornos.',
        solution: 'Socialización mixta urbano-rural. Adaptación a diferentes entornos. Control en zonas comerciales.'
      },
      {
        icon: 'regulation',
        title: 'Reconstrucción Post-Terremoto',
        description: 'Lorca está en proceso de renovación urbana. Obras, ruidos de construcción, cambios en el entorno.',
        solution: 'Desensibilización a ruidos de obras. Adaptación a cambios urbanos. Control en zonas en construcción.'
      }
    ],
    localTip: 'Lorca tiene un castillo espectacular. Las zonas altas de la ciudad son más frescas en verano - aprovéchalas para pasear con tu perro.',
    testimonials: [
      {
        name: 'Francisco López',
        neighborhood: 'Centro',
        rating: 5,
        text: 'El calor de Lorca en verano es brutal. Las estrategias de gestión térmica han salvado a mi perro.',
        problem: 'Golpes de calor'
      },
      {
        name: 'Rosa Martínez',
        neighborhood: 'La Viña',
        rating: 5,
        text: 'Con las obras de reconstrucción mi perra estaba nerviosa. El trabajo de habituación fue perfecto.',
        problem: 'Miedo a ruidos de obras'
      }
    ]
  },

  'yecla': {
    slug: 'yecla',
    parks: [
      {
        name: 'Parque Canino Municipal',
        location: 'Zona Centro',
        size: '400 m²',
        features: [
          'Vallado completo',
          'Bebedero automático',
          'Dispensadores de bolsas',
          'Iluminación'
        ]
      },
      {
        name: 'Monte Arabí',
        location: 'Paraje Natural',
        features: [
          'Entorno natural espectacular',
          'Rutas de senderismo',
          'Pinturas rupestres',
          'Paisaje único'
        ],
        highlight: 'Patrimonio de la Humanidad'
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Clima Continental del Altiplano',
        description: 'Yecla está en el altiplano murciano con clima continental extremo. Veranos de 38°C+ e inviernos fríos.',
        solution: 'Adaptación a amplitud térmica grande. Protección en verano e invierno. Gestión de clima extremo.'
      },
      {
        icon: 'urban',
        title: 'Tradición Vitivinícola',
        description: 'Yecla es zona de viñedos y bodegas. Perros necesitan adaptarse a entorno rural-vinícola.',
        solution: 'Control en zonas de viñedos. Respeto a propiedades agrícolas. Socialización rural.'
      },
      {
        icon: 'regulation',
        title: 'Entorno Rural',
        description: 'Zona con campo abierto y fauna silvestre. Importante control de perros en espacios naturales.',
        solution: 'Control en entornos naturales. Respeto a fauna silvestre. Seguridad en campos.'
      }
    ],
    localTip: 'Yecla tiene el Monte Arabí, un paraje natural increíble. Es perfecto para hacer senderismo con tu perro y disfrutar de vistas espectaculares.',
    testimonials: [
      {
        name: 'Juan Antonio García',
        neighborhood: 'Centro',
        rating: 5,
        text: 'Mi braco se escapaba persiguiendo conejos en el campo. El entrenamiento de llamada ha sido fundamental.',
        problem: 'Escapadas de caza'
      },
      {
        name: 'María José Sánchez',
        neighborhood: 'La Almazara',
        rating: 5,
        text: 'El frío del invierno en Yecla afectaba a mi galgo. Aprendí a protegerlo correctamente.',
        problem: 'Sensibilidad al frío'
      }
    ]
  },

  'jumilla': {
    slug: 'jumilla',
    parks: [
      {
        name: 'Parque Canino del Castillo',
        location: 'Junto al Castillo',
        size: '350 m²',
        features: [
          'Vistas al castillo',
          'Zona vallada',
          'Bebedero',
          'Ambiente histórico'
        ]
      },
      {
        name: 'Sierra del Carche',
        location: 'Parque Regional',
        features: [
          'Espacio natural protegido',
          'Rutas de montaña',
          'Paisaje espectacular',
          'Ideal para perros activos'
        ]
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Calor del Interior Murciano',
        description: 'Jumilla tiene veranos muy calurosos con temperaturas de 38-40°C. Zona interior seca.',
        solution: 'Paseos en horas frescas. Aprovechamiento de zonas de montaña (más frescas). Hidratación constante.'
      },
      {
        icon: 'urban',
        title: 'Pueblo Vinícola',
        description: 'Jumilla es famosa por sus vinos. Entorno rural con viñedos, bodegas y campo abierto.',
        solution: 'Adaptación a entorno rural-vinícola. Control en zonas agrícolas. Socialización en pueblo.'
      },
      {
        icon: 'regulation',
        title: 'Zona de Montaña',
        description: 'Sierra del Carche tiene normativa de espacio natural protegido. Restricciones específicas.',
        solution: 'Conocimiento de normativa del parque natural. Respeto a rutas señalizadas. Control de fauna.'
      }
    ],
    localTip: 'La Sierra del Carche es perfecta para escapadas con tu perro. Las rutas de montaña son ideales en verano porque están varios grados más frescas que el pueblo.',
    testimonials: [
      {
        name: 'Pedro Jiménez',
        neighborhood: 'Centro',
        rating: 5,
        text: 'Mi pastor belga necesitaba mucho ejercicio. Las rutas del Carche han sido la solución perfecta.',
        problem: 'Exceso de energía'
      },
      {
        name: 'Carmen Ruiz',
        neighborhood: 'El Castillo',
        rating: 5,
        text: 'El calor de Jumilla en agosto es insoportable. Las técnicas de gestión térmica nos han salvado.',
        problem: 'Golpes de calor'
      }
    ]
  },

  'totana': {
    slug: 'totana',
    parks: [
      {
        name: 'Parque Canino Municipal',
        location: 'Zona urbana',
        size: '400 m²',
        features: [
          'Vallado perimetral',
          'Bebederos',
          'Zona de sombra',
          'Bancos'
        ]
      },
      {
        name: 'Sierra Espuña',
        location: 'Parque Regional',
        features: [
          'Parque natural espectacular',
          'Rutas de senderismo múltiples',
          'Bosque de pinos',
          'Clima más fresco'
        ],
        highlight: 'Uno de los mejores parques naturales de Murcia'
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Calor del Valle',
        description: 'Totana tiene veranos muy calurosos (38-40°C). Zona interior con calor seco intenso.',
        solution: 'Escapadas a Sierra Espuña (10°C más fresca). Paseos nocturnos en verano. Gestión de calor extremo.'
      },
      {
        icon: 'urban',
        title: 'Ciudad Agrícola',
        description: 'Totana está rodeada de cultivos y campo. Perros necesitan control con entorno agrícola.',
        solution: 'Control en zonas de cultivo. Respeto a propiedades privadas. Socialización rural.'
      },
      {
        icon: 'regulation',
        title: 'Acceso a Sierra Espuña',
        description: 'Parque Regional con normativa específica. Restricciones en épocas de alto riesgo de incendio.',
        solution: 'Conocimiento de normativa del parque. Respeto a cierres temporales. Prevención de incendios.'
      }
    ],
    localTip: 'Sierra Espuña está a 10 minutos de Totana y es perfecta para escapar del calor. En verano, lleva a tu perro a la sierra donde las temperaturas son mucho más agradables.',
    testimonials: [
      {
        name: 'José Antonio López',
        neighborhood: 'La Santa',
        rating: 5,
        text: 'Mi border collie necesitaba rutas largas. Sierra Espuña ha sido un descubrimiento perfecto.',
        problem: 'Necesidad de ejercicio intenso'
      },
      {
        name: 'Ana María Sánchez',
        neighborhood: 'Centro',
        rating: 5,
        text: 'El calor de Totana en verano es tremendo. Aprender a gestionarlo ha sido fundamental.',
        problem: 'Golpes de calor'
      }
    ]
  },

  'caravaca-de-la-cruz': {
    slug: 'caravaca-de-la-cruz',
    parks: [
      {
        name: 'Parque Canino Municipal',
        location: 'Centro',
        size: '400 m²',
        features: [
          'Vallado completo',
          'Bebederos',
          'Zona de sombra',
          'Ambiente tranquilo'
        ]
      },
      {
        name: 'Fuentes del Marqués',
        location: 'Paraje natural',
        features: [
          'Manantiales naturales',
          'Rutas de senderismo',
          'Zona fresca y arbolada',
          'Paisaje espectacular'
        ],
        highlight: 'Oasis natural en el interior murciano'
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Calor del Noroeste',
        description: 'Caravaca tiene veranos calurosos (36-38°C) pero más suaves que el sur de Murcia. Zona de montaña.',
        solution: 'Aprovechamiento de zonas altas y umbrías. Rutas por Fuentes del Marqués (más frescas). Gestión de calor moderado.'
      },
      {
        icon: 'urban',
        title: 'Ciudad del Jubileo',
        description: 'Caravaca es ciudad santa con turismo religioso. Peregrinaciones, eventos, caballos del vino. Entorno especial.',
        solution: 'Socialización con turistas y peregrinos. Habituación a caballos (típicos de Caravaca). Control en eventos multitudinarios.'
      },
      {
        icon: 'regulation',
        title: 'Patrimonio Histórico',
        description: 'Centro histórico con restricciones. Importante respetar espacios patrimoniales y religiosos.',
        solution: 'Conocimiento de zonas permitidas. Respeto a espacios religiosos. Civismo en casco antiguo.'
      }
    ],
    localTip: 'Las Fuentes del Marqués son un oasis en Caravaca. Perfectas para escapar del calor en verano - el agua mantiene el entorno varios grados más fresco.',
    testimonials: [
      {
        name: 'Manuel García',
        neighborhood: 'El Salvador',
        rating: 5,
        text: 'Mi perro se asustaba con los caballos del Vino. El trabajo de habituación fue perfecto.',
        problem: 'Miedo a caballos'
      },
      {
        name: 'María José López',
        neighborhood: 'Centro',
        rating: 5,
        text: 'Durante el Jubileo hay muchísima gente. Preparar a mi perra para las multitudes fue clave.',
        problem: 'Estrés con multitudes'
      }
    ]
  },

  'cehegin': {
    slug: 'cehegin',
    parks: [
      {
        name: 'Parque Canino Municipal',
        location: 'Zona urbana',
        size: '300 m²',
        features: [
          'Vallado perimetral',
          'Bebedero',
          'Bancos',
          'Ambiente familiar'
        ]
      },
      {
        name: 'Casco Antiguo',
        location: 'Centro histórico',
        features: [
          'Calles empedradas',
          'Arquitectura tradicional',
          'Ambiente tranquilo',
          'Ideal para paseos relajados'
        ]
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Clima del Noroeste',
        description: 'Cehegín tiene veranos cálidos (35°C) pero inviernos más fríos que el sur. Amplitud térmica.',
        solution: 'Adaptación a cambios térmicos. Protección en invierno. Gestión de calor en verano.'
      },
      {
        icon: 'urban',
        title: 'Pueblo Tradicional',
        description: 'Cehegín mantiene carácter de pueblo. Entorno tranquilo, perros necesitan socialización para ciudades.',
        solution: 'Socialización para diferentes entornos. Preparación para visitas a ciudades. Adaptación gradual.'
      },
      {
        icon: 'regulation',
        title: 'Casco Histórico',
        description: 'Centro histórico con calles estrechas. Respeto a patrimonio y vecinos.',
        solution: 'Comportamiento adecuado en calles estrechas. Respeto a vecinos. Civismo en pueblo.'
      }
    ],
    localTip: 'El casco antiguo de Cehegín es precioso para pasear. Sus calles empedradas y tranquilas son perfectas para perros que disfrutan de paseos relajados.',
    testimonials: [
      {
        name: 'Antonio Martínez',
        neighborhood: 'Centro',
        rating: 5,
        text: 'Mi border collie se aburría en pueblo pequeño. Las rutas de ejercicio mental han sido perfectas.',
        problem: 'Aburrimiento y ansiedad'
      },
      {
        name: 'Carmen Sánchez',
        neighborhood: 'Las Viñas',
        rating: 5,
        text: 'Necesitaba preparar a mi perro para mudarnos a Murcia. El entrenamiento urbano fue clave.',
        problem: 'Adaptación a ciudad'
      }
    ]
  },

  'calasparra': {
    slug: 'calasparra',
    parks: [
      {
        name: 'Zona Verde Municipal',
        location: 'Centro',
        size: '250 m²',
        features: [
          'Vallado',
          'Bebedero',
          'Zona de sombra',
          'Ambiente tranquilo'
        ]
      },
      {
        name: 'Río Segura - Zona de Arroz',
        location: 'Márgenes del río',
        features: [
          'Paseos fluviales',
          'Campos de arroz (paisaje único)',
          'Zonas frescas',
          'Rutas naturales'
        ],
        highlight: 'Famoso por el arroz de Calasparra'
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Calor del Valle Alto',
        description: 'Calasparra tiene veranos calurosos (36-38°C) en el valle del Segura. Zona interior.',
        solution: 'Paseos junto al río (más frescos). Aprovechamiento de zonas de riego. Hidratación constante.'
      },
      {
        icon: 'urban',
        title: 'Pueblo Rural',
        description: 'Calasparra es pueblo rural con economía agrícola (arroz). Entorno tranquilo y tradicional.',
        solution: 'Control con animales de granja. Respeto a cultivos de arroz. Socialización rural.'
      },
      {
        icon: 'regulation',
        title: 'Zona Agrícola',
        description: 'Campos de arroz con riego. Importante no acceder a zonas de cultivo privadas.',
        solution: 'Respeto a propiedades agrícolas. Control cerca de cultivos. Uso de caminos públicos.'
      }
    ],
    localTip: 'Calasparra tiene paisajes únicos con los campos de arroz. Los paseos junto al Segura son perfectos en verano porque el río refresca el ambiente.',
    testimonials: [
      {
        name: 'José García',
        neighborhood: 'Centro',
        rating: 5,
        text: 'Mi setter perseguía pájaros en los arrozales. El entrenamiento de control ha sido fundamental.',
        problem: 'Instinto de caza'
      },
      {
        name: 'María Fernández',
        neighborhood: 'El Santuario',
        rating: 5,
        text: 'El calor del valle afectaba a mi bulldog. Aprender a gestionar sus paseos fue vital.',
        problem: 'Golpes de calor'
      }
    ]
  },

  'bullas': {
    slug: 'bullas',
    parks: [
      {
        name: 'Parque Canino Municipal',
        location: 'Zona urbana',
        size: '300 m²',
        features: [
          'Vallado',
          'Bebedero',
          'Bancos',
          'Zona de sombra'
        ]
      },
      {
        name: 'Salto del Usero',
        location: 'Paraje natural',
        features: [
          'Poza natural para ba\u00f1o',
          'Agua cristalina',
          'Rutas de senderismo',
          'Paisaje espectacular'
        ],
        highlight: 'Poza natural perfecta para refrescar'
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Calor del Interior',
        description: 'Bullas tiene veranos calurosos (35-37°C). Zona interior con sol intenso.',
        solution: 'Aprovechamiento del Salto del Usero para refrescar. Paseos en zonas altas. Gestión de calor.'
      },
      {
        icon: 'urban',
        title: 'Zona Vinícola',
        description: 'Bullas es famosa por sus vinos. Entorno rural con viñedos y bodegas.',
        solution: 'Control en zonas de viñedos. Respeto a propiedades agrícolas. Socialización rural.'
      },
      {
        icon: 'regulation',
        title: 'Acceso al Salto del Usero',
        description: 'Zona natural con afluencia turística. Restricciones en épocas de máxima ocupación.',
        solution: 'Respeto a normativa de acceso. Control en zonas concurridas. Civismo en espacios naturales.'
      }
    ],
    localTip: 'El Salto del Usero es perfecto para que tu perro se refresque en verano. Una poza natural de agua cristalina - ¡le encantará!',
    testimonials: [
      {
        name: 'Pedro López',
        neighborhood: 'Centro',
        rating: 5,
        text: 'Mi labrador adora el Salto del Usero. El entrenamiento acuático ha mejorado su condición física.',
        problem: 'Sobrepeso'
      },
      {
        name: 'Ana Sánchez',
        neighborhood: 'La Copa',
        rating: 5,
        text: 'El calor de Bullas es intenso. Descubrir el Salto del Usero cambió nuestros veranos.',
        problem: 'Intolerancia al calor'
      }
    ]
  },

  'mula': {
    slug: 'mula',
    parks: [
      {
        name: 'Parque Canino del Castillo',
        location: 'Zona del Castillo',
        size: '350 m²',
        features: [
          'Vistas al castillo',
          'Vallado completo',
          'Bebederos',
          'Zona histórica'
        ]
      },
      {
        name: 'Parque de la Constitución',
        location: 'Centro',
        features: [
          'Parque principal',
          'Zonas verdes',
          'Ambiente familiar',
          'Muy frecuentado'
        ]
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Calor del Valle de Mula',
        description: 'Mula tiene veranos calurosos (36-38°C) en el valle. Zona interior con calor seco.',
        solution: 'Paseos en zonas altas (más frescas). Aprovechamiento de sombra del castillo. Gestión de calor.'
      },
      {
        icon: 'urban',
        title: 'Ciudad Mediana',
        description: 'Mula combina casco histórico con zonas modernas. Perros necesitan adaptarse a ambos entornos.',
        solution: 'Socialización en diferentes zonas urbanas. Adaptación a calles estrechas y avenidas. Control en zona comercial.'
      },
      {
        icon: 'regulation',
        title: 'Patrimonio Histórico',
        description: 'Castillo y casco antiguo con valor patrimonial. Respeto a espacios históricos.',
        solution: 'Conocimiento de zonas permitidas. Respeto a patrimonio. Civismo en casco antiguo.'
      }
    ],
    localTip: 'El castillo de Mula domina la ciudad. Las zonas altas son más frescas en verano - aprovéchalas para pasear con tu perro.',
    testimonials: [
      {
        name: 'Juan Antonio Ruiz',
        neighborhood: 'Centro',
        rating: 5,
        text: 'Mi pastor necesitaba ejercicio intenso. Las rutas por el castillo han sido perfectas.',
        problem: 'Exceso de energía'
      },
      {
        name: 'Isabel García',
        neighborhood: 'El Niño de Mula',
        rating: 5,
        text: 'Las calles estrechas del casco antiguo agobiaban a mi perra. Ahora camina tranquila.',
        problem: 'Miedo a espacios estrechos'
      }
    ]
  },

  'lorqui': {
    slug: 'lorqui',
    parks: [
      {
        name: 'Parque Canino Municipal',
        location: 'Centro',
        size: '250 m²',
        features: [
          'Vallado',
          'Bebedero',
          'Bancos',
          'Ambiente familiar'
        ]
      },
      {
        name: 'Río Segura',
        location: 'Márgenes del río',
        features: [
          'Paseo fluvial',
          'Zona fresca',
          'Sombra de árboles',
          'Rutas naturales'
        ]
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Calor de la Vega',
        description: 'Lorquí está en la vega del Segura. Veranos calurosos (38°C+) con humedad de cultivos.',
        solution: 'Paseos junto al río (más frescos). Aprovechamiento de zonas de riego. Hidratación constante.'
      },
      {
        icon: 'urban',
        title: 'Pueblo Cercano a Molina',
        description: 'Lorquí es pueblo pequeño cercano a Molina de Segura. Perros deben adaptarse a pueblo y ciudad.',
        solution: 'Socialización mixta pueblo-ciudad. Preparación para visitas a Molina. Adaptación gradual.'
      },
      {
        icon: 'regulation',
        title: 'Zona de Huerta',
        description: 'Entorno agrícola con cultivos. Respeto a propiedades privadas y caminos.',
        solution: 'Control en zonas agrícolas. Respeto a cultivos. Uso de caminos públicos.'
      }
    ],
    localTip: 'Lorquí tiene paseos junto al Segura perfectos para verano. El río mantiene el ambiente más fresco que en el pueblo.',
    testimonials: [
      {
        name: 'Francisco Martínez',
        neighborhood: 'Centro',
        rating: 5,
        text: 'Mi pointer perseguía todo en la huerta. El entrenamiento de control ha sido fundamental.',
        problem: 'Instinto de caza'
      },
      {
        name: 'Rosa López',
        neighborhood: 'El Río',
        rating: 5,
        text: 'Necesitaba que mi perra estuviera tranquila en Molina. La preparación urbana funcionó perfecto.',
        problem: 'Estrés en ciudad'
      }
    ]
  },

  'abaran': {
    slug: 'abaran',
    parks: [
      {
        name: 'Parque Canino Municipal',
        location: 'Zona urbana',
        size: '300 m²',
        features: [
          'Vallado completo',
          'Bebedero',
          'Zona de sombra',
          'Dispensadores'
        ]
      },
      {
        name: 'Sotos de Abarán - Valle de Ricote',
        location: 'Entorno natural',
        features: [
          'Bosque de ribera',
          'Río Segura',
          'Rutas de senderismo',
          'Paisaje de postal'
        ],
        highlight: 'El Valle de Ricote es espectacular'
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Calor del Valle de Ricote',
        description: 'Abarán está en el Valle de Ricote con veranos muy calurosos (38-40°C). Microclima cálido.',
        solution: 'Paseos por los Sotos (más frescos). Aprovechamiento del río. Gestión de calor en valle.'
      },
      {
        icon: 'urban',
        title: 'Pueblo del Valle',
        description: 'Abarán es pueblo tradicional del Valle de Ricote. Entorno rural con agricultura.',
        solution: 'Socialización rural. Control con animales de granja. Respeto a entorno agrícola.'
      },
      {
        icon: 'regulation',
        title: 'Valle de Ricote Protegido',
        description: 'El Valle tiene valor paisajístico y cultural. Respeto a entorno natural y cultivos tradicionales.',
        solution: 'Conocimiento de rutas permitidas. Respeto a huertos tradicionales. Civismo en espacios naturales.'
      }
    ],
    localTip: 'Los Sotos de Abarán son un tesoro natural. Perfectos para paseos en verano porque el bosque de ribera mantiene el ambiente mucho más fresco.',
    testimonials: [
      {
        name: 'Manuel Fernández',
        neighborhood: 'Centro',
        rating: 5,
        text: 'Mi border collie necesitaba rutas largas. Los Sotos del Valle han sido perfectos.',
        problem: 'Exceso de energía'
      },
      {
        name: 'María José García',
        neighborhood: 'Los Baños',
        rating: 5,
        text: 'El calor de Abarán es extremo. Descubrir los Sotos cambió nuestros veranos completamente.',
        problem: 'Golpes de calor'
      }
    ]
  },

  // Continuando con más ciudades...
  'mazarron': {
    slug: 'mazarron',
    parks: [
      {
        name: 'Parque Canino Bahía',
        location: 'Puerto de Mazarrón',
        size: '450 m²',
        features: [
          'Zona costera',
          'Brisa marina',
          'Vallado completo',
          'Cerca de playas'
        ]
      },
      {
        name: 'Sierra de las Moreras',
        location: 'Entorno natural',
        features: [
          'Rutas de montaña',
          'Paisaje volcánico único',
          'Vistas al mar',
          'Ideal para senderismo'
        ]
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Calor Costero Intenso',
        description: 'Mazarrón tiene uno de los climas más cálidos de Europa. Sol intenso todo el año, veranos de 36°C+.',
        solution: 'Aprovechar brisa marina. Paseos en horarios frescos. Hidratación máxima.'
      },
      {
        icon: 'urban',
        title: 'Doble Núcleo Urbano',
        description: 'Mazarrón tiene dos núcleos: pueblo interior y puerto costero. Perros deben adaptarse a ambos.',
        solution: 'Adaptación a entorno costero y urbano. Socialización en puerto turístico. Control en zonas playeras.'
      },
      {
        icon: 'regulation',
        title: 'Zonas Playeras',
        description: 'Playas con restricciones. Importante conocer zonas y horarios permitidos para perros.',
        solution: 'Conocimiento de playas dog-friendly. Respeto a normativa costera. Educación playera.'
      }
    ],
    localTip: 'Mazarrón tiene bahías espectaculares. Puerto de Mazarrón es perfecto para paseos junto al mar aprovechando la brisa marina.',
    testimonials: [
      {
        name: 'Antonio Pérez',
        neighborhood: 'Puerto',
        rating: 5,
        text: 'Mi setter irlandés adora el mar. El entrenamiento playero nos permite disfrutar juntos de las bahías.',
        problem: 'Control en playa'
      },
      {
        name: 'Isabel Ruiz',
        neighborhood: 'Centro',
        rating: 5,
        text: 'El sol de Mazarrón es muy intenso. Aprender a proteger a mi perro ha sido fundamental.',
        problem: 'Quemaduras solares'
      }
    ]
  },

  'san-javier': {
    slug: 'san-javier',
    parks: [
      {
        name: 'Parque Almansa - Zona Canina',
        location: 'Centro',
        size: '500 m²',
        features: [
          'Parque principal',
          'Zona vallada',
          'Bebederos',
          'Buena sombra'
        ]
      },
      {
        name: 'Playas del Mar Menor',
        location: 'Santiago de la Ribera',
        features: [
          'Playas de aguas tranquilas',
          'Ideal para perros',
          'Paseo marítimo extenso',
          'Ambiente familiar'
        ],
        highlight: 'Aguas calmadas perfectas para perros'
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Calor y Humedad del Mar Menor',
        description: 'San Javier está junto al Mar Menor. Clima cálido con humedad alta. Sensación térmica elevada.',
        solution: 'Gestión de calor húmedo costero. Baños en el Mar Menor para refrescar. Paseos en horarios frescos.'
      },
      {
        icon: 'urban',
        title: 'Turismo y Base Aérea',
        description: 'San Javier combina turismo costero con proximidad a base aérea. Ruidos de aviones frecuentes.',
        solution: 'Desensibilización a ruido de aviones. Socialización con turistas. Adaptación a entorno mixto.'
      },
      {
        icon: 'regulation',
        title: 'Mar Menor: Espacio Protegido',
        description: 'El Mar Menor tiene normativa de protección ambiental. Restricciones específicas.',
        solution: 'Conocimiento de normativa ambiental. Respeto a zonas protegidas. Educación ecológica.'
      }
    ],
    localTip: 'El Mar Menor es perfecto para perros porque sus aguas son muy tranquilas y cálidas. Ideal para que tu perro aprenda a nadar de forma segura.',
    testimonials: [
      {
        name: 'Carlos Martínez',
        neighborhood: 'Santiago de la Ribera',
        rating: 5,
        text: 'Los aviones de la base asustaban mucho a mi yorkshire. El trabajo de habituación fue perfecto.',
        problem: 'Miedo a aviones'
      },
      {
        name: 'Marina López',
        neighborhood: 'San Javier',
        rating: 5,
        text: 'Mi golden retriever adora el Mar Menor. Las sesiones de natación han mejorado su salud.',
        problem: 'Sobrepeso'
      }
    ]
  },

  'san-pedro-del-pinatar': {
    slug: 'san-pedro-del-pinatar',
    parks: [
      {
        name: 'Zona Canina Municipal',
        location: 'Centro',
        size: '400 m²',
        features: [
          'Vallado completo',
          'Bebederos',
          'Iluminación',
          'Dispensadores de bolsas'
        ]
      },
      {
        name: 'Parque Regional Salinas y Arenales',
        location: 'Zona protegida',
        features: [
          'Espacio natural único',
          'Playas vírgenes',
          'Observación de aves',
          'Paisaje espectacular'
        ],
        highlight: 'Parque Regional con biodiversidad única'
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Calor Costero y Salinas',
        description: 'San Pedro combina calor mediterráneo con el microclima de las salinas. Mucha exposición solar.',
        solution: 'Protección solar extrema. Aprovechamiento de brisa marina. Hidratación constante.'
      },
      {
        icon: 'urban',
        title: 'Entorno Natural Protegido',
        description: 'Las Salinas son espacio protegido con mucha fauna. Perros deben respetar aves y ecosistema.',
        solution: 'Control con aves protegidas. Educación en espacio natural. Respeto a fauna silvestre.'
      },
      {
        icon: 'regulation',
        title: 'Normativa del Parque Regional',
        description: 'Restricciones específicas en el Parque Regional. Zonas de acceso limitado.',
        solution: 'Conocimiento de normativa del parque. Respeto a señalización. Uso de zonas permitidas.'
      }
    ],
    localTip: 'San Pedro tiene playas dog-friendly espectaculares. Las Salinas ofrecen un entorno natural único - respeta siempre la fauna protegida.',
    testimonials: [
      {
        name: 'Juan García',
        neighborhood: 'Lo Pagán',
        rating: 5,
        text: 'Mi pointer perseguía aves en las Salinas. El entrenamiento de control ha sido fundamental.',
        problem: 'Persecución de aves'
      },
      {
        name: 'Patricia Sánchez',
        neighborhood: 'Centro',
        rating: 5,
        text: 'Las playas de San Pedro son perfectas para mi labrador. Ahora disfruta del mar de forma segura.',
        problem: 'Miedo al agua'
      }
    ]
  },

  'alcantarilla': {
    slug: 'alcantarilla',
    parks: [
      {
        name: 'Parque de las Norias - Zona Canina',
        location: 'Parque de las Norias',
        size: '600 m²',
        features: [
          'Parque emblemático',
          'Zona vallada amplia',
          'Bebederos múltiples',
          'Sombra abundante',
          'Muy frecuentado'
        ],
        highlight: 'El parque más popular de Alcantarilla'
      },
      {
        name: 'Parque Municipal',
        location: 'Centro',
        size: '400 m²',
        features: [
          'Zona céntrica',
          'Bien equipado',
          'Iluminación LED',
          'Accesible'
        ]
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Calor de la Huerta',
        description: 'Alcantarilla está en la huerta de Murcia. Calor intenso en verano (40°C+) con humedad de los cultivos.',
        solution: 'Gestión de calor con humedad. Paseos en zonas con riego (más frescas). Hidratación constante.'
      },
      {
        icon: 'urban',
        title: 'Ciudad Satélite de Murcia',
        description: 'Alcantarilla está pegada a Murcia capital. Alta densidad urbana, tráfico intenso, mucha actividad.',
        solution: 'Socialización urbana intensa. Control en zonas comerciales. Adaptación a tráfico constante.'
      },
      {
        icon: 'regulation',
        title: 'Alta Densidad de Perros',
        description: 'Alcantarilla tiene muchos perros. Importante socialización correcta y respeto en zonas caninas.',
        solution: 'Socialización canina adecuada. Uso respetuoso de pipicanes. Convivencia urbana.'
      }
    ],
    localTip: 'El Parque de las Norias es el corazón de Alcantarilla. Es perfecto para socializar a tu perro - siempre hay muchos perros bien educados.',
    testimonials: [
      {
        name: 'José Luis Martínez',
        neighborhood: 'Centro',
        rating: 5,
        text: 'Mi pastor alemán era reactivo con otros perros. La socialización en Las Norias ha sido perfecta.',
        problem: 'Reactividad con perros'
      },
      {
        name: 'Carmen Fernández',
        neighborhood: 'San José Obrero',
        rating: 5,
        text: 'El tráfico de Alcantarilla agobiaba a mi perra. Ahora camina tranquila por cualquier zona.',
        problem: 'Miedo al tráfico'
      }
    ]
  },

  'alhama-de-murcia': {
    slug: 'alhama-de-murcia',
    parks: [
      {
        name: 'Parque Canino Municipal',
        location: 'Zona urbana',
        size: '350 m²',
        features: [
          'Vallado perimetral',
          'Bebederos',
          'Bancos',
          'Dispensadores'
        ]
      },
      {
        name: 'Gebas y Sierra Espuña',
        location: 'Entorno natural',
        features: [
          'Paisaje lunar de Gebas',
          'Acceso a Sierra Espuña',
          'Rutas de senderismo',
          'Naturaleza espectacular'
        ],
        highlight: 'Paisajes únicos en Europa'
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Calor Extremo del Interior',
        description: 'Alhama tiene veranos muy calurosos (38-40°C). Zona interior con sol muy intenso.',
        solution: 'Escapadas a Sierra Espuña. Paseos nocturnos en verano. Gestión de calor extremo.'
      },
      {
        icon: 'urban',
        title: 'Ciudad en Expansión',
        description: 'Alhama está creciendo con nuevas urbanizaciones. Muchos perros jóvenes necesitan socialización.',
        solution: 'Socialización temprana de cachorros. Adaptación a entorno en crecimiento. Convivencia en comunidades nuevas.'
      },
      {
        icon: 'regulation',
        title: 'Acceso a Espacios Naturales',
        description: 'Gebas y Sierra Espuña tienen normativa específica. Restricciones en épocas de riesgo de incendio.',
        solution: 'Conocimiento de normativa de espacios naturales. Prevención de incendios. Respeto a cierres temporales.'
      }
    ],
    localTip: 'Alhama tiene acceso directo a Gebas, un paisaje lunar único en Europa. Es perfecto para senderismo con tu perro - un lugar espectacular.',
    testimonials: [
      {
        name: 'Francisco Sánchez',
        neighborhood: 'El Berro',
        rating: 5,
        text: 'Mi husky sufría mucho el calor de Alhama. Las rutas por Sierra Espuña han sido la solución.',
        problem: 'Intolerancia al calor'
      },
      {
        name: 'Rosa López',
        neighborhood: 'Centro',
        rating: 5,
        text: 'Vivimos en urbanización nueva con muchos perros. La socialización temprana fue fundamental.',
        problem: 'Socialización de cachorro'
      }
    ]
  },

  // Continuando con más ciudades...
  'aguilas': {
    slug: 'aguilas',
    parks: [
      {
        name: 'Parque Canino del Puerto',
        location: 'Zona portuaria',
        size: '500 m²',
        features: [
          'Junto al mar',
          'Brisa marina constante',
          'Zona vallada',
          'Vistas al puerto'
        ],
        highlight: 'Con vistas al Mediterráneo'
      },
      {
        name: 'Isla del Fraile',
        location: 'Costa',
        features: [
          'Entorno costero natural',
          'Rutas junto al mar',
          'Calas y playas',
          'Paisaje espectacular'
        ]
      }
    ],
    challenges: [
      {
        icon: 'heat',
        title: 'Calor Costero',
        description: 'Águilas combina calor (35°C+) con sol muy intenso por estar en la costa. Mucha exposición solar.',
        solution: 'Aprovechamiento de brisa marina. Paseos por zonas costeras. Protección solar para perros.'
      },
      {
        icon: 'urban',
        title: 'Ciudad Costera y Turística',
        description: 'Águilas es destino turístico de playa. Perros necesitan estar cómodos en entorno playero con turistas.',
        solution: 'Educación playera específica. Socialización con turistas. Control en playas y paseo marítimo.'
      },
      {
        icon: 'regulation',
        title: 'Playas y Zonas Costeras',
        description: 'Restricciones en playas durante temporada alta. Normativa específica para perros en zonas costeras.',
        solution: 'Conocimiento de playas dog-friendly. Respeto a temporadas y horarios. Educación costera.'
      }
    ],
    localTip: 'Águilas tiene playas espectaculares. Busca las calas menos transitadas para disfrutar del mar con tu perro, especialmente fuera de temporada alta.',
    testimonials: [
      {
        name: 'Miguel Martínez',
        neighborhood: 'Puerto',
        rating: 5,
        text: 'Mi labrador quería meterse al mar constantemente. El entrenamiento de control playero ha sido perfecto.',
        problem: 'Obsesión con el agua'
      },
      {
        name: 'Laura Fernández',
        neighborhood: 'Centro',
        rating: 5,
        text: 'Con tanto turismo en verano mi perra ladraba a todo el mundo. Ahora paseamos tranquilos.',
        problem: 'Ladridos a turistas'
      }
    ]
  }
}

export function getExtendedCityData(slug: string): ExtendedCityData | undefined {
  return extendedCityData[slug]
}
