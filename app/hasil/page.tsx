import { Suspense } from "react";
import HasilClient from "./HasilClient";

export default function HasilPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#140606] text-white flex items-center justify-center">Loading...</div>}>
      <HasilClient />
    </Suspense>
  );
}
