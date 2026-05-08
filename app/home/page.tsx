import Navbar from "@/components/commons/Navbar";
import BackButton from "@/components/home/BackButton";
import HeroSection from "@/components/home/HeroSection";
import ThreatsSection from "@/components/home/ThreatsSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#1a0a0a] text-white">
      <Navbar />
      <main className="max-w-[1100px] mx-auto px-6 py-13">
        <BackButton />
        <HeroSection />
        <ThreatsSection />
      </main>
    </div>
  );
}
