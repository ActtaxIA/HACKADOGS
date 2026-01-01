-- =============================================
-- HAKADOGS - SEED DATA
-- Datos de ejemplo para testing y desarrollo
-- =============================================

-- IMPORTANTE: Este script debe ejecutarse DESPUÉS de que existan usuarios reales
-- Reemplaza los UUID con IDs reales de tu base de datos

-- =============================================
-- EJERCICIOS PARA HAKATRAINER
-- =============================================

INSERT INTO exercises (slug, title, description, category, difficulty, duration, published, featured, instructions, tips) VALUES
-- Obediencia Básica
('sentado', 'Sentado (Sit)', 'Enseña a tu perro el comando básico de sentarse', 'Obediencia Básica', 'beginner', 5, true, true,
'1. Sostén un premio cerca de la nariz de tu perro
2. Mueve tu mano hacia arriba, permitiendo que su cabeza siga el premio y causando que su trasero baje
3. Una vez que esté en posición sentada, di "Sentado", dale el premio y muestra afecto
4. Repite 3-5 veces durante 2-3 sesiones diarias',
'- Sé paciente y consistente
- Usa premios de alto valor al principio
- Practica en un lugar sin distracciones
- Sesiones cortas pero frecuentes'),

('quieto', 'Quieto (Stay)', 'Enseña a tu perro a permanecer en un lugar', 'Obediencia Básica', 'beginner', 10, true, true,
'1. Pide a tu perro que se siente
2. Abre tu palma frente a ti y di "Quieto"
3. Da unos pasos hacia atrás
4. Recompensa si permanece quieto
5. Aumenta gradualmente la distancia y duración',
'- Empieza con distancias muy cortas
- No castigues si se mueve, simplemente reinicia
- Aumenta la dificultad gradualmente
- Practica en diferentes lugares'),

('aqui', 'Aquí (Come)', 'Llamada efectiva para que tu perro venga', 'Obediencia Básica', 'beginner', 15, true, true,
'1. Ponte en cuclillas con los brazos abiertos
2. Di "Aquí" o "Ven" con voz alegre
3. Cuando venga, recompensa generosamente
4. Practica en un área cerrada al principio
5. Aumenta la distancia gradualmente',
'- Nunca llames a tu perro para regañarlo
- Haz que venir a ti sea siempre positivo
- Usa recompensas de muy alto valor
- Practica con correa larga al principio'),

('junto', 'Junto (Heel)', 'Caminar junto a ti sin tirar de la correa', 'Obediencia Básica', 'intermediate', 20, true, false,
'1. Empieza con tu perro sentado a tu lado izquierdo
2. Di "Junto" y comienza a caminar
3. Recompensa cada vez que camine a tu lado
4. Si tira, detente inmediatamente
5. Solo continúa cuando afloje la correa',
'- La paciencia es clave
- Sé consistente con las paradas
- Practica en lugares tranquilos primero
- Sesiones de 10 minutos máximo'),

-- Trucos Avanzados
('dame-la-pata', 'Dame la Pata', 'Truco clásico de dar la pata', 'Trucos Avanzados', 'beginner', 10, true, true,
'1. Con tu perro sentado, toma su pata con tu mano
2. Di "Pata" y dale un premio
3. Repite varias veces
4. Comienza a solo tocar la pata
5. Finalmente, solo extiende tu mano',
'- Algunos perros son naturalmente "zurdos"
- Celebra cada pequeño progreso
- Alterna entre patas
- Combina con comando "Sentado"'),

('rodar', 'Rodar', 'Enseña a tu perro a rodar sobre sí mismo', 'Trucos Avanzados', 'intermediate', 15, true, false,
'1. Tu perro debe estar tumbado
2. Sostén un premio cerca de su hombro
3. Mueve el premio en círculo sobre su espalda
4. Di "Rueda" cuando comience el movimiento
5. Recompensa el movimiento completo',
'- Practica en superficie cómoda
- Divide en pequeños pasos
- Algunos perros prefieren una dirección
- Paciencia, puede tomar varios días'),

-- Modificación de Conducta
('no-saltar', 'No Saltar a las Personas', 'Corrige el hábito de saltar sobre las personas', 'Modificación de Conducta', 'intermediate', 20, true, true,
'1. Ignora completamente cuando salta
2. Gírate de espaldas
3. Cuando las cuatro patas estén en el suelo, recompensa
4. Pide a visitantes que hagan lo mismo
5. Sé 100% consistente',
'- Nunca recompenses el salto, ni siquiera con atención negativa
- Pide ayuda a amigos para practicar
- Ten paciencia, puede empeorar antes de mejorar
- Consistencia de TODOS en casa es crucial'),

('no-tirar-correa', 'No Tirar de la Correa', 'Caminar sin tirones', 'Modificación de Conducta', 'intermediate', 25, true, false,
'1. Cuando tire, detente inmediatamente
2. Espera a que mire hacia ti
3. Da un paso atrás si es necesario
4. Continúa solo cuando la correa esté floja
5. Recompensa caminar a tu lado',
'- Requiere mucha consistencia
- Usa arnés anti-tirones si es necesario
- Practica en lugares sin distracciones primero
- Pueden ser necesarias semanas'),

-- Juegos Mentales
('buscar-premio', 'Buscar el Premio', 'Juego de olfato y búsqueda', 'Juegos Mentales', 'beginner', 10, true, true,
'1. Deja que tu perro vea dónde escondes un premio
2. Di "Busca" y deja que lo encuentre
3. Celebra cuando lo encuentre
4. Gradualmente esconde en lugares más difíciles
5. Esconde sin que vea',
'- Empieza muy fácil
- Gradualmente aumenta dificultad
- Esconde en diferentes alturas
- Puede cansar mentalmente muy rápido'),

('cual-mano', '¿Cuál Mano?', 'Adivinar en qué mano está el premio', 'Juegos Mentales', 'beginner', 5, true, false,
'1. Cierra un premio en uno de tus puños
2. Presenta ambos puños cerrados
3. Deja que olfatee y elija
4. Abre solo si elige correctamente
5. Si falla, muéstrale dónde estaba',
'- Juego perfecto para días de lluvia
- Estimula el olfato
- Muy accesible
- Bueno para cachorros'),

-- Ejercicio Físico
('fetch-avanzado', 'Fetch Avanzado', 'Juego de traer con variaciones', 'Ejercicio Físico', 'intermediate', 30, true, false,
'1. Lanza el juguete
2. Di "Busca" o "Trae"
3. Cuando vuelva, di "Suelta"
4. Recompensa
5. Añade variaciones: sentarse antes de soltar, esperar antes de ir',
'- Asegura que devuelve antes de añadir dificultad
- Usa juguetes que le gusten
- Intercambia por premio si no suelta
- Buen ejercicio físico y mental'),

('carrera-obstaculos', 'Carrera de Obstáculos', 'Circuito de agilidad casero', 'Ejercicio Físico', 'advanced', 20, true, false,
'1. Crea obstáculos con objetos caseros
2. Guía con correa al principio
3. Añade comandos vocales
4. Practica cada obstáculo por separado
5. Une en secuencia',
'- Seguridad primero
- Adapta a la edad y tamaño
- Perfecto para perros energéticos
- Puede hacerse en casa o jardín');

-- =============================================
-- EVENTOS DE EJEMPLO
-- =============================================

-- Reemplaza 'YOUR_USER_ID' con el UUID real del admin
-- Puedes obtenerlo de: SELECT id FROM profiles WHERE role = 'admin';

/*
INSERT INTO events (created_by, title, description, event_date, location, location_lat, location_lng, max_attendees, event_type, status) VALUES
('YOUR_USER_ID', 
 'Quedada Canina en el Parque', 
 'Socialización controlada para perros de todos los tamaños. Alfredo estará presente para supervisar y dar consejos.', 
 NOW() + INTERVAL '7 days', 
 'Parque Municipal de Archena', 
 38.1167, 
 -1.3000,
 20,
 'official',
 'upcoming'),

('YOUR_USER_ID',
 'Taller de Obediencia Básica',
 'Taller grupal para aprender los comandos básicos. Nivel principiante.',
 NOW() + INTERVAL '14 days',
 'Hakadogs Centro - Archena',
 38.1167,
 -1.3000,
 10,
 'official',
 'upcoming'),

('YOUR_USER_ID',
 'Ruta de Senderismo Canino',
 'Ruta de 5km por la Sierra de la Pila. Todos los niveles bienvenidos.',
 NOW() + INTERVAL '21 days',
 'Sierra de la Pila',
 38.1500,
 -1.2500,
 15,
 'community',
 'upcoming');
*/

-- =============================================
-- POSTS DEL FORO DE EJEMPLO
-- =============================================

/*
INSERT INTO forum_posts (author_id, title, content, category, pinned) VALUES
('YOUR_USER_ID',
 '¡Bienvenidos a HakaCommunity!',
 'Este es el foro oficial de la comunidad Hakadogs. Aquí podéis compartir experiencias, hacer preguntas y ayudar a otros dueños de perros. 

Normas básicas:
- Respeto siempre
- No spam
- Mantened las conversaciones constructivas
- Compartid fotos (¡nos encantan!)

¡Disfrutad de la comunidad!',
 'General',
 true),

('YOUR_USER_ID',
 '¿Cómo habéis empezado con el entrenamiento?',
 'Hola a todos! Tengo un cachorro de 3 meses y quiero empezar con el entrenamiento básico. ¿Qué comandos habéis enseñado primero? ¿Cuánto tiempo dedicáis al día?',
 'Educación',
 false),

('YOUR_USER_ID',
 'Recomendaciones de veterinarios en Archena',
 'Acabo de mudarme a la zona y busco un buen veterinario. ¿Alguna recomendación?',
 'Salud',
 false);
*/

-- =============================================
-- NOTAS IMPORTANTES
-- =============================================

-- 1. Este script es para DESARROLLO/TESTING
-- 2. Los ejercicios SÍ se pueden insertar directamente
-- 3. Para eventos y posts del foro:
--    - Primero crea un usuario admin
--    - Reemplaza 'YOUR_USER_ID' con el ID real
--    - Descomenta las secciones correspondientes
-- 4. Para producción, carga estos datos a través del panel admin

-- =============================================
-- VERIFICACIÓN
-- =============================================

-- Cuenta ejercicios insertados:
-- SELECT category, COUNT(*) FROM exercises GROUP BY category;

-- Verifica ejercicios destacados:
-- SELECT title, category, difficulty, featured FROM exercises WHERE featured = true;
