import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md w-full space-y-8">
          {/* Content goes here */}
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome to the Dashboard
          </h1>
          <p className="text-gray-600">
            This is your dashboard where you can manage your account and
            settings.
          </p>
          <Link
            href="/api/auth/logout"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            <button className="mt-4 bg-blue-600 hover:bg-blue-800 duration-100 text-white py-2 px-4 rounded cursor-pointer">
              Logout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
