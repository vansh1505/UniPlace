"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { FileText, Upload, Download, Eye, Trash2, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const documents = [
  {
    id: 1,
    name: "Resume_VanshKumar_2024.pdf",
    type: "Resume",
    size: "245 KB",
    uploadDate: "2024-01-15",
    status: "Active",
  },
  {
    id: 2,
    name: "Cover_Letter_Template.pdf",
    type: "Cover Letter",
    size: "180 KB",
    uploadDate: "2024-01-10",
    status: "Draft",
  },
  {
    id: 3,
    name: "Academic_Transcript.pdf",
    type: "Transcript",
    size: "320 KB",
    uploadDate: "2024-01-05",
    status: "Verified",
  },
  {
    id: 4,
    name: "Portfolio_Projects.pdf",
    type: "Portfolio",
    size: "1.2 MB",
    uploadDate: "2024-01-12",
    status: "Active",
  },
]

export function DocumentsSection() {
  const [uploadingFile, setUploadingFile] = useState(false)

  const handleFileUpload = () => {
    setUploadingFile(true)
    // Simulate file upload
    setTimeout(() => {
      setUploadingFile(false)
    }, 2000)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Draft":
        return "bg-yellow-100 text-yellow-800"
      case "Verified":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <FileText className="h-5 w-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Documents</h2>
        </div>
        <Button onClick={handleFileUpload} size="sm" className="bg-blue-600 hover:bg-blue-700" disabled={uploadingFile}>
          {uploadingFile ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Uploading...
            </>
          ) : (
            <>
              <Plus className="h-4 w-4 mr-2" />
              Upload
            </>
          )}
        </Button>
      </div>

      <div className="space-y-4">
        {documents.map((doc, index) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-all duration-200"
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-gray-100 rounded-lg">
                <FileText className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{doc.name}</h3>
                <div className="flex items-center space-x-4 mt-1">
                  <span className="text-sm text-gray-500">{doc.type}</span>
                  <span className="text-sm text-gray-500">{doc.size}</span>
                  <span className="text-sm text-gray-500">{new Date(doc.uploadDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(doc.status)}`}>
                {doc.status}
              </span>
              <div className="flex items-center space-x-1">
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <Download className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-red-600 hover:text-red-700">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Upload Area */}
      <div className="mt-6 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
        <p className="text-sm text-gray-600 mb-2">Drag and drop files here, or click to browse</p>
        <p className="text-xs text-gray-500">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
        <Button variant="outline" size="sm" className="mt-3 bg-transparent">
          Choose Files
        </Button>
      </div>
    </div>
  )
}
