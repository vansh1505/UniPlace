"use client";
import { useState, useEffect } from "react";
import { useUser } from "../../context/UserCtx";
import { LoaderCircle } from "lucide-react";
const page = () => {
  interface User {
    id: string;
    name: string;
    admnno: string;
    collegeName: string;
  }
  const [users, setUsers] = useState<User[] | null>(null);
  const user = useUser();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`/api/admin/view-users?collegeName=${user?.collegeName}`, {
          method: "GET",
        });
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
        setUsers(null);
      }
    };

    fetchUsers();
  }, []);

  if (!users) {
    return (
      <div className="h-screen flex items-center justify-center">
        <LoaderCircle className="animate-spin mr-2" />
        <p className="text-gray-600">Loading users...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Manage Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-sm font-medium text-gray-500 truncate">
            Total Users
          </h2>
          <p className="mt-1 text-3xl font-semibold text-gray-900">
            {users.length}
          </p>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Admission No.
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                College Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center"
                >
                  <p className="text-gray-900 whitespace-no-wrap">
                    No users found.
                  </p>
                </td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr key={index}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {user.name}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {user.admnno}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {user.collegeName}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center space-x-2">
                      <button
                        disabled
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
                      >
                        Edit
                      </button>
                      <button
                        disabled
                        className="bg-red-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
