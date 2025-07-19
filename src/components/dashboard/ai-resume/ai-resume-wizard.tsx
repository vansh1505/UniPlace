"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, ChevronLeft, Sparkles, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface AIResumeWizardProps {
  currentStep: number
  setCurrentStep: (step: number) => void
  resumeData: any
  setResumeData: (data: any) => void
}

export function AIResumeWizard({ currentStep, setCurrentStep, resumeData, setResumeData }: AIResumeWizardProps) {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleGenerate = () => {
    setIsGenerating(true)
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false)
      // Update resume data with AI-generated content
    }, 3000)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="Enter your full name" className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="+91 98765 43210" className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="City, State" className="h-11" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="targetRole">Target Role</Label>
              <Input id="targetRole" placeholder="e.g., Software Engineer, Data Scientist" className="h-11" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="summary">Professional Summary (Optional)</Label>
              <textarea
                id="summary"
                placeholder="Brief description of your professional background..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                rows={4}
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Work Experience</h2>
            <div className="space-y-6">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Experience #1</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor="jobTitle1">Job Title</Label>
                    <Input id="jobTitle1" placeholder="Software Engineer" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company1">Company</Label>
                    <Input id="company1" placeholder="Company Name" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="startDate1">Start Date</Label>
                    <Input id="startDate1" type="month" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="endDate1">End Date</Label>
                    <Input id="endDate1" type="month" placeholder="Present" className="h-11" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description1">Job Description</Label>
                  <textarea
                    id="description1"
                    placeholder="Describe your key responsibilities and achievements..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    rows={4}
                  />
                </div>
              </div>
              <Button variant="outline" className="w-full bg-transparent">
                + Add Another Experience
              </Button>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills & Education</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="skills">Technical Skills</Label>
                <Input
                  id="skills"
                  placeholder="JavaScript, React, Node.js, Python (separate with commas)"
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="education">Education</Label>
                <Input id="education" placeholder="B.Tech Computer Science, University Name" className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="certifications">Certifications (Optional)</Label>
                <Input id="certifications" placeholder="AWS Certified, Google Cloud Professional" className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="projects">Key Projects (Optional)</Label>
                <textarea
                  id="projects"
                  placeholder="Describe 2-3 key projects with technologies used..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  rows={4}
                />
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Generate Your Resume</h2>
            {!isGenerating ? (
              <div className="space-y-6">
                <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                  <Brain className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Generate!</h3>
                  <p className="text-gray-600 mb-6">
                    Our AI will analyze your information and create a professional resume optimized for your target
                    role.
                  </p>
                  <Button onClick={handleGenerate} size="lg" className="bg-purple-600 hover:bg-purple-700">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Generate Resume with AI
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-1">Smart Formatting</h4>
                    <p className="text-blue-700">Professional layout optimized for ATS systems</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-1">Content Enhancement</h4>
                    <p className="text-green-700">AI-powered suggestions for better impact</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-1">Industry Insights</h4>
                    <p className="text-purple-700">Tailored for your specific role and industry</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Generating Your Resume...</h3>
                  <p className="text-gray-600">
                    Our AI is analyzing your information and creating the perfect resume for you.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Analyzing your profile...</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-purple-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 2 }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
      {renderStep()}

      <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
        <Button onClick={handlePrevious} variant="outline" disabled={currentStep === 1} className="bg-transparent">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>

        {currentStep < 4 && (
          <Button onClick={handleNext} className="bg-purple-600 hover:bg-purple-700">
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  )
}
