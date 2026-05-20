'use client';

import { useState } from 'react'
import { signin } from '@/services/auth'
import { ApiError } from '@/services/api'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleLogin() {
    setLoading(true)
    setError('')

    try {
      const res = await signin({ email, password })

      if (res.user.is_admin) {
        window.location.href = '/admin/dashboard'
      } else {
        setError('Akses ditolak: akun Anda tidak memiliki hak admin.')
      }
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.detail)
      } else {
        setError('Login gagal. Periksa kembali email dan password.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#8B0000] text-white overflow-hidden">
      {/* Top Left Logo - hidden on mobile */}
      <div className="hidden md:fixed md:top-7 md:left-8 z-10">
        <div className="text-3xl font-bold italic">CIMB</div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 md:px-15 gap-8 md:gap-0 py-8 md:py-0">
        {/* Left: EPICCSAFE Branding - hidden on mobile, shown on desktop */}
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-start md:pl-5 animate-fadeIn">
          <div className="font-mono text-4xl md:text-5xl font-semibold tracking-[2px]">
            EPICCSAFE
          </div>
        </div>

        {/* Right: Login Card */}
        <div className="flex-shrink-0 flex items-center justify-center w-full md:justify-end md:pr-5 animate-slideUp md:w-auto">
          <div className="bg-[#d6d0d0] rounded-2xl p-8 md:p-11 w-full max-w-[420px] shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
            <div className="mb-6 md:mb-9 text-left">
              <p className="text-[#1a1a1a] text-xl font-semibold mb-2">Welcome to</p>
              <div className="font-mono text-2xl font-semibold tracking-[2px] text-[#1a1a1a]">
                EPICCSAFE
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <input
                type="email"
                placeholder="Email Admin"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-transparent border-b-2 border-[#b0a8a8] py-2.5 px-0 text-[#333] text-[15px] font-sans outline-none focus:border-[#8B0000] transition-colors"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-transparent border-b-2 border-[#b0a8a8] py-2.5 px-0 text-[#333] text-[15px] font-sans outline-none focus:border-[#8B0000] transition-colors"
              />

              {error && (
                <p className="text-[#E8001D] text-[13px] font-semibold text-center bg-[rgba(232,0,29,0.1)] rounded-lg py-2">
                  {error}
                </p>
              )}

              <div className="flex justify-end mt-1 mb-5 md:mb-7">
                <a href="#" className="text-[13.5px] font-bold text-[#8B0000] hover:opacity-75 hover:underline transition-opacity">
                  Forgot Admin ID/Password?
                </a>
              </div>

              <button
                onClick={handleLogin}
                disabled={loading}
                className="w-full bg-[#6B0000] text-white py-3.5 md:py-4 rounded-full text-[15px] font-extrabold tracking-[1.5px] cursor-pointer hover:bg-[#8B0000] hover:-translate-y-0.5 transition-all active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Memproses...' : 'LOGIN'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
