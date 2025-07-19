"use client"

import { useState } from "react"
import { Edit3, Save, X, Phone, Mail, Globe, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ContactInformation() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    email: "vansh.kumar@university.edu",
    personalEmail: "vansh.kumar@gmail.com",
    phone: "+91 98765 43210",
    alternatePhone: "+91 87654 32109",
    linkedinUrl: "https://linkedin.com/in/vanshkumar",
    githubUrl: "https://github.com/vanshkumar",
    portfolioUrl: "https://vanshkumar.dev",
    whatsapp: "+91 98765 43210",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    // Handle save logic here
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
    // Reset form data if needed
  }

  return (
    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Phone className="h-5 w-5 text-purple-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
        </div>
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)} size="sm" variant="outline" className="bg-transparent">
            <Edit3 className="h-4 w-4 mr-2" />
            Edit
          </Button>
        )}
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              University Email
            </Label>
            {isEditing ? (
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="h-11"
              />
            ) : (
              <div className="flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-2.5">
                <Mail className="h-4 w-4 text-gray-500" />
                <p className="text-gray-900 font-medium">{formData.email}</p>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="personalEmail" className="text-sm font-medium text-gray-700">
              Personal Email
            </Label>
            {isEditing ? (
              <Input
                id="personalEmail"
                type="email"
                value={formData.personalEmail}
                onChange={(e) => handleInputChange("personalEmail", e.target.value)}
                className="h-11"
              />
            ) : (
              <div className="flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-2.5">
                <Mail className="h-4 w-4 text-gray-500" />
                <p className="text-gray-900 font-medium">{formData.personalEmail}</p>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Primary Phone
            </Label>
            {isEditing ? (
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="h-11"
              />
            ) : (
              <div className="flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-2.5">
                <Phone className="h-4 w-4 text-gray-500" />
                <p className="text-gray-900 font-medium">{formData.phone}</p>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="alternatePhone" className="text-sm font-medium text-gray-700">
              Alternate Phone
            </Label>
            {isEditing ? (
              <Input
                id="alternatePhone"
                value={formData.alternatePhone}
                onChange={(e) => handleInputChange("alternatePhone", e.target.value)}
                className="h-11"
              />
            ) : (
              <div className="flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-2.5">
                <Phone className="h-4 w-4 text-gray-500" />
                <p className="text-gray-900 font-medium">{formData.alternatePhone}</p>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Professional Links</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="linkedinUrl" className="text-sm font-medium text-gray-700">
                LinkedIn Profile
              </Label>
              {isEditing ? (
                <Input
                  id="linkedinUrl"
                  value={formData.linkedinUrl}
                  onChange={(e) => handleInputChange("linkedinUrl", e.target.value)}
                  className="h-11"
                  placeholder="https://linkedin.com/in/username"
                />
              ) : (
                <div className="flex items-center space-x-2 bg-blue-50 rounded-lg px-3 py-2.5">
                  <Linkedin className="h-4 w-4 text-blue-600" />
                  <a
                    href={formData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    {formData.linkedinUrl}
                  </a>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="githubUrl" className="text-sm font-medium text-gray-700">
                GitHub Profile
              </Label>
              {isEditing ? (
                <Input
                  id="githubUrl"
                  value={formData.githubUrl}
                  onChange={(e) => handleInputChange("githubUrl", e.target.value)}
                  className="h-11"
                  placeholder="https://github.com/username"
                />
              ) : (
                <div className="flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-2.5">
                  <Github className="h-4 w-4 text-gray-700" />
                  <a
                    href={formData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 font-medium hover:underline"
                  >
                    {formData.githubUrl}
                  </a>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="portfolioUrl" className="text-sm font-medium text-gray-700">
                Portfolio Website
              </Label>
              {isEditing ? (
                <Input
                  id="portfolioUrl"
                  value={formData.portfolioUrl}
                  onChange={(e) => handleInputChange("portfolioUrl", e.target.value)}
                  className="h-11"
                  placeholder="https://yourportfolio.com"
                />
              ) : (
                <div className="flex items-center space-x-2 bg-green-50 rounded-lg px-3 py-2.5">
                  <Globe className="h-4 w-4 text-green-600" />
                  <a
                    href={formData.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-medium hover:underline"
                  >
                    {formData.portfolioUrl}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {isEditing && (
          <div className="flex items-center justify-end space-x-3 pt-6 border-t border-gray-200">
            <Button onClick={handleCancel} variant="outline" className="bg-transparent">
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
