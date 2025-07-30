"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { FileText, Download, Eye, Edit, Trash2, Star, Copy, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ResumeLibrary({ user } : { user: any }) {
  const resumes = [
    {
      id: 1,
      name: user.name + " resume" || "",
      url : user.resumeURL || "",
      type: "PDF",
    },
  ]
  const [selectedResumes, setSelectedResumes] = useState<number[]>([])

  const toggleResumeSelection = (id: number) => {
    setSelectedResumes((prev) => (prev.includes(id) ? prev.filter((resumeId) => resumeId !== id) : [...prev, id]))
  }

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-green-600 bg-green-100"
    if (score >= 70) return "text-yellow-600 bg-yellow-100"
    return "text-red-600 bg-red-100"
  }

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">My Resume Library</h3>
          <p className="text-sm text-gray-600">Manage and organize your resumes</p>
        </div>
        <div className="flex items-center gap-2">
          {selectedResumes.length > 0 && (
            <div className="flex items-center gap-2 mr-4">
              <span className="text-sm text-gray-600">{selectedResumes.length} selected</span>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button variant="outline" size="sm">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
            </div>
          )}
        </div>
      </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sno.
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {resumes.map((resume, index) => (
                  <motion.tr
                    key={resume.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p
                        className="rounded border-gray-300"
                      >
                        {index + 1}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <FileText className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-900">{resume.name}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>{resume.type}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-2">
                        <a href={resume.url} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-pointer">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </a>
                        <a href={resume.url} download>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-pointer">
                            <Download className="h-4 w-4" />
                          </Button>
                        </a>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}