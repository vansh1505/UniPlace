"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { DrivesGrid } from "@/components/dashboard/drives/drives-grid";
import { DrivesSidebar } from "@/components/dashboard/drives/drives-sidebar";
import { useUser } from "../context/UserCtx";
import { LoaderCircle } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function DrivesPage() {

  type User = {
    name: string;
    email: string;
  };

  const user: User | null = useUser();

    if(user === undefined) {
    return <p className="text-center text-gray-600 h-screen flex items-center justify-center">
      <LoaderCircle className="inline mr-2 animate-spin" />
      Loading user data...
      </p>;
  }

  if (!user) {
    return (
      <p className="text-center text-red-500">User not found. Please log in.</p>
    );
  }

  return (
    <DashboardLayout user={user}>
      <div className="space-y-6">
        <motion.div {...fadeInUp}>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Eligible Drives
                </h1>
                <p className="text-gray-600">
                  Discover opportunities that match your profile
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  1 drives available
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex bg-gray-100 rounded-lg p-1"></div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          <motion.div {...fadeInUp}>
            <DrivesSidebar />
          </motion.div>

          <motion.div {...fadeInUp} className="xl:col-span-3">
            <DrivesGrid />
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
