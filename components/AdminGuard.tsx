'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem('epiccsafe_user')
    if (!user) {
      router.replace('/')
      return
    }
    try {
      const parsed = JSON.parse(user)
      if (parsed.is_admin) {
        setAuthorized(true)
      } else {
        router.replace('/')
      }
    } catch {
      router.replace('/')
    }
  }, [router])

  if (!authorized) {
    return (
      <div className="min-h-screen bg-[#0F1923] flex items-center justify-center">
        <div className="text-center flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[rgba(232,0,29,0.15)] flex items-center justify-center">
            <svg width="32" viewBox="0 0 24 24" fill="none" stroke="#E8001D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M12 8v4M12 16h.01"/>
            </svg>
          </div>
          <h2 className="text-white text-xl font-bold">Not Authorized</h2>
          <p className="text-[#6B7E93] text-sm">You do not have permission to access this page.</p>
          <a href="/" className="px-6 py-2.5 bg-[#E8001D] text-white text-sm font-bold rounded-lg hover:bg-[#ff1a32] transition-colors no-underline">
            Back to Home
          </a>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
