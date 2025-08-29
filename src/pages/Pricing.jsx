import React, { useState } from 'react';
import { Check, Star, Gift, Users, Zap, Clock, TrendingUp, Award } from 'lucide-react';

const Pricing = () => {
  const [selectedTab, setSelectedTab] = useState('individual');

  const individualPackages = [
    {
      name: "Gentle Wake-Up",
      price: 49,
      originalPrice: 59,
      description: "Perfect for first-timers and sensitive clients",
      features: [
        "15-minute gentle session",
        "Soft-glove technique",
        "Stress relief focus",
        "Basic consultation",
        "Same-day booking available"
      ],
      intensity: "Gentle",
      duration: "15 min",
      popular: false
    },
    {
      name: "Standard Reality Check",
      price: 79,
      originalPrice: 99,
      description: "Our most popular service for daily motivation",
      features: [
        "20-minute standard session",
        "Medium-intensity technique",
        "Productivity boost focus",
        "Detailed consultation",
        "Priority booking",
        "Follow-up support"
      ],
      intensity: "Medium",
      duration: "20 min",
      popular: true
    },
    {
      name: "Executive Power Slap",
      price: 129,
      originalPrice: 159,
      description: "Maximum impact for breakthrough moments",
      features: [
        "30-minute intensive session",
        "Maximum-intensity technique",
        "Life-changing focus",
        "Comprehensive consultation",
        "VIP booking",
        "7-day follow-up",
        "Progress tracking",
        "Emergency callback"
      ],
      intensity: "Maximum",
      duration: "30 min",
      popular: false
    }
  ];

  const subscriptionPlans = [
    {
      name: "Starter",
      price: 149,
      billing: "monthly",
      description: "For occasional clarity seekers",
      features: [
        "2 sessions per month",
        "Choose any service level",
        "Flexible scheduling",
        "20% off additional sessions",
        "Priority booking"
      ],
      savings: "Save $27/month",
      popular: false
    },
    {
      name: "Professional",
      price: 299,
      billing: "monthly",
      description: "For regular reality checks",
      features: [
        "6 sessions per month",
        "All service levels included",
        "Dedicated specialist",
        "30% off additional sessions",
        "VIP scheduling",
        "Progress tracking",
        "Monthly check-ins"
      ],
      savings: "Save $175/month",
      popular: true
    },
    {
      name: "Executive",
      price: 599,
      billing: "monthly",
      description: "For maximum impact and growth",
      features: [
        "Unlimited sessions",
        "All service levels included",
        "Personal concierge",
        "50% off guest sessions",
        "Emergency sessions (2hr response)",
        "Custom programs",
        "Quarterly retreats",
        "Team building sessions"
      ],
      savings: "Save $500+/month",
      popular: false
    }
  ];

  const corporatePackages = [
    {
      name: "Team Building",
      price: 299,
      description: "Perfect for small teams (5-10 people)",
      features: [
        "60-minute group session",
        "Customized intensity levels",
        "Team bonding exercises",
        "Professional facilitation",
        "Follow-up materials"
      ],
      groupSize: "5-10 people",
      duration: "60 min"
    },
    {
      name: "Department Boost",
      price: 899,
      description: "For larger teams (11-25 people)",
      features: [
        "90-minute intensive session",
        "Multiple specialists",
        "Breakthrough exercises",
        "Leadership integration",
        "Monthly check-ins for 3 months"
      ],
      groupSize: "11-25 people",
      duration: "90 min"
    },
    {
      name: "Executive Retreat",
      price: 2499,
      description: "Company-wide transformation",
      features: [
        "Half-day workshop",
        "Full team of specialists",
        "Custom program design",
        "Leadership training",
        "3-month follow-up program",
        "Quarterly assessments"
      ],
      groupSize: "25+ people",
      duration: "4 hours"
    }
  ];

  const bulkPricing = [
    {
      quantity: "5-10 sessions",
      discount: "15%",
      description: "Perfect for regular users"
    },
    {
      quantity: "11-25 sessions",
      discount: "25%",
      description: "Great for teams"
    },
    {
      quantity: "26-50 sessions",
      discount: "35%",
      description: "Enterprise ready"
    },
    {
      quantity: "50+ sessions",
      discount: "45%",
      description: "Maximum savings"
    }
  ];

  const giftOptions = [
    {
      type: "Digital Gift Card",
      price: "Any amount",
      description: "Instant delivery via email",
      features: ["Custom message", "Instant delivery", "No expiration", "Easy redemption"]
    },
    {
      type: "Physical Gift Box",
      price: "$25 + value",
      description: "Beautifully packaged experience",
      features: ["Premium packaging", "Personal note", "Session guide", "Keepsake certificate"]
    },
    {
      type: "Corporate Gifts",
      price: "Custom pricing",
      description: "Perfect for employee appreciation",
      features: ["Bulk discounts", "Custom branding", "Team packages", "Flexible scheduling"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Pricing & Packages</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Choose the perfect slapping experience for your needs. From gentle wake-ups to corporate transformations.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-1 bg-gray-100 p-1 rounded-lg">
            {[
              { id: 'individual', label: 'Individual Sessions' },
              { id: 'subscription', label: 'Subscriptions' },
              { id: 'corporate', label: 'Corporate' },
              { id: 'gifts', label: 'Gifts & Bulk' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  selectedTab === tab.id
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Packages */}
      {selectedTab === 'individual' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {individualPackages.map((pkg, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg p-8 relative ${
                  pkg.popular ? 'ring-2 ring-primary-600' : ''
                }`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-4xl font-bold text-primary-600">${pkg.price}</span>
                      <span className="text-gray-500 ml-2">/{pkg.duration}</span>
                    </div>
                    {pkg.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${pkg.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full btn-primary">
                    Book {pkg.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Subscription Plans */}
      {selectedTab === 'subscription' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscription Plans</h2>
              <p className="text-xl text-gray-600">Regular sessions with maximum savings</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {subscriptionPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg p-8 relative ${
                  plan.popular ? 'ring-2 ring-primary-600' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Best Value
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-4xl font-bold text-primary-600">${plan.price}</span>
                      <span className="text-gray-500 ml-2">/month</span>
                    </div>
                    <p className="text-sm text-green-600 font-medium">{plan.savings}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full btn-primary">
                    Start {plan.name} Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Corporate Packages */}
      {selectedTab === 'corporate' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Corporate Packages</h2>
              <p className="text-xl text-gray-600">Transform your team's performance and morale</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {corporatePackages.map((pkg, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-4xl font-bold text-primary-600">${pkg.price}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      <p>{pkg.groupSize}</p>
                      <p>{pkg.duration}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full btn-primary">
                    Get Corporate Quote
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gifts and Bulk */}
      {selectedTab === 'gifts' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Gift Options */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Gift Options</h2>
                <div className="space-y-6">
                  {giftOptions.map((gift, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                          <Gift className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{gift.type}</h3>
                          <p className="text-primary-600 font-medium">{gift.price}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{gift.description}</p>
                      
                      <ul className="space-y-2">
                        {gift.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600">
                            <Check className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <button className="mt-4 btn-primary">
                        Order {gift.type}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bulk Pricing */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Bulk Pricing</h2>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Quantity</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Discount</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Perfect For</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bulkPricing.map((item, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 px-4 font-medium">{item.quantity}</td>
                          <td className="py-3 px-4">
                            <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm font-medium">
                              {item.discount}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-600">{item.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Note:</strong> Bulk discounts apply to all service levels and can be combined 
                      with subscription plans for maximum savings.
                    </p>
                  </div>
                  
                  <button className="mt-4 w-full btn-primary">
                    Get Bulk Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our pricing</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: "Can I change my subscription plan anytime?",
                a: "Yes! You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at the start of your next billing cycle."
              },
              {
                q: "Do you offer discounts for first-time customers?",
                a: "Absolutely! New customers get 20% off their first session. We also offer special promotions throughout the year."
              },
              {
                q: "Are gift cards refundable?",
                a: "Gift cards are non-refundable but never expire. They can be transferred to another person if needed."
              },
              {
                q: "Can I mix and match services in a subscription?",
                a: "Yes! All subscription plans allow you to choose any service level for each session based on your current needs."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing