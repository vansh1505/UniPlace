import Sidebar from "@/components/dashboard/admin/Sidebar";


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  )
}

export default layout