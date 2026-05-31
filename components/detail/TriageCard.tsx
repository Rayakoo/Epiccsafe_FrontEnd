'use client';

interface TriageCardProps {
  onFalsePositive?: () => void
  onNotPhishing?: () => void
  onConfirmPhishing?: () => void
}

export default function TriageCard({
  onFalsePositive,
  onNotPhishing,
  onConfirmPhishing,
}: TriageCardProps) {
  return (
    <div className="w-full bg-[#152232] border-2 border-[#1D72B8] rounded-xl p-6 text-white">
      <h2 className="text-xl font-bold mb-5">Keputusan Triage</h2>

      <div className="grid grid-cols-2 gap-4 items-stretch">
        {/* Kolom Kiri */}
        <div className="flex flex-col gap-3">
          <button
            onClick={onFalsePositive}
            className="w-full h-16 bg-[#5C6370] border border-[#B0B5BC] rounded-lg font-bold text-base hover:bg-[#6c7483] transition-colors flex items-center justify-center cursor-pointer"
          >
            False Positive
          </button>

          <button
            onClick={onNotPhishing}
            className="w-full h-16 bg-[#2B161A] border border-[#D32F2F] rounded-lg font-bold text-base hover:bg-[#3d2025] transition-colors flex items-center justify-center cursor-pointer"
          >
            Not Phishing
          </button>
        </div>

        {/* Kolom Kanan: Confirm Phishing */}
        <button
          onClick={onConfirmPhishing}
          className="w-full h-full min-h-[140px] bg-[#092A0E] border border-[#2E7D32] rounded-lg font-bold text-base hover:bg-[#113f17] transition-colors flex items-center justify-center cursor-pointer"
        >
          Confirm Phishing
        </button>
      </div>
    </div>
  );
}
