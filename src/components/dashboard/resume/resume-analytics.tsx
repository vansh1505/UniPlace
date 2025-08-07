"use client"

import { Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"

export function ResumeAnalytics({ resumeURL }: { resumeURL: string }) {
  const [parsedData, setParsedData] = useState<{
    email?: string
    phone?: string
    skills?: string[]
  }>({})

  useEffect(() => {
    fetch(`https://stellar-truth-production.up.railway.app/api/parse-resume?pdf_url=${resumeURL}`)
      .then((response) => response.json())
      .then((data) => {
        setParsedData(data.parsed_data)
        console.log(data.parsed_data)
      })
      .catch((error) => console.error("Error fetching analytics:", error))
  }, [resumeURL])

  return (
    <div className="space-y-6">
      {/* Performance Stats */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Contact Info</h3>
        <div className="space-y-2">
          <div className="text-sm text-gray-700">Email: <strong>{parsedData.email || "N/A"}</strong></div>
          <div className="text-sm text-gray-700">Phone: <strong>{parsedData.phone || "N/A"}</strong></div>
        </div>
      </div>

      {/* Skills Analysis */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Detected Skills</h3>
        <div className="flex flex-wrap gap-2">
          {parsedData.skills && parsedData.skills.length > 0 ? (
            parsedData.skills.map((skill, idx) => (
              <Badge key={idx} variant="secondary" className="text-sm">
                {skill}
              </Badge>
            ))
          ) : (
            <p className="text-sm text-gray-500">No skills detected</p>
          )}
        </div>
      </div>
    </div>
  )
}
