"use client"
import { FileText, Download, Eye, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AIResumePreviewProps {
  resumeData: any
}

export function AIResumePreview({user} : {user : any}) {
  return (
    <div className="space-y-6">
      {/* Preview Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-gray-100 rounded-lg">
            <FileText className="h-5 w-5 text-gray-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Live Preview</h2>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
          <iframe src={user.resumeURL} frameBorder="0" className="w-full h-96" />
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
            <Eye className="h-4 w-4 mr-2" />
            Full Preview
          </Button>
          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Suggestions</h3>
        <div className="space-y-3">
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-900 text-sm mb-1">Enhance Summary</h4>
            <p className="text-blue-800 text-xs">Add quantifiable achievements to make your summary more impactful.</p>
          </div>
          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-900 text-sm mb-1">Add Keywords</h4>
            <p className="text-green-800 text-xs">Include "React", "Node.js" for better ATS compatibility.</p>
          </div>
          <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
            <h4 className="font-medium text-purple-900 text-sm mb-1">Format Improvement</h4>
            <p className="text-purple-800 text-xs">Use bullet points for better readability in experience section.</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="space-y-2">
          <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
            <Edit className="h-4 w-4 mr-2" />
            Customize Template
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
            <FileText className="h-4 w-4 mr-2" />
            Save as Draft
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
            <Download className="h-4 w-4 mr-2" />
            Export to PDF
          </Button>
        </div>
      </div>
    </div>
  )
}
