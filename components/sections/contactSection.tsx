import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'

const contactInfo = [
  {
    icon: FaPhoneAlt,
    title: "Phone Number",
    info: "+1 (555) 123-4567",
    description: "Mon-Fri: 9:00 AM - 6:00 PM"
  },
  {
    icon: FaEnvelope,
    title: "Email Address",
    info: "contact@yourcompany.com",
    description: "Support available 24/7"
  },
  {
    icon: FaMapMarkerAlt,
    title: "Office Location",
    info: "123 Business Ave, Suite 456",
    description: "New York, NY 10001"
  },
  {
    icon: FaClock,
    title: "Working Hours",
    info: "Monday - Friday",
    description: "9:00 AM - 6:00 PM"
  }
]

const ContactSection = () => {
  return (
    <div className='bg-gray-50 py-[90px] md:py-[130px] lg:py-[170px]'>
      <div className='container space-y-3'>
        <h2 className='section-title text-center'>Get In Touch</h2>
        <p className='section-description max-w-xl mx-auto text-center'>
          Have questions or want to discuss a project? We'd love to hear from you.
        </p>

        <div className='grid md:grid-cols-2 gap-12 py-10'>
          {/* Contact Information */}
          <div className='space-y-8'>
            <div className='grid sm:grid-cols-2 gap-6'>
              {contactInfo.map((item, index) => (
                <div key={index} className='p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300'>
                  <div className='flex items-start'>
                    <div className='p-3 bg-primary/10 text-primary rounded-lg mr-4'>
                      <item.icon className='w-5 h-5' />
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-800 mb-1'>{item.title}</h3>
                      <p className='text-gray-700 font-medium'>{item.info}</p>
                      <p className='text-gray-500 text-sm mt-2'>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='bg-white p-8 rounded-xl shadow-sm'>
              <h3 className='text-xl font-bold text-gray-800 mb-4'>Find Us On Map</h3>
              <div className='aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden'>
                {/* Replace with your actual map embed */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291865!2d-73.98784492416403!3d40.74844097138972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689874326784!5m2!1sen!2sus" 
                  className='w-full h-full'
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-white p-8 rounded-xl shadow-sm'>
            <h3 className='text-xl font-bold text-gray-800 mb-6'>Send Us a Message</h3>
            <form className='space-y-5'>
              <div className='grid sm:grid-cols-2 gap-5'>
                <div>
                  <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>Full Name</label>
                  <input
                    type='text'
                    id='name'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all'
                    placeholder='John Doe'
                    required
                  />
                </div>
                <div>
                  <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>Email Address</label>
                  <input
                    type='email'
                    id='email'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all'
                    placeholder='your@email.com'
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor='subject' className='block text-sm font-medium text-gray-700 mb-1'>Subject</label>
                <input
                  type='text'
                  id='subject'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all'
                  placeholder='How can we help?'
                  required
                />
              </div>
              <div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-1'>Your Message</label>
                <textarea
                  id='message'
                  rows={5}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all'
                  placeholder='Tell us about your project...'
                  required
                ></textarea>
              </div>
              <button
                type='submit'
                className='w-full flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors duration-300 shadow-md hover:shadow-lg'
              >
                Send Message <FiSend className='ml-2' />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection