import React from "react";

const page = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8"></div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        View Applications
      </h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full leading-normal">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm">
                <th className="py-3 px-6">Applicant Name</th>
                <th className="py-3 px-6">Position</th>
                <th className="py-3 px-6">Date Applied</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {/* Example Row 1 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-6">John Doe</td>
                <td className="py-4 px-6">Software Engineer</td>
                <td className="py-4 px-6">2023-10-27</td>
                <td className="py-4 px-6">
                  <span className="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative">Pending</span>
                  </span>
                </td>
                <td className="py-4 px-6">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                    View
                  </button>
                  <button className="text-green-600 hover:text-green-900 mr-4">
                    Approve
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    Reject
                  </button>
                </td>
              </tr>
              {/* Example Row 2 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-6">Jane Smith</td>
                <td className="py-4 px-6">UX Designer</td>
                <td className="py-4 px-6">2023-10-26</td>
                <td className="py-4 px-6">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative">Approved</span>
                  </span>
                </td>
                <td className="py-4 px-6">
                  <button className="text-indigo-600 hover:text-indigo-900">
                    View
                  </button>
                </td>
              </tr>
              {/* Example Row 3 */}
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6">Sam Wilson</td>
                <td className="py-4 px-6">Product Manager</td>
                <td className="py-4 px-6">2023-10-25</td>
                <td className="py-4 px-6">
                  <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative">Rejected</span>
                  </span>
                </td>
                <td className="py-4 px-6">
                  <button className="text-indigo-600 hover:text-indigo-900">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
