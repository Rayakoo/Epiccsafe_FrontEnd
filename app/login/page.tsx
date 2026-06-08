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
      {/* Top Left Logo */}
      <div className="fixed top-7 left-8 z-10">
        <img src="/logo_cimb.png" alt="CIMB" className="h-16" />
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 md:px-15 gap-8 md:gap-10 py-8 md:py-0">
        {/* Left: EPICCSAFE Branding */}
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-start md:pl-5 animate-fadeIn">
          <img src="/logo_tulisanepiccsafe_putih.png" alt="EPICCSAFE" className="h-24 md:h-36" />
        </div>

        {/* Right: Login Card */}
        <div className="flex-shrink-0 flex items-center justify-center w-full md:justify-end md:pr-5 animate-slideUp md:w-auto">
          <div className="bg-[#d6d0d0] rounded-2xl p-10 md:p-14 w-full md:w-[480px] shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
            <div className="mb-8 md:mb-10 text-left">
              <p className="text-[#1a1a1a] text-2xl font-semibold mb-3">Welcome to</p>
              <img src="/logo_tulisanepiccsafe_merah.png" alt="EPICCSAFE" className="h-16 md:h-20" />
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-[#333] text-sm font-semibold">Username</label>
                <input
                  type="email"
                  placeholder="Masukkan username"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-[#b0a8a8] py-3 px-0 text-[#333] text-[16px] font-sans outline-none focus:border-[#8B0000] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#333] text-sm font-semibold">Password</label>
                <input
                  type="password"
                  placeholder="Masukkan password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-[#b0a8a8] py-3 px-0 text-[#333] text-[16px] font-sans outline-none focus:border-[#8B0000] transition-colors"
                />
              </div>

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
                className="w-full bg-[#6B0000] text-white py-3.5 md:py-4 rounded-full text-[15px] font-extrabold tracking-[1.5px] cursor-pointer hover:bg-[#8B0000] hover:-translate-y-0.5 transition-all active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? 'Memproses...' : (
                  <><img src="/logo_gembok.png" alt="" className="w-4 h-4" /> LOGIN</>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
