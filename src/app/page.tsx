"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle,
  FileText,
  GraduationCap,
  Mail,
  Play,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Your Gateway to
              <span className="text-blue-600 block">Smarter Placements</span>
            </motion.h1>
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Simplify your placement journey with UniPlace — manage drives,
              track applications, and unlock career opportunities with one
              centralized platform.
            </motion.p>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg group cursor-pointer"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-100 px-8 py-3 text-lg bg-transparent cursor-pointer"
                >
                  About this Platform
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Features Section */}
        <motion.section
          id="features"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full py-20"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <motion.div variants={fadeInUp} className="space-y-4">
                <Badge className="bg-blue-50 text-blue-700 border-0 px-4 py-2">
                  Key Features
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 max-w-4xl">
                  Everything You Need for Campus Placements
                </h2>
                <p className="max-w-3xl text-xl text-gray-600 leading-relaxed">
                  Comprehensive tools and automation to streamline your entire
                  recruitment workflow
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid max-w-6xl mx-auto gap-8 lg:grid-cols-3"
            >
              {[
                {
                  icon: Target,
                  title: "Auto Eligibility Filtering",
                  desc: "Automatically filter students based on custom eligibility criteria set by companies",
                  color: "text-blue-600",
                  bg: "bg-blue-50",
                  border: "border-blue-100",
                },
                {
                  icon: FileText,
                  title: "Resume Management",
                  desc: "Centralized resume storage and management system for seamless access",
                  color: "text-purple-600",
                  bg: "bg-purple-50",
                  border: "border-purple-100",
                },
                {
                  icon: TrendingUp,
                  title: "Application Tracking",
                  desc: "Real-time tracking from application submission to final placement results",
                  color: "text-green-600",
                  bg: "bg-green-50",
                  border: "border-green-100",
                },
                {
                  icon: Mail,
                  title: "Smart Notifications",
                  desc: "Intelligent email and dashboard notifications for all important updates",
                  color: "text-orange-600",
                  bg: "bg-orange-50",
                  border: "border-orange-100",
                },
                {
                  icon: BookOpen,
                  title: "Attendance & ERP Sync",
                  desc: "Seamless integration with existing ERP systems and attendance tracking",
                  color: "text-red-600",
                  bg: "bg-red-50",
                  border: "border-red-100",
                },
                {
                  icon: Shield,
                  title: "Role-based Access",
                  desc: "Enterprise-grade security with granular permission controls",
                  color: "text-indigo-600",
                  bg: "bg-indigo-50",
                  border: "border-indigo-100",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={scaleIn}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    className={`border-2 ${feature.border} hover:shadow-xl transition-all h-full rounded-2xl group overflow-hidden`}
                  >
                    <CardHeader className="text-center p-8">
                      <div
                        className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${feature.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <feature.icon className={`h-8 w-8 ${feature.color}`} />
                      </div>
                      <CardTitle className="text-xl font-semibold text-gray-900 mb-3">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {feature.desc}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Solutions Section */}
        <motion.section
          id="solutions"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full py-20"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <motion.div variants={fadeInUp} className="space-y-4">
                <Badge className="bg-purple-50 text-purple-700 border-0 px-4 py-2">
                  Solutions
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                  Built for Every Stakeholder
                </h2>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid max-w-6xl mx-auto gap-8 lg:grid-cols-3"
            >
              {/* Students */}
              <motion.div variants={scaleIn} whileHover={{ y: -6 }}>
                <Card className="border-2 border-blue-100 hover:border-blue-200 hover:shadow-xl transition-all h-full bg-gradient-to-br from-blue-50/50 to-white rounded-2xl group">
                  <CardHeader className="text-center p-8">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 group-hover:bg-blue-200 transition-colors">
                      <GraduationCap className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-blue-600 text-xl font-semibold">
                      For Students
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Streamlined placement experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 p-8 pt-0">
                    {[
                      "View only eligible drives",
                      "Upload and manage resumes",
                      "Get notified about results",
                      "Track placement attendance",
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Companies */}
              <motion.div variants={scaleIn} whileHover={{ y: -6 }}>
                <Card className="border-2 border-purple-100 hover:border-purple-200 hover:shadow-xl transition-all h-full bg-gradient-to-br from-purple-50/50 to-white rounded-2xl group">
                  <CardHeader className="text-center p-8">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 group-hover:bg-purple-200 transition-colors">
                      <Building2 className="h-8 w-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-purple-600 text-xl font-semibold">
                      For Companies
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Efficient recruitment process
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 p-8 pt-0">
                    {[
                      "Register drives with filters",
                      "View and shortlist students",
                      "Upload exam results",
                      "Mark attendance for rounds",
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Admin/CCPD */}
              <motion.div variants={scaleIn} whileHover={{ y: -6 }}>
                <Card className="border-2 border-green-100 hover:border-green-200 hover:shadow-xl transition-all h-full bg-gradient-to-br from-green-50/50 to-white rounded-2xl group">
                  <CardHeader className="text-center p-8">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 group-hover:bg-green-200 transition-colors">
                      <Users className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-green-600 text-xl font-semibold">
                      For Admin/CCPD
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Complete oversight and control
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 p-8 pt-0">
                    {[
                      "Sync student data from ERP",
                      "Manage drive progress",
                      "Send notifications",
                      "Generate audit reports",
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full py-20"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <motion.div variants={fadeInUp} className="space-y-4">
                <Badge className="bg-gray-50 text-gray-700 border-0 px-4 py-2">
                  Technology
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                  Built with Modern Technology
                </h2>
                <p className="max-w-2xl text-xl text-gray-600 leading-relaxed">
                  Powered by cutting-edge technologies for scalability,
                  performance, and reliability
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid max-w-4xl mx-auto gap-8 lg:grid-cols-3"
            >
              {[
                {
                  icon: Zap,
                  title: "Next.js",
                  desc: "Fast, scalable React framework with server-side rendering",
                  bg: "bg-gray-900",
                },
                {
                  icon: FileText,
                  title: "MongoDB",
                  desc: "Flexible, document-based database for complex data structures",
                  bg: "bg-green-600",
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  desc: "Bank-grade security with encryption and compliance",
                  bg: "bg-blue-600",
                },
              ].map((tech, index) => (
                <motion.div
                  key={tech.title}
                  variants={scaleIn}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="flex flex-col items-center space-y-6 text-center p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all group border border-gray-100"
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl ${tech.bg} text-white group-hover:scale-110 transition-transform`}
                  >
                    <tech.icon className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {tech.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{tech.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
