'use client';

import React from "react";
import Sidebar from "@/components/dashboard/admin/Sidebar";
import { useUser } from "../context/UserCtx";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = useUser();

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar collegeName={user?.collegeName} />
      <main className="lg:ml-64 min-h-screen">
        <div className="p-4 pt-16 lg:pt-4">
          {children}
        </div>
      </main>
    </div>
  );
}
