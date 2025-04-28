import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { BsPhone } from 'react-icons/bs'
import { HiLocationMarker } from 'react-icons/hi'

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Company Info */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-white">Your<span className="text-primary">Brand</span></h3>
            <p className="text-gray-400">
              We help businesses grow through innovative digital solutions and strategic marketing approaches.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors duration-300">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors duration-300">
                <FaTwitter size={14} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors duration-300">
                <FaLinkedinIn size={14} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors duration-300">
                <FaInstagram size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-10">
            <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-700">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-700">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Web Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">App Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">SEO Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Graphic Design</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-700">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <HiLocationMarker className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">123 Business Avenue, Suite 456, San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center">
                <BsPhone className="text-primary mr-3" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <IoMdMail className="text-primary mr-3" />
                <span className="text-gray-400">info@yourbrand.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-800 rounded-lg p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Subscribe to Newsletter</h4>
              <p className="text-gray-400">Get the latest updates and news by subscribing to our newsletter</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary outline-none"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} YourBrand. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-300 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-300 text-sm">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection