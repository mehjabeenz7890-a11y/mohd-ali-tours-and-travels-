import { createContext, useContext, useState, useCallback } from 'react'

const EnquiryContext = createContext(null)

export function EnquiryProvider({ children }) {
  const [prefill, setPrefill] = useState({ destination: '', service: '' })

  const requestEnquiry = useCallback((data) => {
    setPrefill((prev) => ({ ...prev, ...data }))
    const el = document.getElementById('contact')
    el?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <EnquiryContext.Provider value={{ prefill, requestEnquiry }}>
      {children}
    </EnquiryContext.Provider>
  )
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext)
  if (!ctx) {
    throw new Error('useEnquiry must be used within an EnquiryProvider')
  }
  return ctx
}
