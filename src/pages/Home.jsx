import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Users, Shield, Clock, Gift, Zap } from 'lucide-react'
import HeroImage from '../assets/hero-slap.png'
import Logo from '../assets/logo.png'

const Home = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: "Expert Professionals",
      description: "Certified face-slapping specialists with years of experience"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-600" />,
      title: "Safe & Sanitary",
      description: "Medical-grade gloves and sanitization protocols"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary-600" />,
      title: "Flexible Scheduling",
      description: "Same-day booking available with 24/7 customer support"
    },
    {
      icon: <Gift className="w-8 h-8 text-primary-600" />,
      title: "Gift Certificates",
      description: "Perfect for birthdays, holidays, or corporate events"
    }
  ]

  const services = [
    {
      name: "Gentle Wake-Up",
      description: "Soft, therapeutic slaps to gently bring you back to reality",
      price: "$49",
      duration: "15 min",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 10c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z" />
        </svg>
      )
    },
    {
      name: "Standard Reality Check",
      description: "Medium-intensity slaps for daily motivation and focus",
      price: "$79",
      duration: "20 min",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: "Executive Power Slap",
      description: "Maximum impact for breakthrough moments and big decisions",
      price: "$129",
      duration: "30 min",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 21l9-11h-7l7-7h-7" />
          <circle cx="8" cy="21" r="1" fill="currentColor" />
        </svg>
      )
    },
    {
      name: "Corporate Package",
      description: "Team-building sessions for your entire office",
      price: "$299",
      duration: "60 min",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11v6" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 11.5a2 2 0 110-4 2 2 0 010 4z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11.5a2 2 0 110-4 2 2 0 010 4z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 14h8" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 17h4" />
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-primary-600 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Professional Face
                <br />
                <span className="text-yellow-300">Slapping Services</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Experience the clarity you've been missing. Our certified specialists deliver 
                precision slaps to reset your perspective and boost productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/booking"
                  className="btn-primary text-lg px-8 py-4 bg-white text-primary-600 hover:bg-gray-100"
                >
                  <Zap className="inline-block w-5 h-5 mr-2" />
                  Book Now
                </Link>
                <Link
                  to="/pricing"
                  className="btn-secondary text-lg px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-end justify-center pb-12"
                     style={{
                       backgroundImage: `url(${HeroImage})`,
                       backgroundSize: 'cover',
                       backgroundPosition: 'center'
                     }}>
                  <div className="text-center text-white">
                    <p className="text-2xl font-bold mb-2 drop-shadow-2xl">Professional Impact</p>
                    <p className="text-xl font-medium drop-shadow-2xl">Delivered with Precision</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-full flex items-center justify-center">
                  <img src={Logo} alt="logo"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose SlapBack?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're not just slapping faces - we're delivering clarity, motivation, and breakthrough moments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our range of carefully crafted slapping experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card flex flex-col h-full">
                <div className="flex-grow text-center">
                  {service.icon}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
                <div className="text-center">
                  <div className="mb-4 text-center">
                    <span className="text-2xl font-bold   text-primary-600">{service.price}</span>
                    <span className="text-gray-500 ml-2">/ {service.duration}</span>
                  </div>
                  <Link
                    to="/booking"
                    className="btn-primary w-full"
                  >
                    <Calendar className="inline-block w-4 h-4 mr-2" />
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready for Your Wake-Up Call?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of satisfied customers who've discovered the power of professional face slapping.
            Book your first session today and get 20% off.
          </p>
          <Link
            to="/booking"
            className="btn-primary text-lg px-8 py-4 bg-white text-primary-600 hover:bg-gray-100"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home