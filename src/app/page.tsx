"use client"

import { motion } from "motion/react"
import { ArrowRight, Users, Briefcase, TrendingUp, Star, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function LandingPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-gradient-to-b from-blue-50 to-blue-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1 {...fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Gateway to
              <span className="text-blue-600 block">Dream Career</span>
            </motion.h1>
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Connect with top companies, discover exclusive opportunities, and land your perfect job through our
              intelligent campus placement platform.
            </motion.p>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/signup">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg group cursor-pointer">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-100 px-8 py-3 text-lg bg-transparent cursor-pointer"
              >
                Watch Demo
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}