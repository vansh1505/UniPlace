"use client"

import { motion } from "motion/react"
import { ArrowRight, User, Building2, GraduationCap, Sparkles, CheckCircle2 } from "lucide-react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from "next/image"

export default function FeatBento() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  }

  return (
    <div className="min-h-screen bg-[#fafafa] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans relative">
      {/* Decorative background blurs */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] right-[-5%] w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm">
             <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Features
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight text-balance leading-[1.1]">
            Everything you need for <br className="hidden md:block" />
            <span className=" text-blue-600">
              Smarter Placements
            </span>
          </h1>
        </motion.div>

        {/* Premium SaaS Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6"
        >
          {/* Card 1: Real-Time Placement Analytics (Wide Hero) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 relative h-[420px] lg:h-[460px] rounded-[2rem] bg-white ring-1 ring-black/[0.03] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05),0_10px_40px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05),0_20px_60px_-10px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 overflow-hidden group"
          >
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-20 p-8 lg:p-12 w-full md:w-[50%]">
              <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Real-Time Analytics</h3>
              <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
                Track drive participation, shortlists, and results with live comprehensive dashboards. Stay ahead of the curve.
              </p>
            </div>
            
            {/* Absolute Positioned Lottie bleeding off edges */}
            <div className="absolute right-[-5%] bottom-[-5%] w-[80%] md:w-[55%] h-[75%] flex items-end justify-end pointer-events-none group-hover:scale-105 transition-transform duration-700 ease-out">
              <DotLottieReact src="/Analytics.lottie" loop autoplay className="w-full h-full object-contain object-right-bottom" />
            </div>
          </motion.div>

          {/* Card 2: AI Resume Analyzer (Square Hero) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 relative h-[420px] lg:h-[460px] rounded-[2rem] bg-white ring-1 ring-black/[0.03] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05),0_10px_40px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05),0_20px_60px_-10px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-amber-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-20 p-8 lg:p-10">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 tracking-tight flex items-center gap-2">
                AI Resume Score
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Instantly score resumes against job descriptions and get actionable AI-driven insights to improve shortlisting.
              </p>
            </div>
            
            {/* Custom UI Stage: AI Resume Scanner */}
            <div className="absolute inset-x-0 bottom-4 h-[55%] flex flex-col items-center justify-center pointer-events-none px-6">
              <div className="relative w-full max-w-[220px] h-[160px] flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                
                {/* Resume Document */}
                <div className="w-28 h-36 bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-4 flex flex-col gap-2 relative overflow-hidden">
                   {/* Resume Content Skeleton */}
                   <div className="w-1/2 h-2 bg-gray-200 rounded-full mb-2" />
                   <div className="w-full h-1.5 bg-gray-100 rounded-full" />
                   <div className="w-full h-1.5 bg-gray-100 rounded-full" />
                   <div className="w-3/4 h-1.5 bg-gray-100 rounded-full" />
                   
                   <div className="w-1/3 h-2 bg-gray-200 rounded-full mt-3 mb-1" />
                   <div className="w-full h-1.5 bg-gray-100 rounded-full" />
                   <div className="w-5/6 h-1.5 bg-gray-100 rounded-full" />

                   {/* AI Scanner Line */}
                   <motion.div 
                     animate={{ y: [-10, 150, -10] }} 
                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                     className="absolute top-0 left-0 right-0 h-[2px] bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,1)] z-10"
                   />
                   <motion.div 
                     animate={{ y: [-10, 150, -10] }} 
                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                     className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-amber-400/0 to-amber-400/20 -translate-y-full z-0"
                   />
                </div>

                {/* ATS Score Popup */}
                <motion.div 
                   animate={{ scale: [0, 1, 1], opacity: [0, 1, 1], y: [10, 0, 0] }}
                   transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 1] }}
                   className="absolute -right-2 top-4 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg border border-amber-100 flex items-center gap-2"
                >
                   <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                     <Sparkles className="w-3 h-3 text-amber-600" />
                   </div>
                   <div>
                     <p className="text-[10px] text-gray-500 font-medium leading-none mb-0.5">ATS Match</p>
                     <p className="text-sm font-black text-amber-600 leading-tight">92%</p>
                   </div>
                </motion.div>
                
                {/* AI Keyword Match Pill */}
                <motion.div 
                   animate={{ scale: [0, 1, 1], opacity: [0, 1, 1], x: [-10, 0, 0] }}
                   transition={{ duration: 3, delay: 0.6, repeat: Infinity, times: [0, 0.4, 1] }}
                   className="absolute -left-6 bottom-8 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-md border border-green-100 flex items-center gap-1.5"
                >
                   <CheckCircle2 className="w-3 h-3 text-green-500" />
                   <p className="text-[10px] font-bold text-gray-700">Skills matched</p>
                </motion.div>

              </div>
            </div>
          </motion.div>

          {/* Card 3: Seamless Interaction (Medium Square) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 relative h-[320px] lg:h-[360px] rounded-[2rem] bg-white ring-1 ring-black/[0.03] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05),0_10px_40px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05),0_20px_60px_-10px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 overflow-hidden group flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-20 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">Seamless Workflow</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Connect students, recruiters, and admins in one unified, automated process.
              </p>
            </div>

            {/* Custom UI stage: Hub and Spoke Flow */}
            <div className="absolute inset-x-0 bottom-0 h-[65%] flex flex-col items-center justify-center pointer-events-none pb-4">
              <div className="relative w-full max-w-[280px] h-[180px] group-hover:scale-105 transition-transform duration-700 ease-out mt-4">
                 
                 {/* SVG Connecting Lines with animated data flow */}
                 <svg className="absolute inset-0 w-full h-full z-0 overflow-visible">
                    {/* Student -> UniPlace (↘) */}
                    <motion.line x1="25%" y1="20%" x2="50%" y2="50%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" animate={{ strokeDashoffset: [0, -12] }} transition={{ repeat: Infinity, ease: "linear", duration: 1 }} />
                    {/* University -> UniPlace (↑) */}
                    <motion.line x1="50%" y1="85%" x2="50%" y2="50%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" animate={{ strokeDashoffset: [0, -12] }} transition={{ repeat: Infinity, ease: "linear", duration: 1 }} />
                    {/* UniPlace -> Recruiter (↗) */}
                    <motion.line x1="50%" y1="50%" x2="75%" y2="20%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" animate={{ strokeDashoffset: [0, -12] }} transition={{ repeat: Infinity, ease: "linear", duration: 1 }} />
                 </svg>
                 
                 {/* Hub: UniPlace (Center) */}
                 <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/30 ring-2 ring-white">
                      <span className="text-white font-black text-lg tracking-tighter"><Image height={10} width={10} src="/favicon.ico" alt="UniPlace Logo" className="w-full h-full object-contain" /></span>
                    </div>
                    {/* <span className="absolute top-full mt-2 text-[10px] font-bold text-gray-700 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm ring-1 ring-gray-100">UniPlace</span> */}
                 </div>

                 {/* Node: Student (Top Left) */}
                 <div className="absolute top-[20%] left-[25%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md ring-1 ring-gray-100">
                       <User className="w-4 h-4 text-gray-500" />
                    </div>
                    <span className="absolute top-full mt-1.5 text-[10px] font-medium text-gray-500 bg-white/90 px-1.5 py-0.5 rounded shadow-sm">Student</span>
                 </div>
                 
                 {/* Node: Recruiter (Top Right) */}
                 <div className="absolute top-[20%] left-[75%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md ring-1 ring-gray-100">
                       <Building2 className="w-4 h-4 text-blue-500" />
                    </div>
                    <span className="absolute top-full mt-1.5 text-[10px] font-medium text-gray-500 bg-white/90 px-1.5 py-0.5 rounded shadow-sm">Recruiter</span>
                 </div>

                 {/* Node: University (Bottom Center) */}
                 <div className="absolute top-[85%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md ring-1 ring-gray-100">
                       <GraduationCap className="w-4 h-4 text-purple-500" />
                    </div>
                    <span className="absolute top-full mt-1.5 text-[10px] font-medium text-gray-500 bg-white/90 px-1.5 py-0.5 rounded shadow-sm">University</span>
                 </div>

              </div>
            </div>
          </motion.div>

          {/* Card 4: Automated Filtering (Medium Wide) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 relative h-[320px] lg:h-[360px] rounded-[2rem] bg-white ring-1 ring-black/[0.03] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05),0_10px_40px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05),0_20px_60px_-10px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 overflow-hidden group flex flex-col md:flex-row"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-20 p-8 lg:p-10 w-full md:w-[45%] flex flex-col justify-center bg-white/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-t-[2rem] md:rounded-none">
              <h3 className="text-xl lg:text-3xl font-bold text-gray-900 mb-3 tracking-tight">Automated Filtering</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                Instantly shortlist students based on CGPA, backlogs, and perfectly tailored customized criteria.
              </p>
            </div>

            <div className="absolute right-0 md:right-[-5%] top-1/2 -translate-y-1/2 w-[100%] md:w-[60%] h-[100%] md:h-[120%] pointer-events-none group-hover:scale-105 group-hover:-translate-x-2 transition-all duration-700 ease-out z-10">
               <Image src="/filtering.svg" alt="Filtering" fill className="object-contain object-right" />
            </div>
          </motion.div>

          {/* Card 5: ERP Integration (Dark Theme Footer Hero) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-3 relative h-[380px] lg:h-[420px] rounded-[2rem] bg-[#0a0a0a] ring-1 ring-white/10 shadow-2xl hover:shadow-[0_20px_80px_-20px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-500 overflow-hidden group"
          >
            {/* Sophisticated dark gradient & noise */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black" />
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
            
            {/* Glowing orb */}
            <div className="absolute top-[-20%] left-[20%] w-[50%] h-[50%] bg-purple-600/30 blur-[120px] rounded-full pointer-events-none group-hover:bg-purple-500/40 transition-colors duration-700" />

            <div className="relative z-20 p-8 lg:p-16 w-full md:w-[50%] h-full flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-8">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300 ring-1 ring-inset ring-purple-500/40 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                  </span>
                  Coming Soon
                </div>
              </div>
              <h3 className="text-3xl lg:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
                Flawless ERP <br /> Integration.
              </h3>
              <p className="text-gray-400 text-sm lg:text-base leading-relaxed max-w-md mb-8">
                Built to plug directly into your university's existing infrastructure with zero friction. Sync everything instantly.
              </p>
            </div>

            <div className="absolute right-[-10%] md:right-[-5%] top-1/2 -translate-y-1/2 w-[80%] md:w-[60%] h-[150%] pointer-events-none group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 mix-blend-screen">
               <DotLottieReact src="/erp-integration.lottie" loop autoplay className="w-full h-full object-contain" />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}