-- =============================================
-- HAKADOGS - ESQUEMA CURSOS CON LECCIONES
-- =============================================

-- CURSOS (información general)
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  short_description TEXT,
  description TEXT,
  icon TEXT DEFAULT '🎓',
  price DECIMAL(10,2) DEFAULT 0,
  duration_minutes INTEGER DEFAULT 0, -- duración total calculada
  difficulty TEXT DEFAULT 'basico', -- 'basico', 'intermedio', 'avanzado'
  thumbnail_url TEXT,
  what_you_learn TEXT[], -- Array de puntos clave
  is_free BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT false,
  total_lessons INTEGER DEFAULT 0,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- LECCIONES/TEMAS de cada curso
CREATE TABLE course_lessons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  content TEXT, -- HTML del contenido
  order_index INTEGER DEFAULT 0,
  duration_minutes INTEGER DEFAULT 5,
  video_url TEXT, -- URL del video principal
  video_provider TEXT, -- 'youtube', 'vimeo', 'self-hosted'
  is_free_preview BOOLEAN DEFAULT false, -- Si es vista previa gratuita
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(course_id, slug)
);

-- RECURSOS DESCARGABLES (PDFs, documentos, etc)
CREATE TABLE course_resources (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lesson_id UUID REFERENCES course_lessons(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  file_type TEXT NOT NULL, -- 'pdf', 'doc', 'image', 'zip', 'other'
  file_url TEXT NOT NULL,
  file_size INTEGER, -- en bytes
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- PROGRESO DEL USUARIO EN LECCIONES
CREATE TABLE user_lesson_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id UUID REFERENCES course_lessons(id) ON DELETE CASCADE,
  completed BOOLEAN DEFAULT false,
  completed_at TIMESTAMP,
  time_spent_seconds INTEGER DEFAULT 0,
  last_position_seconds INTEGER DEFAULT 0, -- para videos
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

-- COMPRAS DE CURSOS
CREATE TABLE course_purchases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  purchase_date TIMESTAMP DEFAULT NOW(),
  price_paid DECIMAL(10,2) NOT NULL,
  payment_status TEXT DEFAULT 'completed', -- 'pending', 'completed', 'failed', 'refunded'
  payment_method TEXT, -- 'card', 'paypal'
  payment_id TEXT, -- ID de Stripe/PayPal
  UNIQUE(user_id, course_id)
);

-- PROGRESO GENERAL DEL USUARIO EN CURSO
CREATE TABLE user_course_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  progress_percentage INTEGER DEFAULT 0,
  completed_lessons INTEGER DEFAULT 0,
  total_lessons INTEGER DEFAULT 0,
  completed BOOLEAN DEFAULT false,
  completed_at TIMESTAMP,
  last_accessed TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, course_id)
);

-- ÍNDICES para optimización
CREATE INDEX idx_course_lessons_course_id ON course_lessons(course_id);
CREATE INDEX idx_course_lessons_order ON course_lessons(course_id, order_index);
CREATE INDEX idx_course_resources_lesson_id ON course_resources(lesson_id);
CREATE INDEX idx_user_lesson_progress_user ON user_lesson_progress(user_id);
CREATE INDEX idx_user_lesson_progress_lesson ON user_lesson_progress(lesson_id);
CREATE INDEX idx_course_purchases_user ON course_purchases(user_id);
CREATE INDEX idx_course_purchases_course ON course_purchases(course_id);
CREATE INDEX idx_user_course_progress_user ON user_course_progress(user_id);

-- FUNCIÓN para actualizar el progreso del curso automáticamente
CREATE OR REPLACE FUNCTION update_course_progress()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE user_course_progress
  SET 
    completed_lessons = (
      SELECT COUNT(*) 
      FROM user_lesson_progress ulp
      JOIN course_lessons cl ON cl.id = ulp.lesson_id
      WHERE ulp.user_id = NEW.user_id 
        AND cl.course_id = (SELECT course_id FROM course_lessons WHERE id = NEW.lesson_id)
        AND ulp.completed = true
    ),
    total_lessons = (
      SELECT COUNT(*) 
      FROM course_lessons cl
      WHERE cl.course_id = (SELECT course_id FROM course_lessons WHERE id = NEW.lesson_id)
    ),
    updated_at = NOW()
  WHERE user_id = NEW.user_id 
    AND course_id = (SELECT course_id FROM course_lessons WHERE id = NEW.lesson_id);
  
  -- Calcular porcentaje
  UPDATE user_course_progress
  SET 
    progress_percentage = CASE 
      WHEN total_lessons > 0 THEN (completed_lessons * 100 / total_lessons)
      ELSE 0
    END,
    completed = (completed_lessons = total_lessons AND total_lessons > 0),
    completed_at = CASE 
      WHEN completed_lessons = total_lessons AND total_lessons > 0 THEN NOW()
      ELSE completed_at
    END
  WHERE user_id = NEW.user_id 
    AND course_id = (SELECT course_id FROM course_lessons WHERE id = NEW.lesson_id);
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- TRIGGER para actualizar progreso automáticamente
CREATE TRIGGER trigger_update_course_progress
AFTER INSERT OR UPDATE ON user_lesson_progress
FOR EACH ROW
EXECUTE FUNCTION update_course_progress();

-- FUNCIÓN para actualizar duration total del curso
CREATE OR REPLACE FUNCTION update_course_duration()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE courses
  SET 
    duration_minutes = (
      SELECT COALESCE(SUM(duration_minutes), 0)
      FROM course_lessons
      WHERE course_id = COALESCE(NEW.course_id, OLD.course_id)
    ),
    total_lessons = (
      SELECT COUNT(*)
      FROM course_lessons
      WHERE course_id = COALESCE(NEW.course_id, OLD.course_id)
    ),
    updated_at = NOW()
  WHERE id = COALESCE(NEW.course_id, OLD.course_id);
  
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

-- TRIGGER para actualizar duración total del curso
CREATE TRIGGER trigger_update_course_duration
AFTER INSERT OR UPDATE OR DELETE ON course_lessons
FOR EACH ROW
EXECUTE FUNCTION update_course_duration();
