"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { ResumeSubHeader } from "@/components/dashboard/resume/resume-sub-header"
import { ResumeUploadZone } from "@/components/dashboard/resume/resume-upload-zone"
import { ResumeLibrary } from "@/components/dashboard/resume/resume-library"
import { ResumeAnalytics } from "@/components/dashboard/resume/resume-analytics"
import { ResumeBuilder } from "@/components/dashboard/resume/resume-builder"
import { useUser } from "../context/UserCtx"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export default function ResumePage() {
  const [activeSection, setActiveSection] = useState<"upload" | "library" | "builder">("upload")
  type User = {
    name: string
    email: string
  }

  const user: User | null = useUser()
  
  if (!user) {
    return <p className="text-center text-red-500">User not found. Please log in.</p>
  }
  
  return (
    <DashboardLayout user={user}>
      <div className="space-y-6">
        <motion.div {...fadeInUp}>
          <ResumeSubHeader activeSection={activeSection} setActiveSection={setActiveSection} />
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <motion.div {...fadeInUp} className="xl:col-span-2">
            {activeSection === "upload" && <ResumeUploadZone />}
            {activeSection === "library" && <ResumeLibrary />}
            {activeSection === "builder" && <ResumeBuilder />}
          </motion.div>

          <motion.div {...fadeInUp}>
            <ResumeAnalytics />
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  )
}
