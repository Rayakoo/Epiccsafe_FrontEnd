import FeatureCards from "./FeatureCards";

export default function HeroSection() {
  return (
    <section className="mb-16">
      <div className="max-w-[620px] mb-9">
        <h1 className="text-[clamp(26px,4vw,40px)] font-extrabold text-white leading-tight -tracking-[0.02em] mb-4">
          Lindungi Dirimu dari <span className="text-[#e03030]">Phishing &amp;<br/>Fraud</span> Perbankan Digital
        </h1>
        <p className="text-[15px] leading-relaxed text-white/70">
          EPICCSAFE hadir sebagai sistem pelaporan dan deteksi dini ancaman phishing perbankan.
          Laporkan insiden, pantau status, dan tingkatkan literasi digitalmu.
        </p>
      </div>
      <FeatureCards />
    </section>
  );
}
