"use client";
import { UserContext } from "./context/UserCtx";

export default function DashboardShell({ user, children }: { user: any; children: React.ReactNode }) {
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}
