"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Plus,
  Eye,
  Users,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  Newspaper,
} from "lucide-react";
import Image from "next/image";
import {Button} from "@/components/ui/button";

const Sidebar = ({ collegeName }: { collegeName: string | undefined }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLogout = () => {
    fetch("/api/auth/logout", { method: "GET", credentials: "include" })
      .then(() => window.location.href = "/");
  }

  const menuItems = [
    {
      href: "/dashboard/admin",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: "/dashboard/admin/create-drive",
      label: "Create Drives",
      icon: Plus,
    },
    {
      href: "/dashboard/admin/view-drives",
      label: "View Drives",
      icon: Eye,
    },
    {
      href: "/dashboard/admin/manage-users",
      label: "Manage Users",
      icon: Users,
    },
    {
      href: "/dashboard/admin/view-applications",
      label: "View Applications",
      icon: Newspaper,
    },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/10 bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-gray-800 text-white p-2 rounded-md shadow-lg hover:bg-gray-700 transition-colors"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
        fixed left-0 top-0 z-40 h-full bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-2xl
        transition-transform duration-300 ease-in-out
        w-64 lg:translate-x-0
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="bg-white rounded-full p-1">
              <Image src="/favicon.ico" alt="Logo" width={55} height={55} />
            </div>
            <h2 className="text-xl font-bold text-blue-400 ">
              UniPlace Admin Portal
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
        {/* College Name */}
        <div className="px-6 py-4 text-center text-blue-300 border-b border-gray-700">
          <h3 className="text-xl font-semibold">{collegeName}</h3>
        </div>
        {/* Navigation */}
        <nav className="flex-1 py-6 px-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  group flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200
                  ${
                    isActive(item.href)
                      ? "bg-blue-600 text-white shadow-lg transform scale-[1.02]"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white hover:transform hover:scale-[1.01]"
                  }
                `}
              >
                <Icon
                  size={20}
                  className={`
                    ${
                      isActive(item.href)
                        ? "text-white"
                        : "text-gray-400 group-hover:text-white"
                    }
                    transition-colors duration-200
                  `}
                />
                <span className="font-medium">{item.label}</span>
                {isActive(item.href) && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Logout button */}
        <div className="p-4 border-t border-gray-700">
          <Button variant="destructive" onClick={handleLogout} className="w-full flex items-center space-x-3 cursor-pointer">
            <LogOut
              size={20}
              className="text-white group-hover:text-white transition-colors duration-200"
            />
            <span className="font-medium">Logout</span>
          </Button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
