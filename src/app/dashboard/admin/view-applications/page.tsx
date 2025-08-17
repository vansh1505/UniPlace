"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useUser } from "../../context/UserCtx";
import { Button } from "@/components/ui/button";
import { LoaderCircle, Trash } from "lucide-react";
import toast from "react-hot-toast";

interface Application {
  _id: string;
  studentName: string;
  position: string;
  collegeName: string;
  status: string;
  companyName: string;
  appliedAt: string;
  admnno: string;
}

const page = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const user = useUser();
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch(
          `/api/admin/view-applications?collegeName=${user?.collegeName}`,
          {
            method: "GET",
          }
        );
        if (!response.ok) throw new Error("Failed to fetch applications");

        const applications = await response.json();
        setApplications(applications);
      } catch (err) {
        console.error("Error fetching applications:", err);
        setApplications([]);
      }
    };

    fetchApplications();
  }, []);

    const handleDelete = async (applicationId: string) => {
    const confirmed = window.confirm("You really want to delete this application?");
    if (!confirmed) return;
    try {
      const response = await fetch(`/api/remove-application/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ applicationId }),
      });
      toast.success("Application deleted successfully");

      if (!response.ok) {
        toast.error("Failed to delete application");
      }

      setApplications((prev) =>
        prev.filter((app) => app._id !== applicationId)
      );
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  };


  if (!applications) {
    return (
      <div className="h-screen flex items-center justify-center">
        <LoaderCircle className="animate-spin mr-2" />
        <p className="text-gray-600">Loading applications...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="container mx-auto px-4 py-8"></div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        View Applications
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-sm font-medium text-gray-500 truncate">
            Total Applications
          </h2>
          <p className="mt-1 text-3xl font-semibold text-gray-900">
            {applications.length}
          </p>
        </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full leading-normal">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm">
                <th className="py-3 px-6">Admn no</th>
                <th className="py-3 px-6">Applicant Name</th>
                <th className="py-3 px-6">Company</th>
                <th className="py-3 px-6">Position</th>
                <th className="py-3 px-6">Date Applied</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {applications.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-4 px-6 text-center">
                    No applications found.
                  </td>
                </tr>
              ) : (
                applications.map((application, index) => (
                  <tr
                    className="border-b border-gray-200 hover:bg-gray-50"
                    key={index}
                  >
                    <td className="py-4 px-6">{application.admnno}</td>
                    <td className="py-4 px-6">{application.studentName}</td>
                    <td className="py-4 px-6">{application.companyName}</td>
                    <td className="py-4 px-6">{application.position}</td>
                    <td className="py-4 px-6">
                      {new Date(application.appliedAt).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-6">
                      <span className="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
                        ></span>
                        <span className="relative">{application.status}</span>
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <Button
                        variant="outline"
                        className="text-red-600 hover:text-red-800 mr-4 cursor-pointer border border-red-500 bg-red-50"
                        onClick={() => handleDelete(application._id)}
                      >
                        <Trash />
                        remove
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
