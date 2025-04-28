import React from 'react'
import { FaCheck, FaRegStar, FaStar } from 'react-icons/fa'
import { IoRocketSharp } from 'react-icons/io5'

const pricingPlans = [
    {
        name: "Basic Plan",
        price: "$29",
        period: "/month",
        description: "Perfect for small businesses getting started",
        popular: false,
        features: [
            "5 Projects",
            "10GB Storage",
            "Basic Analytics",
            "24/7 Support",
            "Email Assistance"
        ],
        icon: FaRegStar
    },
    {
        name: "Professional Plan",
        price: "$79",
        period: "/month",
        description: "Ideal for growing businesses with more needs",
        popular: true,
        features: [
            "Unlimited Projects",
            "50GB Storage",
            "Advanced Analytics",
            "Priority Support",
            "Phone & Email Support",
            "API Access"
        ],
        icon: FaStar
    },
    {
        name: "Enterprise Plan",
        price: "$199",
        period: "/month",
        description: "For large organizations with complex requirements",
        popular: false,
        features: [
            "Unlimited Projects",
            "500GB Storage",
            "Advanced Analytics",
            "Dedicated Account Manager",
            "24/7 VIP Support",
            "Custom Integrations",
            "White-label Solutions"
        ],
        icon: IoRocketSharp
    }
]

const PricingSection = () => {
    return (
        <div className='bg-gray-50 py-[90px] md:py-[130px] lg:py-[170px]'>
            <div className='container space-y-3'>
                <h2 className='section-title text-center'>Pricing Plans</h2>
                <p className='section-description max-w-xl mx-auto text-center'>Choose the perfect plan for your business needs. All plans come with a 30-day money-back guarantee.</p>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10'>
                    {pricingPlans.map((plan, index) => (
                        <div 
                            key={index} 
                            className={`relative p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 
                                ${plan.popular ? 'border-2 border-primary transform md:-translate-y-5' : 'border border-gray-200'}`}
                        >
                            {plan.popular && (
                                <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full'>
                                    Most Popular
                                </div>
                            )}
                            
                            <div className='flex items-center mb-6'>
                                <plan.icon className={`w-10 h-10 p-2 rounded-md mr-4 ${plan.popular ? 'text-primary bg-primary/10' : 'text-gray-600 bg-gray-100'}`} />
                                <div>
                                    <h3 className='text-xl font-bold text-gray-800'>{plan.name}</h3>
                                    <p className='text-gray-500 text-sm'>{plan.description}</p>
                                </div>
                            </div>
                            
                            <div className='mb-8'>
                                <span className='text-4xl font-bold text-gray-900'>{plan.price}</span>
                                <span className='text-gray-500'>{plan.period}</span>
                            </div>
                            
                            <ul className='space-y-3 mb-8'>
                                {plan.features.map((feature, i) => (
                                    <li key={i} className='flex items-center'>
                                        <FaCheck className='w-4 h-4 text-green-500 mr-2' />
                                        <span className='text-gray-600'>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <button 
                                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-300
                                    ${plan.popular 
                                        ? 'bg-primary text-white hover:bg-primary/90' 
                                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                            >
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
                
                <div className='text-center text-gray-500'>
                    <p>Need a custom solution? <a href="#" className='text-primary font-medium hover:underline'>Contact us</a> for enterprise pricing.</p>
                </div>
            </div>
        </div>
    )
}

export default PricingSection