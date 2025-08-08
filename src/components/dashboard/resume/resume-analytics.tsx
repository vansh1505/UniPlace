"use client";

import {LoaderCircle, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

interface AnalyticsData {
  appropriate: boolean;
  score: number;
  skills: string[];
  rank: string;
  improvements: string[];
}
export function ResumeAnalytics({ resumeURL }: { resumeURL: string }) {
  if (!resumeURL) {
    return <p className="text-center text-gray-600">No resume uploaded yet.</p>;
  }

  const [loading, setLoading] = useState(false);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(
    null
  );
  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://stellar-truth-production.up.railway.app/api/parse-resume?pdf_url=${resumeURL}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: {
          status: string;
          parsed_data: AnalyticsData;
          message?: string;
        } = await response.json();

        if (data.status !== "success") {
          throw new Error(data.message || "Failed to fetch analytics");
        }
        setAnalyticsData(data.parsed_data);
      } catch (error) {
        console.error("Error fetching analytics:", error);
      } finally {
        setLoading(false);
      }
    };

    if (resumeURL) {
      fetchAnalytics();
    }
  }, [resumeURL]);

  if (loading) {
    return (
      <p className="flex items-center justify-center gap-2 text-center text-gray-600">
        <LoaderCircle className="animate-spin" />
        Loading analytics...
      </p>
    );
  }

  if (!analyticsData) {
    return (
      <p className="text-center text-gray-600">
        Unable to load resume analytics. Please try again later.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {/* Performance Stats */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Performance</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Target className="h-4 w-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-lg font-bold text-gray-900">
                {analyticsData?.score}%
              </p>
              <p className="text-xs text-gray-600">Score</p>
              <p className="text-xs text-green-600">{analyticsData?.rank}</p>
            </div>
          </div>
        </div>
        <div className="bg-yellow-50 border-1 rounded-lg border-yellow-100 text-yellow-700 p-2 mt-6">
          <h4 className="font-semibold text-yellow-800">Improvements</h4>
          <ul className="list-disc list-inside space-y-2 m-2">
            {analyticsData?.improvements?.map((improvement, index) => (
              <li key={index} className="text-sm">
                {improvement}
              </li>
            )) || <li className="text-sm">No improvements suggested</li>}
          </ul>
        </div>
      </div>

      {/* Section Analysis */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Skills Analysis using AI</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900">Score</span>
              <Badge
                variant="secondary"
                className={
                  (analyticsData?.score ?? 0) >= 85
                    ? "bg-green-100 text-green-800"
                    : (analyticsData?.score ?? 0) >= 70
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }
              >
                {analyticsData?.score}%
              </Badge>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  (analyticsData?.score ?? 0) >= 85
                    ? "bg-green-500"
                    : (analyticsData?.score ?? 0) >= 70
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
                style={{ width: `${analyticsData?.score ?? 0}%` }}
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {analyticsData?.skills?.map((skill: string, index: number) => (
              <Badge variant="secondary" key={index} className="text-sm">
                {skill}
              </Badge>
            )) || <p className="text-sm text-gray-500">No skills detected</p>}
          </div>
        </div>
        <p className="text-xs mt-8">Powered by <a className="text-blue-600 hover:underline" target="_blank" href="https://github.com/vansh1505/resume-ai-parser">AI Resume Parser</a></p>
        <p className="text-xs mt-1">Using Gemini 1.5 flash</p>
      </div>
    </div>
  );
}
