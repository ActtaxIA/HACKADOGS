'use client'

import { useState, useEffect } from 'react'
import { Bell, X, Check, Trash2 } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { getUserNotifications, markNotificationAsRead, deleteNotification, getUnreadNotificationCount } from '@/lib/notifications'
import Link from 'next/link'

export default function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false)
  const [notifications, setNotifications] = useState<any[]>([])
  const [unreadCount, setUnreadCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  useEffect(() => {
    loadNotifications()
    loadUnreadCount()

    // Subscribe to new notifications
    const channel = supabase
      .channel('notifications')
      .on('postgres_changes', 
        { event: 'INSERT', schema: 'public', table: 'notifications' },
        () => {
          loadNotifications()
          loadUnreadCount()
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const loadNotifications = async () => {
    setLoading(true)
    const { data: { session } } = await supabase.auth.getSession()
    if (session) {
      const data = await getUserNotifications(session.user.id)
      setNotifications(data)
    }
    setLoading(false)
  }

  const loadUnreadCount = async () => {
    const { data: { session } } = await supabase.auth.getSession()
    if (session) {
      const count = await getUnreadNotificationCount(session.user.id)
      setUnreadCount(count)
    }
  }

  const handleMarkAsRead = async (notificationId: string) => {
    await markNotificationAsRead(notificationId)
    loadNotifications()
    loadUnreadCount()
  }

  const handleDelete = async (notificationId: string) => {
    await deleteNotification(notificationId)
    loadNotifications()
    loadUnreadCount()
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'vaccination':
        return '💉'
      case 'event':
        return '📅'
      case 'message':
        return '💬'
      case 'friend_request':
        return '🐾'
      default:
        return '🔔'
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 hover:bg-gray-100 rounded-lg transition"
      >
        <Bell size={24} />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-xl border border-gray-200 z-20 max-h-[600px] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-bold text-forest-dark">Notificaciones</h3>
              <button onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Notifications List */}
            <div className="flex-1 overflow-y-auto">
              {loading ? (
                <div className="p-6 text-center text-gray-500">
                  Cargando...
                </div>
              ) : notifications.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 hover:bg-gray-50 transition ${
                        !notification.read ? 'bg-blue-50/50' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl flex-shrink-0">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-forest-dark text-sm">
                            {notification.title}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-500 mt-2">
                            {new Date(notification.created_at).toLocaleDateString('es-ES', {
                              day: 'numeric',
                              month: 'short',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                          {notification.action_url && (
                            <Link
                              href={notification.action_url}
                              className="text-sm text-green-600 hover:text-green-700 mt-2 inline-block"
                              onClick={() => {
                                handleMarkAsRead(notification.id)
                                setIsOpen(false)
                              }}
                            >
                              Ver detalles →
                            </Link>
                          )}
                        </div>
                        <div className="flex flex-col space-y-2">
                          {!notification.read && (
                            <button
                              onClick={() => handleMarkAsRead(notification.id)}
                              className="p-1 hover:bg-green-100 rounded text-green-600"
                              title="Marcar como leída"
                            >
                              <Check size={16} />
                            </button>
                          )}
                          <button
                            onClick={() => handleDelete(notification.id)}
                            className="p-1 hover:bg-red-100 rounded text-red-600"
                            title="Eliminar"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center text-gray-500">
                  <Bell size={48} className="mx-auto mb-2 opacity-50" />
                  <p>No tienes notificaciones</p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
