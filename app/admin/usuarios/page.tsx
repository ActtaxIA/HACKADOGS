import { createServerClient } from '@/lib/supabase/client'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Users, Shield, Mail, Calendar, Search } from 'lucide-react'

export default async function UsuariosAdminPage() {
  const supabase = createServerClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/auth/login')
  }

  // Check admin
  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', session.user.id)
    .single()

  if (profile?.role !== 'admin') {
    redirect('/cliente/dashboard')
  }

  // Get all users
  const { data: users } = await supabase
    .from('profiles')
    .select('*, dogs(count)')
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-gradient-to-r from-forest-dark to-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/admin/dashboard" className="inline-flex items-center text-white/80 hover:text-white mb-4">
            <ArrowLeft size={20} className="mr-2" />
            Volver al Dashboard
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Gestión de Usuarios</h1>
              <p className="text-white/90 mt-2">{users?.length || 0} usuarios totales</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search & Filters */}
        <div className="bg-white rounded-xl p-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar usuarios..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest focus:border-transparent"
              />
            </div>
            <select className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest">
              <option value="">Todos los roles</option>
              <option value="client">Clientes</option>
              <option value="admin">Administradores</option>
            </select>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-2">
              <Users className="text-blue-600" size={24} />
              <span className="text-sm text-gray-600">Total Usuarios</span>
            </div>
            <p className="text-3xl font-bold text-forest-dark">{users?.length || 0}</p>
          </div>

          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-2">
              <Shield className="text-green-600" size={24} />
              <span className="text-sm text-gray-600">Administradores</span>
            </div>
            <p className="text-3xl font-bold text-forest-dark">
              {users?.filter(u => u.role === 'admin').length || 0}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-2">
              <Users className="text-purple-600" size={24} />
              <span className="text-sm text-gray-600">Clientes</span>
            </div>
            <p className="text-3xl font-bold text-forest-dark">
              {users?.filter(u => u.role === 'client').length || 0}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-2">
              <Calendar className="text-orange-600" size={24} />
              <span className="text-sm text-gray-600">Nuevos (30d)</span>
            </div>
            <p className="text-3xl font-bold text-forest-dark">
              {users?.filter(u => {
                const created = new Date(u.created_at)
                const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
                return created > thirtyDaysAgo
              }).length || 0}
            </p>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Usuario</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Rol</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Perros</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Registro</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users && users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-forest-dark/10 rounded-full flex items-center justify-center">
                            {user.avatar_url ? (
                              <img src={user.avatar_url} alt="" className="w-full h-full rounded-full object-cover" />
                            ) : (
                              <Users size={20} className="text-forest-dark" />
                            )}
                          </div>
                          <div>
                            <p className="font-semibold text-forest-dark">{user.full_name || 'Sin nombre'}</p>
                            <p className="text-sm text-gray-500">{user.phone || '-'}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <Mail size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-700">{user.email}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          user.role === 'admin' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {user.role === 'admin' ? 'Admin' : 'Cliente'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-700">
                          {user.dogs?.[0]?.count || 0} perro(s)
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">
                          {new Date(user.created_at).toLocaleDateString('es-ES', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                          })}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                            Ver
                          </button>
                          <span className="text-gray-300">|</span>
                          <button className="text-gray-600 hover:text-gray-700 text-sm font-semibold">
                            Editar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                      <Users size={48} className="mx-auto mb-4 opacity-50" />
                      <p>No hay usuarios</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
