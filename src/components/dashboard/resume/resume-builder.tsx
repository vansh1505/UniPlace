"use client"

import { useState } from "react"
import { Palette, Layout, Type, ImageIcon, Download, Eye, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const templates = [
  {
    id: 1,
    name: "Professional",
    description: "Clean and modern design perfect for corporate roles",
    preview: "/placeholder.svg?height=200&width=150",
    category: "Corporate",
    isPopular: true,
  },
  {
    id: 2,
    name: "Creative",
    description: "Eye-catching design for creative professionals",
    preview: "/placeholder.svg?height=200&width=150",
    category: "Creative",
    isPopular: false,
  },
  {
    id: 3,
    name: "Minimal",
    description: "Simple and elegant layout focusing on content",
    preview: "/placeholder.svg?height=200&width=150",
    category: "Minimal",
    isPopular: true,
  },
  {
    id: 4,
    name: "Technical",
    description: "Structured format ideal for technical roles",
    preview: "/placeholder.svg?height=200&width=150",
    category: "Technical",
    isPopular: false,
  },
]

const colorSchemes = [
  { name: "Blue", primary: "#3B82F6", secondary: "#EFF6FF" },
  { name: "Green", primary: "#10B981", secondary: "#ECFDF5" },
  { name: "Purple", primary: "#8B5CF6", secondary: "#F3E8FF" },
  { name: "Orange", primary: "#F59E0B", secondary: "#FFFBEB" },
  { name: "Gray", primary: "#6B7280", secondary: "#F9FAFB" },
]

export function ResumeBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState(1)
  const [selectedColor, setSelectedColor] = useState(0)
  const [activeSection, setActiveSection] = useState("templates")

  const sections = [
    { id: "templates", label: "Templates", icon: Layout },
    { id: "colors", label: "Colors", icon: Palette },
    { id: "fonts", label: "Typography", icon: Type },
    { id: "layout", label: "Layout", icon: ImageIcon },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[600px]">
      {/* Sidebar */}
      <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Customize</h3>

        <div className="space-y-2">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant={activeSection === section.id ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveSection(section.id)}
            >
              <section.icon className="h-4 w-4 mr-2" />
              {section.label}
            </Button>
          ))}
        </div>

        {/* Section Content */}
        <div className="mt-6">
          {activeSection === "templates" && (
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">Choose Template</h4>
              <div className="grid grid-cols-2 gap-2">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    className={`relative cursor-pointer rounded-lg border-2 transition-all ${
                      selectedTemplate === template.id ? "border-blue-500" : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedTemplate(template.id)}
                  >
                    <img
                      src={template.preview || "/placeholder.svg"}
                      alt={template.name}
                      className="w-full h-20 object-cover rounded-lg"
                    />
                    {template.isPopular && (
                      <Badge className="absolute -top-2 -right-2 bg-orange-500 text-xs">Popular</Badge>
                    )}
                    <p className="text-xs text-center mt-1 font-medium">{template.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "colors" && (
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">Color Scheme</h4>
              <div className="space-y-2">
                {colorSchemes.map((scheme, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all ${
                      selectedColor === index ? "bg-blue-50 border border-blue-200" : "hover:bg-gray-50"
                    }`}
                    onClick={() => setSelectedColor(index)}
                  >
                    <div className="flex gap-1">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: scheme.primary }} />
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: scheme.secondary }} />
                    </div>
                    <span className="text-sm font-medium">{scheme.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "fonts" && (
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">Typography</h4>
              <div className="space-y-2">
                {["Inter", "Roboto", "Open Sans", "Lato"].map((font) => (
                  <div
                    key={font}
                    className="p-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    style={{ fontFamily: font }}
                  >
                    <p className="text-sm font-medium">{font}</p>
                    <p className="text-xs text-gray-600">The quick brown fox</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "layout" && (
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">Layout Options</h4>
              <div className="space-y-2">
                <div className="p-2 border border-gray-200 rounded-lg">
                  <p className="text-sm font-medium">Single Column</p>
                  <p className="text-xs text-gray-600">Traditional layout</p>
                </div>
                <div className="p-2 border border-gray-200 rounded-lg">
                  <p className="text-sm font-medium">Two Column</p>
                  <p className="text-xs text-gray-600">Modern sidebar layout</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Preview Area */}
      <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Resume Preview</h3>
              <p className="text-sm text-gray-600">Live preview of your resume</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Save className="h-4 w-4 mr-2" />
                Save Draft
              </Button>
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                Full Preview
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm mx-auto max-w-2xl">
            {/* Resume Preview Content */}
            <div className="p-8 space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
                <p className="text-gray-600">Software Engineer</p>
                <p className="text-sm text-gray-500">john.doe@email.com • +91 9876543210 • LinkedIn</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-1 mb-3">
                  Professional Summary
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Experienced software engineer with 3+ years of expertise in full-stack development. Proficient in
                  React, Node.js, and cloud technologies. Passionate about creating scalable solutions and mentoring
                  junior developers.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-1 mb-3">Experience</h2>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">Senior Software Engineer</h3>
                        <p className="text-gray-600 text-sm">Tech Company Inc.</p>
                      </div>
                      <span className="text-sm text-gray-500">2022 - Present</span>
                    </div>
                    <ul className="text-sm text-gray-700 mt-2 space-y-1">
                      <li>• Led development of microservices architecture serving 1M+ users</li>
                      <li>• Improved application performance by 40% through optimization</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-1 mb-3">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "TypeScript", "AWS", "Docker", "MongoDB"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
