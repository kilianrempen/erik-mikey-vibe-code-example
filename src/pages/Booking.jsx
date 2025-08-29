import React, { useState } from 'react'
import Calendar from 'react-calendar'
import { format } from 'date-fns'
import 'react-calendar/dist/Calendar.css'
import { Clock, MapPin, User, Phone, Mail, MessageSquare } from 'lucide-react'

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
    serviceType: '',
    intensity: 'medium'
  })

  const services = [
    { id: 'gentle', name: 'Gentle Wake-Up Slap', price: 49, duration: '15 min' },
    { id: 'standard', name: 'Standard Reality Check', price: 79, duration: '20 min' },
    { id: 'executive', name: 'Executive Power Slap', price: 129, duration: '30 min' },
    { id: 'corporate', name: 'Corporate Team Slap', price: 299, duration: '60 min' }
  ]

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send data to a backend
    alert('Booking submitted! We\'ll contact you within 30 minutes to confirm.')
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Session</h1>
          <p className="text-xl text-gray-600">Select your preferred date, time, and service</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calendar Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Select Date</h2>
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              className="w-full border-0"
              tileClassName={({ date, view }) =>
                view === 'month' && date.getDay() === 0 || date.getDay() === 6
                  ? 'text-red-600'
                  : null
              }
            />
            <div className="mt-4 p-4 bg-primary-50 rounded-lg">
              <p className="text-sm text-primary-800">
                <strong>Selected:</strong> {format(selectedDate, 'EEEE, MMMM d, yyyy')}
              </p>
            </div>
          </div>

          {/* Time and Service Selection */}
          <div className="space-y-6">
            {/* Time Selection */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Select Time
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                      selectedTime === time
                        ? 'bg-primary-600 text-white border-primary-600'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Service Selection */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Select Service</h3>
              <div className="space-y-3">
                {services.map((service) => (
                  <label
                    key={service.id}
                    className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-colors ${
                      selectedService === service.id
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="service"
                        value={service.id}
                        checked={selectedService === service.id}
                        onChange={(e) => {
                          setSelectedService(e.target.value)
                          setFormData({ ...formData, serviceType: service.name })
                        }}
                        className="w-4 h-4 text-primary-600"
                      />
                      <div className="ml-3">
                        <p className="font-medium text-gray-900">{service.name}</p>
                        <p className="text-sm text-gray-500">{service.duration}</p>
                      </div>
                    </div>
                    <span className="font-bold text-primary-600">${service.price}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Information</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline-block w-4 h-4 mr-1" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline-block w-4 h-4 mr-1" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="inline-block w-4 h-4 mr-1" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="inline-block w-4 h-4 mr-1" />
                  Service Address
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="123 Main St, City, State 12345"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Slap Intensity
              </label>
              <select
                name="intensity"
                value={formData.intensity}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="gentle">Gentle - Light touch, therapeutic</option>
                <option value="medium">Medium - Standard wake-up call</option>
                <option value="firm">Firm - Strong reality check</option>
                <option value="maximum">Maximum - Breakthrough moment</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MessageSquare className="inline-block w-4 h-4 mr-1" />
                Special Instructions
              </label>
              <textarea
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Any special requests, allergies, or preferences..."
              />
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Booking Summary</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p><strong>Date:</strong> {format(selectedDate, 'MMMM d, yyyy')}</p>
                <p><strong>Time:</strong> {selectedTime || 'Not selected'}</p>
                <p><strong>Service:</strong> {formData.serviceType || 'Not selected'}</p>
                <p><strong>Intensity:</strong> {formData.intensity}</p>
              </div>
            </div>

            <button
              type="submit"
              disabled={!selectedTime || !selectedService}
              className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Booking