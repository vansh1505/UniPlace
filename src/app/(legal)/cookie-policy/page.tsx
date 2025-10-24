import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-12 flex justify-between items-center">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold">Cookie Policy</h1>
        </header>

        {/* Main Content */}
        <section className="space-y-10 leading-relaxed">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            This Cookie Policy explains how <strong>UniPlace</strong> (“we”, “our”, or “us”) uses
            cookies and similar technologies on our website and platform. By using UniPlace, you
            agree to the use of cookies as described in this policy.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-3">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit a website.
              They help us remember your preferences, improve performance, and understand how users
              interact with the platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">2. Types of Cookies We Use</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Required for core platform functionality such as
                authentication, session management, and security.
              </li>
              <li>
                <strong>Performance Cookies:</strong> Collect anonymous usage data to improve site
                reliability and performance.
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember settings like theme (dark/light) and
                dashboard layout.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Used to analyze user interactions with UniPlace.
                These do not store personal information.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">3. How We Use Cookies</h2>
            <p>
              We use cookies to maintain secure login sessions, store minimal analytics data, and
              enable smooth navigation. Cookies help detect unauthorized access attempts and
              optimize system performance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">4. Managing Cookies</h2>
            <p>
              You can manage or delete cookies through your browser settings. However, disabling
              essential cookies may limit access to certain features such as login and personalized
              dashboards.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">5. Third-Party Cookies</h2>
            <p>
              UniPlace does not use marketing or ad-tracking cookies. Third-party cookies, if any,
              are limited to analytics or performance tracking (e.g., Google Analytics) and comply
              with standard data protection laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">6. Data Collected via Cookies</h2>
            <p>
              Cookies may record non-personal information like device type, browser version, time
              spent, and user interactions. No academic or sensitive personal data is stored in
              cookies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">7. Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Updates will appear on this page
              with a revised “Last Updated” date. Continuing to use UniPlace after updates
              constitutes acceptance of the revised terms.
            </p>
          </div>

          {/* <div>
            <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
            <p>
              For questions or cookie-related requests, contact us at:{" "}
              <a
                href="mailto:support@uniplace.in"
                className="text-blue-600 hover:underline font-medium"
              >
                support@uniplace.in
              </a>
            </p>
          </div> */}
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-gray-300 dark:border-gray-700 pt-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} UniPlace. All rights reserved.</p>
          <p>Last updated: October 2025</p>
        </footer>
      </div>
    </main>
  );
}

export const metadata = {
  title: "Cookie Policy | UniPlace",
  description:
    "This Cookie Policy explains how UniPlace uses cookies and similar technologies to enhance your experience and maintain platform functionality.",
  keywords: [
    "UniPlace cookie policy",
    "cookies usage",
    "website cookies",
    "placement system cookies",
    "data tracking policy"
  ],
  openGraph: {
    title: "Cookie Policy | UniPlace",
    description:
      "Learn how UniPlace uses cookies to provide secure sessions, improve performance, and enhance usability.",
    url: "https://uniplace.vercel.app/cookie-policy",
    siteName: "UniPlace",
    type: "article",
  },
};
