import { getUser } from "@/lib/auth";
import DashboardShell from "./dashboardShell";

export async function generateMetadata() {
  const user = await getUser();
  return {
    title: user ? `${user.name} | UniPlace` : "Dashboard | UniPlace",
    description:
      "Overview of your placement activity — eligible drives, applications, and latest updates.",
  };
}

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await getUser();

  return <DashboardShell user={user}>{children}</DashboardShell>;
}
