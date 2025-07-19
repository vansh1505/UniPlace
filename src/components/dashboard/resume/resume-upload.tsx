"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Upload, FileText, X, Check, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ResumeUpload() {
  const [dragActive, setDragActive] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadComplete, setUploadComplete] = useState(false)

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }, [])

  const handleFile = (file: File) => {
    if (file.type === "application/pdf" || file.type.includes("document")) {
      setUploadedFile(file)
      simulateUpload()
    }
  }

  const simulateUpload = () => {
    setUploading(true)
    setTimeout(() => {
      setUploading(false)
      setUploadComplete(true)
    }, 2000)
  }

  const removeFile = () => {
    setUploadedFile(null)
    setUploadComplete(false)
  }

  return (
    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-indigo-100 rounded-lg">
          <Upload className="h-5 w-5 text-indigo-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Upload Resume</h2>
      </div>

      {!uploadedFile ? (
        <div
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
            dragActive
              ? "border-indigo-400 bg-indigo-50"
              : "border-gray-300 hover:border-indigo-400 hover:bg-indigo-50/50"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Upload className="h-8 w-8 text-indigo-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Upload your resume</h3>
          <p className="text-gray-500 mb-4">Drag and drop your file here, or click to browse</p>
          <p className="text-sm text-gray-400 mb-6">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => e.target.files && handleFile(e.target.files[0])}
            className="hidden"
            id="resume-upload"
          />
          <label htmlFor="resume-upload">
            <Button className="bg-indigo-600 hover:bg-indigo-700 cursor-pointer">Choose File</Button>
          </label>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-gray-200 rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <FileText className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{uploadedFile.name}</h3>
                <p className="text-sm text-gray-500">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            <Button onClick={removeFile} size="sm" variant="ghost" className="text-red-600 hover:text-red-700">
              <X className="h-4 w-4" />
            </Button>
          </div>

          {uploading && (
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Uploading...</span>
                <span className="text-sm text-gray-600">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className="bg-indigo-600 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1.5 }}
                />
              </div>
            </div>
          )}

          {uploadComplete && (
            <div className="flex items-center space-x-2 text-green-600 mb-4">
              <Check className="h-4 w-4" />
              <span className="text-sm font-medium">Upload complete</span>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button size="sm" variant="outline" className="bg-transparent">
                Preview
              </Button>
              <Button size="sm" variant="outline" className="bg-transparent">
                Download
              </Button>
            </div>
            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
              Analyze Resume
            </Button>
          </div>
        </motion.div>
      )}

      {/* Upload Tips */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-blue-900 mb-1">Tips for better results:</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Use a clean, professional format</li>
              <li>• Include relevant keywords for your target roles</li>
              <li>• Keep it to 1-2 pages maximum</li>
              <li>• Use clear section headings</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
