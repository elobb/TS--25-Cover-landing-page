import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="bg-secondary py-16 md:py-24 lg:py-32 xl:py-40">
      <div className="container px-4 sm:px-6 space-y-6 md:space-y-8">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight md:leading-snug">
          Grow Sales with Our <br className="hidden sm:block" />
          Strategy First Approach
        </h1>
  
        {/* Subtitle */}
        <p className="max-w-md sm:max-w-xl md:max-w-2xl mx-auto text-center text-gray-500 text-sm sm:text-base">
          This is just a simple text made for this unique and awesome template, you can replace it with any text.
        </p>
     
        {/* Email Input */}
        <div className="bg-white rounded-lg md:rounded-full p-1 border border-gray-200 max-w-xs sm:max-w-md md:max-w-xl mx-auto flex flex-col sm:flex-row gap-2">
          <input 
            type="text" 
            className="outline-none flex-1 px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base rounded-full sm:rounded-none" 
            placeholder="place@gmail.com" 
          />
          <button className="px-4 py-2 sm:py-3 bg-primary text-white font-medium rounded-lg md:rounded-full text-sm sm:text-base hover:bg-primary/90 transition-colors">
            Subscribe Now
          </button>
        </div>

        {/* Help Link */}
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-medium">
          <p className="text-gray-700">Looking for help?</p>
          <Link href={'/'} className="text-primary hover:underline">Get in touch with us</Link>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-7 pt-8 sm:pt-12">
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-lg overflow-hidden border border-gray-200">
            <Image 
              src={'/images/hero-banner.jpg'} 
              alt="Business strategy meeting"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              priority
            />
          </div>
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-lg overflow-hidden border border-gray-200">
            <Image 
              src={'/images/hero-banner-2.jpg'} 
              alt="Team collaboration"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection