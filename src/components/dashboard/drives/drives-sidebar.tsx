"use client"

import { Building2, GraduationCap } from "lucide-react"
import { Badge } from "@/components/ui/badge";
interface DrivesSidebarProps {
  filters: any
  setFilters: (filters: any) => void
}

export function DrivesSidebar({EligibleDrives, userCGPA}: {EligibleDrives: number, userCGPA: number}) {

  return (
    <div className="space-y-6">
      {/* Personal Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Your Profile Insights</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <GraduationCap className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">CGPA: {userCGPA}</p>
              <p className="text-xs text-gray-600">
                {userCGPA >= 8 ? "Above average" : userCGPA >= 6 ? "Average" : "Below average"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Building2 className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{EligibleDrives} Eligible Drives</p>
              <p className="text-xs text-gray-600">Based on your profile</p>
            </div>
          </div>
        </div>
      </div>


      {/* Quick Stats */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Total Drives</span>
            <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-600">{EligibleDrives}</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Eligible Drives</span>
            <Badge variant="secondary" className="text-xs bg-green-100 text-green-600">{EligibleDrives}</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Eligibility percentage</span>
            <Badge variant="secondary" className="text-xs">{((EligibleDrives / EligibleDrives) * 100).toFixed(0)}%</Badge>
          </div>
        </div>
      </div>
    </div>
  )
}
