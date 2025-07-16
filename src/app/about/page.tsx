"use client";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight,
  Users,
  Briefcase,
  TrendingUp,
  Target,
  Heart,
  Lightbulb,
  Award,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// const stats = [
//   { number: "10,000+", label: "Students Placed", icon: Users },
//   { number: "500+", label: "Partner Companies", icon: Briefcase },
//   { number: "95%", label: "Success Rate", icon: TrendingUp },
//   { number: "50+", label: "Universities", icon: Award },
// ];

const values = [
  {
    icon: Target,
    title: "Purpose-Built for Placements",
    description:
      "UniPlace is engineered to solve the unique challenges of campus recruitment end-to-end.",
  },
  {
    icon: Heart,
    title: "Empowering Every Student",
    description:
      "We prioritize equal access, real-time visibility, and personalized application workflows for all students.",
  },
  {
    icon: Lightbulb,
    title: "Automation-Driven Innovation",
    description:
      "From eligibility filtering to ERP sync, we automate what matters to free up time and reduce errors.",
  },
];

// const timeline = [
//   {
//     year: "2023",
//     title: "The Beginning",
//     description:
//       "UniPlace was conceived to solve the complex challenges in campus placements.",
//   },
//   {
//     year: "2024",
//     title: "Platform Launch",
//     description:
//       "Launched with 10 universities and 50+ companies, facilitating seamless placements.",
//   },
//   {
//     year: "2024",
//     title: "Rapid Growth",
//     description:
//       "Expanded to 50+ universities with 10,000+ successful placements.",
//   },
//   {
//     year: "Future",
//     title: "Global Vision",
//     description:
//       "Expanding internationally to become the world's leading placement platform.",
//   },
// ];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1
              {...fadeInUp}
              className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              About
              <span className="text-blue-600 ml-4">UniPlace</span>
            </motion.h1>
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              To empower universities with a unified platform that simplifies
              placement operations, enhances student visibility, and ensures no
              opportunity is missed.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                UniPlace is on a mission to streamline and modernize the campus
                placement experience for both students and placement cells.
                Built for today's institutions, UniPlace replaces outdated,
                manual workflows with a fully automated system that brings
                transparency, structure, and speed to every step of the
                placement lifecycle. From eligibility-based filtering and
                real-time application tracking to centralized drive management
                and ERP-synced attendance, UniPlace is engineered to make
                placements faster, smarter, and stress-free. We leverage
                cutting-edge technologies — including AI-driven matching and
                clean, intuitive UI — to connect ambitious students with
                forward-thinking companies, turning placement into a seamless
                journey, not a scattered process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white group cursor-pointer"
                  >
                    Join UniPlace
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Why UniPlace?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Automated Eligibility Filtering</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Centralized Dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Resume + Attendance Integration</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Built for Institutions </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <Image
                    src="/favicon.ico"
                    alt="logo"
                    width={220}
                    height={150}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at UniPlace.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="text-center p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to reality - the UniPlace story.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-12"
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="text-blue-600 font-bold text-lg mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>x
      </section> */}

      {/* Creator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet the Creator
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The visionary behind UniPlace's mission to revolutionize campus
              placements.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 lg:p-12 border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative mx-auto w-48 h-48 lg:w-64 lg:h-64"
                  >
                    <Image
                      height={256}
                      width={256}
                      src="/vansh.jpg"
                      alt="Creator Profile"
                      className="w-full h-full object-cover rounded-2xl shadow-lg border-4 border-white"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
                  </motion.div>
                </div>

                <div className="lg:col-span-2 text-center lg:text-left">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    Vansh Sharma
                  </h3>
                  <p className="text-lg text-blue-600 font-medium mb-4">
                    Founder, UniPlace
                  </p>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    I'm a Computer Science student who built UniPlace to solve
                    real problems students face during campus placements. After
                    experiencing how outdated and inefficient the placement
                    process can be, I decided to create a platform that’s
                    faster, smarter, and easier for everyone — students,
                    placement cells, and companies. UniPlace started as a
                    personal project, but the goal has always been bigger — to
                    bring structure, automation, and clarity to the placement
                    journey. From intelligent eligibility checks to centralized
                    drive management, I've tried to design every feature to
                    actually help, not just exist. I believe in building tools
                    that solve practical problems — and UniPlace is my attempt
                    to do that in the placement space.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <div className="flex space-x-4">
                      <motion.a
                        href="https://github.com/vansh1505"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href="https://linkedin.com/in/vansh1505"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </motion.a>
                    </div>

                    <Link href="https://vanshsharma.xyz" target="_blank">
                      <Button
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50 group bg-transparent cursor-pointer"
                      >
                        View Portfolio
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
