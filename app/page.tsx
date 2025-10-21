'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Star, 
  CheckCircle, 
  Smartphone, 
  MessageCircle, 
  Camera, 
  Mic, 
  MapPin, 
  Shield, 
  Zap,
  ArrowRight,
  Play,
  ChevronDown,
  Menu,
  X,
  Download,
  Users,
  Stethoscope,
  Clock,
  Globe
} from 'lucide-react'
import DotGrid from '../components/DotGrid'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [activeTab, setActiveTab] = useState('testimonials')

  // Scroll detection and active tab highlighting
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)

      // Get section positions
      const testimonialsSection = document.getElementById('testimonials')
      const howItWorksSection = document.getElementById('how-it-works')
      const featuresSection = document.getElementById('features')
      const faqSection = document.getElementById('faq')

      if (testimonialsSection && howItWorksSection && featuresSection && faqSection) {
        const testimonialsTop = testimonialsSection.offsetTop - 150
        const howItWorksTop = howItWorksSection.offsetTop - 150
        const featuresTop = featuresSection.offsetTop - 150
        const faqTop = faqSection.offsetTop - 150

        if (scrollTop >= faqTop) {
          setActiveTab('faq')
        } else if (scrollTop >= featuresTop) {
          setActiveTab('features')
        } else if (scrollTop >= howItWorksTop) {
          setActiveTab('how-it-works')
        } else if (scrollTop >= testimonialsTop) {
          setActiveTab('testimonials')
        } else {
          setActiveTab('testimonials')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  const testimonials = [
    {
      name: "Ahmad K.",
      location: "Karachi",
      text: "IlaajAI helped me identify my skin rash within minutes. The AI gave me proper first-aid advice and connected me with a dermatologist nearby. Amazing service!",
      rating: 5
    },
    {
      name: "Fatima S.",
      location: "Lahore", 
      text: "As a mother, I love how I can quickly get health advice for my children. The voice feature in Urdu is so convenient when I'm busy.",
      rating: 5
    },
    {
      name: "Hassan M.",
      location: "Islamabad",
      text: "The photo analysis feature is incredible. I sent a picture of my injury and got instant first-aid instructions. Saved me a trip to the emergency room.",
      rating: 5
    },
    {
      name: "Ayesha R.",
      location: "Rawalpindi",
      text: "Living in a remote area, IlaajAI is a lifesaver. I can get medical advice anytime and find doctors when I need them most.",
      rating: 5
    },
    {
      name: "Omar T.",
      location: "Faisalabad",
      text: "The AI understands both English and Urdu perfectly. It's like having a doctor available 24/7 in my pocket.",
      rating: 5
    }
  ]

  const features = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "AI Chat in Urdu & English",
      description: "Chat with our AI doctor in your preferred language. Get instant health advice and symptom analysis."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photo Analysis",
      description: "Send photos of skin conditions, injuries, or affected areas for instant AI-powered visual analysis."
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Voice Notes",
      description: "Record voice messages explaining your symptoms. Perfect for when typing is difficult or you're on the go."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Find Nearby Doctors",
      description: "Get referrals to qualified doctors in your area who specialize in your specific health concern."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant First-Aid",
      description: "Receive immediate first-aid instructions and emergency guidance when you need it most."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy & Security",
      description: "Your health data is encrypted and secure. We follow medical privacy standards to protect your information."
    }
  ]

  const steps = [
    {
      number: "1",
      title: "Describe Your Symptoms",
      description: "Chat with our AI doctor, send a photo, or record a voice note explaining your health concern in Urdu or English."
    },
    {
      number: "2",
      title: "Get AI Analysis",
      description: "Receive instant health suggestions, first-aid advice, and preliminary assessment from our advanced AI system."
    },
    {
      number: "3",
      title: "Find the Right Doctor",
      description: "Get referrals to nearby qualified doctors who specialize in your specific condition for professional care."
    }
  ]

  const faqs = [
    {
      question: "Is IlaajAI free to use?",
      answer: "Yes! IlaajAI offers free basic consultations and first-aid advice. Premium features include priority AI responses, detailed health reports, and direct doctor connections."
    },
    {
      question: "How accurate is the AI medical advice?",
      answer: "Our AI is trained on medical databases and provides preliminary guidance. It's designed to help with initial assessment and first-aid, but always consult a qualified doctor for serious conditions."
    },
    {
      question: "Can I use IlaajAI in Urdu?",
      answer: "Absolutely! IlaajAI supports both Urdu and English. You can chat, send voice notes, and receive responses in your preferred language."
    },
    {
      question: "How does the photo analysis work?",
      answer: "Simply take a clear photo of your skin condition, injury, or affected area. Our AI analyzes the image and provides preliminary assessment and first-aid recommendations."
    },
    {
      question: "Is my health information private?",
      answer: "Yes, we follow strict medical privacy standards. Your conversations and photos are encrypted and never shared without your consent. We comply with healthcare data protection regulations."
    },
    {
      question: "How do I find doctors through the app?",
      answer: "After getting AI analysis, we'll show you nearby qualified doctors who specialize in your condition. You can view their profiles, ratings, and contact information."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        {/* Main Header - Always Visible */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-primary-600" />
                </div>
                <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-primary-600' : 'text-white'
                }`}>
                  IlaajAI
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4 pr-8">
              {isScrolled && (
                <button className="bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-700 transition-colors">
                  START TODAY
                </button>
              )}
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary-600 text-sm">👤</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Secondary Navigation - Only when scrolled */}
        {isScrolled && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-primary-600"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex space-x-1 py-2">
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === 'testimonials' 
                      ? 'bg-primary-700 text-white' 
                      : 'text-white hover:bg-primary-700'
                  }`}
                >
                  Reviews
                </button>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === 'how-it-works' 
                      ? 'bg-primary-700 text-white' 
                      : 'text-white hover:bg-primary-700'
                  }`}
                >
                  How It Works
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === 'features' 
                      ? 'bg-primary-700 text-white' 
                      : 'text-white hover:bg-primary-700'
                  }`}
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === 'faq' 
                      ? 'bg-primary-700 text-white' 
                      : 'text-white hover:bg-primary-700'
                  }`}
                >
                  FAQ
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary-500 to-primary-700 min-h-screen flex items-center relative overflow-hidden">
        {/* DotGrid Background */}
        <div className="absolute inset-0 z-0">
          <DotGrid
            dotSize={8}
            gap={20}
            baseColor="#ffffff"
            activeColor="#ffffff"
            proximity={100}
            shockRadius={200}
            shockStrength={3}
            resistance={800}
            returnDuration={2}
            style={{}}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <div className="mb-4">
                <span className="text-sm font-medium text-primary-100">#1 AI Medical Assistant in Pakistan</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Your AI-Powered
                <span className="block bg-white text-primary-600 px-3 py-1 rounded-lg inline-block mt-2">
                  Health Companion
                </span>
              </h1>
              <p className="text-xl text-primary-100 mb-8 max-w-lg">
                Chat, speak, or send a photo — IlaajAI helps you get instant health advice and find the right doctor near you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                  <Download className="mr-2 w-5 h-5" />
                  Download App
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors flex items-center justify-center">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </motion.div>

            {/* Right Side - App Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-6 max-w-sm mx-auto border-2 border-black" style={{
                boxShadow: '0 35px 70px -12px rgba(0, 0, 0, 0.4), 0 20px 40px -12px rgba(0, 0, 0, 0.3), 0 10px 20px -8px rgba(0, 0, 0, 0.2)'
              }}>
                {/* App Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <Stethoscope className="w-4 h-4 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">IlaajAI</h3>
                      <span className="text-xs text-primary-600 font-medium">AI Doctor</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-gray-600">🔔</span>
                  </div>
                </div>

                {/* Chat Message */}
                <div className="bg-primary-50 rounded-lg p-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">AI</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700">
                        Hello! I'm your AI health assistant. How can I help you today? You can describe your symptoms, send a photo, or record a voice message.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <MessageCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-xs text-gray-600">Chat</div>
                    <div className="text-xs font-semibold">Urdu/English</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Camera className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="text-xs text-gray-600">Photo</div>
                    <div className="text-xs font-semibold">Analysis</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Mic className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="text-xs text-gray-600">Voice</div>
                    <div className="text-xs font-semibold">Note</div>
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center space-x-1 mb-6">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>

                {/* Recent Consultations */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Recent Consultations</span>
                    <span className="text-xs text-primary-600">View All</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-medium">Skin Rash</div>
                        <div className="text-xs text-gray-500">2 hours ago</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Clock className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-medium">Headache</div>
                        <div className="text-xs text-gray-500">Yesterday</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="flex items-center justify-around border-t border-gray-200 pt-4">
                  <div className="text-center">
                    <MessageCircle className="w-5 h-5 text-primary-600 mx-auto mb-1" />
                    <span className="text-xs text-primary-600 font-medium">Chat</span>
                  </div>
                  <div className="text-center">
                    <Camera className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                    <span className="text-xs text-gray-500">Photo</span>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mb-1">
                      <Mic className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                    <span className="text-xs text-gray-500">Doctors</span>
                  </div>
                  <div className="text-center">
                    <Users className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                    <span className="text-xs text-gray-500">Profile</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Stars */}
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mx-1" />
            ))}
          </div>

          {/* Rating Count */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Trusted by 10,000+ Patients
          </h2>

          {/* Testimonial Carousel */}
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <blockquote className="text-xl md:text-2xl text-white italic mb-4">
              &ldquo;{testimonials[currentTestimonial].text}&rdquo;
            </blockquote>
            <cite className="text-lg text-white font-medium">
              {testimonials[currentTestimonial].name}
            </cite>
            <div className="text-sm text-primary-200 mt-1">
              {testimonials[currentTestimonial].location}
            </div>
          </motion.div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-white' 
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose IlaajAI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get instant medical advice in your language, with photo analysis, voice notes, and doctor referrals - all powered by advanced AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

          {/* How It Works Section */}
          <section id="how-it-works" className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vertical Roadmap Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-600 z-0" style={{top: '10rem', height: 'calc(100% - 8rem)'}}></div>
          {/* Section Header */}
          <div className="text-center mb-20 relative">
            {/* Starting Circle */}
          
            <div className="flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-primary-600 rounded-sm mr-2"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Get Health Help in 1-2-3
              </h2>
            </div>
          </div>

          {/* Step 1 - Phone Login */}
          <div className="relative mb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Step 1 Circle */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full z-10 top-1/2"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Mobile Image - Left */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-20"
                >
                <div className="bg-black rounded-3xl p-2 max-w-md mx-auto shadow-2xl" style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 0, 0, 0.1)'
                }}>
                  {/* Phone Screen - Login Interface */}
                  <div className="bg-white rounded-2xl p-4 h-80 overflow-hidden">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Stethoscope className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-lg font-bold text-gray-900">Welcome to IlaajAI</h2>
                      <p className="text-sm text-gray-500">Your AI Health Companion</p>
                    </div>
                    
                    {/* Phone Number Input */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1 bg-gray-100 rounded-lg px-3 py-2">
                          <span className="text-sm">🇵🇰</span>
                          <span className="text-sm font-medium">+92</span>
                        </div>
                        <input 
                          type="tel" 
                          placeholder="300 1234567" 
                          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                    
                    {/* Login Button */}
                    <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold mb-4 hover:bg-primary-700 transition-colors">
                      Send OTP
                    </button>
                    
                    {/* OTP Input */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Enter OTP</label>
                      <div className="flex space-x-2">
                        {[1,2,3,4,5,6].map((_, i) => (
                          <input 
                            key={i}
                            type="text" 
                            maxLength={1}
                            className="w-8 h-8 border border-gray-300 rounded text-center text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Verify Button */}
                    <button className="w-full bg-green-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors">
                      Verify & Continue
                    </button>
                    
                    {/* Terms */}
                    <p className="text-xs text-gray-500 text-center mt-3">
                      By continuing, you agree to our Terms & Privacy Policy
                    </p>
                  </div>
                </div>
              </motion.div>

                {/* Text Content - Right */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-6xl font-bold text-primary-600 mb-4">1</div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Quick Phone Login
                  </h3>
                  <p className="text-lg text-gray-300">
                    Simply enter your Pakistani phone number, verify with OTP, and you're ready to start chatting with your AI health assistant.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Step 2 - Chat Interface */}
          <div className="relative mb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Step 2 Circle */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full z-10 top-1/2"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Text Content - Left */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center lg:text-left lg:pl-12"
                >
                  <div className="text-6xl font-bold text-primary-600 mb-4">2</div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Start Chatting
                  </h3>
                  <p className="text-lg text-gray-300">
                    Tap the chat button and start describing your symptoms. Our AI doctor will ask relevant questions and provide instant health guidance.
                  </p>
                </motion.div>

                {/* Mobile Image - Right with Overlap */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative z-10 -mt-16 lg:-mt-20"
                >
                <div className="bg-black rounded-3xl p-2 max-w-md mx-auto shadow-2xl" style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 0, 0, 0.1)'
                }}>
                  {/* Phone Screen - Chat Interface */}
                  <div className="bg-white rounded-2xl p-3 h-80 overflow-hidden flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">AI</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">IlaajAI Doctor</h4>
                          <span className="text-xs text-green-600">Online</span>
                        </div>
                      </div>
                      <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                    </div>
                    
                    {/* Chat Messages */}
                    <div className="flex-1 space-y-3 mb-4 overflow-y-auto">
                      {/* AI Message */}
                      <div className="flex items-start space-x-2">
                        <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs">AI</span>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-2 max-w-xs">
                          <p className="text-xs text-gray-700">Hello! I'm your AI health assistant. How can I help you today?</p>
                        </div>
                      </div>
                      
                      {/* User Message */}
                      <div className="flex items-start space-x-2 justify-end">
                        <div className="bg-primary-600 rounded-lg p-2 max-w-xs">
                          <p className="text-xs text-white">I have a headache and feel dizzy</p>
                        </div>
                        <div className="w-6 h-6 bg-gray-300 rounded-full flex-shrink-0"></div>
                      </div>
                      
                      {/* AI Response */}
                      <div className="flex items-start space-x-2">
                        <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs">AI</span>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-2 max-w-xs">
                          <p className="text-xs text-gray-700">I understand. How long have you had this headache? Any other symptoms?</p>
                        </div>
                      </div>
                      
                      {/* User Response */}
                      <div className="flex items-start space-x-2 justify-end">
                        <div className="bg-primary-600 rounded-lg p-2 max-w-xs">
                          <p className="text-xs text-white">Started 2 hours ago. Also feeling nauseous</p>
                        </div>
                        <div className="w-6 h-6 bg-gray-300 rounded-full flex-shrink-0"></div>
                      </div>
                    </div>
                    
                    {/* Input Area */}
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-100 rounded-full px-3 py-2 flex items-center">
                        <input 
                          type="text" 
                          placeholder="Type your message..." 
                          className="flex-1 bg-transparent text-xs focus:outline-none"
                        />
                        <div className="w-5 h-5 bg-gray-300 rounded"></div>
                      </div>
                      <button className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
              </div>
            </div>
          </div>

          {/* Step 3 - Health Analysis */}
          <div className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Step 3 Circle */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full z-10 top-1/2"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                {/* Mobile Image - Left with Overlap */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-30 -mt-8 lg:-mt-12"
                >
                <div className="bg-black rounded-3xl p-2 max-w-md mx-auto shadow-2xl" style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 0, 0, 0.1)'
                }}>
                  {/* Phone Screen - Health Analysis Interface */}
                  <div className="bg-white rounded-2xl p-3 h-80 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold">Health Analysis</span>
                      <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                    </div>
                    
                    {/* AI Analysis Summary */}
                    <div className="bg-primary-50 rounded-lg p-3 mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">AI</span>
                        </div>
                        <span className="text-sm font-semibold">AI Analysis Complete</span>
                      </div>
                      <p className="text-xs text-gray-600">Based on your symptoms, here's your health assessment:</p>
                    </div>
                    
                    {/* Health Metrics */}
                    <div className="space-y-3 mb-4">
                      {/* Blood Pressure */}
                      <div className="flex items-center justify-between p-2 bg-red-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-red-500 rounded"></div>
                          <span className="text-xs font-medium">Blood Pressure</span>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-bold text-red-600">140/90</div>
                          <div className="text-xs text-gray-500">High</div>
                        </div>
                      </div>
                      
                      {/* Heart Rate */}
                      <div className="flex items-center justify-between p-2 bg-orange-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-orange-500 rounded"></div>
                          <span className="text-xs font-medium">Heart Rate</span>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-bold text-orange-600">95 bpm</div>
                          <div className="text-xs text-gray-500">Elevated</div>
                        </div>
                      </div>
                      
                      {/* Temperature */}
                      <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-blue-500 rounded"></div>
                          <span className="text-xs font-medium">Temperature</span>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-bold text-blue-600">98.6°F</div>
                          <div className="text-xs text-gray-500">Normal</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Recommendations */}
                    <div className="bg-yellow-50 rounded-lg p-2">
                      <div className="text-xs font-semibold text-yellow-800 mb-1">Recommendations:</div>
                      <ul className="text-xs text-yellow-700 space-y-1">
                        <li>• Rest and stay hydrated</li>
                        <li>• Monitor symptoms</li>
                        <li>• Consider doctor visit</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

                {/* Text Content - Right */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center lg:text-left lg:pr-8"
                >
                  <div className="text-6xl font-bold text-primary-600 mb-4">3</div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Get AI Health Analysis
                  </h3>
                  <p className="text-lg text-gray-300">
                    Our AI analyzes your symptoms and provides health metrics like blood pressure, heart rate, and personalized recommendations based on your conversation.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Doctor Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Doctor Near You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get connected with qualified doctors in your area who specialize in your specific health concern.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Interactive Map</h3>
                    <p className="text-sm text-gray-500">Find doctors near your location</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-primary-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Available Now</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium">Specialist</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm font-medium">Emergency</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Doctors</h3>
                  <p className="text-gray-600">All doctors are verified and licensed professionals with specializations in their respective fields.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Availability</h3>
                  <p className="text-gray-600">See which doctors are available now and book appointments directly through the app.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Patient Reviews</h3>
                  <p className="text-gray-600">Read reviews from other patients to help you choose the right doctor for your needs.</p>
                </div>
              </div>

              <button className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center">
                <MapPin className="mr-2 w-5 h-5" />
                Find Doctors Near Me
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI First Aid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI First Aid Assistant
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get instant first-aid instructions and emergency guidance when you need it most. Our AI provides step-by-step help for common medical situations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border border-red-200"
            >
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Emergency Response</h3>
              <p className="text-gray-600 text-center mb-6">Get immediate first-aid instructions for burns, cuts, choking, and other emergency situations.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Step-by-step instructions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Emergency contact numbers
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  When to call ambulance
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Visual Assessment</h3>
              <p className="text-gray-600 text-center mb-6">Send photos of injuries or skin conditions for instant visual analysis and first-aid recommendations.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  AI-powered image analysis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Severity assessment
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Treatment recommendations
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">24/7 Support</h3>
              <p className="text-gray-600 text-center mb-6">Get instant first-aid guidance anytime, anywhere. Available in Urdu and English.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Always available
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Multilingual support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Voice instructions
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors flex items-center mx-auto">
              <Zap className="mr-2 w-5 h-5" />
              Get First Aid Help Now
            </button>
            <p className="text-sm text-gray-500 mt-4">
              <strong>Emergency:</strong> For life-threatening situations, call 112 (Pakistan Emergency Services) immediately.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about IlaajAI.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Instant Health Help?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join 10,000+ patients who trust IlaajAI for their health needs. Download now and get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Download className="mr-2 w-5 h-5" />
              Download on Play Store
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors flex items-center justify-center">
              <Download className="mr-2 w-5 h-5" />
              Download on App Store
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold">IlaajAI</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Your AI-powered health companion. Get instant medical advice in Urdu or English, with photo analysis and doctor referrals.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="text-sm">Facebook</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="text-sm">Twitter</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="text-sm">Instagram</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">AI Chat</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Photo Analysis</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Voice Notes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Find Doctors</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About IlaajAI</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Medical Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 IlaajAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}