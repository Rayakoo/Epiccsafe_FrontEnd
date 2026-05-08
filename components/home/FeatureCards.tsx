import Link from "next/link";

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
      {/* Card 1 */}
      <div className="bg-white/7 border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-6 flex flex-col gap-3 md:gap-4 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 transition-all">
        <h3 className="text-[14px] md:text-[15px] font-bold text-white">Form Pelaporan Cepat</h3>
        <p className="text-[12.5px] md:text-[13.5px] text-white/70 flex-1">
          Laporkan URL, nomor, atau modus phishing dalam hitungan menit. Dapatkan Ticket ID untuk tracking.
        </p>
        <Link href="/laporan" className="inline-flex items-center gap-2 bg-[#e03030] text-white text-[12px] md:text-[13px] font-bold px-3.5 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-[#ff4444] hover:translate-x-0.5 transition-all w-fit">
          Laporkan
          <svg width="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

      {/* Card 2 */}
      <div className="bg-white/7 border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-6 flex flex-col gap-3 md:gap-4 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 transition-all">
        <h3 className="text-[14px] md:text-[15px] font-bold text-white">Deteksi Otomatis AI</h3>
        <p className="text-[12.5px] md:text-[13.5px] text-white/70 flex-1">
          Sistem rule-based + ML menilai risiko URL dan pesan secara instan dengan skor 0–100.
        </p>
        <Link href="/deteksi" className="inline-flex items-center gap-2 bg-[#e03030] text-white text-[12px] md:text-[13px] font-bold px-3.5 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-[#ff4444] hover:translate-x-0.5 transition-all w-fit">
          Deteksi
          <svg width="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

      {/* Card 3 */}
      <div className="bg-white/7 border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-6 flex flex-col gap-3 md:gap-4 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 transition-all col-span-1 sm:col-span-2 lg:col-span-1">
        <h3 className="text-[14px] md:text-[15px] font-bold text-white">Pantau Status Laporan</h3>
        <p className="text-[12.5px] md:text-[13.5px] text-white/70 flex-1">
          Lacak proses triage → verifikasi → mitigasi laporan kamu secara real-time.
        </p>
        <Link href="/status" className="inline-flex items-center gap-2 bg-[#e03030] text-white text-[12px] md:text-[13px] font-bold px-3.5 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-[#ff4444] hover:translate-x-0.5 transition-all w-fit">
          Pantau
          <svg width="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}
