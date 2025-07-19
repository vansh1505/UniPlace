"use client"

import { motion } from "motion/react"
import { FileText, Download, Eye, Edit, Trash2, Star, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const resumes = [
  {
    id: 1,
    name: "Software_Engineer_Resume_2024.pdf",
    version: "v3.2",
    lastModified: "2024-01-15",
    size: "245 KB",
    status: "active",
    score: 85,
    applications: 8,
    views: 24,
    isDefault: true,
  },
  {
    id: 2,
    name: "Data_Scientist_Resume.pdf",
    version: "v2.1",
    lastModified: "2024-01-10",
    size: "198 KB",
    status: "draft",
    score: 78,
    applications: 3,
    views: 12,
    isDefault: false,
  },
  {
    id: 3,
    name: "Product_Manager_Resume.pdf",
    version: "v1.5",
    lastModified: "2024-01-08",
    size: "210 KB",
    status: "archived",
    score: 72,
    applications: 1,
    views: 5,
    isDefault: false,
  },
]

export function ResumeList() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "draft":
        return "bg-yellow-100 text-yellow-800"
      case "archived":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 70) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">My Resumes</h2>
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            <FileText className="h-4 w-4 mr-2" />
            Create New
          </Button>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {resumes.map((resume, index) => (
          <motion.div
            key={resume.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 hover:bg-gray-50 transition-colors"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-indigo-600" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">{resume.name}</h3>
                    {resume.isDefault && (
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-yellow-600 font-medium">Default</span>
                      </div>
                    )}
                    <Badge className={getStatusColor(resume.status)}>
                      {resume.status.charAt(0).toUpperCase() + resume.status.slice(1)}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                    <span>Version {resume.version}</span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(resume.lastModified).toLocaleDateString()}
                    </div>
                    <span>{resume.size}</span>
                  </div>

                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <span className="text-gray-500">Score: </span>
                      <span className={`font-bold ${getScoreColor(resume.score)}`}>{resume.score}%</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Applications: </span>
                      <span className="font-medium text-gray-900">{resume.applications}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Views: </span>
                      <span className="font-medium text-gray-900">{resume.views}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <Button size="sm" variant="ghost" className="text-gray-600 hover:text-gray-700">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-600 hover:text-gray-700">
                  <Download className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-600 hover:text-gray-700">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
