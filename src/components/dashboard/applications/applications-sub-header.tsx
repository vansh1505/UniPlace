"use client";

import { isThisMonth } from "date-fns/isThisMonth";
import { TrendingUp, Target } from "lucide-react";

interface ApplicationsSubHeaderProps {
  viewMode: "kanban" | "table" | "timeline";
  setViewMode: (mode: "kanban" | "table" | "timeline") => void;
  applications: any[];
}


export function ApplicationsSubHeader({
  viewMode,
  setViewMode,
  applications,
}: ApplicationsSubHeaderProps) {

  const insights = [
    {
      title: "Application Rate",
      value: `${applications.filter(app => isThisMonth(app.appliedAt)).length} this month`,
      trend: "up",
      icon: TrendingUp,
    },
    {
      title: "Total Applied Rate",
      value: `${applications.length} applications`,
      trend: "up",
      icon: Target,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-1">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Applications</h1>
          <p className="text-gray-600">
            Track and manage your job applications
          </p>

          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              <div className="flex bg-gray-100 rounded-lg p-1">
                {[
                  { id: "table", label: "Table" },
                  { id: "kanban", label: "Board" },
                  { id: "timeline", label: "Timeline" },
                ].map((view) => (
                  <button
                    key={view.id}
                    onClick={() => setViewMode(view.id as any)}
                    className={`px-3 py-1 text-sm rounded-md transition-colors ${
                      viewMode === view.id
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {view.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-12">
          {insights.map((insight, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <insight.icon className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {insight.value}
                </p>
                <p className="text-xs text-gray-600">{insight.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
