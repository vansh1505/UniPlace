"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden py-16">
      {/* Subtle overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent pointer-events-none"></div>

      {/* Subtle light effects */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
        }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(147,51,234,0.1) 0%, transparent 70%)",
        }}
      ></div>

      {/* Large background text */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none overflow-hidden">
        <div
          className="text-[6rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] font-black select-none leading-none tracking-tight"
          style={{
            transform: "translateY(25%)",
            fontFamily: "system-ui, -apple-system, sans-serif",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(59,130,246,0.08) 50%, rgba(255,255,255,0.03) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          UniPlace
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col p-6 sm:p-8 md:p-12 max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-start mb-8 sm:mb-12">
          <div className="text-xl sm:text-2xl font-semibold tracking-wide text-white">
            UniPlace
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 flex flex-col justify-between">
          {/* Hero section */}
          <section className="flex justify-end mb-8 sm:mb-16">
            <div className="max-w-sm sm:max-w-lg text-left">
              <Link
                href="#contact"
                className="text-blue-300 hover:text-blue-200 transition-all duration-300 text-xs sm:text-sm block mb-3 sm:mb-4 uppercase tracking-wider font-medium"
              >
                Contact us
              </Link>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-light leading-tight">
                <span className="text-white">
                  Connecting students with their dream careers{" "}
                </span>
                <span className="text-slate-300">
                  through university placements and opportunities.
                </span>
              </h1>
            </div>
          </section>

          {/* Middle section */}
          <section className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-8 mb-8 sm:mb-16">
            {/* Contact info */}
            <address className="order-2 sm:order-1 not-italic">
              <p className="text-xs sm:text-sm mb-1 sm:mb-2 uppercase tracking-wider text-slate-400">
                Have questions? Reach out!
              </p>
              <a
                href="mailto:contact@uniplace.com"
                className="text-lg sm:text-xl font-light text-blue-300 hover:text-blue-200 transition-all duration-300"
              >
                contact@uniplace.com
              </a>
            </address>

            {/* Navigation */}
            <nav className="flex flex-wrap gap-4 sm:gap-6 lg:gap-12 order-1 sm:order-2">
              {["Features", "Testimonials", "FAQ", "About"].map((item) => (
                <Link
                  key={item}
                  href={item.toLowerCase() == 'about' ? `/${item.toLowerCase()}` : `#${item.toLowerCase()}`}
                  className="text-lg sm:text-xl font-light text-slate-300 hover:text-white transition-all duration-300"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </section>
        </main>

        {/* Footer */}
        <footer className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-8 text-xs sm:text-sm border-t border-slate-700 pt-8">
          <p className="font-light text-slate-400">
            Copyright © {new Date().getFullYear()} UniPlace. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-8">
            <Link
              href="#privacy"
              className="text-slate-400 hover:text-white transition-all duration-300 font-light"
            >
              Privacy Policy
            </Link>
            <Link
              href="#terms"
              className="text-slate-400 hover:text-white transition-all duration-300 font-light"
            >
              Terms & Conditions
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  );
}