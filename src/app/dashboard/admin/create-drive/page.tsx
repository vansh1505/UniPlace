"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  CalendarIcon,
  Plus,
  X,
  Building2,
  MapPin,
  Clock,
  Users,
  GraduationCap,
  DollarSign,
  Save,
  Eye,
} from "lucide-react"
import { cn } from "@/lib/utils"
import toast from "react-hot-toast"
import { format } from "date-fns/format"

const branches = [
  "Computer Science Engineering (CSE)",
  "Information Technology (IT)",
  "Electronics and Communication Engineering (ECE)",
  "Electrical Engineering (EE)",
  "Mechanical Engineering (ME)",
  "Civil Engineering (CE)",
  "Chemical Engineering (ChE)",
  "Biotechnology (BT)",
  "Aerospace Engineering (AE)",
  "Industrial Engineering (IE)",
]

const courses = ["B.Tech", "B.E", "M.Tech", "M.E", "MCA", "BCA", "MBA", "M.Sc", "B.Sc"]

const commonSkills = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "React",
  "Node.js",
  "Angular",
  "Vue.js",
  "HTML/CSS",
  "SQL",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "Machine Learning",
  "Data Science",
  "DevOps",
  "Git",
  "Linux",
  "Android",
  "iOS",
]

export default function CreateDrivePage() {
  const [formData, setFormData] = useState({
    name: "",
    logoLink: "",
    description: "",
    website: "",
    location: "",
    position: "",
    salary: { min: "", max: "" },
    minCGPA: "",
    minBacklogs: "",
    courses: [] as string[],
    branches: [] as string[],
    skills: [] as string[],
    date: undefined as Date | undefined,
    time: "",
    recurimentType: "",
    examLocation: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [newSkill, setNewSkill] = useState("")

  const handleInputChange = (field: string, value: any) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".")
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof typeof prev] as any),
          [child]: value,
        },
      }))
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }))
    }
  }

    const addCustomSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      handleArrayAdd("skills", newSkill.trim())
      setNewSkill("")
    }
  }

  const handleArrayAdd = (field: string, value: string) => {
    const arr = formData[field as keyof typeof formData] as string[] | undefined
    if (value && Array.isArray(arr) && !arr.includes(value)) {
      setFormData((prev) => ({
        ...prev,
        [field]: [...arr, value],
      }))
    }
  }


const handleArrayRemove = (field: keyof typeof formData, value: string) => {
  setFormData((prev) => {
    const currentArray = prev[field];
    if (Array.isArray(currentArray)) {
      return {
        ...prev,
        [field]: currentArray.filter((item) => item !== value),
      };
    }
    return prev;
  });
};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const submitData = {
        ...formData,
        salary: {
          min: Number.parseFloat(formData.salary.min),
          max: Number.parseFloat(formData.salary.max),
        },
        minCGPA: Number.parseFloat(formData.minCGPA),
        minBacklogs: Number.parseInt(formData.minBacklogs),
        date: formData.date?.toISOString(),
        isActive: true,
      }

      const response = await fetch("/api/admin/create-drive", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitData),
      })

      if (response.ok) {
        toast.success("Drive created successfully!")
      } else {
        toast.error("Failed to create drive")
      }
    } catch (error) {
      toast.error("An error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div {...fadeInUp} className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Create New Drive</h1>
              <p className="text-gray-600">Add a new placement drive for students</p>
            </div>
          </div>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Information */}
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg py-4  ">
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Company Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Company Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="e.g., Google, Microsoft, Amazon"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="logoLink">Logo URL *</Label>
                    <Input
                      id="logoLink"
                      value={formData.logoLink}
                      onChange={(e) => handleInputChange("logoLink", e.target.value)}
                      placeholder="https://company.com/logo.png"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Company Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Brief description about the company and role..."
                    rows={3}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="website">Company Website *</Label>
                  <Input
                    id="website"
                    value={formData.website}
                    onChange={(e) => handleInputChange("website", e.target.value)}
                    placeholder="https://company.com"
                    required
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Job Details */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg py-4">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Job Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="position">Position *</Label>
                    <Input
                      id="position"
                      value={formData.position}
                      onChange={(e) => handleInputChange("position", e.target.value)}
                      placeholder="e.g., Software Engineer, Data Analyst"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="recurimentType">Recruitment Type *</Label>
                    <Select
                      value={formData.recurimentType}
                      onValueChange={(value) => handleInputChange("recurimentType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Full-time">Full-time</SelectItem>
                        <SelectItem value="Part-time">Part-time</SelectItem>
                        <SelectItem value="Internship">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="location">Job Location *</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        placeholder="e.g., Bangalore, Remote, Hybrid"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="examLocation">Exam Location *</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="examLocation"
                        value={formData.examLocation}
                        onChange={(e) => handleInputChange("examLocation", e.target.value)}
                        placeholder="e.g., College Campus, Online"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Salary Range (LPA) *</Label>
                    <div className="flex gap-2 items-center">
                      <div className="relative flex-1">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          value={formData.salary.min}
                          onChange={(e) => handleInputChange("salary.min", e.target.value)}
                          placeholder="Min"
                          type="number"
                          className="pl-10"
                          required
                        />
                      </div>
                      <span className="text-gray-500">to</span>
                      <div className="relative flex-1">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          value={formData.salary.max}
                          onChange={(e) => handleInputChange("salary.max", e.target.value)}
                          placeholder="Max"
                          type="number"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Eligibility Criteria */}
          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg py-4">
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Eligibility Criteria
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="minCGPA">Minimum CGPA *</Label>
                    <Input
                      id="minCGPA"
                      value={formData.minCGPA}
                      onChange={(e) => handleInputChange("minCGPA", e.target.value)}
                      placeholder="e.g., 7.5"
                      type="number"
                      step="0.1"
                      min="0"
                      max="10"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="minBacklogs">Maximum Backlogs Allowed *</Label>
                    <Input
                      id="minBacklogs"
                      value={formData.minBacklogs}
                      onChange={(e) => handleInputChange("minBacklogs", e.target.value)}
                      placeholder="e.g., 0, 1, 2"
                      type="number"
                      min="0"
                      required
                    />
                  </div>
                </div>

                {/* Courses */}
                <div>
                  <Label>Eligible Courses *</Label>
                  <Select onValueChange={(value) => handleArrayAdd("courses", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select courses" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course} value={course}>
                          {course}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.courses.map((course) => (
                      <Badge key={course} variant="secondary" className="bg-blue-100 text-blue-800">
                        {course}
                        <X
                          className="h-3 w-3 ml-1 cursor-pointer"
                          onClick={() => handleArrayRemove("courses", course)}
                        />
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Branches */}
                <div>
                  <Label>Eligible Branches *</Label>
                  <Select onValueChange={(value) => handleArrayAdd("branches", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select branches" />
                    </SelectTrigger>
                    <SelectContent>
                      {branches.map((branch) => (
                        <SelectItem key={branch} value={branch}>
                          {branch}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.branches.map((branch) => (
                      <Badge key={branch} variant="secondary" className="bg-green-100 text-green-800">
                        {branch}
                        <X
                          className="h-3 w-3 ml-1 cursor-pointer"
                          onClick={() => handleArrayRemove("branches", branch)}
                        />
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills & Schedule */}
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-t-lg py-4">
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {/* Skills */}
                <div>
                  <Label>Required Skills *</Label>
                  <div className="flex gap-2 mb-2">
                    <Input
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      placeholder="Add custom skill"
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addCustomSkill())}
                    />
                    <Button type="button" onClick={addCustomSkill} size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
                    {commonSkills.map((skill) => (
                      <Button
                        key={skill}
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => handleArrayAdd("skills", skill)}
                        disabled={formData.skills.includes(skill)}
                        className="justify-start"
                      >
                        <Plus className="h-3 w-3 mr-1" />
                        {skill}
                      </Button>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-orange-100 text-orange-800">
                        {skill}
                        <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => handleArrayRemove("skills", skill)} />
                      </Badge>
                    ))}
                  </div>
                </div>
                {/* Schedule */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Drive Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !formData.date && "text-muted-foreground",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.date ? format(formData.date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formData.date}
                          onSelect={(date) => handleInputChange("date", date)}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label htmlFor="time">Drive Time *</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="time"
                        value={formData.time}
                        onChange={(e) => handleInputChange("time", e.target.value)}
                        placeholder="e.g., 10:00 AM"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Submit Buttons */}
          <motion.div {...fadeInUp} transition={{ delay: 0.5 }} className="flex gap-4 justify-end">
            <Button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700 min-w-[120px] cursor-pointer">
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Create Drive
                </>
              )}
            </Button>
          </motion.div>
        </form>
      </div>
    </div>
  )
}
