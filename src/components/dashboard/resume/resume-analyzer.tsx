"use client"

import { motion } from "motion/react"
import { BarChart3, TrendingUp, AlertTriangle, CheckCircle, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

const analysisData = {
  overallScore: 78,
  sections: [
    { name: "Contact Info", score: 95, status: "excellent" },
    { name: "Professional Summary", score: 72, status: "good" },
    { name: "Work Experience", score: 85, status: "excellent" },
    { name: "Education", score: 90, status: "excellent" },
    { name: "Skills", score: 65, status: "needs-improvement" },
    { name: "Projects", score: 70, status: "good" },
  ],
  suggestions: [
    {
      type: "critical",
      title: "Add more technical skills",
      description: "Include programming languages and frameworks relevant to your target roles.",
    },
    {
      type: "improvement",
      title: "Quantify achievements",
      description: "Add numbers and metrics to demonstrate your impact in previous roles.",
    },
    {
      type: "enhancement",
      title: "Include certifications",
      description: "Add relevant certifications to strengthen your technical profile.",
    },
  ],
  keywords: {
    present: ["JavaScript", "React", "Node.js", "Python", "Git"],
    missing: ["AWS", "Docker", "Kubernetes", "MongoDB", "TypeScript"],
  },
}

export function ResumeAnalyzer() {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "good":
        return <TrendingUp className="h-4 w-4 text-blue-600" />
      case "needs-improvement":
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />
      default:
        return <Target className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Overall Score */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <BarChart3 className="h-5 w-5 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Resume Analysis</h2>
        </div>

        <div className="text-center mb-6">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-gray-200"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                strokeLinecap="round"
                className="text-blue-600"
                initial={{ strokeDasharray: "0 251.2" }}
                animate={{ strokeDasharray: `${(analysisData.overallScore / 100) * 251.2} 251.2` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-900">{analysisData.overallScore}</span>
            </div>
          </div>
          <p className="text-lg font-medium text-gray-900">Overall Score</p>
          <p className="text-sm text-gray-500">Good resume with room for improvement</p>
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Detailed Report</Button>
      </div>

      {/* Section Scores */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Section Analysis</h3>
        <div className="space-y-3">
          {analysisData.sections.map((section, index) => (
            <motion.div
              key={section.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                {getStatusIcon(section.status)}
                <span className="font-medium text-gray-900">{section.name}</span>
              </div>
              <span className={`font-bold ${getScoreColor(section.score)}`}>{section.score}%</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Suggestions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Suggestions</h3>
        <div className="space-y-3">
          {analysisData.suggestions.slice(0, 2).map((suggestion, index) => (
            <div key={index} className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-medium text-yellow-800 mb-1">{suggestion.title}</h4>
              <p className="text-sm text-yellow-700">{suggestion.description}</p>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-4 bg-transparent">
          View All Suggestions
        </Button>
      </div>
    </div>
  )
}
