"use client"

import { motion } from "motion/react"
import { FileText, Upload, CheckCircle, XCircle, Clock } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "application",
    title: "Applied to Google",
    description: "Software Engineer position",
    time: "2 hours ago",
    icon: FileText,
    color: "bg-blue-500",
  },
]

export function RecentActivity() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
      </div>

      {/* Under construction tab */}
      <div>
        <div className="p-6">
          <div className="flex items-center justify-center">
            <p className="text-gray-500 text-center">This section is under development!</p>
          </div>
        </div>
      </div>

      {/* <div className="p-6">
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-3"
            >
              <div className={`p-2 rounded-lg ${activity.color}`}>
                <activity.icon className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900">{activity.title}</p>
                <p className="text-sm text-gray-600">{activity.description}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div> */}
    </div>
  )
}
