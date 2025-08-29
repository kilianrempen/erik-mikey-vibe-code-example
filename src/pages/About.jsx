import React from 'react';
import { Award, Heart, Star, Target, Zap, Users, Shield } from 'lucide-react';
import sarahImage from '../assets/sarah.png';
import marcusImage from '../assets/marcus.png';
import jenniferImage from '../assets/jennifer.png';
import davidImage from '../assets/david.png';
import lisaImage from '../assets/lisa.png';
import rafaelImage from '../assets/rafael.png';

const About = () => {
  const employees = [
    {
      name: "Sarah 'The Precision' Chen",
      title: "Senior Slap Specialist",
      bio: "With 8 years of professional slapping experience, Sarah brings surgical precision to every impact. Former competitive athlete turned therapeutic specialist, she believes in the power of controlled impact for mental clarity.",
      specialties: ["Executive Power Slaps", "Corporate Team Building", "Stress Relief Therapy"],
      certifications: ["Certified Impact Therapist", "Corporate Wellness Coach", "CPR/First Aid"],
      passion: "Helping entrepreneurs break through mental barriers and achieve breakthrough moments.",
      rating: 4.9,
      reviews: 247,
      image: sarahImage
    },
    {
      name: "Marcus 'The Gentle Giant' Rodriguez",
      title: "Lead Therapy Slapper",
      bio: "Standing at 6'4 but with the gentlest touch in the business, Marcus specializes in therapeutic slapping for anxiety and stress relief. His background in psychology gives him unique insight into the mental benefits of controlled impact.",
      specialties: ["Anxiety Relief Slaps", "Gentle Wake-Up Sessions", "PTSD Support Therapy"],
      certifications: ["Licensed Therapist", "Impact Psychology Specialist", "Trauma-Informed Care"],
      passion: "Using therapeutic slapping to help people overcome anxiety and find their inner strength.",
      rating: 4.8,
      reviews: 189,
      image: marcusImage
    },
    {
      name: "Jennifer 'Lightning' Kim",
      title: "Performance Enhancement Specialist",
      bio: "Former Olympic coach turned performance enhancement specialist, Jennifer uses her lightning-fast techniques to boost productivity and focus. Her clients include Fortune 500 executives and professional athletes.",
      specialties: ["Performance Slaps", "Athletic Focus Sessions", "Productivity Boosts"],
      certifications: ["Performance Psychology PhD", "Olympic Coaching License", "Sports Medicine"],
      passion: "Unlocking human potential through strategic physical intervention and mental conditioning.",
      rating: 5.0,
      reviews: 312,
      image: jenniferImage
    },
    {
      name: "David 'The Architect' Thompson",
      title: "Corporate Wellness Director",
      bio: "With a background in corporate leadership and organizational psychology, David designs custom slapping programs for companies looking to boost team morale and break through group stagnation.",
      specialties: ["Corporate Team Building", "Leadership Development", "Group Dynamics"],
      certifications: ["MBA Organizational Psychology", "Corporate Wellness Director", "Team Dynamics Expert"],
      passion: "Transforming corporate culture through innovative wellness approaches that actually work.",
      rating: 4.7,
      reviews: 156,
      image: davidImage
    },
    {
      name: "Lisa 'The Whisper' Johnson",
      title: "Gentle Therapy Specialist",
      bio: "Lisa specializes in the softest, most therapeutic slapping techniques. Her clients include those with sensory sensitivities and anyone seeking the gentlest possible wake-up experience.",
      specialties: ["Sensory-Sensitive Sessions", "Elderly Care", "Children's Therapy"],
      certifications: ["Pediatric Therapy License", "Sensory Integration Specialist", "Holistic Health Practitioner"],
      passion: "Making therapeutic slapping accessible to everyone, regardless of their comfort level or needs.",
      rating: 4.9,
      reviews: 134,
      image: lisaImage
    },
    {
      name: "Rafael 'The Machine' Martinez",
      title: "Maximum Impact Specialist",
      bio: "For those seeking the ultimate breakthrough experience, Rafael delivers maximum-impact sessions designed for life-changing moments. Each session is carefully calibrated for safety and effectiveness.",
      specialties: ["Maximum Impact Sessions", "Breakthrough Therapy", "Life Change Events"],
      certifications: ["Advanced Impact Therapy", "Safety Protocol Expert", "Emergency Response"],
      passion: "Creating transformative moments that change people's lives forever through precise, powerful intervention.",
      rating: 4.8,
      reviews: 98,
      image: rafaelImage
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary-600" />,
      title: "Precision",
      description: "Every slap is delivered with surgical precision, calibrated to your specific needs and tolerance level."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-600" />,
      title: "Safety First",
      description: "We maintain the highest safety standards with medical-grade equipment and certified professionals."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary-600" />,
      title: "Compassion",
      description: "Delivered with genuine care for your well-being and growth. We're here to help, not hurt."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary-600" />,
      title: "Effectiveness",
      description: "Proven results backed by client testimonials and scientific research into therapeutic impact."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">About SlapBack</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We're not just slapping faces - we're delivering breakthrough moments, one precise impact at a time. 
              Founded on the principle that sometimes the best way forward is a gentle (or not-so-gentle) push.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8">
            To revolutionize personal development through scientifically-backed therapeutic slapping techniques, 
            delivered by certified professionals in a safe, controlled environment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-600">
            <p>
              SlapBack was founded in 2021 by a group of therapists, coaches, and wellness professionals 
              who recognized a missing element in personal development: the power of controlled, 
              therapeutic physical intervention.
            </p>
            <p>
              What started as an underground movement among Silicon Valley executives seeking 
              breakthrough moments has evolved into a professional service backed by scientific 
              research and certified practitioners.
            </p>
            <p>
              Our approach combines ancient wisdom about the power of physical intervention with 
              modern understanding of psychology, safety protocols, and therapeutic techniques. 
              We've served over 10,000 clients and maintain a 97% satisfaction rate.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Certified professionals dedicated to delivering safe, effective therapeutic slapping experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {employees.map((employee, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-center mb-4">
                  <img src={employee.image} alt={employee.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="text-xl font-bold text-gray-900">{employee.name}</h3>
                  <p className="text-primary-600 font-medium">{employee.title}</p>
                  <div className="flex items-center justify-center mt-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(employee.rating) ? 'fill-current' : 'fill-gray-300'}`} />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{employee.rating} ({employee.reviews} reviews)</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">About</h4>
                    <p className="text-gray-600 text-sm">{employee.bio}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {employee.specialties.map((specialty, i) => (
                        <li key={i} className="flex items-center">
                          <Award className="w-3 h-3 text-primary-600 mr-2" />
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Passion</h4>
                    <p className="text-gray-600 text-sm italic">"{employee.passion}"</p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{employee.certifications.join(' • ')}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <p className="text-primary-100">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">97%</div>
              <p className="text-primary-100">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">6</div>
              <p className="text-primary-100">Certified Specialists</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-primary-100">Corporate Partners</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About