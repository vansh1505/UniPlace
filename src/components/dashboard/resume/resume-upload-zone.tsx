"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "motion/react"
import { Upload, FileText, CheckCircle, AlertCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ResumeUploadZone() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)

  const handleFileUpload = (file: File) => {
    setUploadedFile(file)
    setIsAnalyzing(true)

    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false)
      setAnalysisComplete(true)
    }, 3000)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0 && files[0].type === "application/pdf") {
      handleFileUpload(files[0])
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFileUpload(files[0])
    }
  }

  if (analysisComplete && uploadedFile) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Analysis Complete!</h3>
          <p className="text-gray-600">Your resume has been analyzed successfully</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <FileText className="h-5 w-5 text-blue-600" />
            <div>
              <p className="font-medium text-gray-900">{uploadedFile.name}</p>
              <p className="text-sm text-gray-600">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="ml-auto h-8 w-8 p-0"
              onClick={() => {
                setUploadedFile(null)
                setAnalysisComplete(false)
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">85</p>
            <p className="text-sm text-gray-600">Overall Score</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">12</p>
            <p className="text-sm text-gray-600">Improvements</p>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm text-gray-900">Contact Information</span>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Good
            </Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-yellow-600" />
              <span className="text-sm text-gray-900">Skills Section</span>
            </div>
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
              Needs Work
            </Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm text-gray-900">Work Experience</span>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Excellent
            </Badge>
          </div>
        </div>

        <div className="flex gap-3">
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">View Detailed Report</Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            Upload Another
          </Button>
        </div>
      </div>
    )
  }

  if (isAnalyzing) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <FileText className="h-8 w-8 text-blue-600" />
            </motion.div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Analyzing Your Resume</h3>
          <p className="text-gray-600 mb-6">Please wait while we analyze your resume...</p>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <motion.div
              className="bg-blue-600 h-2 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </div>

          <p className="text-sm text-gray-500">This usually takes 30-60 seconds</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-400 transition-colors"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Upload className="h-8 w-8 text-blue-600" />
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Your Resume</h3>
        <p className="text-gray-600 mb-6">Drag and drop your resume here, or click to browse</p>

        <input type="file" accept=".pdf" onChange={handleFileSelect} className="hidden" id="resume-upload" />
        <label htmlFor="resume-upload">
          <Button className="bg-blue-600 hover:bg-blue-700 cursor-pointer">Choose File</Button>
        </label>

        <p className="text-sm text-gray-500 mt-4">Supports PDF files up to 10MB</p>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-2">What we'll analyze:</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Contact information and formatting</li>
          <li>• Skills and keywords optimization</li>
          <li>• Work experience structure</li>
          <li>• Education and certifications</li>
          <li>• Overall ATS compatibility</li>
        </ul>
      </div>
    </div>
  )
}
