'use client';

interface AdminActionsCardProps {
  onBlacklistUrl?: () => void
  onBroadcastWarning?: () => void
  onMarkResolved?: () => void
}

export default function AdminActionsCard({
  onBlacklistUrl,
  onBroadcastWarning,
  onMarkResolved,
}: AdminActionsCardProps) {
  return (
    <div className="w-full bg-[#152232] border border-[#2A3E54] rounded-xl p-6 text-white">
      <h2 className="text-xl font-bold mb-6">Aksi Admin</h2>

      <div className="grid grid-cols-2 gap-5 items-stretch">
        {/* Kolom Kiri */}
        <div className="flex flex-col gap-4">
          {/* Blacklist URL */}
          <button
            onClick={onBlacklistUrl}
            className="w-full h-16 bg-[#5C141B] border border-[#D32F2F] rounded-xl font-bold text-base hover:bg-[#6e1c24] transition-colors flex items-center justify-center tracking-wide cursor-pointer"
          >
            Blacklist URL
          </button>

          {/* Broadcast Warning */}
          <button
            onClick={onBroadcastWarning}
            className="w-full h-16 bg-[#5A502E] border border-[#FBC02D] rounded-xl font-bold text-base hover:bg-[#6b5f39] transition-colors flex items-center justify-center tracking-wide cursor-pointer"
          >
            Broadcast Warning
          </button>
        </div>

        {/* Kolom Kanan: Mark Resolved */}
        <button
          onClick={onMarkResolved}
          className="w-full h-full min-h-[144px] bg-[#2E4E3F] border border-[#1D72B8] rounded-xl font-bold text-base px-6 text-center leading-relaxed hover:bg-[#385e4c] transition-colors flex items-center justify-center cursor-pointer"
        >
          Mark Resolved <br /> dan Kirim Email Edukasi
        </button>
      </div>
    </div>
  );
}
