import { createClient } from './supabase/client'

export interface Notification {
  id: string
  user_id: string
  type: 'vaccination' | 'event' | 'message' | 'friend_request' | 'system'
  title: string
  message: string
  read: boolean
  action_url?: string
  created_at: string
}

/**
 * Send vaccination reminder
 */
export async function sendVaccinationReminder(
  userId: string,
  dogName: string,
  vaccineName: string,
  dueDate: string
) {
  const supabase = createClient()
  
  const notification = {
    user_id: userId,
    type: 'vaccination',
    title: 'Recordatorio de Vacuna',
    message: `${dogName} necesita la vacuna de ${vaccineName} el ${new Date(dueDate).toLocaleDateString('es-ES')}`,
    action_url: '/app/health/historial/vacunas',
    read: false
  }

  const { error } = await supabase
    .from('notifications')
    .insert([notification])

  if (error) {
    console.error('Error sending notification:', error)
  }
}

/**
 * Send event reminder
 */
export async function sendEventReminder(
  userId: string,
  eventTitle: string,
  eventDate: string,
  eventId: string
) {
  const supabase = createClient()
  
  const notification = {
    user_id: userId,
    type: 'event',
    title: 'Recordatorio de Evento',
    message: `El evento "${eventTitle}" es el ${new Date(eventDate).toLocaleDateString('es-ES')}`,
    action_url: `/app/community/eventos/${eventId}`,
    read: false
  }

  const { error } = await supabase
    .from('notifications')
    .insert([notification])

  if (error) {
    console.error('Error sending notification:', error)
  }
}

/**
 * Send friend request notification
 */
export async function sendFriendRequestNotification(
  userId: string,
  fromDogName: string,
  toDogName: string,
  requestId: string
) {
  const supabase = createClient()
  
  const notification = {
    user_id: userId,
    type: 'friend_request',
    title: 'Nueva Solicitud de Amistad',
    message: `${fromDogName} quiere ser amigo de ${toDogName}`,
    action_url: `/app/community/solicitudes/${requestId}`,
    read: false
  }

  const { error } = await supabase
    .from('notifications')
    .insert([notification])

  if (error) {
    console.error('Error sending notification:', error)
  }
}

/**
 * Send message notification
 */
export async function sendMessageNotification(
  userId: string,
  fromUserName: string,
  messagePreview: string
) {
  const supabase = createClient()
  
  const notification = {
    user_id: userId,
    type: 'message',
    title: 'Nuevo Mensaje',
    message: `${fromUserName}: ${messagePreview}`,
    action_url: '/app/community/chat',
    read: false
  }

  const { error } = await supabase
    .from('notifications')
    .insert([notification])

  if (error) {
    console.error('Error sending notification:', error)
  }
}

/**
 * Get user notifications
 */
export async function getUserNotifications(userId: string, limit: number = 10) {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('notifications')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Error fetching notifications:', error)
    return []
  }

  return data as Notification[]
}

/**
 * Mark notification as read
 */
export async function markNotificationAsRead(notificationId: string) {
  const supabase = createClient()
  
  const { error } = await supabase
    .from('notifications')
    .update({ read: true })
    .eq('id', notificationId)

  if (error) {
    console.error('Error marking notification as read:', error)
    return false
  }

  return true
}

/**
 * Mark all notifications as read
 */
export async function markAllNotificationsAsRead(userId: string) {
  const supabase = createClient()
  
  const { error } = await supabase
    .from('notifications')
    .update({ read: true })
    .eq('user_id', userId)
    .eq('read', false)

  if (error) {
    console.error('Error marking all notifications as read:', error)
    return false
  }

  return true
}

/**
 * Get unread notification count
 */
export async function getUnreadNotificationCount(userId: string) {
  const supabase = createClient()
  
  const { count, error } = await supabase
    .from('notifications')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId)
    .eq('read', false)

  if (error) {
    console.error('Error counting unread notifications:', error)
    return 0
  }

  return count || 0
}

/**
 * Delete notification
 */
export async function deleteNotification(notificationId: string) {
  const supabase = createClient()
  
  const { error } = await supabase
    .from('notifications')
    .delete()
    .eq('id', notificationId)

  if (error) {
    console.error('Error deleting notification:', error)
    return false
  }

  return true
}

/**
 * Check and send vaccination reminders (to be run daily)
 */
export async function checkVaccinationReminders() {
  const supabase = createClient()
  
  // Get vaccinations due in the next 7 days
  const sevenDaysFromNow = new Date()
  sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7)
  
  const { data: vaccinations } = await supabase
    .from('vaccinations')
    .select('*, dogs(name, owner_id)')
    .lte('next_dose_date', sevenDaysFromNow.toISOString().split('T')[0])
    .gte('next_dose_date', new Date().toISOString().split('T')[0])
    .eq('reminder_sent', false)

  if (vaccinations) {
    for (const vac of vaccinations) {
      await sendVaccinationReminder(
        vac.dogs.owner_id,
        vac.dogs.name,
        vac.vaccine_name,
        vac.next_dose_date
      )
      
      // Mark reminder as sent
      await supabase
        .from('vaccinations')
        .update({ reminder_sent: true })
        .eq('id', vac.id)
    }
  }
}
