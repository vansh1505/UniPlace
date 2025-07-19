"use client"

import { motion } from "motion/react"
import { Layout, Star, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const templates = [
  {
    id: 1,
    name: "Modern Professional",
    category: "Software Engineer",
    preview: "/placeholder.svg?height=300&width=200",
    rating: 4.8,
    downloads: 1250,
    isPremium: false,
    description: "Clean and modern design perfect for tech roles",
  },
  {
    id: 2,
    name: "Executive Classic",
    category: "Management",
    preview: "/placeholder.svg?height=300&width=200",
    rating: 4.9,
    downloads: 980,
    isPremium: true,
    description: "Professional template for senior positions",
  },
  {
    id: 3,
    name: "Creative Portfolio",
    category: "Design",
    preview: "/placeholder.svg?height=300&width=200",
    rating: 4.7,
    downloads: 750,
    isPremium: false,
    description: "Showcase your creativity with this unique design",
  },
  {
    id: 4,
    name: "Data Analyst Pro",
    category: "Data Science",
    preview: "/placeholder.svg?height=300&width=200",
    rating: 4.6,
    downloads: 650,
    isPremium: true,
    description: "Optimized for data science and analytics roles",
  },
  {
    id: 5,
    name: "Minimalist Clean",
    category: "General",
    preview: "/placeholder.svg?height=300&width=200",
    rating: 4.5,
    downloads: 1100,
    isPremium: false,
    description: "Simple and elegant design for any profession",
  },
  {
    id: 6,
    name: "Tech Startup",
    category: "Startup",
    preview: "/placeholder.svg?height=300&width=200",
    rating: 4.8,
    downloads: 890,
    isPremium: true,
    description: "Perfect for startup and entrepreneurial roles",
  },
]

export function ResumeTemplates() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Layout className="h-5 w-5 text-purple-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Resume Templates</h2>
          </div>
          <div className="flex items-center gap-3">
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="all">All Categories</option>
              <option value="software">Software Engineer</option>
              <option value="data">Data Science</option>
              <option value="management">Management</option>
              <option value="design">Design</option>
            </select>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              <div className="relative mb-4">
                <img
                  src={template.preview || "/placeholder.svg"}
                  alt={template.name}
                  className="w-full h-48 object-cover rounded-lg bg-white border border-gray-200"
                />
                {template.isPremium && (
                  <Badge className="absolute top-2 right-2 bg-yellow-500 text-white">Premium</Badge>
                )}
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{template.name}</h3>
                  <p className="text-sm text-gray-600">{template.description}</p>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">
                    {template.category}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-gray-600">{template.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Download className="h-4 w-4 mr-1" />
                    {template.downloads} downloads
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                  <Button size="sm" className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                    Use Template
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
