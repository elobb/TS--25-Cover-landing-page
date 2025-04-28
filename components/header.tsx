"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const navItems = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "About",
        url: "/"
    },
    {
        name: "Contact",
        url: "/"
    },
    {
        name: "Pricing",
        url: "/"
    },
    {
        name: "Blog",
        url: "/"
    },
]

const HeaderSection = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className='py-6 bg-white sticky top-0 left-0 w-full z-50 shadow-sm'>
            <div className='container flex gap-6 items-center justify-between' >
                <Link href={'/'} className='text-xl font-semibold text-primary'>COVER</Link>
                
                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center gap-5 ms-auto'>
                    {navItems.map((item, index) => (
                        <Link 
                            key={index} 
                            href={item.url} 
                            className='uppercase text-gray-700 hover:text-primary/80 duration-300 text-sm font-medium'
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                
                <button className='hidden md:block btn'>Login</button>
                
                {/* Mobile Menu Button */}
                <button 
                    className='md:hidden text-gray-700 focus:outline-none'
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed inset-0 z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {/* Overlay */}
                <div 
                    className={`fixed inset-0 bg-black/50 ${isMenuOpen ? 'block' : 'hidden'}`}
                    onClick={toggleMenu}
                ></div>
                
                {/* Menu Content */}
                <div className={`relative z-50 w-4/5 max-w-xs h-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="p-6">
                        <Link 
                            href={'/'} 
                            className='text-xl font-semibold text-primary block mb-8'
                            onClick={toggleMenu}
                        >
                            COVER
                        </Link>
                        
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item, index) => (
                                <Link 
                                    key={index} 
                                    href={item.url} 
                                    className='uppercase text-gray-700 hover:text-primary/80 duration-300 text-sm font-medium'
                                    onClick={toggleMenu}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                        
                        <button className='btn mt-8 w-full'>Login</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderSection