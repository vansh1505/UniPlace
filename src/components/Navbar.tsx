"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#features", label: "Features" },
  { href: "#solutions", label: "Solutions" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/30 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6 h-14 flex items-center justify-between">
          <Link className="flex items-center" href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                alt="UniPlace Logo"
                className="h-11 w-auto"
                height={44}
                width={130}
                src="/logo.png"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((item) => (
              <Link
                key={item.label}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors relative group"
                href={item.href}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-blue-600 cursor-pointer"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer">
                Get Started Free
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button onClick={toggleMenu} variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-white p-6 md:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <Link href="/" onClick={toggleMenu}>
                <Image
                  alt="UniPlace Logo"
                  className="h-8 w-auto"
                  height={40}
                  width={130}
                  src="/logo.png"
                />
              </Link>
              <Button onClick={toggleMenu} variant="ghost" size="icon">
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="flex flex-col items-center gap-8">
              {links.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={toggleMenu}
                  className="text-xl font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-8 flex flex-col gap-4 w-full max-w-xs">
                <Link href="/login" onClick={toggleMenu}>
                  <Button variant="outline" className="w-full text-lg py-6">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup" onClick={toggleMenu}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6">
                    Get Started Free
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
