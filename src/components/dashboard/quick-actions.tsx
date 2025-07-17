"use client"

import { motion } from "framer-motion"
import { Upload, User, Briefcase, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickActions = [
  {
    title: "Upload Resume",
    description: "Update your latest resume",
    icon: Upload,
    color: "bg-blue-500 hover:bg-blue-600",
    href: "/dashboard/resume",
  },
  {
    title: "View Profile",
    description: "Edit your profile details",
    icon: User,
    color: "bg-green-500 hover:bg-green-600",
    href: "/dashboard/profile",
  },
  {
    title: "Apply to Drive",
    description: "Browse available drives",
    icon: Briefcase,
    color: "bg-purple-500 hover:bg-purple-600",
    href: "/dashboard/drives",
  },
  {
    title: "Schedule Interview",
    description: "Manage your interviews",
    icon: Calendar,
    color: "bg-orange-500 hover:bg-orange-600",
    href: "/dashboard/events",
  },
]

export function QuickActions() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                className="w-full h-auto p-4 flex flex-col items-center space-y-2 border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200 bg-transparent"
              >
                <div className={`p-3 rounded-lg ${action.color}`}>
                  <action.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="font-medium text-gray-900">{action.title}</p>
                  <p className="text-sm text-gray-500">{action.description}</p>
                </div>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
