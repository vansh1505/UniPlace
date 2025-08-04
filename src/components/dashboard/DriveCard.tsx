"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Calendar, Clock, MapPin, Building, X, GraduationCap, Star, Briefcase, Globe, IndianRupee, LoaderCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import toast from "react-hot-toast";
interface DriveCardProps {
  drive: {
    _id: string;
    name: string;
    logo?: string;
    recurimentType: string;
    salary: {
      min: number;
      max: number;
    };
    description: string;
    skills: string[];
    branches: string[];
    courses: string[];
    website?: string;
    examLocation: string;
    minCGPA: number;
    minBacklogs: number;
    isActive: boolean;
    position: string;
    date: string;
    time: string;
    location: string;
    package: string;
    deadline: string;
  };
  index: number;
}

export const DriveCard = ({ drive, index }: DriveCardProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isApplying, setIsApplying] = useState(false)

  const handleApply = async () => {
    setIsApplying(true)
    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          driveId: drive._id,
          skills: drive.skills,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.msg || "Failed to apply for the drive");
        return;
      }
      toast.success("Application submitted successfully!")
      window.location.reload();
    } catch (error) {
      toast.error("Failed to submit application. Please try again.")
    } finally {
      setIsApplying(false)
      setModalOpen(false);
    }
  }

    const formatSalary = (min: number, max: number) => {
    return `₹${min}-${max} LPA`
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time":
        return "bg-blue-100 text-blue-800"
      case "Part-time":
        return "bg-green-100 text-green-800"
      case "Internship":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }
  return (
    <>
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-4 px-6 text-white relative">
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  {drive.logo ? (
                    <Image
                      src={drive.logo}
                      alt={`${drive.name} logo`}
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                  ) : (
                    <Building className="h-8 w-8 text-white" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold">{drive.name}</h2>
                    <Badge className={`${getTypeColor(drive.recurimentType)} border-0`}>{drive.recurimentType}</Badge>
                  </div>
                  <p className="text-xl text-blue-100 mb-2">{drive.position}</p>
                  <div className="flex items-center gap-4 text-blue-100">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{drive.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <IndianRupee className="h-4 w-4" />
                      <span className="font-semibold">{formatSalary(drive.salary.min, drive.salary.max)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Description */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-blue-600" />
                      Job Description
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{drive.description}</p>

                    {drive.website && (
                      <div className="mt-4">
                        <a
                          href={drive.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                        >
                          <Globe className="h-4 w-4" />
                          Visit Company Website
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Required Skills */}
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Star className="h-5 w-5 text-blue-600" />
                      Required Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {drive.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>  

                  {/* Eligible Branches & Courses */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Eligible Branches</h3>
                      <div className="space-y-2">
                        {drive.branches.map((branch, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-gray-700">{branch}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-purple-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Eligible Courses</h3>
                      <div className="space-y-2">
                        {drive.courses.map((course, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="text-gray-700">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Schedule */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Schedule</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Calendar className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Drive Date</p>
                          <p className="font-medium text-gray-900">
                            {new Date(drive.date).toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <Clock className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Time</p>
                          <p className="font-medium text-gray-900">{drive.time}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <MapPin className="h-4 w-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Exam Location</p>
                          <p className="font-medium text-gray-900">{drive.examLocation}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Eligibility Criteria */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-blue-600" />
                      Eligibility
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Minimum CGPA</span>
                        <Badge variant="outline" className="font-semibold">
                          {drive.minCGPA}+
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Maximum Backlogs</span>
                        <Badge variant="outline" className="font-semibold">
                          {drive.minBacklogs}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 py-2 px-6 bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">
                    Application Deadline:{" "}
                    {new Date(new Date(drive.date).getTime() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Make sure you meet all eligibility criteria before applying
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    onClick={handleApply}
                    disabled={isApplying || !drive.isActive}
                    className="bg-blue-600 hover:bg-blue-700 min-w-[120px] cursor-pointer"
                  >
                    {isApplying ? (
                      <div className="flex items-center gap-2">
                        <LoaderCircle className="h-4 w-4 text-white animate-spin" />
                        Applying...
                      </div>
                    ) : (
                      "Apply Now"
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.01 }}
        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              {drive.logo ? (
                <Image
                  height={32}
                  width={32}
                  src={drive.logo}
                  alt={`${drive.name} logo`}
                  className="w-8 h-8 rounded"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-indigo-400 text-white rounded-xl">
                  <Building className="w-6 h-6" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-semibold text-gray-900">{drive.name}</h3>
                <Badge
                  variant={
                    drive.recurimentType === "Internship"
                      ? "default"
                      : "destructive"
                  }
                  className={
                    drive.recurimentType === "Internship"
                      ? "bg-green-100 text-green-800 hover:bg-green-100"
                      : "bg-orange-100 text-orange-800 hover:bg-orange-100"
                  }
                >
                  {drive.recurimentType}
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
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold text-green-600 mb-1">{drive.package}</p>
            <p className="text-sm text-gray-500">
              Deadline:{" "}
              {new Date(
                new Date(drive.date).getTime() - 7 * 24 * 60 * 60 * 1000
              ).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Button
          size="sm"
          className="bg-blue-600 hover:bg-blue-700 cursor-pointer"
          onClick={() => setModalOpen(!modalOpen)}
          disabled={!drive.isActive}
          >
          {drive.isActive ? "View Details" : "Not Active"}
          </Button>
        </div>
      </motion.div>
    </>
  );
};
