"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  LoaderCircle,
  Building2,
  MapPin,
  Calendar,
  Clock,
  DollarSign,
  GraduationCap,
  Star,
  AlertCircle,
  Eye,
  Edit,
  Trash2,
  Search,
  Plus,
  IndianRupee,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import toast from "react-hot-toast";

interface Drive {
  _id: string;
  name: string;
  logoLink: string;
  description: string;
  website: string;
  location: string;
  position: string;
  salary: {
    min: number;
    max: number;
  };
  minCGPA: number;
  minBacklogs: number;
  courses: string[];
  branches: string[];
  skills: string[];
  date: string;
  time: string;
  isActive: boolean;
  recurimentType: string;
  examLocation: string;
  createdAt: string;
  updatedAt: string;
}

const ViewDrives = () => {
  const [drives, setDrives] = useState<Drive[]>([]);
  const [filteredDrives, setFilteredDrives] = useState<Drive[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [confirmDelete, setConfirmDelete] = useState(false);
  useEffect(() => {
    const fetchDrives = async () => {
      try {
        const res = await fetch("/api/admin/view-drives");
        const drives = await res.json();
        if (!res.ok || !Array.isArray(drives)) {
          throw new Error("Invalid response");
        }
        setDrives(drives);
        setFilteredDrives(drives);
      } catch (err) {
        console.error("Error fetching drives:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDrives();
  }, []);

  const handleGenerateLink = () => {
    toast.error("This feature is not implemented yet");
  };

  useEffect(() => {
    let filtered = drives;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (drive) =>
          drive.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          drive.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
          drive.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Type filter
    if (filterType !== "all") {
      filtered = filtered.filter(
        (drive) => drive.recurimentType === filterType
      );
    }

    // Status filter
    if (filterStatus !== "all") {
      filtered = filtered.filter((drive) =>
        filterStatus === "active" ? drive.isActive : !drive.isActive
      );
    }

    setFilteredDrives(filtered);
  }, [drives, searchTerm, filterType, filterStatus]);

  const formatSalary = (min: number, max: number) => {
    return `₹${min.toLocaleString()} - ₹${max.toLocaleString()}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const getUrgencyColor = (date: string) => {
    const driveDate = new Date(date);
    const today = new Date();
    const diffTime = driveDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 3) return "border-l-red-500 bg-red-50";
    if (diffDays <= 7) return "border-l-yellow-500 bg-yellow-50";
    return "border-l-green-500 bg-green-50";
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time":
        return "bg-blue-100 text-blue-800";
      case "Part-time":
        return "bg-green-100 text-green-800";
      case "Internship":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleDelete = async (name: string) => {
    if (!confirmDelete) return;
    try {
      const res = await fetch(`/api/admin/delete-drive/`, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
        method: "DELETE",
      });
      if (!res.ok) {
        toast.error("Failed to delete drive");
        throw new Error("Failed to delete drive");
      }
      toast.success("Drive deleted successfully");
      setDrives((prev) => prev.filter((drive) => drive.name !== name));
      setFilteredDrives((prev) => prev.filter((drive) => drive.name !== name));
    } catch (err) {
      console.error("Error deleting drive:", err);
    } finally {
      setConfirmDelete(false);
    }
  };

  const handleDisable = async (driveId: string, isActive: boolean) => {
    const confirmed = window.confirm(
      `Are you sure you want to ${isActive ? "enable" : "disable"} this drive?`
    );
    if (!confirmed) return;
    if (!driveId) return;
    try {
      const res = await fetch(`/api/admin/toggle-drive-status/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ driveId, isActive }),
      });
      if (!res.ok) {
        toast.error("Failed to toggle drive status");
        return;
      }
      toast.success(`${isActive ? "Enabled" : "Disabled"} drive status updated successfully`);
      setDrives((prev) =>
        prev.map((drive) =>
          drive._id === driveId ? { ...drive, isActive } : drive
        )
      );
      setFilteredDrives((prev) =>
        prev.map((drive) =>
          drive._id === driveId ? { ...drive, isActive } : drive
        )
      );
    } catch (err) {
      console.error("Error toggling drive status:", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <LoaderCircle className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600">Loading drives...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Failed to load drives
              </h3>
              <p className="text-gray-600">Please try refreshing the page</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Placement Drives
              </h1>
              <p className="text-gray-600">
                Manage and monitor all placement drives
              </p>
            </div>
            <Link href="/dashboard/admin/create-drive">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                <Plus className="w-4 h-4 mr-2" />
                Create Drive
              </Button>
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100">Total Drives</p>
                    <p className="text-2xl font-bold">{drives.length}</p>
                  </div>
                  <Building2 className="w-8 h-8 text-blue-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100">Active Drives</p>
                    <p className="text-2xl font-bold">
                      {drives.filter((d) => d.isActive).length}
                    </p>
                  </div>
                  <Star className="w-8 h-8 text-green-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100">This Month</p>
                    <p className="text-2xl font-bold">
                      {
                        drives.filter((d) => {
                          const driveDate = new Date(d.date);
                          const now = new Date();
                          return (
                            driveDate.getMonth() === now.getMonth() &&
                            driveDate.getFullYear() === now.getFullYear()
                          );
                        }).length
                      }
                    </p>
                  </div>
                  <Calendar className="w-8 h-8 text-purple-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100">Upcoming</p>
                    <p className="text-2xl font-bold">
                      {
                        drives.filter((d) => new Date(d.date) > new Date())
                          .length
                      }
                    </p>
                  </div>
                  <Clock className="w-8 h-8 text-orange-200" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search drives by company, position, or location..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                    <SelectItem value="Internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Drives Grid */}
        {filteredDrives.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No drives found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filters
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredDrives.map((drive, index) => (
              <motion.div
                key={drive._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`h-full border-l-4 ${getUrgencyColor(
                    drive.date
                  )} hover:shadow-lg transition-all duration-300`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                          {drive.logoLink ? (
                            <img
                              src={drive.logoLink}
                              alt={drive.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <Building2 className="w-6 h-6 text-gray-400" />
                          )}
                        </div>
                        <div>
                          <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-1">
                            {drive.name}
                          </CardTitle>
                          <p className="text-sm text-gray-600 line-clamp-1">
                            {drive.position}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={drive.isActive ? "default" : "secondary"}
                          className={
                            drive.isActive
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }
                        >
                          {drive.isActive ? "Active" : "Inactive"}
                        </Badge>
                        <Switch
                          className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-400 cursor-pointer"
                          checked={drive.isActive}
                          onCheckedChange={(checked) => handleDisable(drive._id, checked)}
                        />
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Description */}
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {drive.description}
                    </p>

                    {/* Key Details */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{drive.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <IndianRupee className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">
                          {drive.salary.min} LPA - {drive.salary.max} LPA
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">
                          {formatDate(drive.date)} at {drive.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <GraduationCap className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">
                          Min CGPA: {drive.minCGPA}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        <div className="flex items-center justify-between">
                          <span>Exam: {drive.examLocation}</span>
                        </div>
                      </div>
                    </div>

                    {/* Type Badge */}
                    <div className="flex items-center gap-2">
                      <Badge className={getTypeColor(drive.recurimentType)}>
                        {drive.recurimentType}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Max {drive.minBacklogs} backlogs
                      </Badge>
                    </div>

                    {/* Branches */}
                    <div>
                      <p className="text-xs font-medium text-gray-700 mb-1">
                        Eligible Branches:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {drive.branches.slice(0, 3).map((branch) => (
                          <Badge
                            key={branch}
                            variant="outline"
                            className="text-xs"
                          >
                            {branch}
                          </Badge>
                        ))}
                        {drive.branches.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{drive.branches.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 pt-2 border-t">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent cursor-not-allowed disabled"
                        disabled
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-red-600 hover:text-red-700 bg-transparent cursor-pointer"
                        onClick={() => {
                          const confirmDelete = window.confirm(
                            `Are you sure you want to delete this ${drive.name} drive? This action cannot be undone.`
                          );
                          if (confirmDelete) {
                            handleDelete(drive.name);
                          }
                        }}
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full cursor-pointer bg-transparent"
                      onClick={handleGenerateLink}
                    >
                      Generate drive link
                    </Button>
                    <p className="text-xs text-gray-500">
                      Note: Drive link will auto expire after 1 day.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewDrives;
