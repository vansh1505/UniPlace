"use client"
import React from 'react'
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from "next/link"

const links = [
  { href: "/features", label: "Features" },
  { href: "/solutions", label: "Solutions" },
  // { href: "/pricing", label: "Pricing" },
  // { href: "/contact", label: "Contact" }
]

const Navbar = () => {
  return (
    <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed w-full px-4 lg:px-6 h-16 flex items-center border-b border-gray-100 bg-white/80 backdrop-blur-xl shadow-sm"
      >
        <Link className="flex items-center justify-center" href="/">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="flex items-center"
          >
            <Image
              alt="UniPlace Logo"
              className="h-8 w-auto"
              height={32}
              width={120}
              src="/logo.png"
            />
          </motion.div>
        </Link>
        <nav className="ml-auto flex gap-8">
          {links.map(
            (item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors relative group"
                  href={`#${item.label.toLowerCase()}`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            )
          )}
        </nav>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="ml-8 flex gap-3"
        >
          <Link href="/login">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer transition-colors"
            >
            Sign In
          </Button>
            </Link>
            <Link href="/signup">
          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm cursor-pointer transition-colors"
            >
            Get Started
          </Button>
            </Link>
        </motion.div>
      </motion.header>
  )
}

export default Navbar;