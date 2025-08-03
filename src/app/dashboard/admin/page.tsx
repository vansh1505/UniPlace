"use client";

import React from "react";
import { useUser } from "../context/UserCtx";
import { LoaderCircle } from "lucide-react";

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
  );
};

export default AdminPage;
