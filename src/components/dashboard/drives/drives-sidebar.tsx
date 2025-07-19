"use client"

import { Building2 } from "lucide-react"

interface DrivesSidebarProps {
  filters: any
  setFilters: (filters: any) => void
}

export function DrivesSidebar() {
  const filterOptions = {
    location: ["All Locations", "Bangalore", "Hyderabad", "Mumbai", "Pune", "Remote"],
    package: ["All Packages", "0-10 LPA", "10-20 LPA", "20-30 LPA", "30+ LPA"],
    eligibility: ["All Eligible", "High Match (80%+)", "Good Match (60-80%)", "Fair Match (40-60%)"],
  }

  return (
    <div className="space-y-6">
      {/* Personal Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Your Profile Insights</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            {/* <div className="p-2 bg-green-100 rounded-lg">
              <GraduationCap className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">CGPA: 8.2</p>
              <p className="text-xs text-gray-600">Above average</p>
            </div> */}
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Building2 className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">1 Eligible Drives</p>
              <p className="text-xs text-gray-600">Based on your profile</p>
            </div>
          </div>
        </div>
      </div>


      {/* Quick Stats */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
        {/* <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Total Drives</span>
            <Badge variant="secondary">24</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">High Match</span>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              8
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Ending Soon</span>
            <Badge variant="secondary" className="bg-red-100 text-red-800">
              3
            </Badge>
          </div>
        </div> */}

        <p className="text-sm text-gray-600">Coming Soon...</p>

      </div>
    </div>
  )
}
