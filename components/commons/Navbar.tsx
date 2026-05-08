'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("EN");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => setLoginOpen(false);
    if (loginOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [loginOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-[#2a0606] border-b border-white/7 h-[60px]">
      <div className="max-w-[1280px] mx-auto h-full flex items-center justify-between px-4 md:px-6 gap-3">
        <div className="flex items-center gap-1 flex-1 overflow-hidden">
          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden bg-white/12 border-none text-white rounded-lg w-8 h-8 flex items-center justify-center cursor-pointer flex-shrink-0 hover:bg-white/20 transition-colors"
          >
            <svg width="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-0.5 overflow-x-auto">
            <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/7 hover:text-white transition-all">Personal</a>
            <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/7 hover:text-white transition-all">Business</a>
            <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/7 hover:text-white transition-all">CIMB Preferred & Private</a>
            <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/7 hover:text-white transition-all">CIMB Private Banking</a>
            <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/7 hover:text-white transition-all">Investor</a>
            <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/7 hover:text-white transition-all">About Us</a>
            <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/7 hover:text-white transition-all">Contact Us</a>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button className="bg-white/10 border-none text-white rounded-full w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-white/18 transition-colors">
            <svg width="18" viewBox="0 0 18 18" fill="none">
              <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="bg-white/10 border-none text-white rounded-full w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-white/18 transition-colors">
            <svg width="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M9 2c0 0-3 3-3 7s3 7 3 7M9 2c0 0 3 3 3 7s-3 7-3 7M2 9h14" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </button>

          {/* Login wrapper */}
          <div className="relative">
            <button onClick={(e) => { e.stopPropagation(); setLoginOpen(!loginOpen); }} className="flex items-center gap-1.5 no-underline text-white text-[13px] font-semibold px-3 md:px-4 py-1.5 border-2 border-white/25 rounded-full hover:bg-white/10 hover:border-white/40 transition-all">
              <span className="hidden sm:inline">Login</span>
              <svg width="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
            </button>
            {loginOpen && (
              <div className="absolute top-full right-0 mt-2.5 w-[220px] rounded-xl bg-[rgba(30,4,4,0.97)] backdrop-blur-[18px] border border-white/12 shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden z-9999">
                <div className="text-[12px] font-style-italic opacity-75 px-4.5 py-3.5 border-b border-white/12 text-white">Select Login Type</div>
                <Link href="/login/admin" className="block text-[13px] text-white/85 px-4.5 py-3.5 border-b border-white/7 hover:bg-white/10 hover:text-white hover:pl-6 transition-all">Admin Login</Link>
                <Link href="/login/user" className="block text-[13px] text-white/85 px-4.5 py-3.5 hover:bg-white/10 hover:text-white hover:pl-6 transition-all">User Login</Link>
              </div>
            )}
          </div>

          <div className="hidden sm:flex items-center bg-white/8 rounded-full px-2 gap-0.5 text-[12px] font-semibold">
            <span onClick={() => setActiveLang("ID")} className={`cursor-pointer px-2 py-1 rounded-full ${activeLang === "ID" ? "bg-white/15 text-white" : "opacity-60 hover:opacity-100"} transition-opacity`}>ID</span>
            <span onClick={() => setActiveLang("EN")} className={`cursor-pointer px-2 py-1 rounded-full ${activeLang === "EN" ? "bg-white/15 text-white" : "opacity-60 hover:opacity-100"} transition-opacity`}>EN</span>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[60px] left-0 right-0 bg-[#2a0606] border-b border-white/10 shadow-lg z-40 max-h-[calc(100vh-60px)] overflow-y-auto">
          <div className="flex flex-col p-4 gap-1">
            <a href="#" className="no-underline text-white/70 text-[13px] font-medium px-3 py-2.5 rounded-lg hover:bg-white/7 hover:text-white transition-all">Personal</a>
            <a href="#" className="no-underline text-white/70 text-[13px] font-medium px-3 py-2.5 rounded-lg hover:bg-white/7 hover:text-white transition-all">Business</a>
            <a href="#" className="no-underline text-white/70 text-[13px] font-medium px-3 py-2.5 rounded-lg hover:bg-white/7 hover:text-white transition-all">CIMB Preferred & Private</a>
            <a href="#" className="no-underline text-white/70 text-[13px] font-medium px-3 py-2.5 rounded-lg hover:bg-white/7 hover:text-white transition-all">CIMB Private Banking</a>
            <a href="#" className="no-underline text-white/70 text-[13px] font-medium px-3 py-2.5 rounded-lg hover:bg-white/7 hover:text-white transition-all">Investor</a>
            <a href="#" className="no-underline text-white/70 text-[13px] font-medium px-3 py-2.5 rounded-lg hover:bg-white/7 hover:text-white transition-all">About Us</a>
            <a href="#" className="no-underline text-white/70 text-[13px] font-medium px-3 py-2.5 rounded-lg hover:bg-white/7 hover:text-white transition-all">Contact Us</a>
            <div className="flex sm:hidden items-center bg-white/8 rounded-full px-2 gap-0.5 text-[12px] font-semibold mt-2 mx-3 py-2 justify-center">
              <span onClick={() => setActiveLang("ID")} className={`cursor-pointer px-3 py-1 rounded-full ${activeLang === "ID" ? "bg-white/15 text-white" : "opacity-60 hover:opacity-100"} transition-opacity`}>ID</span>
              <span onClick={() => setActiveLang("EN")} className={`cursor-pointer px-3 py-1 rounded-full ${activeLang === "EN" ? "bg-white/15 text-white" : "opacity-60 hover:opacity-100"} transition-opacity`}>EN</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
