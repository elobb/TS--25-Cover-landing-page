import Image from 'next/image'
import React from 'react'

const StakeholderSection = () => {
    return (
        <div className='py-16 md:py-24 lg:py-32 xl:py-40'>
            <div className='container px-4 sm:px-6'>
                <div className='flex flex-col lg:flex-row items-center gap-8 md:gap-12 xl:gap-20'>
                    {/* Image Section */}
                    <div className='w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[450px] relative rounded-xl overflow-hidden shadow-md'>
                        <Image 
                            src={'/images/furniture.jpg'} 
                            alt='Team collaboration meeting'
                            fill
                            className='object-cover'
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                        />
                    </div>

                    {/* Content Section */}
                    <div className='w-full lg:w-1/2 space-y-4 sm:space-y-6'>
                        <p className='text-sm sm:text-base uppercase font-semibold text-primary tracking-wider'>
                            Who Are We?
                        </p>
                        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold leading-tight sm:leading-snug text-gray-900'>
                            We're a global stakeholder relations and partnership building consultancy.
                        </h2>
                        <p className='text-gray-600 text-base sm:text-lg leading-relaxed'>
                            Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StakeholderSection