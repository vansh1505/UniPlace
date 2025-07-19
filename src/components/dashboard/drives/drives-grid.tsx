"use client"

import { motion } from "framer-motion"
import { LoaderCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { DriveCard } from "../DriveCard"

const getUrgencyColor = (urgency: string) => {
  switch (urgency) {
    case "high":
      return "border-l-red-500"
    case "medium":
      return "border-l-yellow-500"
    case "low":
      return "border-l-green-500"
    default:
      return "border-l-gray-300"
  }
}

interface DrivesGridProps {
  filters: any
}

export function DrivesGrid() {
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
    return <div>
      <LoaderCircle className="inline mr-2 animate-spin" />
      Loading drives...
    </div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {drives.map((drive, index) => (
          <DriveCard drive={drive} index={index} />
        ))} 
    </div>
  )
}
