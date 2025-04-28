import React from 'react'
import Link from 'next/link'

const BannerSection = () => {
  return (
    <section className="bg-primary py-12 md:py-16 lg:py-20">
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <div className="space-y-5 md:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Get An Easy Start With Upcover Now
            </h2>
            <p className="text-gray-100 text-lg max-w-2xl mx-auto md:mx-0">
              Discover how our solutions can transform your business with a simple, hassle-free onboarding process.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Link 
                href="/get-started" 
                className="px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300 text-center"
              >
                Get Started
              </Link>
              <Link 
                href="/demo" 
                className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300 text-center"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerSection