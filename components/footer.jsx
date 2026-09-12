import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


// footer code start here
const footer =async () => {
  return (
<section className="bg-background">
    <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
                <a href="/dashboard" className="text-base leading-6 text-muted-foreground hover:text-primary">
                    Industry Insights
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="/resume" className="text-base leading-6 text-muted-foreground hover:text-primary">
                    Resume Builder
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="/ai-cover-letter" className="text-base leading-6 text-muted-foreground hover:text-primary">
                    Cover Letter
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="/interview" className="text-base leading-6 text-muted-foreground hover:text-primary">
                    Interview Prep
                </a>
            </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
            <Link href="/">
                <Image src='/logo.png' alt="APP LOGO" width={200} height={60} className='h-20 py-1 w-auto object-contain'/>
            </Link>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2025 PREPO, Made by Abhishek Kumar.
        </p>
    </div>
</section>
  )
}

export default footer
