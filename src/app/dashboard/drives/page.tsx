"use client";

import { motion } from "motion/react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { DrivesSidebar } from "@/components/dashboard/drives/drives-sidebar";
import { useUser } from "../context/UserCtx";
import { LoaderCircle } from "lucide-react";
import {useState, useEffect} from "react";
import { DriveCard } from "@/components/dashboard/DriveCard";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function DrivesPage() {
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
    
    if (loading) {
      return <div className="text-center text-gray-600 h-screen flex items-center justify-center">
        <LoaderCircle className="inline mr-2 animate-spin" />
        Loading drives...
      </div>;
    }

  type User = {
    name: string;
    email: string;
    admnno: string;
    collegeName: string;
  };

  const user: User | null = useUser();

    if(user === undefined) {
    return <p className="text-center text-gray-600 h-screen flex items-center justify-center">
      <LoaderCircle className="inline mr-2 animate-spin" />
      Loading user data...
      </p>;
  }

  if (!user) {
    return (
      <p className="text-center text-red-500">User not found. Please log in.</p>
    );
  }
  

  return (
    <DashboardLayout user={user}>
      <div className="space-y-6">
        <motion.div {...fadeInUp}>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Eligible Drives
                </h1>
                <p className="text-gray-600">
                  Discover opportunities that match your profile
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  {drives.length} drives available
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex bg-gray-100 rounded-lg p-1"></div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          <motion.div {...fadeInUp}>
            <DrivesSidebar EligibleDrives={drives.length} />
          </motion.div>

          <motion.div {...fadeInUp} className="xl:col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {drives.map((drive, index) => (
                      <DriveCard drive={drive} index={index} />
                    ))} 
                </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
