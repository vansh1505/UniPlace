import React from 'react'

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 w-64 h-full bg-gray-800 text-white shadow-lg">
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
            <nav className="space-y-2">
                <a href="/dashboard/admin" className="block px-4 py-2 hover:bg-gray-700 rounded">Dashboard</a>
                <a href="/dashboard/admin/create-drives" className="block px-4 py-2 hover:bg-gray-700 rounded">Create Drives</a>
                <a href="/dashboard/admin/view-drives" className="block px-4 py-2 hover:bg-gray-700 rounded">View Drives</a>
                <a href="/dashboard/admin/manage-users" className="block px-4 py-2 hover:bg-gray-700 rounded">Manage Users</a>
                <a href="/api/auth/logout" className="block px-4 py-2 hover:bg-gray-700 rounded">Logout</a>
            </nav>
        </div>
    </aside>
  )
}

export default Sidebar