import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="mb-12 flex justify-between items-center">
          <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
        </header>

        <section className="space-y-8 leading-relaxed">
          <p>
            This Privacy Policy explains how UniPlace (“we”, “our”, or “us”) collects, uses,
            and protects your personal information when you use our platform. By using UniPlace,
            you agree to the terms outlined here.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Basic account data such as name, email, and institutional ID.</li>
              <li>Academic details (CGPA, backlogs, department, year) synced from ERP/EMS.</li>
              <li>Placement-related activity (applications, shortlists, attendance).</li>
              <li>Technical data (browser type, IP, device info) for security and analytics.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>To provide eligibility-based placement opportunities.</li>
              <li>To improve dashboard experience and performance.</li>
              <li>To notify users about updates, shortlists, and results.</li>
              <li>To assist institutions in managing placement workflows.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">3. Data Sharing & Disclosure</h2>
            <p>
              We do not sell or rent user data. Your data is shared only with authorized
              university departments, placement officers, and verified company recruiters.
              We comply with the Indian Personal Data Protection (PDP) Bill and GDPR standards
              where applicable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">4. Data Retention</h2>
            <p>
              We retain your data as long as your institution remains partnered with UniPlace
              or as required to fulfill placement processes. You may request data deletion
              by contacting our support team.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
            <p>
              We use encryption, secure API communication (HTTPS), and restricted database
              access to protect your data. However, no online system is 100% secure, and we
              cannot guarantee absolute protection against unauthorized access.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">6. Cookies & Analytics</h2>
            <p>
              UniPlace may use cookies or analytics tools to enhance performance and understand
              usage patterns. We do not use advertising or tracking cookies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">7. Your Rights</h2>
            <p>
              You may request access, correction, or deletion of your data through your
              placement cell or by contacting us directly. We comply with legitimate data
              access and deletion requests under applicable laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">8. Changes to This Policy</h2>
            <p>
              UniPlace may update this Privacy Policy from time to time. Updates will be
              reflected on this page with a new “Last Updated” date.
            </p>
          </div>

          {/* <div>
            <h2 className="text-2xl font-semibold mb-3">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or data handling,
              please contact:
              <br />
              <a href="mailto:support@uniplace.in" className="text-blue-600 hover:underline">
                support@uniplace.in
              </a>
            </p>
          </div> */}

          <footer className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-4 text-sm text-gray-500">
            Last updated: October 2025  
            <br />© {new Date().getFullYear()} UniPlace. All rights reserved.
          </footer>
        </section>
      </div>
    </main>
  );
}

export const metadata = {
  title: "Privacy Policy | UniPlace",
  description:
    "Learn how UniPlace collects, stores, and protects your data. We value your privacy and ensure compliance with data protection standards.",
  keywords: [
    "UniPlace privacy policy",
    "data protection",
    "student data security",
    "university placement privacy",
    "personal data policy"
  ],
  openGraph: {
    title: "Privacy Policy | UniPlace",
    description:
      "Understand how UniPlace handles your personal and institutional data responsibly.",
    url: "https://uniplace.vercel.app/privacy",
    siteName: "UniPlace",
    type: "article",
  },
};
