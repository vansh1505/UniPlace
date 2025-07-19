"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { AIResumeHeader } from "@/components/dashboard/ai-resume/ai-resume-header"
import { AIResumeWizard } from "@/components/dashboard/ai-resume/ai-resume-wizard"
import { AIResumePreview } from "@/components/dashboard/ai-resume/ai-resume-preview"
import { useUser } from "../context/UserCtx"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function AIResumeBuilderPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [resumeData, setResumeData] = useState({})
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
      <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-8">
        <motion.div variants={fadeInUp}>
          <AIResumeHeader currentStep={currentStep} />
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <motion.div variants={fadeInUp} className="xl:col-span-2">
            <AIResumeWizard
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              resumeData={resumeData}
              setResumeData={setResumeData}
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <AIResumePreview resumeData={resumeData} />
          </motion.div>
        </div>
      </motion.div>
    </DashboardLayout>
  )
}
