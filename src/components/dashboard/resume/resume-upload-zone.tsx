"use client";

import type React from "react";
import { useState, useCallback } from "react";
import { motion } from "motion/react";
import {
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
  X,
  Eye,
  Zap,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import toast from "react-hot-toast";
import { UploadButton, UploadDropzone } from "@/utils/upload-resume";

interface AnalysisResult {
  overallScore: number;
  improvements: number;
  sections: {
    name: string;
    status: "good" | "needs-work" | "excellent";
    score: number;
  }[];
}

export function ResumeUploadZone({ userEmail }: { userEmail: string }) {
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [file, setFile] = useState<string | "">("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(
    null
  );
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileUpload = useCallback(async (file: string) => {
    setUploadedFile(file);
    setIsAnalyzing(true);
    setUploadProgress(0);

    // Simulate upload progress
    const progressInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 200);

    try {
      // Simulate API call for analysis
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Mock analysis result
      const mockResult: AnalysisResult = {
        overallScore: Math.floor(Math.random() * 30) + 70, // 70-100
        improvements: Math.floor(Math.random() * 15) + 5, // 5-20
        sections: [
          { name: "Contact Information", status: "good", score: 85 },
          { name: "Skills Section", status: "needs-work", score: 65 },
          { name: "Work Experience", status: "excellent", score: 95 },
          { name: "Education", status: "good", score: 80 },
          { name: "ATS Compatibility", status: "excellent", score: 90 },
        ],
      };

      setAnalysisResult(mockResult);
      setUploadProgress(100);
      setIsAnalyzing(false);
      setAnalysisComplete(true);
      toast.success("Resume analysis completed!");
    } catch (error) {
      console.error("Analysis failed:", error);
      toast.error("Analysis failed. Please try again.");
      setIsAnalyzing(false);
      setUploadedFile(null);
    }
  }, []);

  const resetUpload = useCallback(() => {
    setUploadedFile(null);
    setAnalysisComplete(false);
    setAnalysisResult(null);
    setUploadProgress(0);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-green-50 border-green-200";
      case "good":
        return "bg-blue-50 border-blue-200";
      case "needs-work":
        return "bg-yellow-50 border-yellow-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "good":
        return <CheckCircle className="h-4 w-4 text-blue-600" />;
      case "needs-work":
        return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "excellent":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Excellent
          </Badge>
        );
      case "good":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            Good
          </Badge>
        );
      case "needs-work":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            Needs Work
          </Badge>
        );
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  // Analysis Complete View
  if (analysisComplete && uploadedFile && analysisResult) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      >
        {/* Success Header */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <CheckCircle className="h-8 w-8 text-green-600" />
          </motion.div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Analysis Complete!
          </h3>
          <p className="text-gray-600">
            Your resume has been analyzed successfully
          </p>
        </div>

        {/* File Info */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 mb-6 border border-blue-100">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="h-5 w-5 text-blue-600" />
            </div>
            <p className="w-full">{uploadedFile}</p>
            <div className="flex-shrink-0">
              <a
                className="text-blue-600 hover:underline flex justify-center items-center gap-2"
                href={file}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Eye className="h-5 w-5" /> View Resume
              </a>
            </div>
          </div>
        </div>

        {/* Score Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200"
          >
            <p className="text-3xl font-bold text-green-600">
              {analysisResult.overallScore}
            </p>
            <p className="text-sm text-gray-600 font-medium">Overall Score</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200"
          >
            <p className="text-3xl font-bold text-blue-600">
              {analysisResult.improvements}
            </p>
            <p className="text-sm text-gray-600 font-medium">Improvements</p>
          </motion.div>
        </div>

        {/* Section Analysis */}
        <div className="space-y-3 mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Section Analysis</h4>
          {analysisResult.sections.map((section, index) => (
            <motion.div
              key={section.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className={`flex items-center justify-between p-3 rounded-lg border ${getStatusColor(
                section.status
              )}`}
            >
              <div className="flex items-center gap-3">
                {getStatusIcon(section.status)}
                <div>
                  <span className="text-sm font-medium text-gray-900">
                    {section.name}
                  </span>
                  <p className="text-xs text-gray-600">
                    Score: {section.score}/100
                  </p>
                </div>
              </div>
              {getStatusBadge(section.status)}
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }

  // Analyzing View
  if (isAnalyzing) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <FileText className="h-8 w-8 text-blue-600" />
            </motion.div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Analyzing Your Resume
          </h3>
          <p className="text-gray-600 mb-6">
            Please wait while we analyze your resume...
          </p>

          <div className="w-full bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${uploadProgress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          <p className="text-sm text-gray-500 mb-6">
            {uploadProgress}% Complete
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  uploadProgress > 20 ? "bg-green-500" : "bg-gray-300"
                }`}
              />
              Content Analysis
            </div>
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  uploadProgress > 50 ? "bg-green-500" : "bg-gray-300"
                }`}
              />
              ATS Compatibility
            </div>
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  uploadProgress > 70 ? "bg-green-500" : "bg-gray-300"
                }`}
              />
              Skills Matching
            </div>
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  uploadProgress > 90 ? "bg-green-500" : "bg-gray-300"
                }`}
              />
              Final Report
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Upload View
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <UploadDropzone
          className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center bg-blue-300"
          endpoint="pdfUploader"
          onClientUploadComplete={async (res) => {
            await fetch("/api/upload-resume", {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: userEmail,
                url: res[0].ufsUrl,
              }),
            })
              .then(() => {
                toast.success("Resume uploaded successfully!");
              })
              .catch((error) => {
                toast.error(`ERROR! ${error.message}`);
              });
              handleFileUpload(res[0].ufsUrl);
              setUploadedFile(res[0].name);
              setFile(res[0].ufsUrl);
          }}
          onUploadError={(error: Error) => {
            toast.error(`ERROR! ${error.message}`);
          }}
          />
          {/* <UploadButton
            className="bg-blue-400 hover:bg-blue-500 rounded-2xl text-white font-semibold px-6 py-3"
            endpoint="pdfUploader"
            onClientUploadComplete={async (res) => {
              await fetch("/api/upload-resume", {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: userEmail,
                  url: res[0].ufsUrl,
                }),
              })
                .then(() => {
                  toast.success("Resume uploaded successfully!");
                })
                .catch((error) => {
                  toast.error(`ERROR! ${error.message}`);
                });
              handleFileUpload(res[0].ufsUrl);
              setUploadedFile(res[0].name);
              setFile(res[0].ufsUrl);
            }}
            onUploadError={(error: Error) => {
              toast.error(`ERROR! ${error.message}`);
            }}
          /> */}

      <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-yellow-100 rounded-lg">
            <Info className="h-5 w-5 text-yellow-600" />
          </div>
          <div>
            <h4 className="font-semibold text-yellow-900 mb-2">
              How to upload your resume:
            </h4>
            <ul className="text-sm text-yellow-800 space-y-1">
              <li>• drop your resume file here</li>
              <li>• click upload 1 file</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Tips Section */}
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Zap className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 mb-2">
              What we'll analyze:
            </h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Contact information and formatting</li>
              <li>• Skills and keywords optimization</li>
              <li>• Work experience structure</li>
              <li>• Education and certifications</li>
              <li>• Overall ATS compatibility</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
