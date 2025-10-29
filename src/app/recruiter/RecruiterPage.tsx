"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";

export default function RecruiterPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [step, setStep] = useState<"verify" | "confirm" | "dashboard">("verify");
  const [accessCode, setAccessCode] = useState("");
  const [drive, setDrive] = useState<any>({});
  const [applicants, setApplicants] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showSummary, setShowSummary] = useState(false);

  // --------------------------
  // Step 1: Verify Token
  // --------------------------
  useEffect(() => {
    if (!token) return;
    const verifyToken = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/recruiter/verify?token=${token}`);
        const data = await res.json();
        if (res.ok) setStep("confirm");
        else setError(data.error || "Invalid or expired link");
      } catch {
        setError("Network error");
      } finally {
        setLoading(false);
      }
    };
    verifyToken();
  }, [token]);

  // --------------------------
  // Step 2: Confirm Access Code
  // --------------------------
  const handleConfirm = async () => {
    if (accessCode.trim().length !== 6)
      return toast.error("Enter 6-digit access code");

    setLoading(true);
    try {
      const res = await fetch(`/api/recruiter/confirm`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, accessCode }),
      });
      const data = await res.json();

      if (res.ok) {
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

  // --------------------------
  // Step 3: Handle attendance / selection (dummy toggle)
  // --------------------------
  const handleToggle = (id: string, field: "attended" | "selected") => {
    setApplicants((prev) =>
      prev.map((a) =>
        a._id === id ? { ...a, [field]: !a[field] } : a
      )
    );
  };

  // --------------------------
  // Conditional Renders
  // --------------------------
  if (!token)
    return (
      <EmptyState
        title="Unauthorized"
        message="Please use the secure link shared by CCPD."
      />
    );

  if (loading)
    return (
      <Centered>
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
        <p className="text-gray-500 mt-3">Loading...</p>
      </Centered>
    );

  if (error)
    return (
      <Centered>
        <Image src="/logo.png" alt="Logo" width={160} height={160} />
        <div className="mt-6">
          <h1 className="text-2xl font-semibold text-red-600 mb-2">{error}</h1>
          <p className="text-gray-500">Please contact CCPD for a new link.</p>
        </div>
      </Centered>
    );

  if (step === "confirm")
    return (
      <Centered>
        <Image src="/logo.png" alt="Logo" width={160} height={160} />
        <div className="mt-6 bg-white p-6 rounded-xl shadow-md text-center w-80">
          <h2 className="text-xl font-semibold mb-4">Enter Access Code</h2>
          <input
            type="text"
            maxLength={6}
            className="border-2 border-gray-300 focus:border-blue-500 px-4 py-2 rounded-md text-center text-xl tracking-widest font-mono w-full outline-none"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
          />
          <button
            onClick={handleConfirm}
            className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition"
          >
            Confirm
          </button>
        </div>
      </Centered>
    );

  const handleReview = () => {
    const invalid = applicants.filter(a => !a.attended && a.selected);
    if (invalid.length > 0) {
      toast.error(`${invalid.length} student(s) marked selected but not attended.`);
      return;
    }
    setShowSummary(true);
  };
  const handleSave = async (finalApplicants: any[]) => {
    toast.success("Saving changes...");
    setShowSummary(false);
  };

  // --------------------------
  // Step 4: Dashboard
  // --------------------------
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      {showSummary && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-2xl w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto animate-in fade-in-50">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Review Summary
            </h2>

            <div className="overflow-x-auto border border-gray-200 dark:border-zinc-700 rounded-lg mb-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 sticky top-0">
                  <tr>
                    <th className="px-4 py-2">S.No</th>
                    <th className="px-4 py-2">Admission No</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2 text-center">Attendance</th>
                    <th className="px-4 py-2 text-center">Selected</th>
                  </tr>
                </thead>
                <tbody>
                  {applicants.map((s, i) => (
                    <tr key={s._id} className="border-t border-gray-200 dark:border-zinc-700">
                      <td className="px-4 py-2">{i + 1}</td>
                      <td className="px-4 py-2 font-mono">{s.admnNo}</td>
                      <td className="px-4 py-2">{s.name}</td>
                      <td className="px-4 py-2 text-center">
                        {s.attended ? (
                          <span className="text-green-600 font-medium">Yes</span>
                        ) : (
                          <span className="text-red-500">No</span>
                        )}
                      </td>
                      <td className="px-4 py-2 text-center">
                        {s.selected ? (
                          <span className="text-green-600 font-medium">Yes</span>
                        ) : (
                          <span className="text-red-500">No</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-gray-700 dark:text-gray-300 mb-4 space-y-1 text-center">
              <p>
                <strong>Total:</strong> {applicants.length} students
              </p>
              <p>
                <strong>Attended:</strong> {applicants.filter(a => a.attended).length}
              </p>
              <p>
                <strong>Selected:</strong> {applicants.filter(a => a.selected).length}
              </p>
            </div>

            <p className="text-sm text-gray-500 text-center mb-5">
              Please review carefully before saving. Changes will be permanent.
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  handleSave(applicants);
                }}
                className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-lg transition"
              >
                Confirm & Save
              </button>
              <button
                onClick={() => setShowSummary(false)}
                className="border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-200 px-6 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
              >
                Go Back / Edit
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b pb-5 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Image src="/favicon.ico" alt="Logo" width={48} height={48} />
              UniPlace Recruiter Portal
            </h1>
            <h2 className="text-xl font-semibold text-gray-800 mt-2">
              Welcome, {drive.companyName}
            </h2>
            <p className="mt-1 text-gray-600">
              For: <span className="font-medium">{drive.collegeName}</span>
            </p>
          </div>
        </header>

        <div className="m-3 bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-700 flex justify-between items-center">
          <p>
            Drive ID: <span className="font-semibold">{drive._id}</span>
          </p>
          <p>
            Expires in{" "}
            <span className="font-semibold text-blue-600">
              {Math.max(0, Math.floor((drive.expireAt - Date.now()) / 1000 / 60 / 60))} hrs
            </span>
          </p>
        </div>

        {applicants.length ? (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 mt-4 rounded-lg overflow-hidden">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  {["S.No", "Admission No", "Name", "Attendance", "Selected"].map(
                    (h) => (
                      <th key={h} className="px-4 py-3 font-medium text-sm">
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {applicants.map((s, i) => (
                  <tr
                    key={s._id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-3">{i + 1}</td>
                    <td className="px-4 py-3 font-mono">{s.admnNo}</td>
                    <td className="px-4 py-3">{s.name}</td>
                    <td className="px-4 py-3 text-center">
                      <input
                        type="checkbox"
                        checked={!!s.attended}
                        onChange={() => handleToggle(s._id, "attended")}
                        className="scale-110 accent-blue-600"
                      />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <input
                        type="checkbox"
                        checked={!!s.selected}
                        onChange={() => handleToggle(s._id, "selected")}
                        className="scale-110 accent-green-600"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-500 py-10">
            No applicants found.
          </p>
        )}
        <div className="mt-6 space-y-2 text-gray-700 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500 mt-4">
              Total Students: <span className="font-medium">{applicants.length}</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Attendance: <span className="font-medium">{applicants.filter(a => a.attended).length}</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Selected: <span className="font-medium">{applicants.filter(a => a.selected).length}</span>
            </p>
          </div>
          <div>
            <p className="text-gray-500 mt-4">
              Attendance: <span className="font-medium">{Math.floor((applicants.filter(a => a.attended).length / applicants.length) * 100)}%</span>
            </p>
            <p className="text-gray-500 mt-1">
              Selected: <span className="font-medium">{Math.floor((applicants.filter(a => a.selected).length / applicants.length) * 100)}%</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button
            onClick={() => handleReview()}
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-lg transition flex items-center gap-2"
          >
            <CheckCircle2 className="w-5 h-5" /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

// --------------------------
// Small Reusable Components
// --------------------------
function Centered({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      {children}
    </div>
  );
}

function EmptyState({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-2xl font-semibold text-red-600">{title}</h1>
      <p className="text-gray-500 mt-2">{message}</p>
    </div>
  );
}
