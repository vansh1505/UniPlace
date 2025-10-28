import { Suspense } from "react";
import RecruiterPage from "./RecruiterPage";

export default function Page() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-screen text-gray-600">Loading...</div>}>
      <RecruiterPage />
    </Suspense>
  );
}