"use client"

import { Upload, FolderOpen, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ResumeSubHeaderProps {
  activeSection: "upload" | "library" | "builder"
  setActiveSection: (section: "upload" | "library" | "builder") => void
}

export function ResumeSubHeader({ activeSection, setActiveSection }: ResumeSubHeaderProps) {
  const sections = [
    { id: "upload", label: "Upload & Analyze", icon: Upload },
    { id: "library", label: "My Resumes", icon: FolderOpen },
    { id: "builder", label: "Resume Builder", icon: Wrench },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Resume Management</h1>
          <p className="text-gray-600">Upload, analyze, and optimize your resumes</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {sections.map((section) => (
          <Button
            key={section.id}
            variant={activeSection === section.id ? "default" : "outline"}
            onClick={() => setActiveSection(section.id as any)}
            className="flex items-center gap-2"
          >
            <section.icon className="h-4 w-4" />
            {section.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
