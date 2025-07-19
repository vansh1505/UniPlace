"use client"

import { useState } from "react"
import { Edit3, Save, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function PersonalInformation() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "Vansh",
    lastName: "Kumar",
    dateOfBirth: "1999-05-15",
    gender: "Male",
    nationality: "Indian",
    address: "123 University Street, Delhi",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110001",
    emergencyContact: "+91 98765 43210",
    emergencyContactName: "Rajesh Kumar",
    emergencyContactRelation: "Father",
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
          <Button onClick={() => setIsEditing(true)} size="sm" variant="outline" className="bg-transparent">
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
            <Label htmlFor="dateOfBirth" className="text-sm font-medium text-gray-700">
              Date of Birth
            </Label>
            {isEditing ? (
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                className="h-11"
              />
            ) : (
              <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">
                {new Date(formData.dateOfBirth).toLocaleDateString()}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="gender" className="text-sm font-medium text-gray-700">
              Gender
            </Label>
            {isEditing ? (
              <select
                id="gender"
                value={formData.gender}
                onChange={(e) => handleInputChange("gender", e.target.value)}
                className="w-full h-11 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">{formData.gender}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address" className="text-sm font-medium text-gray-700">
            Address
          </Label>
          {isEditing ? (
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              className="h-11"
            />
          ) : (
            <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">{formData.address}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="city" className="text-sm font-medium text-gray-700">
              City
            </Label>
            {isEditing ? (
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className="h-11"
              />
            ) : (
              <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">{formData.city}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="state" className="text-sm font-medium text-gray-700">
              State
            </Label>
            {isEditing ? (
              <Input
                id="state"
                value={formData.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
                className="h-11"
              />
            ) : (
              <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">{formData.state}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="pincode" className="text-sm font-medium text-gray-700">
              Pincode
            </Label>
            {isEditing ? (
              <Input
                id="pincode"
                value={formData.pincode}
                onChange={(e) => handleInputChange("pincode", e.target.value)}
                className="h-11"
              />
            ) : (
              <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">{formData.pincode}</p>
            )}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Emergency Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="emergencyContactName" className="text-sm font-medium text-gray-700">
                Contact Name
              </Label>
              {isEditing ? (
                <Input
                  id="emergencyContactName"
                  value={formData.emergencyContactName}
                  onChange={(e) => handleInputChange("emergencyContactName", e.target.value)}
                  className="h-11"
                />
              ) : (
                <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">
                  {formData.emergencyContactName}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="emergencyContact" className="text-sm font-medium text-gray-700">
                Contact Number
              </Label>
              {isEditing ? (
                <Input
                  id="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                  className="h-11"
                />
              ) : (
                <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">
                  {formData.emergencyContact}
                </p>
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
