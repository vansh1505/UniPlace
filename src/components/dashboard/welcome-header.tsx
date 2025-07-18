"use client"

import { motion } from "motion/react"
import { Calendar, Clock, TrendingUp } from "lucide-react"

export function WelcomeHeader( { user } : { user: { name: string } }) {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-lg">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-4xl font-bold mb-3"
          >
            Hi {user.name.split(" ")[0]}, here's your placement overview
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-blue-100 text-lg"
          >
            Track your placement journey with real-time updates and opportunities tailored for you.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 lg:mt-0 flex flex-col items-start lg:items-end space-y-3"
        >
          <div className="flex items-center text-blue-100">
            <Calendar className="h-5 w-5 mr-3" />
            <span className="text-sm font-medium">{currentDate}</span>
          </div>
          <div className="flex items-center text-blue-100">
            <Clock className="h-5 w-5 mr-3" />
            <span className="text-sm font-medium">{currentTime}</span>
          </div>
          <div className="flex items-center text-blue-100">
            <TrendingUp className="h-5 w-5 mr-3" />
            <span className="text-sm font-medium">5 new opportunities</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
