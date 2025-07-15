import React from 'react'
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from "next/link"

const Navbar = () => {
  return (
    <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full backdrop-blur-sm border-b border-gray-100 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {/* <h1 className="text-2xl font-bold text-blue-600">UniPlace</h1> */}
                <Image src="/logo.png" alt="UniPlace Logo" width={150} height={50} />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Features
                </a>
                <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
                  How It Works
                </a>
                <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Testimonials
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 cursor-pointer">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.header>
  )
}

export default Navbar