"use client"

import { TrendingUp, Eye, Download, Star, Target } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const analytics = [
  {
    title: "Profile Views",
    value: "156",
    change: "+12%",
    trend: "up",
    icon: Eye,
  },
  {
    title: "Downloads",
    value: "23",
    change: "+5 this week",
    trend: "up",
    icon: Download,
  },
  {
    title: "Avg. Score",
    value: "82",
    change: "+8 points",
    trend: "up",
    icon: Star,
  },
]

const improvements = [
  {
    section: "Skills",
    score: 75,
    suggestion: "Add more technical keywords",
    priority: "high",
  },
  {
    section: "Experience",
    score: 90,
    suggestion: "Great quantified achievements",
    priority: "low",
  },
  {
    section: "Education",
    score: 85,
    suggestion: "Consider adding relevant coursework",
    priority: "medium",
  },
]

export function ResumeAnalytics() {
  return (
    <div className="space-y-6">
      {/* Performance Stats */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Performance</h3>
        <div className="space-y-4">
          {analytics.map((stat, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <stat.icon className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-600">{stat.title}</p>
                <p className="text-xs text-green-600">{stat.change}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Analysis */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Section Analysis</h3>
        <div className="space-y-4">
          {improvements.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">{item.section}</span>
                <Badge
                  variant="secondary"
                  className={
                    item.score >= 85
                      ? "bg-green-100 text-green-800"
                      : item.score >= 70
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  }
                >
                  {item.score}%
                </Badge>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    item.score >= 85 ? "bg-green-500" : item.score >= 70 ? "bg-yellow-500" : "bg-red-500"
                  }`}
                  style={{ width: `${item.score}%` }}
                />
              </div>
              <p className="text-xs text-gray-600">{item.suggestion}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      {/* <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="space-y-2">
          <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-gray-900">Optimize for ATS</p>
                <p className="text-xs text-gray-600">Improve keyword matching</p>
              </div>
            </div>
          </button>
          <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <div>
                <p className="text-sm font-medium text-gray-900">View Trends</p>
                <p className="text-xs text-gray-600">See performance over time</p>
              </div>
            </div>
          </button>
        </div>
      </div> */}
    </div>
  )
}
