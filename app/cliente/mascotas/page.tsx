'use client'

import { useEffect, useState } from 'react'
import { getLocalSession } from '@/lib/auth/mockAuth'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Dog, Plus, Edit2, Trash2, Calendar, Weight, Heart } from 'lucide-react'

interface Pet {
  id: string
  name: string
  breed: string
  age: number
  birthDate: string
  sex: 'macho' | 'hembra'
  weight: number
  photo?: string
  color: string
}

export default function MascotasPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [pets, setPets] = useState<Pet[]>([])
  const [showAddModal, setShowAddModal] = useState(false)
  const [editingPet, setEditingPet] = useState<Pet | null>(null)
  const [formData, setFormData] = useState<Partial<Pet>>({
    name: '',
    breed: '',
    age: 0,
    birthDate: '',
    sex: 'macho',
    weight: 0,
    color: '',
    photo: '',
  })
  const [photoPreview, setPhotoPreview] = useState<string>('')

  useEffect(() => {
    const checkAuth = () => {
      const { data } = getLocalSession()

      if (!data?.session) {
        router.push('/auth/login')
        return
      }

      setUser(data.session.user)
      
      // Cargar mascotas
      const storedPets = localStorage.getItem(`pets_${data.session.user.id}`)
      if (storedPets) {
        setPets(JSON.parse(storedPets))
      }

      setLoading(false)
    }

    checkAuth()
  }, [router])

  const savePets = (updatedPets: Pet[]) => {
    setPets(updatedPets)
    localStorage.setItem(`pets_${user.id}`, JSON.stringify(updatedPets))
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validar tamaño (máx 2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert('La imagen debe ser menor de 2MB')
      return
    }

    // Validar tipo
    if (!file.type.startsWith('image/')) {
      alert('Solo se permiten imágenes')
      return
    }

    // Convertir a Base64
    const reader = new FileReader()
    reader.onloadend = () => {
      const base64String = reader.result as string
      setFormData({ ...formData, photo: base64String })
      setPhotoPreview(base64String)
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.breed) {
      alert('Por favor, completa al menos el nombre y la raza')
      return
    }

    if (editingPet) {
      // Editar mascota existente
      const updatedPets = pets.map(p => 
        p.id === editingPet.id ? { ...formData, id: editingPet.id } as Pet : p
      )
      savePets(updatedPets)
    } else {
      // Añadir nueva mascota
      const newPet: Pet = {
        ...formData as Pet,
        id: Date.now().toString(),
      }
      savePets([...pets, newPet])
    }

    // Reset
    setFormData({
      name: '',
      breed: '',
      age: 0,
      birthDate: '',
      sex: 'macho',
      weight: 0,
      color: '',
    })
    setShowAddModal(false)
    setEditingPet(null)
  }

  const handleEdit = (pet: Pet) => {
    setEditingPet(pet)
    setFormData(pet)
    setPhotoPreview(pet.photo || '')
    setShowAddModal(true)
  }

  const handleDelete = (petId: string) => {
    if (!confirm('¿Estás seguro de eliminar esta mascota?')) return
    const updatedPets = pets.filter(p => p.id !== petId)
    savePets(updatedPets)
  }

  const handleCancel = () => {
    setShowAddModal(false)
    setEditingPet(null)
    setPhotoPreview('')
    setFormData({
      name: '',
      breed: '',
      age: 0,
      birthDate: '',
      sex: 'macho',
      weight: 0,
      color: '',
      photo: '',
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-forest rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-forest-dark to-forest text-white -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-28">
          <Link href="/apps" className="inline-flex items-center text-white/80 hover:text-white mb-4">
            <ArrowLeft size={20} className="mr-2" />
            Volver a Apps
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Mis Mascotas</h1>
              <p className="text-white/90 mt-2">Gestiona la información de tus perros</p>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-white text-forest-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center"
            >
              <Plus size={20} className="mr-2" />
              Añadir Mascota
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {pets.length === 0 ? (
          // Estado vacío
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Dog size={64} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Aún no has añadido ninguna mascota</h2>
            <p className="text-gray-600 mb-8">Añade a tu primer perro para empezar a gestionar su información</p>
            <button
              onClick={() => setShowAddModal(true)}
              className="btn-primary inline-flex items-center"
            >
              <Plus size={20} className="mr-2" />
              Añadir Mi Primera Mascota
            </button>
          </div>
        ) : (
          // Grid de mascotas
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pets.map((pet) => (
              <div key={pet.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                {/* Foto/Avatar */}
                <div className="h-48 bg-gradient-to-br from-forest to-sage flex items-center justify-center relative overflow-hidden">
                  {pet.photo ? (
                    <img 
                      src={pet.photo} 
                      alt={pet.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Dog size={80} className="text-white" />
                  )}
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pet.name}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Dog size={16} className="mr-2" />
                      <span className="text-sm">{pet.breed}</span>
                    </div>
                    
                    {pet.age > 0 && (
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{pet.age} {pet.age === 1 ? 'año' : 'años'}</span>
                      </div>
                    )}

                    {pet.weight > 0 && (
                      <div className="flex items-center text-gray-600">
                        <Weight size={16} className="mr-2" />
                        <span className="text-sm">{pet.weight} kg</span>
                      </div>
                    )}

                    <div className="flex items-center text-gray-600">
                      <Heart size={16} className="mr-2" />
                      <span className="text-sm capitalize">{pet.sex}</span>
                    </div>

                    {pet.color && (
                      <div className="text-sm text-gray-600">
                        Color: <span className="font-medium">{pet.color}</span>
                      </div>
                    )}
                  </div>

                  {/* Acciones */}
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(pet)}
                      className="flex-1 btn-secondary flex items-center justify-center text-sm"
                    >
                      <Edit2 size={16} className="mr-2" />
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(pet.id)}
                      className="px-4 py-2 border-2 border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal Añadir/Editar */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">
                {editingPet ? 'Editar Mascota' : 'Añadir Nueva Mascota'}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Vista previa de foto */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Foto de tu mascota
                </label>
                <div className="flex items-start space-x-4">
                  {/* Preview */}
                  <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden border-2 border-gray-300">
                    {photoPreview ? (
                      <img 
                        src={photoPreview} 
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Dog size={48} className="text-gray-400" />
                    )}
                  </div>
                  
                  {/* Upload button */}
                  <div className="flex-1">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="hidden"
                      id="photo-upload"
                    />
                    <label
                      htmlFor="photo-upload"
                      className="inline-block px-4 py-2 bg-forest text-white rounded-lg hover:bg-forest-dark cursor-pointer transition"
                    >
                      {photoPreview ? 'Cambiar Foto' : 'Subir Foto'}
                    </label>
                    <p className="text-xs text-gray-500 mt-2">
                      Formato: JPG, PNG o GIF (máx. 2MB)
                    </p>
                    {photoPreview && (
                      <button
                        type="button"
                        onClick={() => {
                          setPhotoPreview('')
                          setFormData({ ...formData, photo: '' })
                        }}
                        className="text-sm text-red-600 hover:text-red-700 mt-2"
                      >
                        Eliminar foto
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Nombre */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre * <span className="text-gray-500">(requerido)</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest focus:border-transparent"
                  placeholder="Ej: Max"
                  required
                />
              </div>

              {/* Raza */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Raza * <span className="text-gray-500">(requerido)</span>
                </label>
                <input
                  type="text"
                  value={formData.breed}
                  onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest focus:border-transparent"
                  placeholder="Ej: Golden Retriever, Mestizo, etc."
                  required
                />
              </div>

              {/* Sexo y Edad */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sexo</label>
                  <select
                    value={formData.sex}
                    onChange={(e) => setFormData({ ...formData, sex: e.target.value as 'macho' | 'hembra' })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest focus:border-transparent"
                  >
                    <option value="macho">Macho</option>
                    <option value="hembra">Hembra</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Edad (años)
                  </label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest focus:border-transparent"
                    min="0"
                    max="30"
                  />
                </div>
              </div>

              {/* Fecha nacimiento y Peso */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fecha de Nacimiento
                  </label>
                  <input
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Peso (kg)
                  </label>
                  <input
                    type="number"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: parseFloat(e.target.value) || 0 })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest focus:border-transparent"
                    step="0.1"
                    min="0"
                    max="150"
                  />
                </div>
              </div>

              {/* Color */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                <input
                  type="text"
                  value={formData.color}
                  onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest focus:border-transparent"
                  placeholder="Ej: Dorado, Negro, Atigrado, etc."
                />
              </div>

              {/* Botones */}
              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 btn-primary"
                >
                  {editingPet ? 'Guardar Cambios' : 'Añadir Mascota'}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 btn-secondary"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

