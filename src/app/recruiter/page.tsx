"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function RecruiterPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [step, setStep] = useState("verify");
  const [accessCode, setAccessCode] = useState("");
  const [drive, setDrive] = useState<any>({});
  const [applicants, setApplicants] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const verifyToken = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/recruiter/verify?token=${token}`);
        const data = await res.json();
        if (res.ok) setStep("confirm");
        else setError(data.error || "Invalid or expired link");
        console.log(data);
      } catch {
        setError("Network error");
      } finally {
        setLoading(false);
      }
    };

    if (token) verifyToken();
  }, [token]);

  const handleConfirm = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/recruiter/confirm`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, accessCode }),
      });
      const data = await res.json();

      if (res.ok) {
        console.log(data);
        setDrive(data.drive);
        setApplicants(data.applicants);
        setStep("dashboard");
      } else {
        setError(data.error || "Access denied");
      }
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  if (!token)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-semibold text-red-600">Unauthorized</h1>
        <p>Please use the secure link shared by CCPD.</p>
      </div>
    );

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <Loader2 className="w-8 h-8 text-gray-600 animate-spin" />
        <p className="text-gray-600 mt-3">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-2xl font-semibold text-red-600 mb-2">{error}</h1>
        <p className="text-gray-500">Please contact CCPD for a new link.</p>
      </div>
    );

  if (step === "confirm")
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-semibold mb-3">Enter Access Code</h2>
        <input
          type="text"
          maxLength={6}
          className="border px-4 py-2 rounded-md text-center tracking-widest text-xl"
          value={accessCode}
          onChange={(e) => setAccessCode(e.target.value)}
        />
        <button
          onClick={handleConfirm}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Confirm
        </button>
      </div>
    );

  if (step === "dashboard")
    return (
      <div className="min-h-screen bg-gray-50 py-10 px-5">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b pb-5 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Image src="/favicon.ico" alt="Logo" width={50} height={50} />
                UniPlace Recruiter Portal
              </h1>
              <h2 className="text-xl font-semibold text-gray-800">
                Welcome, {drive.companyName}
              </h2>
              <p className="mt-1">
                For: <span className="font-medium">{drive.collegeName}</span>
              </p>
            </div>
          </div>

          <div className="m-3 bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-700 flex justify-between items-center">
            <p>Drive ID: <span className="font-semibold">{drive._id}</span></p>
            <p>
              Link expires in{" "}
              {Math.floor((drive.expireAt - Date.now()) / 1000 / 60 / 60)} hrs
            </p>
          </div>

          {applicants.length ? (
            <table className="w-full text-left border border-gray-200 mt-4">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-3 font-medium">S.No</th>
                  <th className="px-4 py-3 font-medium">Admission No</th>
                  <th className="px-4 py-3 font-medium">Name</th>
                </tr>
              </thead>
              <tbody>
                {applicants.map((s, i) => (
                  <tr key={s._id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-3">{i + 1}</td>
                    <td className="px-4 py-3">{s.admnNo}</td>
                    <td className="px-4 py-3">{s.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-500 py-10">
              No applicants found.
            </p>
          )}
        </div>
      </div>
    );
}
