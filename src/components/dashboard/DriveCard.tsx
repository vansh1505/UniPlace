"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Calendar, Clock, MapPin, Users, Building } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface DriveCardProps {
  drive: {
    name: string;
    logo?: string;
    recurimentType: string;
    position: string;
    date: string;
    time: string;
    location: string;
    applicants: number;
    package: string;
    deadline: string;
  };
  index: number;
}

export const DriveCard = ({ drive, index }: DriveCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.01 }}
      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200 cursor-pointer"
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
        <Button size="sm" className="bg-blue-600 hover:bg-blue-700" disabled>
          Apply Now
        </Button>
      </div>
    </motion.div>
  );
};
