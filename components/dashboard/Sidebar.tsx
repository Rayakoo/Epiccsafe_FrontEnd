'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { signout } from '@/services/auth'

const NAV_ITEMS = [
  { href: '/admin/dashboard', label: 'Dashboard', section: 'Overview' },
  { href: '/admin/all-ticket', label: 'Semua Tiket', section: 'Overview' },
  { href: '/admin/triage', label: 'Triage', section: 'Penanganan' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  async function handleLogout() {
    try {
      await signout()
    } catch {
      // ignore
    }
    localStorage.removeItem('epiccsafe_user')
    router.replace('/')
  }

  const linkClass = (href: string) =>
    `block px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors ${
      pathname === href
        ? 'bg-white/10 text-white'
        : 'text-[#6B7E93] hover:bg-white/5 hover:text-white'
    }`

  return (
    <>
      {/* Mobile header bar */}
      <div className="md:hidden flex items-center h-12 bg-[#0B1520] border-b border-white/10 px-3 gap-3 sticky top-0 z-40">
        <button
          onClick={() => setOpen(!open)}
          className="w-8 h-8 flex items-center justify-center rounded-lg bg-transparent text-white hover:bg-white/10 transition-colors"
        >
          <svg width="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {open ? (
              <path d="M4 4l10 10M14 4L4 14" />
            ) : (
              <>
                <path d="M2 4h14M2 9h14M2 14h14" />
              </>
            )}
          </svg>
        </button>
        <span className="text-white font-bold text-sm">EPICCSAFE Admin</span>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 w-[220px] bg-[#0B1520] border-r border-white/10 min-h-screen flex flex-col transition-transform duration-200 ${
          open ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:fixed`}
      >
        <div className="bg-[#E8001D] p-4">
          <div className="text-white font-extrabold text-[13px] leading-tight">
            EPICCSAFE Admin
          </div>
          <div className="text-white/70 text-[10px] mt-1">
            Security Team — CIMB Niaga
          </div>
        </div>

        <nav className="flex-1 p-3 flex flex-col gap-0.5 overflow-y-auto">
          {NAV_ITEMS.map((item, i, arr) => {
            const showSection = i === 0 || item.section !== arr[i - 1].section
            return (
              <div key={item.href}>
                {showSection && (
                  <div className="text-[9.5px] font-bold text-[#6B7E93] tracking-[1.2px] uppercase px-2 pt-3 pb-1.5">
                    {item.section}
                  </div>
                )}
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={linkClass(item.href)}
                >
                  {item.label}
                </a>
              </div>
            )
          })}
        </nav>

        <div className="p-3 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full px-3 py-1.5 rounded-lg text-[13px] font-medium text-[#6B7E93] hover:bg-white/5 hover:text-white transition-colors text-left cursor-pointer"
          >
            Logout
          </button>
        </div>
      </aside>
    </>
  )
}
