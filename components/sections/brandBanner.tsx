import Image from 'next/image'
import React from 'react'

const brandNameArray = [
    {
        name: "Amazon",
        url: "/images/svg/amazon.svg"
    },
    {
        name: "Google",
        url: "/images/svg/google.svg"
    },
    {
        name: "Lenovo",
        url: "/images/svg/lenovo.svg"
    },
    {
        name: "PayPal",
        url: "/images/svg/paypal.svg"
    },
    {
        name: "Shopify",
        url: "/images/svg/shopify.svg"
    },
    {
        name: "Spotify",
        url: "/images/svg/spotify.svg"
    },
]

const BrandBanner = () => {
    return (
        <div className='py-6 sm:py-8 border-b border-gray-200'>
            <div className='container px-4'>
                <div className='flex items-center justify-center flex-wrap gap-x-8 gap-y-6 sm:gap-x-12 lg:gap-x-16 xl:gap-x-20'>
                    {brandNameArray.map((item, index) => (
                        <div key={index} className='relative h-6 w-auto opacity-70 hover:opacity-100 transition-opacity duration-200'>
                            <Image 
                                src={item.url} 
                                alt={`${item.name} logo`}
                                width={120}
                                height={30}
                                className='object-contain'
                                loading='lazy'
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BrandBanner