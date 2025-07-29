"use client";

import { useState } from "react";
import { Edit3, Save, X, GraduationCap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type AcademicInfo = {
  course?: string;
  branch?: string;
  semester?: string;
  yearOfPassing?: number;
  cgpa?: number;
  backlogs?: number;
};

type User = {
  collegeName: string;
  admnno: string;
  academicInfo?: AcademicInfo;
};

type AcademicInformationProps = {
  user: User;
};

export function AcademicInformation({ user }: AcademicInformationProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    collegeName: user.collegeName || "",
    admissionNumber: user.admnno || "",
    course: user.academicInfo?.course || "",
    branch: user.academicInfo?.branch || "",
    currentYear: Math.ceil(parseInt(user.academicInfo?.semester?.charAt(0) || "0", 10) / 2) || 0,
    currentSemester: user.academicInfo?.semester || "",
    cgpa: user.academicInfo?.cgpa || 0,
    expectedGraduation: user.academicInfo?.yearOfPassing?.toString() || "",
    backlogs: user.academicInfo?.backlogs || 0,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Handle save logic here
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data if needed
  };


  return (
    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-green-100 rounded-lg">
            <GraduationCap className="h-5 w-5 text-green-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">
            Academic Information
            
          </h2>
        </div>
        {!isEditing && (
          <Button
            onClick={() => setIsEditing(true)}
            size="sm"
            variant="outline"
            className="bg-transparent"
            disabled
          >
            <Edit3 className="h-4 w-4 mr-2" />
            Edit
          </Button>
        )}
      </div>

      <div className="space-y-8">
        {/* Current Education */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
            Current Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label
                htmlFor="collegeName"
                className="text-sm font-medium text-gray-700"
              >
                College/University Name
              </Label>
              {isEditing ? (
                <Input
                  id="collegeName"
                  value={formData.collegeName}
                  onChange={(e) =>
                    handleInputChange("collegeName", e.target.value)
                  }
                  className="h-11"
                />
              ) : (
                <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">
                  {formData.collegeName}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="admissionNumber"
                className="text-sm font-medium text-gray-700"
              >
                Admission Number
              </Label>
              {isEditing ? (
                <Input
                  id="admissionNumber"
                  value={formData.admissionNumber}
                  onChange={(e) =>
                    handleInputChange("admissionNumber", e.target.value)
                  }
                  className="h-11"
                />
              ) : (
                <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">
                  {formData.admissionNumber}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="course"
                className="text-sm font-medium text-gray-700"
              >
                Course
              </Label>
              {isEditing ? (
                <Input
                  id="course"
                  value={formData.course}
                  onChange={(e) => handleInputChange("course", e.target.value)}
                  className="h-11"
                />
              ) : (
                <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">
                  {formData.course}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="branch"
                className="text-sm font-medium text-gray-700"
              >
                Branch/Specialization
              </Label>
              {isEditing ? (
                <Input
                  id="branch"
                  value={formData.branch}
                  onChange={(e) => handleInputChange("branch", e.target.value)}
                  className="h-11"
                />
              ) : (
                <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">
                  {formData.branch}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="currentYear"
                className="text-sm font-medium text-gray-700"
              >
                Current Year
              </Label>
              {isEditing ? (
                <select
                  id="currentYear"
                  value={formData.currentYear}
                  onChange={(e) =>
                    handleInputChange("currentYear", e.target.value)
                  }
                  className="w-full h-11 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                </select>
              ) : (
                <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">
                  {formData.currentYear}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="currentSemester"
                className="text-sm font-medium text-gray-700"
              >
                Current Semester
              </Label>
              {isEditing ? (
                <Input
                  id="currentSemester"
                  value={formData.currentSemester}
                  onChange={(e) =>
                    handleInputChange("currentSemester", e.target.value)
                  }
                  className="h-11"
                />
              ) : (
                <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">
                  {formData.currentSemester}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            <div className="space-y-2">
              <Label
                htmlFor="cgpa"
                className="text-sm font-medium text-gray-700"
              >
                CGPA
              </Label>
              {isEditing ? (
                <Input
                  id="cgpa"
                  value={formData.cgpa}
                  onChange={(e) => handleInputChange("cgpa", e.target.value)}
                  className="h-11"
                  placeholder="0.00"
                />
              ) : (
                <div className="bg-blue-50 rounded-lg px-3 py-2.5">
                  <p className="text-blue-700 font-bold text-lg">
                    {formData.cgpa}
                  </p>
                </div>
              )}
            </div>

            {/* <div className="space-y-2">
              <Label
                htmlFor="percentage"
                className="text-sm font-medium text-gray-700"
              >
                Percentage
              </Label>
              {isEditing ? (
                <Input
                  id="percentage"
                  value={formData.percentage}
                  onChange={(e) =>
                    handleInputChange("percentage", e.target.value)
                  }
                  className="h-11"
                  placeholder="0.0"
                />
              ) : (
                <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">
                  {formData.percentage}%
                </p>
              )}
            </div> */}

            <div className="space-y-2">
              <Label
                htmlFor="backlogs"
                className="text-sm font-medium text-gray-700"
              >
                Active Backlogs
              </Label>
              {isEditing ? (
                <Input
                  id="backlogs"
                  value={formData.backlogs}
                  onChange={(e) =>
                    handleInputChange("backlogs", e.target.value)
                  }
                  className="h-11"
                  placeholder="0"
                />
              ) : (
                <div
                  className={`rounded-lg px-3 py-2.5 ${
                    formData.backlogs === 0 ? "bg-green-50" : "bg-red-50"
                  }`}
                >
                  <p
                    className={`font-bold ${
                      formData.backlogs === 0
                        ? "text-green-700"
                        : "text-red-700"
                    }`}
                  >
                    {formData.backlogs}
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="expectedGraduation"
                className="text-sm font-medium text-gray-700"
              >
                Expected Graduation
              </Label>
              {isEditing ? (
                <Input
                  id="expectedGraduation"
                  type="month"
                  value={formData.expectedGraduation}
                  onChange={(e) =>
                    handleInputChange("expectedGraduation", e.target.value)
                  }
                  className="h-11"
                />
              ) : (
                <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">
                  {formData.expectedGraduation}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* 12th Grade */}

        {/* <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">12th Grade</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <Label htmlFor="twelfthBoard" className="text-sm font-medium text-gray-700">
                Board
              </Label>
              {isEditing ? (
                <Input
                  id="twelfthBoard"
                  value={formData.twelfthBoard}
                  onChange={(e) => handleInputChange("twelfthBoard", e.target.value)}
                  className="h-11"
                />
              ) : (
                <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">{formData.twelfthBoard}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="twelfthSchool" className="text-sm font-medium text-gray-700">
                School Name
              </Label>
              {isEditing ? (
                <Input
                  id="twelfthSchool"
                  value={formData.twelfthSchool}
                  onChange={(e) => handleInputChange("twelfthSchool", e.target.value)}
                  className="h-11"
                />
              ) : (
                <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">{formData.twelfthSchool}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="twelfthPercentage" className="text-sm font-medium text-gray-700">
                Percentage
              </Label>
              {isEditing ? (
                <Input
                  id="twelfthPercentage"
                  value={formData.twelfthPercentage}
                  onChange={(e) => handleInputChange("twelfthPercentage", e.target.value)}
                  className="h-11"
                />
              ) : (
                <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">
                  {formData.twelfthPercentage}%
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="twelfthYear" className="text-sm font-medium text-gray-700">
                Year of Passing
              </Label>
              {isEditing ? (
                <Input
                  id="twelfthYear"
                  value={formData.twelfthYear}
                  onChange={(e) => handleInputChange("twelfthYear", e.target.value)}
                  className="h-11"
                />
              ) : (
                <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">{formData.twelfthYear}</p>
              )}
            </div>
          </div>
        </div> */}

        {/* 10th Grade */}
        {/* 
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">10th Grade</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <Label htmlFor="tenthBoard" className="text-sm font-medium text-gray-700">
                Board
              </Label>
              {isEditing ? (
                <Input
                  id="tenthBoard"
                  value={formData.tenthBoard}
                  onChange={(e) => handleInputChange("tenthBoard", e.target.value)}
                  className="h-11"
                />
              ) : (
                <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">{formData.tenthBoard}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="tenthSchool" className="text-sm font-medium text-gray-700">
                School Name
              </Label>
              {isEditing ? (
                <Input
                  id="tenthSchool"
                  value={formData.tenthSchool}
                  onChange={(e) => handleInputChange("tenthSchool", e.target.value)}
                  className="h-11"
                />
              ) : (
                <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">{formData.tenthSchool}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="tenthPercentage" className="text-sm font-medium text-gray-700">
                Percentage
              </Label>
              {isEditing ? (
                <Input
                  id="tenthPercentage"
                  value={formData.tenthPercentage}
                  onChange={(e) => handleInputChange("tenthPercentage", e.target.value)}
                  className="h-11"
                />
              ) : (
                <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">
                  {formData.tenthPercentage}%
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="tenthYear" className="text-sm font-medium text-gray-700">
                Year of Passing
              </Label>
              {isEditing ? (
                <Input
                  id="tenthYear"
                  value={formData.tenthYear}
                  onChange={(e) => handleInputChange("tenthYear", e.target.value)}
                  className="h-11"
                />
              ) : (
                <p className="text-gray-900 font-medium bg-gray-50 rounded-lg px-3 py-2.5">{formData.tenthYear}</p>
              )}
            </div>
          </div>
        </div> */}

        {isEditing && (
          <div className="flex items-center justify-end space-x-3 pt-6 border-t border-gray-200">
            <Button
              onClick={handleCancel}
              variant="outline"
              className="bg-transparent"
            >
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
