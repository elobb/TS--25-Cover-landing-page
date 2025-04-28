import React from 'react'
import { BiCube } from 'react-icons/bi'
import { CiBadgeDollar, CiGrid41 } from 'react-icons/ci'
import { FaArrowTrendUp, FaCamera, FaRegCompass } from 'react-icons/fa6'
import { IoNotifications } from 'react-icons/io5'
import { MdOutlineScreenshotMonitor } from 'react-icons/md'

const serviceArray = [
    {
        name: "Grow Your Business",
        description: "We help businesses expand through strategic planning and execution.",
        icon: FaArrowTrendUp
    },
    {
        name: "Drive More Sales",
        description: "Boost your revenue with our proven sales optimization techniques.",
        icon: CiBadgeDollar
    },
    {
        name: "Handled By Experts",
        description: "Our team of professionals will guide you through every step.",
        icon: FaRegCompass
    },
    {
        name: "Discussion For Ideas",
        description: "Collaborative sessions to brainstorm and refine your concepts.",
        icon: CiGrid41
    },
    {
        name: "Web Design",
        description: "Custom, responsive websites that convert visitors to customers.",
        icon: BiCube
    },
    {
        name: "Network Security",
        description: "Protect your digital assets with our comprehensive security solutions.",
        icon: FaCamera
    },
    {
        name: "Social Media",
        description: "Maximize your online presence with targeted social strategies.",
        icon: IoNotifications
    },
    {
        name: "Design & Branding",
        description: "Create a memorable brand identity that stands out.",
        icon: MdOutlineScreenshotMonitor
    },
]

const ServiceSection = () => {
    return (
        <section className='bg-secondary py-16 md:py-24 lg:py-32'>
            <div className='container px-4 sm:px-6'>
                <div className='text-center max-w-3xl mx-auto mb-12 md:mb-16'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                        Our Services
                    </h2>
                    <p className='text-gray-600 text-lg'>
                        Comprehensive solutions tailored to meet your business needs and drive growth.
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {serviceArray.map((item, index) => (
                        <div 
                            key={index} 
                            className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden'
                        >
                            <div className='relative z-10'>
                                <div className='w-14 h-14 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-300 mb-6'>
                                    <item.icon className='text-primary text-2xl' />
                                </div>
                                <h3 className='text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200'>
                                    {item.name}
                                </h3>
                                <p className='text-gray-600 mb-5'>
                                    {item.description}
                                </p>
                                <button className='text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300'>
                                    Learn more
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                            <div className='absolute -right-5 -bottom-5 opacity-10 group-hover:opacity-20 transition-opacity duration-500'>
                                <item.icon className='w-24 h-24' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceSection