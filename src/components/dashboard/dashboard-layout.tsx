"use client"

import type React from "react"

import { EnhancedSidebar } from "./enhanced-sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
}


export function DashboardLayout({ user, children }: { user: { name: string; email: string }; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Enhanced Sidebar */}
      <EnhancedSidebar user={user} />

      {/* Main content */}
      <div className="transition-all duration-300 ease-in-out pl-20 hover:pl-20 group-data-[expanded=true]:pl-72">
        <main className="p-6 lg:p-8 xl:p-10">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}
