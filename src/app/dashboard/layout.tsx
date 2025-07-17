import { getUser } from "@/lib/auth";
import DashboardShell from "./dashboardShell";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await getUser();

  return (
    <DashboardShell user={user}>
      {children}
    </DashboardShell>
  );
}
