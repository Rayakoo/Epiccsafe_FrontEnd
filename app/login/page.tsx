'use client';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#8B0000] text-white overflow-hidden">
      {/* Top Left Logo */}
      <div className="fixed top-7 left-8 z-10">
        <div className="text-3xl font-bold italic">CIMB</div>
      </div>

      {/* Main Layout */}
      <div className="flex items-center justify-center min-h-screen px-15 gap-0">
        {/* Left: EPICCSAFE Branding */}
        <div className="flex-1 flex items-center justify-start pl-5 animate-fadeIn">
          <div className="font-mono text-5xl font-semibold tracking-[2px]">
            EPICCSAFE
          </div>
        </div>

        {/* Right: Login Card */}
        <div className="flex-shrink-0 flex items-center justify-end pr-5 animate-slideUp">
          <div className="bg-[#d6d0d0] rounded-2xl p-11 w-[420px] shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
            <div className="mb-9 text-left">
              <p className="text-[#1a1a1a] text-xl font-semibold mb-2">Welcome to</p>
              <div className="font-mono text-2xl font-semibold tracking-[2px] text-[#1a1a1a]">
                EPICCSAFE
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Enter Admin ID"
                className="w-full bg-transparent border-b-2 border-[#b0a8a8] py-2.5 px-0 text-[#333] text-[15px] font-sans outline-none focus:border-[#8B0000] transition-colors"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent border-b-2 border-[#b0a8a8] py-2.5 px-0 text-[#333] text-[15px] font-sans outline-none focus:border-[#8B0000] transition-colors"
              />

              <div className="flex justify-end mt-1 mb-7">
                <a href="#" className="text-[13.5px] font-bold text-[#8B0000] hover:opacity-75 hover:underline transition-opacity">
                  Forgot Admin ID/Password?
                </a>
              </div>

              <button
                onClick={() => window.location.href = '/admin/dashboard'}
                className="w-full bg-[#6B0000] text-white py-4 rounded-full text-[15px] font-extrabold tracking-[1.5px] cursor-pointer hover:bg-[#8B0000] hover:-translate-y-0.5 transition-all active:translate-y-0"
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
