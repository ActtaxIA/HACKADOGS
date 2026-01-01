'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save, Upload } from 'lucide-react'

export default function NuevoEjercicioPage() {
  const router = useRouter()
  const supabase = createClient()
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    category: 'Obediencia Básica',
    difficulty: 'beginner',
    duration: 10,
    instructions: '',
    tips: '',
    common_mistakes: '',
    video_url: '',
    thumbnail_url: '',
    published: false,
    featured: false
  })

  const categories = [
    'Obediencia Básica',
    'Trucos Avanzados',
    'Modificación de Conducta',
    'Juegos Mentales',
    'Ejercicio Físico'
  ]

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title)
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      router.push('/auth/login')
      return
    }

    // Check if user is admin
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', session.user.id)
      .single()

    if (profile?.role !== 'admin') {
      alert('No tienes permisos de administrador')
      router.push('/cliente/dashboard')
      return
    }

    const { data, error } = await supabase
      .from('exercises')
      .insert([formData])
      .select()
      .single()

    setSaving(false)

    if (!error && data) {
      router.push('/admin/ejercicios')
    } else {
      alert('Error al crear el ejercicio: ' + error?.message)
    }
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-gradient-to-r from-forest-dark to-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/admin/ejercicios" className="inline-flex items-center text-white/80 hover:text-white mb-4">
            <ArrowLeft size={20} className="mr-2" />
            Volver a Ejercicios
          </Link>
          <h1 className="text-3xl font-bold">Nuevo Ejercicio</h1>
          <p className="text-white/90 mt-2">Crea un nuevo ejercicio de entrenamiento</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Título *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest focus:border-transparent"
                required
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Slug (URL amigable) *
              </label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest focus:border-transparent font-mono"
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                URL: /app/trainer/ejercicios/{formData.slug}
              </p>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descripción Corta *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest focus:border-transparent"
                required
              />
            </div>

            {/* Category & Difficulty & Duration */}
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categoría *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest focus:border-transparent"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dificultad *
                </label>
                <select
                  value={formData.difficulty}
                  onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest focus:border-transparent"
                >
                  <option value="beginner">Principiante</option>
                  <option value="intermediate">Intermedio</option>
                  <option value="advanced">Avanzado</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duración (min) *
                </label>
                <input
                  type="number"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
                  min="1"
                  max="120"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Instructions */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Instrucciones Paso a Paso *
              </label>
              <textarea
                value={formData.instructions}
                onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                rows={8}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest focus:border-transparent"
                placeholder="1. Primer paso&#10;2. Segundo paso&#10;3. Tercer paso..."
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                Escribe cada paso en una línea nueva
              </p>
            </div>

            {/* Tips */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Consejos Importantes
              </label>
              <textarea
                value={formData.tips}
                onChange={(e) => setFormData({ ...formData, tips: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest focus:border-transparent"
                placeholder="- Primer consejo&#10;- Segundo consejo&#10;- Tercer consejo..."
              />
              <p className="text-sm text-gray-500 mt-1">
                Usa guiones (-) al inicio de cada línea
              </p>
            </div>

            {/* Common Mistakes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Errores Comunes a Evitar
              </label>
              <textarea
                value={formData.common_mistakes}
                onChange={(e) => setFormData({ ...formData, common_mistakes: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest focus:border-transparent"
              />
            </div>

            {/* Video URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                URL del Video
              </label>
              <input
                type="url"
                value={formData.video_url}
                onChange={(e) => setFormData({ ...formData, video_url: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest focus:border-transparent"
                placeholder="https://..."
              />
              <p className="text-sm text-gray-500 mt-1">
                URL del video desde Supabase Storage o YouTube
              </p>
            </div>

            {/* Thumbnail URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                URL de Miniatura
              </label>
              <input
                type="url"
                value={formData.thumbnail_url}
                onChange={(e) => setFormData({ ...formData, thumbnail_url: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest focus:border-transparent"
                placeholder="https://..."
              />
            </div>

            {/* Published & Featured */}
            <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-gray-200">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="published"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  className="w-5 h-5 text-forest rounded focus:ring-forest"
                />
                <label htmlFor="published" className="ml-3">
                  <span className="font-semibold text-gray-700">Publicar inmediatamente</span>
                  <p className="text-sm text-gray-500">Los usuarios podrán ver este ejercicio</p>
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="w-5 h-5 text-forest rounded focus:ring-forest"
                />
                <label htmlFor="featured" className="ml-3">
                  <span className="font-semibold text-gray-700">Destacar</span>
                  <p className="text-sm text-gray-500">Aparecerá en la sección destacados</p>
                </label>
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-end space-x-4 pt-6">
              <Link
                href="/admin/ejercicios"
                className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition"
              >
                Cancelar
              </Link>
              <button
                type="submit"
                disabled={saving}
                className="btn-primary inline-flex items-center disabled:opacity-50"
              >
                {saving ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Guardando...
                  </>
                ) : (
                  <>
                    <Save size={20} className="mr-2" />
                    Crear Ejercicio
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
