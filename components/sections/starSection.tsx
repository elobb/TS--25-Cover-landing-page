"use client"
import React, { useState, useEffect } from 'react'
import { FiAward, FiUsers, FiSmile, FiCheckCircle } from 'react-icons/fi'

const stats = [
  {
    id: 1,
    icon: FiAward,
    value: 150,
    suffix: "+",
    label: "Projects Completed",
    color: "text-blue-500",
    percentage: 95
  },
  {
    id: 2,
    icon: FiUsers,
    value: 500,
    suffix: "+",
    label: "Satisfied Clients",
    color: "text-green-500",
    percentage: 98
  },
  {
    id: 3,
    icon: FiSmile,
    value: 100,
    suffix: "%",
    label: "Client Retention",
    color: "text-yellow-500",
    percentage: 100
  },
  {
    id: 4,
    icon: FiCheckCircle,
    value: 24,
    suffix: "/7",
    label: "Support Available",
    color: "text-purple-500",
    percentage: 100
  }
]

const StatsSection = () => {
  const [counters, setCounters] = useState(stats.map(stat => ({...stat, currentValue: 0})))

  useEffect(() => {
    const duration = 2000 // Animation duration in ms
    const interval = 20 // Update interval in ms
    const steps = duration / interval
    const incrementValues = stats.map(stat => stat.value / steps)

    const animation = setInterval(() => {
      setCounters(prevCounters => 
        prevCounters.map((counter, i) => {
          if (counter.currentValue < counter.value) {
            return {
              ...counter,
              currentValue: Math.min(
                counter.value,
                counter.currentValue + incrementValues[i]
              )
            }
          }
          return counter
        })
      )
    }, interval)

    return () => clearInterval(animation)
  }, [])

  return (
    <div className="bg-white py-[100px]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Our Achievements</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Delivering Excellence Through Numbers</h2>
            <p className="text-gray-600">
              Our metrics speak volumes about our commitment to quality and client satisfaction. 
              We measure success by the impact we create for our partners.
            </p>
            <div className="pt-4">
              <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors duration-300">
                Learn About Our Process
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {counters.map(stat => (
              <div key={stat.id} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className={`w-12 h-12 ${stat.color} bg-opacity-10 rounded-full flex items-center justify-center mb-4`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-gray-900">
                    {Math.floor(stat.currentValue)}
                  </span>
                  <span className="text-primary">{stat.suffix}</span>
                </div>
                <p className="text-gray-600 mb-4">{stat.label}</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`${stat.color} h-2 rounded-full`} 
                    style={{ width: `${stat.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
    
      </div>
    </div>
  )
}

export default StatsSection