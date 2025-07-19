"use client"

import { motion } from "motion/react"
import { FileText, Award, TrendingUp, Calendar } from "lucide-react"

const stats = [
  {
    name: "Profile Completion",
    value: "85%",
    icon: TrendingUp,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
  {
    name: "Applications Sent",
    value: "12",
    icon: FileText,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    name: "Certifications",
    value: "8",
    icon: Award,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    name: "Member Since",
    value: "2024",
    icon: Calendar,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
  },
]

export function ProfileStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -2, scale: 1.02 }}
          className={`${stat.bgColor} rounded-xl p-4 lg:p-6 shadow-sm border border-white/50 hover:shadow-md transition-all duration-300`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className={`p-2 lg:p-3 rounded-lg bg-gradient-to-r ${stat.color} shadow-sm`}>
              <stat.icon className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
            </div>
            <div className="text-right">
              <p className="text-xl lg:text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
          <p className="text-sm font-medium text-gray-700">{stat.name}</p>
        </motion.div>
      ))}
    </div>
  )
}
