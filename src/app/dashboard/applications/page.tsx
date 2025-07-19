"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { ApplicationsSubHeader } from "@/components/dashboard/applications/applications-sub-header";
// import { ApplicationsTimeline } from "@/components/dashboard/applications/applications-timeline";
// import { ApplicationsKanban } from "@/components/dashboard/applications/applications-kanban";
import { ApplicationsTable } from "@/components/dashboard/applications/applications-table";
import { useUser } from "../context/UserCtx";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ApplicationsPage() {
  const [viewMode, setViewMode] = useState<"table" | "kanban" | "timeline">(
    "table"
  );

  type User = {
    name: string;
    email: string;
  };
  const user: User | null = useUser();
  if (!user) {
    return (
      <p className="text-center text-red-500">User not found. Please log in.</p>
    );
  }

  return (
    <DashboardLayout user={user}>
      <div className="space-y-6">
        <motion.div {...fadeInUp}>
          <ApplicationsSubHeader
            viewMode={viewMode}
            setViewMode={setViewMode}
          />
        </motion.div>
        <motion.div {...fadeInUp} className="xl:col-span-3">
          {viewMode === "kanban" && "Coming soon..."}
          {/* <ApplicationsKanban /> */}
          {viewMode === "table" && <ApplicationsTable />}
          {viewMode === "timeline" && "Coming soon..."}
          {/* <ApplicationsTimeline /> */}
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
