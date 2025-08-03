import Sidebar from "@/components/dashboard/admin/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      {/* Main content area with responsive margin */}
      <main className="lg:ml-64 min-h-screen">
        <div className="p-4 pt-16 lg:pt-4">
          {children}
        </div>
      </main>
    </div>
  )
}

export default layout