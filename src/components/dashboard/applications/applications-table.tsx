"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MoreHorizontal, ExternalLink, MessageSquare, Calendar, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const applications: any[] = []

const getStatusBadge = (status: string) => {
  const statusConfig = {
    applied: { color: "bg-blue-100 text-blue-800", label: "Applied" },
    screening: { color: "bg-yellow-100 text-yellow-800", label: "Screening" },
    interview: { color: "bg-purple-100 text-purple-800", label: "Interview" },
    offer: { color: "bg-green-100 text-green-800", label: "Offer" },
    rejected: { color: "bg-red-100 text-red-800", label: "Rejected" },
  }

  const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.applied

  return (
    <Badge variant="secondary" className={`${config.color} font-medium`}>
      {config.label}
    </Badge>
  )
}

export function ApplicationsTable() {


  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">Applications Table</h3>
        <p className="text-sm text-gray-600">Detailed view of all your applications</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Position
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="flex items-center gap-1">
                  Applied Date
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salary</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Update
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {applications.length === 0 && (
              <tr>
                <td colSpan={8} className="px-6 py-4 text-center text-gray-500">
                  No applications found
                </td>
              </tr>
            )}
            {applications.map((application, index) => (
              <motion.tr
                key={application.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <img
                      src={application.logo || "/placeholder.svg"}
                      alt={application.company}
                      className="w-8 h-8 rounded-lg"
                    />
                    <span className="font-medium text-gray-900">{application.company}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{application.position}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{application.location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {new Date(application.appliedDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(application.status)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">{application.salary}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {new Date(application.lastUpdate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Calendar className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
