"use client"
import Image from 'next/image'
import React from 'react'
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi'
import { IoMdStar } from 'react-icons/io'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Upcover transformed our digital presence completely. Their strategic approach delivered measurable results within just three months.",
      name: "Jhone Down",
      role: "Marketing Manager",
      company: "TechSolutions Inc."
    },
    {
      id: 2,
      quote: "The team's expertise in conversion optimization helped us increase our lead generation by 140% year-over-year.",
      name: "Sarah Smith",
      role: "Director of Growth",
      company: "GrowthHackers"
    },
    {
      id: 3,
      quote: "Working with Upcover was a game-changer for our e-commerce business. Our online sales grew by 85% in six months.",
      name: "Mike Johnson",
      role: "CEO",
      company: "UrbanStyle"
    },
    {
      id: 4,
      quote: "Their data-driven approach to marketing helped us identify new market opportunities we hadn't considered before.",
      name: "Emily Wilson",
      role: "CMO",
      company: "Nexus Enterprises"
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  }

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it - here's what our clients say about working with us
          </p>
        </div>
        
        <div className="relative">
          <Slider {...settings} className="testimonial-slider px-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-3 focus:outline-none">
                <div className="bg-white p-8 rounded-xl shadow-md h-full flex flex-col">
                  <div className="flex-1">
                    <div className="flex justify-center text-primary mb-4">
                      <BiSolidQuoteAltLeft className="w-6 h-6" />
                    </div>
                    <blockquote className="text-gray-600 text-center mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <IoMdStar key={i} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="inline-block mx-auto mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 relative">
                        <Image 
                          src={`/images/user-${testimonial.id}.jpg`}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-primary text-sm font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection