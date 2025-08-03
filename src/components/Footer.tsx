import React from 'react'
import Image from 'next/image'
import Link  from 'next/link'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              {/* <h3 className="text-2xl font-bold text-blue-400 mb-4">UniPlace</h3> */}
              <Image src="/logow.png" alt="UniPlace Logo" width={200} height={50} />
              <p className="text-gray-400">
                Connecting students with their dream careers through intelligent placement solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#solutions" className="hover:text-white transition-colors">
                    Solutions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} UniPlace. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer