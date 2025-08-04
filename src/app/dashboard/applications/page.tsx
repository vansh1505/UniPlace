"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { ApplicationsSubHeader } from "@/components/dashboard/applications/applications-sub-header";
// import { ApplicationsTimeline } from "@/components/dashboard/applications/applications-timeline";
// import { ApplicationsKanban } from "@/components/dashboard/applications/applications-kanban";
import { ApplicationsTable } from "@/components/dashboard/applications/applications-table";
import { useUser } from "../context/UserCtx";
import { LoaderCircle } from "lucide-react";
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ApplicationsPage() {
  const [viewMode, setViewMode] = useState<"table" | "kanban" | "timeline">(
    "table"
  );
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("/api/applications")
      .then((res) => res.json())
      .then((data) => {
        setApplications(data.appliedDrives);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch failed:", err);
        setLoading(false);
      });
  }, []);

  const user = useUser();
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
            applications={applications}
          />
        </motion.div>
        <motion.div {...fadeInUp} className="xl:col-span-3">
          {loading && (
            <div className="flex justify-center">
              <LoaderCircle className="animate-spin mr-2" />
              <p className="text-gray-500">Loading applications...</p>
            </div>
          )}
          {viewMode === "kanban" && "Coming soon..."}
          {/* <ApplicationsKanban /> */}
          {viewMode === "table" && <ApplicationsTable applications={applications} />}
          {viewMode === "timeline" && "Coming soon..."}
          {/* <ApplicationsTimeline /> */}
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
