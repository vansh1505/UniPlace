import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="mb-12 flex justify-between items-center">
          <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
          <h1 className="text-3xl font-bold">Terms & Conditions</h1>
        </header>

        <section className="space-y-8 leading-relaxed">
          <p>
            These Terms and Conditions (“Terms”) govern your access and use of UniPlace
            (“Platform”, “Service”), developed and maintained by the UniPlace team. 
            By using UniPlace, you agree to these Terms. If you disagree, please refrain from using the platform.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-3">1. Eligibility</h2>
            <p>
              UniPlace is designed for students, placement departments, and registered
              companies associated with academic institutions. You must have valid
              institutional authorization to access and use the platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">2. Account Responsibilities</h2>
            <p>
              You are responsible for maintaining the confidentiality of your login credentials.
              Any activity under your account will be considered your responsibility. 
              Notify the UniPlace team immediately of any unauthorized use or security breach.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">3. Use of Platform</h2>
            <p>
              You agree to use UniPlace solely for lawful and academic placement-related purposes. 
              Any attempt to disrupt, reverse-engineer, or misuse the system will result in account termination 
              and potential legal action under applicable cyber laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">4. Data Accuracy</h2>
            <p>
              Student and company data displayed within UniPlace (such as CGPA, backlogs,
              eligibility, etc.) is synchronized from institutional sources (ERP/EMS).
              UniPlace does not modify, verify, or guarantee the accuracy of such data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">5. Intellectual Property</h2>
            <p>
              All software, logos, trademarks, and content associated with UniPlace are the 
              intellectual property of the UniPlace team. You may not copy, redistribute, or 
              repurpose any component without explicit permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">6. Limitation of Liability</h2>
            <p>
              UniPlace acts only as a digital intermediary. We are not responsible for 
              placement results, shortlisting decisions, or data inaccuracies provided 
              by institutions or companies. Use of the platform is at your own risk.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">7. Service Modifications</h2>
            <p>
              UniPlace reserves the right to update, suspend, or discontinue any feature or 
              functionality at any time, with or without prior notice. Continued use after 
              modifications constitutes acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">8. Termination</h2>
            <p>
              We may suspend or terminate your access to UniPlace at any time for violations
              of these Terms or misuse of the platform. Upon termination, your access and
              stored data may be permanently deleted.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">9. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes shall be subject 
              to the exclusive jurisdiction of the courts located in Noida, Uttar Pradesh.
            </p>
          </div>

          {/* <div>
            <h2 className="text-2xl font-semibold mb-3">10. Contact</h2>
            <p>
              For any questions regarding these Terms, please contact us at:
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
  title: "Terms & Conditions | UniPlace",
  description:
    "Read the official Terms & Conditions of UniPlace. Understand user responsibilities, platform usage, and service limitations before using UniPlace.",
  keywords: [
    "UniPlace terms",
    "UniPlace conditions",
    "user agreement",
    "placement platform terms",
    "university placement system policies"
  ],
  openGraph: {
    title: "Terms & Conditions | UniPlace",
    description:
      "Review the terms governing use of UniPlace, the university placement automation platform.",
    url: "https://uniplace.vercel.app/terms",
    siteName: "UniPlace",
    type: "article",
  },
};
