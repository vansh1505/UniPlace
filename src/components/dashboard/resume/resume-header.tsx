"use client"

import { motion } from "motion/react"
import { Upload, FileText, Layout, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ResumeHeaderProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const tabs = [
  { id: "upload", label: "Upload & Analyze", icon: Upload },
  { id: "manage", label: "Manage Resumes", icon: FileText },
  { id: "templates", label: "Templates", icon: Layout },
]

export function ResumeHeader({ activeTab, setActiveTab }: ResumeHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 rounded-2xl p-8 text-white shadow-lg">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-4xl font-bold mb-3"
          >
            Resume Management
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-indigo-100 text-lg"
          >
            Upload, analyze, and optimize your resume for better placement opportunities
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 lg:mt-0"
        >
          <Button className="bg-white text-indigo-600 hover:bg-indigo-50 font-medium">
            <Zap className="h-4 w-4 mr-2" />
            AI Resume Builder
          </Button>
        </motion.div>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            variant={activeTab === tab.id ? "secondary" : "ghost"}
            className={`${
              activeTab === tab.id
                ? "bg-white text-indigo-600 hover:bg-white"
                : "text-indigo-100 hover:bg-indigo-600/50"
            }`}
          >
            <tab.icon className="h-4 w-4 mr-2" />
            {tab.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
