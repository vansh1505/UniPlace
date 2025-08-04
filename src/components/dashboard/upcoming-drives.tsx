"use client";

import { ArrowRight, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DriveCard } from "./DriveCard";

export function UpcomingDrives({ admnno }: { admnno: string }) {
  const [drives, setDrives] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchDrives = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/eligible-drives?admnno=${admnno}`);
        const data = await response.json();
        const drivesArray = Array.isArray(data.eligibleDrives)
          ? data.eligibleDrives
          : [];
        setDrives(drivesArray);
      } catch (error) {
        console.error("Error fetching drives:", error);
        setDrives([]);
      } finally {
        setLoading(false);
      }
    };
    if (admnno) fetchDrives();
  }, [admnno]);

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
              View All {drives.length > 0 ? `(${drives.length})` : ""}
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
          ) : drives.length === 0 ? (
            <p className="text-gray-500 text-center">
              No upcoming drives available
            </p>
          ) : (
            <>
              {drives.slice(0, 2).map((drive, index) => (
                <DriveCard drive={drive} index={index} key={index} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
