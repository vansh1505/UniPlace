"use client"

import { motion } from "framer-motion"
import { Zap, Brain, Target, Sparkles } from "lucide-react"

interface AIResumeHeaderProps {
  currentStep: number
}

const steps = [
  { id: 1, name: "Basic Info", icon: Target },
  { id: 2, name: "Experience", icon: Sparkles },
  { id: 3, name: "Skills", icon: Brain },
  { id: 4, name: "Generate", icon: Zap },
]

export function AIResumeHeader({ currentStep }: AIResumeHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl p-8 text-white shadow-lg">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-4xl font-bold mb-3"
          >
            AI Resume Builder
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-purple-100 text-lg"
          >
            Create a professional resume in minutes with AI-powered suggestions
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 lg:mt-0 flex items-center space-x-3"
        >
          <div className="flex items-center text-purple-100">
            <Brain className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">AI-Powered</span>
          </div>
        </motion.div>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= step.id ? "bg-white text-purple-600" : "bg-purple-400 text-purple-100"
                }`}
              >
                <step.icon className="h-5 w-5" />
              </div>
              <span className={`ml-3 font-medium ${currentStep >= step.id ? "text-white" : "text-purple-200"}`}>
                {step.name}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-16 h-1 mx-4 rounded ${currentStep > step.id ? "bg-white" : "bg-purple-400"}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
