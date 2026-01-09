'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, Users, ShoppingCart, TrendingUp, Plus, Edit, Trash2, Eye, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AdministratorPage() {
  const stats = [
    { label: 'Total Cursos', value: '12', icon: BookOpen, color: 'blue' },
    { label: 'Estudiantes', value: '284', icon: Users, color: 'green' },
    { label: 'Ventas Este Mes', value: '45', icon: ShoppingCart, color: 'purple' },
    { label: 'Ingresos', value: '€1,234', icon: DollarSign, color: 'yellow' }
  ]

  const cursos = [
    { id: 1, title: 'Introducción a la Educación Canina', students: 284, revenue: '€0', status: 'Publicado', isFree: true },
    { id: 2, title: 'Cómo Enseñar a Sentarse', students: 156, revenue: '€1,559', status: 'Publicado', isFree: false },
    { id: 3, title: 'Cómo Enseñar a Venir', students: 142, revenue: '€2,129', status: 'Publicado', isFree: false },
    { id: 4, title: 'Caminar sin Tirar', students: 98, revenue: '€1,960', status: 'Publicado', isFree: false },
    { id: 5, title: 'Solucionar Mordidas', students: 76, revenue: '€1,899', status: 'Borrador', isFree: false }
  ]

  const recentSales = [
    { id: 1, student: 'María García', curso: 'Caminar sin Tirar', amount: '€19.99', date: 'Hace 2 horas' },
    { id: 2, student: 'Juan Pérez', curso: 'Solucionar Mordidas', amount: '€24.99', date: 'Hace 3 horas' },
    { id: 3, student: 'Ana Martínez', curso: 'Cómo Enseñar a Sentarse', amount: '€9.99', date: 'Hace 5 horas' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">Panel de Administración</h1>
            <p className="text-white/90">Gestión de cursos y estudiantes</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              const colors = {
                blue: 'from-blue-500 to-blue-600',
                green: 'from-green-500 to-green-600',
                purple: 'from-purple-500 to-purple-600',
                yellow: 'from-yellow-500 to-yellow-600'
              }
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${colors[stat.color as keyof typeof colors]} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-600 mb-1">{stat.label}</h3>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </motion.div>
              )
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cursos */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Cursos</h2>
                  <Link
                    href="/administrator/cursos/nuevo"
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-all flex items-center"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Nuevo Curso
                  </Link>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Curso</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Estudiantes</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Ingresos</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Estado</th>
                        <th className="text-right py-3 px-4 font-semibold text-gray-700">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cursos.map((curso) => (
                        <tr key={curso.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                          <td className="py-4 px-4">
                            <div>
                              <div className="font-semibold text-gray-900">{curso.title}</div>
                              {curso.isFree && (
                                <span className="text-xs text-green-600 font-semibold">GRATUITO</span>
                              )}
                            </div>
                          </td>
                          <td className="py-4 px-4 text-gray-600">{curso.students}</td>
                          <td className="py-4 px-4 text-gray-600">{curso.revenue}</td>
                          <td className="py-4 px-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              curso.status === 'Publicado'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              {curso.status}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center justify-end space-x-2">
                              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                                <Eye className="w-4 h-4" />
                              </button>
                              <Link
                                href={`/administrator/cursos/editar/${curso.id}`}
                                className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                              >
                                <Edit className="w-4 h-4" />
                              </Link>
                              <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Ventas Recientes */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Ventas Recientes</h3>
                <div className="space-y-4">
                  {recentSales.map((sale) => (
                    <div key={sale.id} className="pb-4 border-b border-gray-100 last:border-0">
                      <div className="flex items-start justify-between mb-1">
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{sale.student}</p>
                          <p className="text-xs text-gray-600">{sale.curso}</p>
                        </div>
                        <span className="font-bold text-green-600 text-sm">{sale.amount}</span>
                      </div>
                      <p className="text-xs text-gray-500">{sale.date}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/administrator/ventas"
                  className="block mt-6 text-center text-indigo-600 font-semibold hover:text-indigo-700 transition"
                >
                  Ver todas las ventas →
                </Link>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Acciones Rápidas</h3>
                <div className="space-y-2">
                  <Link
                    href="/administrator/cursos/nuevo"
                    className="block w-full text-left p-3 rounded-lg hover:bg-gray-50 transition text-gray-700 font-medium"
                  >
                    + Crear nuevo curso
                  </Link>
                  <Link
                    href="/administrator/estudiantes"
                    className="block w-full text-left p-3 rounded-lg hover:bg-gray-50 transition text-gray-700 font-medium"
                  >
                    Ver estudiantes
                  </Link>
                  <Link
                    href="/administrator/reportes"
                    className="block w-full text-left p-3 rounded-lg hover:bg-gray-50 transition text-gray-700 font-medium"
                  >
                    Generar reporte
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
