"use client";

import { motion } from "motion/react";
import { useUser } from "@/app/dashboard/context/UserCtx";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { WelcomeHeader } from "@/components/dashboard/welcome-header";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { UpcomingDrives } from "@/components/dashboard/upcoming-drives";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { QuickActions } from "@/components/dashboard/quick-actions";
import OnboardingModal from "@/components/dashboard/OnboardingModal";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};


export default function DashboardPage() {
  const user = useUser();
  const [showModal, setShowModal] = useState(!user?.profileCompleted);
  if (!user) {
    return <p className="text-center text-red-600">user not found</p>;
  }
  if (user === undefined) {
    return (
      <p className="text-center text-gray-600 h-screen flex items-center justify-center">
        <LoaderCircle className="inline mr-2 animate-spin" />
        Loading user data...
      </p>
    );
  }

  return (
    <>
      {!user?.profileCompleted && (
        <OnboardingModal isOpen={showModal} user={user} />
      )}
      <DashboardLayout user={user}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          <motion.div variants={fadeInUp}>
            <WelcomeHeader user={user} />
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp} className="xl:col-span-2">
              <UpcomingDrives admnno={user.admnno} />
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-8">
              <QuickActions />
              <RecentActivity />
            </motion.div>
          </div>
        </motion.div>
      </DashboardLayout>
    </>
  );
}
