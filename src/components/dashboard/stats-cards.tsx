"use client"

import { motion } from "motion/react"
import { FileText, Briefcase, CheckCircle, XCircle, TrendingUp, TrendingDown } from "lucide-react"

const stats = [
  {
    name: "Total Applications",
    value: "12",
    change: "+2 this week",
    changeType: "increase",
    icon: FileText,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    name: "Drives Eligible",
    value: "8",
    change: "3 new drives",
    changeType: "increase",
    icon: Briefcase,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
  {
    name: "Shortlisted",
    value: "5",
    change: "+1 today",
    changeType: "increase",
    icon: CheckCircle,
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    name: "Rejected",
    value: "3",
    change: "No change",
    changeType: "neutral",
    icon: XCircle,
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -4, scale: 1.02 }}
          className={`${stat.bgColor} rounded-2xl p-6 shadow-sm border border-white/50 hover:shadow-lg transition-all duration-300`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">{stat.name}</p>
            <div className="flex items-center">
              {stat.changeType === "increase" ? (
                <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
              ) : stat.changeType === "decrease" ? (
                <TrendingDown className="h-4 w-4 mr-1 text-red-500" />
              ) : (
                <div className="h-4 w-4 mr-1" />
              )}
              <span
                className={`text-sm font-medium ${
                  stat.changeType === "increase"
                    ? "text-green-600"
                    : stat.changeType === "decrease"
                      ? "text-red-600"
                      : "text-gray-500"
                }`}
              >
                {stat.change}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
