'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { ArrowLeft, Save } from 'lucide-react'

const LessonsManager = dynamic(() => import('@/components/admin/LessonsManager'), {
  ssr: false,
  loading: () => <div className="w-full h-48 bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
    <p className="text-gray-500">Cargando gestor de lecciones...</p>
  </div>
})

interface Lesson {
  id: string
  title: string
  content: string
  duration: number
  videoUrl: string
  videoProvider: string
  isFreePreview: boolean
  resources: any[]
  isExpanded: boolean
}

export default function NuevoCursoPage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState<'info' | 'lessons'>('info')
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    shortDescription: '',
    description: '',
    icon: '🎓',
    price: '0',
    difficulty: 'basico',
    isFree: false,
    isPublished: false,
    thumbnailUrl: '',
    whatYouLearn: ['', '', '', '']
  })

  const [lessons, setLessons] = useState<Lesson[]>([])

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    if (field === 'title') {
      const slug = value
        .toLowerCase()
        .replace(/[áàäâ]/g, 'a')
        .replace(/[éèëê]/g, 'e')
        .replace(/[íìïî]/g, 'i')
        .replace(/[óòöô]/g, 'o')
        .replace(/[úùüû]/g, 'u')
        .replace(/ñ/g, 'n')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
      setFormData(prev => ({ ...prev, slug }))
    }
  }

  const handleWhatYouLearnChange = (index: number, value: string) => {
    const newArray = [...formData.whatYouLearn]
    newArray[index] = value
    setFormData(prev => ({ ...prev, whatYouLearn: newArray }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (lessons.length === 0) {
      alert('Debes añadir al menos una lección al curso')
      return
    }

    setSaving(true)

    try {
      // 1. Crear el curso
      const { createCourse, bulkCreateLessons, bulkCreateResources } = await import('@/lib/supabase/courses')
      
      const courseData = {
        title: formData.title,
        slug: formData.slug,
        short_description: formData.shortDescription,
        description: formData.description,
        icon: formData.icon,
        price: parseFloat(formData.price),
        difficulty: formData.difficulty as 'basico' | 'intermedio' | 'avanzado',
        what_you_learn: formData.whatYouLearn.filter(item => item.trim() !== ''),
        is_free: formData.isFree,
        is_published: formData.isPublished,
        thumbnail_url: formData.thumbnailUrl || null,
      }

      const newCourse = await createCourse(courseData)

      // 2. Crear todas las lecciones
      const lessonsData = lessons.map((lesson, index) => ({
        course_id: newCourse.id,
        title: lesson.title,
        slug: lesson.title
          .toLowerCase()
          .replace(/[áàäâ]/g, 'a')
          .replace(/[éèëê]/g, 'e')
          .replace(/[íìïî]/g, 'i')
          .replace(/[óòöô]/g, 'o')
          .replace(/[úùüû]/g, 'u')
          .replace(/ñ/g, 'n')
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, ''),
        content: lesson.content,
        order_index: index,
        duration_minutes: lesson.duration,
        video_url: lesson.videoUrl || null,
        video_provider: lesson.videoUrl ? (lesson.videoProvider as any) : null,
        is_free_preview: lesson.isFreePreview,
      }))

      const createdLessons = await bulkCreateLessons(lessonsData)

      // 3. Crear todos los recursos
      const allResources = lessons.flatMap((lesson, lessonIndex) => 
        lesson.resources.map((resource, resourceIndex) => ({
          lesson_id: createdLessons[lessonIndex].id,
          title: resource.title,
          description: null,
          file_type: resource.fileType,
          file_url: resource.fileUrl,
          file_size: resource.fileSize || null,
          order_index: resourceIndex,
        }))
      )

      if (allResources.length > 0) {
        await bulkCreateResources(allResources)
      }

      alert('✅ Curso creado exitosamente!')
      router.push('/administrator')
      
    } catch (error) {
      console.error('Error al guardar curso:', error)
      alert('❌ Error al guardar el curso. Verifica la consola para más detalles.')
      setSaving(false)
    }
  }

  const iconOptions = ['🎓', '🎯', '📢', '🚶', '🦷', '🦘', '🚽', '✋', '🔊', '🍽️', '🐕', '📚', '🏆', '💡']
  const difficultyOptions = [
    { value: 'basico', label: 'Básico' },
    { value: 'intermedio', label: 'Intermedio' },
    { value: 'avanzado', label: 'Avanzado' }
  ]

  const totalDuration = lessons.reduce((sum, lesson) => sum + lesson.duration, 0)

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link
              href="/administrator"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Panel
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Crear Nuevo Curso</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Contenido Principal */}
              <div className="lg:col-span-3 space-y-6">
                {/* Tabs */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="flex border-b border-gray-200">
                    <button
                      type="button"
                      onClick={() => setActiveTab('info')}
                      className={`flex-1 py-4 px-6 font-semibold transition ${
                        activeTab === 'info'
                          ? 'bg-indigo-50 text-indigo-600 border-b-2 border-indigo-600'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      1. Información del Curso
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('lessons')}
                      className={`flex-1 py-4 px-6 font-semibold transition ${
                        activeTab === 'lessons'
                          ? 'bg-indigo-50 text-indigo-600 border-b-2 border-indigo-600'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      2. Lecciones ({lessons.length})
                    </button>
                  </div>

                  <div className="p-8">
                    {activeTab === 'info' ? (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Título del Curso *
                          </label>
                          <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => handleInputChange('title', e.target.value)}
                            placeholder="Ej: Cómo Enseñar a tu Perro a Sentarse"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Slug (URL)
                          </label>
                          <input
                            type="text"
                            value={formData.slug}
                            onChange={(e) => handleInputChange('slug', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Descripción Corta *
                          </label>
                          <textarea
                            value={formData.shortDescription}
                            onChange={(e) => handleInputChange('shortDescription', e.target.value)}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Qué aprenderás (4 puntos)
                          </label>
                          <div className="space-y-3">
                            {formData.whatYouLearn.map((item, index) => (
                              <input
                                key={index}
                                type="text"
                                value={item}
                                onChange={(e) => handleWhatYouLearnChange(index, e.target.value)}
                                placeholder={`Punto ${index + 1}`}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                required
                              />
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-end pt-6 border-t">
                          <button
                            type="button"
                            onClick={() => setActiveTab('lessons')}
                            className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
                          >
                            Continuar a Lecciones →
                          </button>
                        </div>
                      </div>
                    ) : (
                      <LessonsManager lessons={lessons} onChange={setLessons} />
                    )}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Configuración</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Icono
                        </label>
                        <div className="grid grid-cols-4 gap-2">
                          {iconOptions.slice(0, 8).map((icon) => (
                            <button
                              key={icon}
                              type="button"
                              onClick={() => handleInputChange('icon', icon)}
                              className={`text-2xl p-2 rounded-lg border-2 transition ${
                                formData.icon === icon
                                  ? 'border-indigo-500 bg-indigo-50'
                                  : 'border-gray-200'
                              }`}
                            >
                              {icon}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Precio (€)
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={formData.price}
                          onChange={(e) => handleInputChange('price', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Dificultad
                        </label>
                        <select
                          value={formData.difficulty}
                          onChange={(e) => handleInputChange('difficulty', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        >
                          {difficultyOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.isFree}
                            onChange={(e) => handleInputChange('isFree', e.target.checked)}
                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-700">Gratuito</span>
                        </label>

                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.isPublished}
                            onChange={(e) => handleInputChange('isPublished', e.target.checked)}
                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-700">Publicar</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-700 mb-3">Resumen</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lecciones:</span>
                        <span className="font-semibold">{lessons.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duración total:</span>
                        <span className="font-semibold">{totalDuration} min</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={saving || lessons.length === 0}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    <Save className="w-5 h-5 mr-2" />
                    {saving ? 'Guardando...' : 'Guardar Curso'}
                  </button>

                  {lessons.length === 0 && (
                    <p className="text-xs text-red-600 text-center">
                      Añade al menos una lección
                    </p>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
