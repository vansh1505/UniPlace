"use client";

import {ArrowRight, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DriveCard } from "./DriveCard";

export function UpcomingDrives() {
  const [drives, setDrives] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDrives = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://dummyjson.com/c/0f6b-72a2-4d10-a986');
        if (!response.ok) {
          throw new Error("Failed to fetch drives");
        }
        const data = await response.json();
        setDrives(data.drive || []);
      } catch (error) {
        setDrives([]);
      } finally {
        setLoading(false);
      }
    };
    fetchDrives();
  }, []);

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
          {loading ? (
            <div className="flex items-center justify-center text-gray-500">
              <LoaderCircle className="mr-2 animate-spin" />
              Loading upcoming drives...
            </div>
          ) :
          drives.length === 0 ? (
            <p className="text-gray-500 text-center">No upcoming drives available</p>
          ) : (
            drives.map((drive, index) => (
              <DriveCard drive={drive} index={index} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
