
import { Button } from "@/components/ui/button";
import { getUser } from "@/lib/auth";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await getUser() as { name: string; email: string }
  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}!</h1>
      <p className="text-gray-700">This is your dashboard. Here you can manage your account and view your details.</p>
      {/* Additional dashboard content can go here */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Your Details</h2>
        <p className="text-gray-600">Email: {user.email}</p>
        <Link href="/api/auth/logout">
          <Button className="mt-4 bg-red-600 hover:bg-red-700 text-white cursor-pointer">
            <LogOut className="" /> Logout
          </Button>
        </Link>
        {/* More user details can be displayed here */}
      </div>
    </div>

  );
}