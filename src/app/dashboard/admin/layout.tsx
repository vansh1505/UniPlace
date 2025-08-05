import AdminLayoutWrapper from "./adminLayout";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminLayoutWrapper>
      {children}
    </AdminLayoutWrapper>
  );
}