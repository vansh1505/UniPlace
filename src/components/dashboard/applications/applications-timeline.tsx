"use client"

import { motion } from "motion/react"
import { Calendar, Clock, CheckCircle, XCircle, AlertCircle, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const timelineData = [
  {
    id: 1,
    company: "Google",
    position: "Software Engineer",
    logo: "/placeholder.svg?height=40&width=40",
    events: [
      {
        type: "applied",
        date: "2024-01-10",
        time: "10:30 AM",
        status: "completed",
        description: "Application submitted successfully",
      },
      {
        type: "screening",
        date: "2024-01-12",
        time: "2:00 PM",
        status: "completed",
        description: "Resume screening passed",
      },
      {
        type: "interview",
        date: "2024-01-15",
        time: "11:00 AM",
        status: "upcoming",
        description: "Technical interview scheduled",
      },
    ],
  },
  {
    id: 2,
    company: "Microsoft",
    position: "Product Manager",
    logo: "/placeholder.svg?height=40&width=40",
    events: [
      {
        type: "applied",
        date: "2024-01-08",
        time: "3:45 PM",
        status: "completed",
        description: "Application submitted",
      },
      {
        type: "screening",
        date: "2024-01-10",
        time: "9:00 AM",
        status: "completed",
        description: "Phone screening completed",
      },
      {
        type: "interview",
        date: "2024-01-14",
        time: "4:00 PM",
        status: "completed",
        description: "First round interview completed",
      },
      {
        type: "offer",
        date: "2024-01-16",
        time: "1:00 PM",
        status: "pending",
        description: "Offer letter pending",
      },
    ],
  },
]

const getStatusIcon = (status: string, type: string) => {
  if (status === "completed") {
    return <CheckCircle className="h-4 w-4 text-green-600" />
  }
  if (status === "upcoming") {
    return <Clock className="h-4 w-4 text-blue-600" />
  }
  if (status === "rejected") {
    return <XCircle className="h-4 w-4 text-red-600" />
  }
  return <AlertCircle className="h-4 w-4 text-yellow-600" />
}

const getEventColor = (type: string) => {
  switch (type) {
    case "applied":
      return "bg-blue-100 text-blue-800"
    case "screening":
      return "bg-yellow-100 text-yellow-800"
    case "interview":
      return "bg-purple-100 text-purple-800"
    case "offer":
      return "bg-green-100 text-green-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function ApplicationsTimeline() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">Application Timeline</h3>
        <p className="text-sm text-gray-600">Track your application progress chronologically</p>
      </div>

      <div className="p-6">
        <div className="space-y-8">
          {timelineData.map((application, appIndex) => (
            <motion.div
              key={application.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: appIndex * 0.1 }}
              className="relative"
            >
              {/* Company Header */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={application.logo || "/placeholder.svg"}
                  alt={application.company}
                  className="w-10 h-10 rounded-lg"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{application.company}</h4>
                  <p className="text-sm text-gray-600">{application.position}</p>
                </div>
              </div>

              {/* Timeline Events */}
              <div className="ml-5 space-y-4">
                {application.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="relative flex items-start gap-4">
                    {/* Timeline Line */}
                    {eventIndex < application.events.length - 1 && (
                      <div className="absolute left-2 top-8 w-0.5 h-12 bg-gray-200" />
                    )}

                    {/* Event Icon */}
                    <div className="flex-shrink-0 w-4 h-4 mt-1">{getStatusIcon(event.status, event.type)}</div>

                    {/* Event Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" className={`text-xs ${getEventColor(event.type)}`}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {new Date(event.date).toLocaleDateString()} at {event.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">{event.description}</p>

                      {event.status === "upcoming" && (
                        <div className="flex items-center gap-2 mt-2">
                          <Button size="sm" variant="outline" className="h-7 text-xs bg-transparent">
                            <Calendar className="h-3 w-3 mr-1" />
                            Add to Calendar
                          </Button>
                          <Button size="sm" variant="outline" className="h-7 text-xs bg-transparent">
                            <MessageSquare className="h-3 w-3 mr-1" />
                            Prepare
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Separator */}
              {appIndex < timelineData.length - 1 && <div className="mt-8 border-t border-gray-100" />}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
