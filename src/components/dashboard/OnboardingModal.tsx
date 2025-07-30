"use client";

import type React from "react";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { motion, AnimatePresence } from "motion/react";
import { CircleCheckBig, LoaderCircle } from "lucide-react";
import { UploadButton, UploadDropzone } from "@/utils/upload-resume";
import { toast } from "react-hot-toast";
export default function OnboardingModal({
  isOpen,
  user,
}: {
  isOpen: boolean;
  user: any;
}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [cgpa, setCgpa] = useState("");
  const [backlogs, setBacklogs] = useState("");
  const [branch, setBranch] = useState("");
  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState("");
  const [yearOfPassing, setYearOfPassing] = useState("");
  const [resume, setResume] = useState<boolean>(false);
  const [resumeURL, setResumeURL] = useState("");
  const [resumeName, setResumeName] = useState("");
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async () => {
    try {
      setUploading(true);
      const formData = new FormData();
      formData.append("admnno", user.admnno);
      formData.append(
        "academicInfo",
        JSON.stringify({
          cgpa,
          backlogs,
          course,
          branch,
          semester,
          yearOfPassing,
        })
      );
      if (resume) {
        formData.append("resumeURL", resumeURL);
      }

      const res = await fetch("/api/onboard", {
        method: "PATCH",
        body: formData,
      });

      if (res.ok) {
        window.location.reload();
      }
    } catch (err) {
      console.error("Onboarding submit failed:", err);
    } finally {
      setUploading(false);
    }
  };

  const isStep1Valid = cgpa && backlogs && branch && semester && course;
  const isStep2Valid = resume;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 relative">
          {/* <button
            className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/20 rounded-full p-2 transition-all"
            onClick={onClose}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button> */}

          <div className="text-center">
            <h2 className="text-xl font-bold mb-1">
              {user.name.split(" ")[0]}, Welcome to UniPlace
            </h2>
            <p className="text-blue-100 text-sm">
              let's complete your profile, so you can start applying for jobs.
            </p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="px-6 py-4 bg-gray-50 border-b">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                  currentStep >= 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {currentStep > 1 ? <CircleCheckBig className="w-4 h-4" /> : "1"}
              </div>
              <span
                className={`ml-2 text-sm font-medium ${
                  currentStep >= 1 ? "text-blue-600" : "text-gray-500"
                }`}
              >
                Academic Info
              </span>
            </div>

            <div
              className={`w-12 h-0.5 ${
                currentStep > 1 ? "bg-blue-600" : "bg-gray-200"
              }`}
            />

            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                  currentStep >= 2
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                2
              </div>
              <span
                className={`ml-2 text-sm font-medium ${
                  currentStep >= 2 ? "text-blue-600" : "text-gray-500"
                }`}
              >
                Resume Upload
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 min-h-[300px]">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Admission Number
                  </label>
                  <Input
                    readOnly
                    value={user.admnno}
                    className="bg-gray-50 cursor-not-allowed"
                  />
                  <p className="text-gray-500 text-sm">
                    This is pre-filled based on your profile information.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Course Name <span className="text-red-500">*</span>
                    </label>
                    <Select
                      value={course}
                      onValueChange={(val) => setCourse(val)}
                    >
                      <SelectTrigger className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <SelectValue placeholder="Select Course" />
                      </SelectTrigger>

                      <SelectContent className="w-full">
                        <SelectItem value="B.Tech">B.Tech</SelectItem>
                        <SelectItem value="BCA">BCA</SelectItem>
                        <SelectItem value="BBA">BBA</SelectItem>
                        <SelectItem value="MBA">MBA</SelectItem>
                        <SelectItem value="M.Tech">M.Tech</SelectItem>
                        <SelectItem value="Others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Year of Passing <span className="text-red-500">*</span>
                    </label>
                    <Select
                      value={yearOfPassing}
                      onValueChange={(val) => setYearOfPassing(val)}
                    >
                      <SelectTrigger className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <SelectValue placeholder="Select Year of Passing" />
                      </SelectTrigger>

                      <SelectContent className="w-full">
                        {[...Array(7)].map((_, i) => {
                          const year = new Date().getFullYear() - 1 + i;
                          return (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Branch <span className="text-red-500">*</span>
                    </label>
                    <Select
                      value={branch}
                      onValueChange={(val) => setBranch(val)}
                    >
                      <SelectTrigger className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <SelectValue placeholder="Select Branch" />
                      </SelectTrigger>

                      <SelectContent className="w-full">
                        <SelectItem value="Computer Science">
                          Computer Science
                        </SelectItem>
                        <SelectItem value="Information Technology">
                          Information Technology
                        </SelectItem>
                        <SelectItem value="Electronics & Communication">
                          Electronics & Communication
                        </SelectItem>
                        <SelectItem value="Electrical & Electronics">
                          Electrical & Electronics
                        </SelectItem>
                        <SelectItem value="Mechanical">Mechanical</SelectItem>
                        <SelectItem value="Civil">Civil</SelectItem>
                        <SelectItem value="Others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Semester <span className="text-red-500">*</span>
                    </label>

                    <Select
                      value={semester}
                      onValueChange={(val) => setSemester(val)}
                    >
                      <SelectTrigger className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <SelectValue placeholder="Select Semester" />
                      </SelectTrigger>

                      <SelectContent className="w-full">
                        <SelectItem value="1st Sem">1st Sem</SelectItem>
                        <SelectItem value="2nd Sem">2nd Sem</SelectItem>
                        <SelectItem value="3rd Sem">3rd Sem</SelectItem>
                        <SelectItem value="4th Sem">4th Sem</SelectItem>
                        <SelectItem value="5th Sem">5th Sem</SelectItem>
                        <SelectItem value="6th Sem">6th Sem</SelectItem>
                        <SelectItem value="7th Sem">7th Sem</SelectItem>
                        <SelectItem value="8th Sem">8th Sem</SelectItem>
                        <SelectItem value="others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CGPA <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="number"
                      step="0.1"
                      min="0"
                      max="10"
                      placeholder="8.5"
                      value={cgpa}
                      onChange={(e) => setCgpa(e.target.value)}
                      className="focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Active Backlogs <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="number"
                      min="0"
                      placeholder="0"
                      value={backlogs}
                      onChange={(e) => setBacklogs(e.target.value)}
                      className="focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Resume <span className="text-red-500">*</span>
                  </label>

                  <div className="border-2 border-dashed rounded-lg p-6 text-center transition-all cursor-pointer">
                    {resume ? (
                      <div className="space-y-2">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                          <svg
                            className="w-6 h-6 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-green-700">
                          {resumeName || "Resume Uploaded"}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <UploadDropzone
                          className="bg-blue-300 rounded-2xl text-white font-semibold px-6 py-3"
                          endpoint="pdfUploader"
                          onClientUploadComplete={(res) => {
                            toast.success("Resume uploaded successfully!");
                            console.log("Files: ", res);
                            setResume(true);
                            setResumeURL(res[0].ufsUrl);
                            setResumeName(res[0].name);
                          }}
                          onUploadError={(error: Error) => {
                            toast.error(`ERROR! ${error.message}`);
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <p className="text-sm text-amber-800">
                    📄 <strong>Resume Tips:</strong> Use a clean format with
                    clear sections for education, skills, and projects.
                    ATS-friendly formats work best!
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t flex justify-between items-center">
          {currentStep === 1 ? (
            <>
              <div className="text-sm text-gray-500">Step 1 of 2</div>
              <Button
                onClick={() => setCurrentStep(2)}
                disabled={!isStep1Valid}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6"
              >
                Next
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                onClick={() => setCurrentStep(1)}
                className="px-6"
              >
                Back
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={!isStep2Valid || uploading}
                className="bg-green-600 hover:bg-green-700 text-white px-6"
              >
                {uploading ? (
                  <>
                    <LoaderCircle className="animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  "Complete Profile"
                )}
              </Button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
