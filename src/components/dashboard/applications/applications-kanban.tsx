"use client"

import { motion } from "motion/react"
import { MapPin, Calendar, ExternalLink, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const applications = [
  {
    id: 1,
    company: "Google",
    position: "Software Engineer",
    location: "Hyderabad",
    appliedDate: "2024-01-10",
    status: "applied",
    salary: "₹25-30 LPA",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    company: "Microsoft",
    position: "Product Manager",
    location: "Bangalore",
    appliedDate: "2024-01-08",
    status: "screening",
    salary: "₹22-28 LPA",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    company: "Amazon",
    position: "Data Scientist",
    location: "Mumbai",
    appliedDate: "2024-01-05",
    status: "interview",
    salary: "₹20-25 LPA",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    company: "Meta",
    position: "Frontend Developer",
    location: "Remote",
    appliedDate: "2024-01-15",
    status: "offer",
    salary: "₹24-32 LPA",
    logo: "/placeholder.svg?height=40&width=40",
  },
]

const columns = [
  { id: "applied", title: "Applied", color: "bg-blue-100 text-blue-800" },
  { id: "screening", title: "Screening", color: "bg-yellow-100 text-yellow-800" },
  { id: "interview", title: "Interview", color: "bg-purple-100 text-purple-800" },
  { id: "offer", title: "Offer", color: "bg-green-100 text-green-800" },
  { id: "rejected", title: "Rejected", color: "bg-red-100 text-red-800" },
]

export function ApplicationsKanban() {
  const getApplicationsByStatus = (status: string) => {
    return applications.filter((app) => app.status === status)
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {columns.map((column) => {
          const columnApplications = getApplicationsByStatus(column.id)

          return (
            <div key={column.id} className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-900">{column.title}</h3>
                  <Badge variant="secondary" className={column.color}>
                    {columnApplications.length}
                  </Badge>
                </div>
              </div>

              <div className="space-y-3">
                {columnApplications.map((application, index) => (
                  <motion.div
                    key={application.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={application.logo || "/placeholder.svg"}
                          alt={application.company}
                          className="w-8 h-8 rounded-lg"
                        />
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm">{application.company}</h4>
                          <p className="text-xs text-gray-600">{application.position}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <MoreHorizontal className="h-3 w-3" />
                      </Button>
                    </div>

                    <div className="space-y-2 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{application.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>Applied {new Date(application.appliedDate).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                      <span className="text-sm font-medium text-green-600">{application.salary}</span>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
