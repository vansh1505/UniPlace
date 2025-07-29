"use client"

import { useState } from "react"
import { Edit3, Save, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function PersonalInformation({user} : any) {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: user?.name.split(" ")[0] || "",
    lastName: user?.name.split(" ")[1] || "",
    Email: user?.email || "",
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
          <div className="p-2 bg-blue-100 rounded-lg">
            <User className="h-5 w-5 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
        </div>
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)} size="sm" variant="outline" className="bg-transparent" disabled>
            <Edit3 className="h-4 w-4 mr-2" />
            Edit
          </Button>
        )}
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
              First Name
            </Label>
            {isEditing ? (
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="h-11"
              />
            ) : (
              <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">{formData.firstName}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
              Last Name
            </Label>
            {isEditing ? (
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="h-11"
              />
            ) : (
              <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">{formData.lastName}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="Email" className="text-sm font-medium text-gray-700">
              Email
            </Label>
            {isEditing ? (
              <Input
                id="Email"
                type="email"
                value={formData.Email}
                onChange={(e) => handleInputChange("Email", e.target.value)}
                className="h-11"
              />
            ) : (
              <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">{formData.Email}</p>
            )}
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
