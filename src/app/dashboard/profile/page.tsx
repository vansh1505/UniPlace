import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <p>Profile page</p>
        <p>Under construction...</p>
        <p>Check back later!</p>
        <Link href="/dashboard" className='flex items-center text-blue-600 hover:text-blue-700'>Return to Dashboard <ArrowRight className='ml-2' /></Link>
    </div>
  )
}

export default page