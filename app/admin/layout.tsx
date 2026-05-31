import type { Metadata } from "next";
import AdminGuard from "@/components/AdminGuard";
import Sidebar from "@/components/dashboard/Sidebar";

export const metadata: Metadata = {
  title: "EPICCSAFE Admin",
  description: "Admin dashboard for EPICCSAFE",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminGuard>
    <div className="min-h-screen bg-[#0F1923] flex overflow-x-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen md:ml-[220px] max-w-full">
        {children}
      </div>
    </div>
    </AdminGuard>
  );
}
