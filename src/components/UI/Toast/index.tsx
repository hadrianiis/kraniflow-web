"use client"

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { ToastContainer, Toast, ToastContent, ToastIcon, ToastMessage, ToastDescription, CloseButton } from './styles'

interface ToastData {
  id: string
  type: 'success' | 'error' | 'info' | 'warning'
  title: string
  description?: string
  icon?: ReactNode
  duration?: number
}

interface ToastContextType {
  toast: (data: Omit<ToastData, 'id'>) => void
  success: (title: string, options?: { description?: string; icon?: ReactNode; duration?: number }) => void
  error: (title: string, options?: { description?: string; icon?: ReactNode; duration?: number }) => void
  info: (title: string, options?: { description?: string; icon?: ReactNode; duration?: number }) => void
  warning: (title: string, options?: { description?: string; icon?: ReactNode; duration?: number }) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

interface ToastProviderProps {
  children: ReactNode
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastData[]>([])

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])

  const addToast = useCallback((data: Omit<ToastData, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast: ToastData = {
      id,
      duration: 5000,
      ...data
    }

    setToasts(prev => [...prev, newToast])

    // Auto remove after duration
    if (newToast.duration && newToast.duration > 0) {
      setTimeout(() => {
        removeToast(id)
      }, newToast.duration)
    }
  }, [removeToast])

  const toast = useCallback((data: Omit<ToastData, 'id'>) => {
    addToast(data)
  }, [addToast])

  const success = useCallback((title: string, options?: { description?: string; icon?: ReactNode; duration?: number }) => {
    addToast({
      type: 'success',
      title,
      ...options
    })
  }, [addToast])

  const error = useCallback((title: string, options?: { description?: string; icon?: ReactNode; duration?: number }) => {
    addToast({
      type: 'error',
      title,
      ...options
    })
  }, [addToast])

  const info = useCallback((title: string, options?: { description?: string; icon?: ReactNode; duration?: number }) => {
    addToast({
      type: 'info',
      title,
      ...options
    })
  }, [addToast])

  const warning = useCallback((title: string, options?: { description?: string; icon?: ReactNode; duration?: number }) => {
    addToast({
      type: 'warning',
      title,
      ...options
    })
  }, [addToast])

  return (
    <ToastContext.Provider value={{ toast, success, error, info, warning }}>
      {children}
      <ToastContainer>
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: -50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              layout
            >
              <Toast $type={toast.type}>
                {toast.icon && <ToastIcon>{toast.icon}</ToastIcon>}
                <ToastContent>
                  <ToastMessage>{toast.title}</ToastMessage>
                  {toast.description && (
                    <ToastDescription>{toast.description}</ToastDescription>
                  )}
                </ToastContent>
                <CloseButton onClick={() => removeToast(toast.id)}>
                  <X size={16} />
                </CloseButton>
              </Toast>
            </motion.div>
          ))}
        </AnimatePresence>
      </ToastContainer>
    </ToastContext.Provider>
  )
}

// Export individual toast functions for direct use
export const toast = {
  success: (title: string, options?: { description?: string; icon?: ReactNode; duration?: number }) => {
    // This will be used by the MarketingForm component
    console.log('Toast success:', title, options)
  },
  error: (title: string, options?: { description?: string; icon?: ReactNode; duration?: number }) => {
    console.log('Toast error:', title, options)
  },
  info: (title: string, options?: { description?: string; icon?: ReactNode; duration?: number }) => {
    console.log('Toast info:', title, options)
  },
  warning: (title: string, options?: { description?: string; icon?: ReactNode; duration?: number }) => {
    console.log('Toast warning:', title, options)
  }
}
