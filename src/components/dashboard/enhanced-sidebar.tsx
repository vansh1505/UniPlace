"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import {
  Home,
  FileText,
  Briefcase,
  Upload,
  Bell,
  ChevronDown,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Bot,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home, current: true },
  {
    name: "My Applications",
    href: "/dashboard/applications",
    icon: FileText,
    current: false,
  },
  {
    name: "Eligible Drives",
    href: "/dashboard/drives",
    icon: Briefcase,
    current: false,
  },
  {
    name: "Resume Upload",
    href: "/dashboard/resume",
    icon: Upload,
    current: false,
  },
  {
    name: "AI Resume Builder",
    href: "/dashboard/ai-resume",
    icon: Bot,
    current: false,
  },
  {
    name: "View Profile",
    href: "/dashboard/profile",
    icon: User,
    current: false,
  }
];

const notifications = [
  {
    id: 1,
    title: "New Drive Available",
    message: "Google is conducting campus placement drive",
    time: "2 hours ago",
    unread: true,
  },
];

export function EnhancedSidebar({
  user,
}: {
  user: { name: string; email: string };
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const pathname = usePathname();

  const sidebarVariants = {
    collapsed: {
      width: "5rem",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 40,
      },
    },
    expanded: {
      width: "18rem",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 40,
      },
    },
  };

  const contentVariants = {
    collapsed: {
      opacity: 0,
      x: -10,
      transition: {
        duration: 0.2,
      },
    },
    expanded: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 0.1,
      },
    },
  };

  return (
    <div className="group" data-expanded={isExpanded}>
      <motion.div
        variants={sidebarVariants}
        animate={isExpanded ? "expanded" : "collapsed"}
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
        className="fixed inset-y-0 left-0 z-50 flex flex-col bg-white border-r border-gray-200 shadow-lg"
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <div className="flex items-center space-x-1">
            <Link href="/">
              <Image src="/favicon.ico" alt="Logo" height={45} width={45} />
            </Link>
            <AnimatePresence>
              {isExpanded && (
                <motion.h1
                  variants={contentVariants}
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                  className="text-xl font-bold text-blue-900"
                >
                  UniPlace
                </motion.h1>
              )}
            </AnimatePresence>
          </div>
          <AnimatePresence>
            {isExpanded && (
              <motion.button
                variants={contentVariants}
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
                onClick={() => setIsExpanded(false)}
                className="p-1 rounded-md hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="h-4 w-4 text-gray-500" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-2 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href}>
                <div
                  className={`group flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  } ${isExpanded ? "" : "justify-center"}`}
                >
                  <item.icon
                    className={`h-5 w-5 flex-shrink-0 ${
                      isActive
                        ? "text-white"
                        : "text-gray-500 group-hover:text-blue-600"
                    }`}
                  />
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.span
                        variants={contentVariants}
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        className="ml-3 truncate"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Notifications */}
        <div className="px-3 py-2 border-t border-gray-200">
          <div className="relative">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className={`w-full flex items-center px-3 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 group ${isExpanded ? "" : "justify-center"}`}
            >
              <div className="relative">
                <Bell className="h-5 w-5 text-gray-500 group-hover:text-blue-600" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {notifications.filter((n) => n.unread).length}
                </span>
              </div>
              <AnimatePresence>
                {isExpanded && (
                  <motion.span
                    variants={contentVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    className="ml-3 truncate"
                  >
                    Notifications
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <AnimatePresence>
              {notificationsOpen && isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
                >
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900 text-sm">
                      Notifications
                    </h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                          notification.unread ? "bg-blue-50" : ""
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <p className="font-medium text-xs text-gray-900">
                              {notification.title}
                            </p>
                            <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                              {notification.message}
                            </p>
                          </div>
                          {notification.unread && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 mt-1" />
                          )}
                        </div>
                        <p className="text-xs text-gray-400 mt-2">
                          {notification.time}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t border-gray-200">
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Profile */}
        <div className="px-3 py-4 border-t border-gray-200">
          <div className="relative">
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="w-full flex items-center px-3 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 group"
            >
              <Avatar className="h-8 w-8 flex-shrink-0">
                <AvatarImage src="" alt={user.name} />
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-sm">
                  {user.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    variants={contentVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    className="ml-3 flex-1 text-left"
                  >
                    <p className="font-medium text-gray-900 text-sm">
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-500">{user.email.substring(0, 15)}...</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    variants={contentVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                  >
                    <ChevronDown className="h-4 w-4 text-gray-500 rotate" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <AnimatePresence>
              {profileDropdownOpen && isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
                >
                  <div className="p-4 border-b border-gray-200">
                    <p className="font-medium text-gray-900 text-sm">
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <div className="py-2">
                    <Link href="/dashboard/profile">
                      <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer">
                        <User className="h-4 w-4 mr-3" />
                        View Profile
                      </button>
                    </Link>
                  </div>
                  <div className="border-t border-gray-200 py-1">
                    <Link href="/api/auth/logout">
                      <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors cursor-pointer">
                        <LogOut className="h-4 w-4 mr-3" />
                        Logout
                      </button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        {/* Expand/Collapse Toggle */}
        <div className="px-3 py-2 border-t border-gray-200">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 transition-all duration-200"
          >
            {isExpanded ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
