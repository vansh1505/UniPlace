"use client";

import React from "react";
import { useUser } from "../context/UserCtx";
import { ChevronRight, LoaderCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const feat = [
  {
    title: "Create drive",
    url: "/dashboard/admin/create-drive",
  },
  {
    title: "View drives",
    url: "/dashboard/admin/view-drives",
  },
  {
    title: "Manage users",
    url: "/dashboard/admin/manage-users",
  },
  {
    title: "Settings",
    url: "/dashboard/admin/settings",
  },
  {
      title: "Get Data",
      url: "/dashboard/admin/get-data",
    },
  {
      title: "View Applications",
    url: "/dashboard/admin/view-applications",
  },
  {
    title: "View Companies",
    url: "/dashboard/admin/view-companies",
},
  {
      title: "View Analytics",
      url: "/dashboard/admin/view-analytics",
    },
    {
      title: "Logout",
      url: "/api/auth/logout",
    },
];

const AdminPage = () => {
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
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4 fixed h-full">
        <Image src="/logow.png" alt="logo" width={150} height={100} />
        <p className="mb-12"></p>
        {feat.map((item: any) => (
            <Link href={item.url} className="w-full mt-2">
          <div className="bg-gray-900 p-2 px-4 rounded-2xl my-2 flex items-center justify-between" key={item.title}>
              {item.title}
              <ChevronRight className="inline ml-2 h-4 w-4" />
          </div>
            </Link>
        ))}
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-64 p-6 bg-gray-100">
        {/* Header */}
        <header className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome, {user.name}
          </h2>
        </header>

        {/* Body Content */}
        <section>
          <p className="text-gray-600">
            Select a function from the sidebar to begin.
          </p>
        </section>
      </main>
    </div>
  );
};

export default AdminPage;
