import Link from "next/link";

export default function BackButton() {
  return (
    <Link href="/" className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/15 text-white/70 hover:text-white hover:bg-white/10 transition-all mb-6">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Link>
  );
}
