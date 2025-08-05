"use client";

import React, { useEffect } from "react";
import { useUser } from "../context/UserCtx";
import { Eye, LoaderCircle, Newspaper, Plus, User } from "lucide-react";
import Link from "next/link";
const AdminPage = () => {
  const [fetchDrives, setFetchDrives] = React.useState([{}]);
  useEffect(() => {
    const fetchDrives = async () => {
      const response = await fetch("/api/admin/view-drives", { method: "GET" });
      const data = await response.json();
      setFetchDrives(data);
    };
    fetchDrives();
  }, []);
  
  const user = useUser();

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center">
        <LoaderCircle className="animate-spin mr-2" />
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="mb-8 bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {user.collegeName}!
            </h1>
            <p className="text-gray-600">
              Manage your {user.collegeName} placement portal from here.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
              {user.collegeName} Dashboard
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 h-24 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Drives</p>
              <p className="text-2xl font-bold text-gray-900">{fetchDrives.length}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
            </div>
          </div>
        </div>

      {/* Action Cards */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="space-y-3">
            <Link
              href="/dashboard/admin/create-drive"
              className="block p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm">
                  <Plus className="w-4 h-4" />
                </div>
                <span className="font-medium text-gray-900">
                  Create New Drive
                </span>
              </div>
            </Link>
            <Link
              href="/dashboard/admin/view-drives"
              className="block p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors border border-green-200"
              >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white text-sm">
                  <Eye className="w-4 h-4" />
                </div>
                <span className="font-medium text-gray-900">
                  View All Drives
                </span>
              </div>
            </Link>
            <Link
              href="/dashboard/admin/view-applications"
              className="block p-3 bg-cyan-50 hover:bg-cyan-100 rounded-lg transition-colors border border-cyan-200"
              >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center text-white text-sm">
                  <Newspaper className="w-4 h-4" />
                </div>
                <span className="font-medium text-gray-900">
                  View All Applications
                </span>
              </div>
            </Link>
            <Link
              href="/dashboard/admin/view-drives"
              className="block p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors border border-green-200"
              >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white text-sm">
                  <User className="w-4 h-4" />
                </div>
                <span className="font-medium text-gray-900">
                  View All Users
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
