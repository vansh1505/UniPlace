"use client";

import { motion } from "motion/react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { ProfileHeader } from "@/components/dashboard/profile/profile-header";
import { PersonalInformation } from "@/components/dashboard/profile/personal-information";
import { AcademicInformation } from "@/components/dashboard/profile/academic-information";
import { ContactInformation } from "@/components/dashboard/profile/contact-information";
import { SkillsAndInterests } from "@/components/dashboard/profile/skills-and-interests";
import { DocumentsSection } from "@/components/dashboard/profile/documents-section";
import { ProfileStats } from "@/components/dashboard/profile/profile-stats";
import { useUser } from "../context/UserCtx";
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

export default function ProfilePage() {
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
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="space-y-8"
      >
        <motion.div variants={fadeInUp}>
          <ProfileHeader user={user} />
        </motion.div>

        {/* <motion.div variants={fadeInUp}>
          <ProfileStats />
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2 space-y-8">
            <motion.div variants={fadeInUp}>
              <PersonalInformation />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <AcademicInformation />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ContactInformation />
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div variants={fadeInUp}>
              <SkillsAndInterests />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <DocumentsSection />
            </motion.div>
          </div>
        </div> */}

        <p className="text-center text-gray-500 mt-8">
          Data is currently being migrated to the new profile structure. Please check back later for updates.
        </p>

      </motion.div>
    </DashboardLayout>
  );
}
