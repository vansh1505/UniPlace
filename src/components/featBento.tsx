"use client"

import { motion } from "motion/react"
import { BarChart3, MessageSquare, Shield, Filter, Headphones, Settings } from "lucide-react"

export default function FeatBento() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance"
        >
          Everything You Need for <span className="text-blue-600">Smarter Placements</span>
        </motion.h1>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Real-Time Placement Analytics - Large Top Left */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl p-8 shadow-md lg:col-span-2 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Real-Time Placement Analytics</h3>
              <p className="text-gray-600 text-sm">
                Track drive participation, shortlists, and results with live dashboards.
              </p>
            </div>

            {/* Chart Illustration */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 w-48 h-32">
              <svg className="w-full h-full" viewBox="0 0 200 130">
                <motion.polyline
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  points="20,100 60,80 100,60 140,50 180,30"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {[20, 60, 100, 140, 180].map((x, i) => (
                  <motion.circle
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.2, duration: 0.3 }}
                    cx={x}
                    cy={[100, 80, 60, 50, 30][i]}
                    r="5"
                    fill="#3b82f6"
                  />
                ))}
              </svg>
            </div>
          </motion.div>

          {/* Automated Eligibility Filtering - Tall Right Card with Toggles */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl p-8 shadow-md lg:row-span-2 relative overflow-hidden"
          >
            {/* Top Section with Icon */}
            <div className="mb-8">
              <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Filter className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Automated Eligibility Filtering</h3>
              <p className="text-gray-600 text-sm">
                Instantly shortlist students based on CGPA, backlogs, and custom criteria.
              </p>
            </div>

            {/* Toggle List Illustration */}
            <div className="space-y-4 mb-8">
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                >
                  <div className="flex-1 space-y-1">
                    <div className={`h-2 rounded-full ${i === 1 ? "bg-blue-200 w-2/3" : "bg-gray-200 w-1/2"}`} />
                    {i === 1 && <div className="h-1.5 bg-blue-100 w-1/2 rounded-full" />}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-12 h-7 rounded-full flex items-center px-1 cursor-pointer transition-colors ${
                      i % 2 === 0 ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  >
                    <motion.div
                      animate={{ x: i % 2 === 0 ? 18 : 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className="w-5 h-5 bg-white rounded-full shadow-sm"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Text */}
            <div className="pt-4 border-t border-gray-100">
              <p className="text-sm font-medium text-gray-900 mb-1">Instantly shortlist students</p>
              <p className="text-xs text-gray-600">based on, backlogs, and custom criteria.</p>
            </div>
          </motion.div>

          {/* Middle Card - Shortlist Info */}
          {/* <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl p-8 shadow-md"
          >
            <p className="text-sm font-medium text-gray-900 mb-2">Instantly shortlist students</p>
            <p className="text-sm text-gray-600">based on, backlogs, and custom criteria.</p>
          </motion.div> */}

          {/* Seamless Student-Company Interaction */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl p-8 shadow-md relative overflow-hidden"
          >
            <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Seamless Student-Company Interaction</h3>
            <p className="text-gray-600 text-sm mb-6">Enable smooth communication and application flow.</p>

            {/* Chat Illustration */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-start gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-gray-200" />
                <div className="flex-1 space-y-1">
                  <div className="h-2 bg-gray-100 rounded-full w-3/4" />
                  <div className="h-2 bg-gray-100 rounded-full w-1/2" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="flex items-start gap-2 justify-end"
              >
                <div className="bg-blue-500 text-white px-4 py-2 rounded-2xl rounded-tr-sm">
                  <div className="h-2 bg-blue-400 rounded-full w-24" />
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-100" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex items-center gap-2 text-xs text-gray-400"
              >
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" />
                <span>typing...</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Secure Document Handling */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl p-8 shadow-md relative overflow-hidden"
          >
            <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Secure Document Handling</h3>
            <p className="text-gray-600 text-sm mb-6">
              Enterprise-grade security and privacy compliance for all documents.
            </p>

            {/* Document with Lock Illustration */}
            <div className="flex items-center justify-center mt-8">
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="w-32 h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center"
                >
                  <svg className="w-16 h-20" viewBox="0 0 64 80" fill="none">
                    <rect x="8" y="8" width="48" height="64" rx="4" fill="#bfdbfe" />
                    <rect x="16" y="20" width="32" height="4" rx="2" fill="#93c5fd" />
                    <rect x="16" y="32" width="24" height="3" rx="1.5" fill="#93c5fd" />
                    <rect x="16" y="40" width="28" height="3" rx="1.5" fill="#93c5fd" />
                  </svg>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute -bottom-2 -right-2 bg-blue-500 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                    <rect x="6" y="10" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path
                      d="M8 10V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V10"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Dedicated Support & Scalability */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl p-8 shadow-md"
          >
            <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Headphones className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Dedicated Support & Scalability</h3>
            <p className="text-gray-600 text-sm mb-6">Rely on 24/7 support with a system designed to scale.</p>

            {/* Support Icons */}
            <div className="flex items-center justify-around mt-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"
              >
                <Headphones className="w-6 h-6 text-blue-600" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center"
              >
                <Headphones className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute right-8 top-8 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
              >
                24/7
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                className="text-blue-600"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* ERP & Tool Integration */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl p-8 shadow-md"
          >
            <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Settings className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">ERP & Tool Integration</h3>
            <p className="text-gray-600 text-sm mb-6">Sync with university ERP for attendance and academic records.</p>

            {/* Integration Diagram */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 8, ease: "linear" }}
                className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center"
              >
                <Settings className="w-8 h-8 text-blue-600" />
              </motion.div>

              <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
                <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13 7L19 12L13 17M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>

              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium"
                >
                  University ERP
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-gray-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium"
                >
                  Placement Cell
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
