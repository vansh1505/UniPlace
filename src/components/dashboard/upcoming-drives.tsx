"use client";

import { motion } from "motion/react";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

const upcomingDrives = await fetch("/api/eligible-drives")
  .then((res) => res.json())
  .catch((err) => {
    console.error("Failed to fetch upcoming drives:", err);
    return [];
  });

export function UpcomingDrives() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            Upcoming Eligible Drives
          </h2>
          <Link href="/dashboard/drives">
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-600 hover:text-blue-700 cursor-pointer"
            >
              View All
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {upcomingDrives.length === 0 ? (
            <p className="text-gray-500">No upcoming drives available</p>
          ) : (
            upcomingDrives.map((drive, index) => (
              <motion.div
                key={drive.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Image
                        height={10}
                        width={10}
                        src={drive.logo || "/placeholder.svg"}
                        alt={`${drive.company} logo`}
                        className="w-8 h-8 rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-900">
                          {drive.company}
                        </h3>
                        <Badge
                          variant={
                            drive.status === "Open" ? "default" : "destructive"
                          }
                          className={
                            drive.status === "Open"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : "bg-orange-100 text-orange-800 hover:bg-orange-100"
                          }
                        >
                          {drive.status}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-2">{drive.position}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(drive.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {drive.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {drive.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {drive.applicants} applied
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600 mb-1">
                      {drive.package}
                    </p>
                    <p className="text-sm text-gray-500">
                      Deadline: {new Date(drive.deadline).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Apply Now
                  </Button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
