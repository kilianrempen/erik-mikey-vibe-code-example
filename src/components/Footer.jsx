import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">SlapBack</span>
            </div>
            <p className="text-gray-300 text-sm">
              Professional face slapping services delivered with precision and care.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/pricing" className="hover:text-white transition-colors">Individual Sessions</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Corporate Packages</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Subscription Plans</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Gift Cards</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>hello@slapback.com</li>
              <li>1-800-SLAP-BACK</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2024 SlapBack. All rights reserved. |
            <Link to="/" className="hover:text-white transition-colors"> Privacy Policy</Link> |
            <Link to="/" className="hover:text-white transition-colors"> Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer