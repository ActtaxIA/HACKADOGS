'use client'

import { useState, useEffect } from 'react'
import { getLocalSession } from '@/lib/auth/mockAuth'

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const checkAuth = () => {
      const { data } = getLocalSession()
      
      if (data?.session) {
        setIsAuthenticated(true)
        setUser(data.session.user)
      } else {
        setIsAuthenticated(false)
        setUser(null)
      }
      
      setIsLoading(false)
    }

    checkAuth()
    
    // Escuchar cambios en localStorage
    const handleStorageChange = () => {
      checkAuth()
    }
    
    window.addEventListener('storage', handleStorageChange)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  return { isAuthenticated, isLoading, user }
}
