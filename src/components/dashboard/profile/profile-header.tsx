"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Camera, Edit3, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export function ProfileHeader({user}: { user: { name: string; email: string } }) {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-lg">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          {/* Profile Picture */}
          <div className="relative group">
            <Avatar className="h-24 w-24 lg:h-32 lg:w-32 border-4 border-white shadow-lg">
              <AvatarImage src="" alt={user.name} />
              <AvatarFallback className="bg-blue-400 text-white text-2xl font-bold">
                {user.name.split(" ").map((n) => n[0].toUpperCase()).join("")}
              </AvatarFallback>
            </Avatar>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Camera className="h-6 w-6 text-white" />
            </motion.button>
          </div>

          {/* Profile Info */}
          <div className="flex-1 space-y-3">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                {user.name}
              </h1>
              <p className="text-blue-100 text-lg font-medium mb-3">
                {user.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
