"use client";
import React from 'react'
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, Star, Bookmark, ExternalLink } from "lucide-react";

const getUrgencyColor = (urgency: string) => {
  switch (urgency) {
    case "high":
      return "border-l-red-500"
    case "medium":
      return "border-l-yellow-500"
    case "low":
      return "border-l-green-500"
    default:
      return "border-l-gray-300"
  }
}

const driveCard = (drive : any, index : number) => {
  return (
    <motion.div
          key={drive.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className={`bg-white rounded-xl shadow-sm border-l-4 ${getUrgencyColor(drive.urgency)} border-r border-t border-b border-gray-200 p-6 hover:shadow-md transition-shadow`}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <img src={drive.logo || "/placeholder.svg"} alt={drive.company} className="w-12 h-12 rounded-lg" />
              <div>
                <h3 className="font-semibold text-gray-900">{drive.company}</h3>
                <p className="text-gray-600">{drive.position}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-gray-900">{drive.match}%</span>
              </div>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Bookmark
                  className={`h-4 w-4 ${drive.isBookmarked ? "fill-current text-blue-600" : "text-gray-400"}`}
                />
              </Button>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>{drive.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="h-4 w-4" />
              <span>Deadline: {new Date(drive.deadline).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users className="h-4 w-4" />
              <span>{drive.applicants} applicants</span>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-medium">Eligibility:</span> {drive.eligibility}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-green-600">{drive.package}</span>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                {drive.match}% Match
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Apply Now</Button>
            <Button variant="outline" size="sm" className="bg-transparent">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
  )
}

export default driveCard