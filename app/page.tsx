'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Star, 
  CheckCircle, 
  Smartphone, 
  BarChart3, 
  Heart, 
  Users, 
  Shield, 
  Zap,
  ArrowRight,
  Play,
  ChevronDown,
  Menu,
  X
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
      name: "Jason L.",
      text: "Helped me get moving on my goals and tracking my weight loss and bodybuilding.",
      rating: 5
    },
    {
      name: "Iain M.",
      text: "Good for tracking calories and macros with a huge database of food.",
      rating: 5
    },
    {
      name: "Dinah L.",
      text: "Friendly, easy-to-use app that keeps me accountable.",
      rating: 5
    },
    {
      name: "Jennie S.",
      text: "Can't lose weight and stay on track without it.",
      rating: 5
    },
    {
      name: "Annette B.",
      text: "Love this app. It keeps me on track with my nutritional goals.",
      rating: 5
    }
  ]

  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "AI-Powered Health Insights",
      description: "Get personalized health recommendations based on your data and medical research."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Comprehensive Health Tracking",
      description: "Monitor nutrition, fitness, sleep, and vital signs all in one place."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Medical-Grade Security",
      description: "Your health data is protected with enterprise-level security and privacy controls."
    }
  ]

  const steps = [
    {
      number: "1",
      title: "Track Your Health Data",
      description: "Log your meals, exercise, sleep, and vital signs with our intuitive interface."
    },
    {
      number: "2",
      title: "Get AI Insights",
      description: "Receive personalized health recommendations and early warning alerts."
    },
    {
      number: "3",
      title: "Achieve Your Goals",
      description: "Follow your personalized health plan and track your progress over time."
    }
  ]

  const faqs = [
    {
      question: "Is Ilaaj AI a free health tracking app?",
      answer: "Yes! Ilaaj AI offers a comprehensive free tier with basic health tracking, AI insights, and goal setting. Premium features include advanced analytics, personalized meal plans, and priority support."
    },
    {
      question: "How does the AI health analysis work?",
      answer: "Our AI analyzes your health data patterns, compares them with medical research, and provides personalized recommendations for nutrition, exercise, and lifestyle improvements."
    },
    {
      question: "Is my health data secure?",
      answer: "Absolutely. We use medical-grade encryption and comply with healthcare data protection standards. Your data is never shared without your explicit consent."
    },
    {
      question: "Can I connect other health devices?",
      answer: "Yes! Ilaaj AI integrates with over 50+ health devices and apps including fitness trackers, smart scales, glucose monitors, and more."
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
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-primary-600' : 'text-white'
              }`}>
                ilaaj ai
              </h1>
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
                <span className="text-sm font-medium text-primary-100">#1 AI-Powered Health</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Health tracking
                <span className="block bg-white text-primary-600 px-3 py-1 rounded-lg inline-block mt-2">
                  for real life
                </span>
              </h1>
              <p className="text-xl text-primary-100 mb-8 max-w-lg">
                Make progress with the all-in-one health, nutrition, and fitness tracker.
              </p>
              <button className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                START TODAY
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
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
                      <span className="text-primary-600 font-bold text-sm">IA</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">ilaaj ai</h3>
                      <span className="text-xs text-primary-600 font-medium">PREMIUM</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-gray-600">🔔</span>
                  </div>
                </div>

                {/* Progress Message */}
                <div className="bg-primary-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    You&apos;ve logged <strong>2 meals</strong> and <strong>46g</strong> of <strong>protein</strong>. See how to boost your progress! →
                  </p>
                </div>

                {/* Macros Section */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">66</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600">Net Carbs</div>
                    <div className="text-xs font-semibold">66 /250g</div>
                    <div className="text-xs text-gray-500">184g left</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">51</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600">Fat</div>
                    <div className="text-xs font-semibold">51 /67g</div>
                    <div className="text-xs text-gray-500">16g left</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">46</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600">Protein</div>
                    <div className="text-xs font-semibold">46 /100g</div>
                    <div className="text-xs text-gray-500">54g left</div>
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

                {/* Steps and Exercise */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Steps</span>
                    <span className="text-sm font-bold text-gray-900">6,000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '40%'}}></div>
                  </div>
                  <div className="text-xs text-gray-500">Goal: 15,000</div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Exercise</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-bold text-gray-900">300 cal</span>
                      <span className="text-sm text-gray-500">0:35 hr</span>
                      <button className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs">+</button>
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="flex items-center justify-around border-t border-gray-200 pt-4">
                  <div className="text-center">
                    <div className="w-6 h-6 bg-primary-600 rounded mb-1"></div>
                    <span className="text-xs text-primary-600 font-medium">Dashboard</span>
                  </div>
                  <div className="text-center">
                    <div className="w-6 h-6 bg-gray-300 rounded mb-1"></div>
                    <span className="text-xs text-gray-500">Diary</span>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mb-1">
                      <span className="text-white text-lg">+</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-6 h-6 bg-gray-300 rounded mb-1"></div>
                    <span className="text-xs text-gray-500">Plan</span>
                  </div>
                  <div className="text-center">
                    <div className="w-6 h-6 bg-gray-300 rounded mb-1"></div>
                    <span className="text-xs text-gray-500">More</span>
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
            3.5 Million 5-Star Ratings
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
              Why Choose Ilaaj AI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI technology meets comprehensive health tracking for the most personalized health experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                Hit your health goals in 1-2-3
              </h2>
            </div>
          </div>

          {/* Step 1 - Food Logging */}
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
                  {/* Phone Screen - Food Logging Interface */}
                  <div className="bg-white rounded-2xl p-3 h-80 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-gray-200 rounded-full mr-2"></div>
                        <span className="font-semibold">Breakfast</span>
                        <div className="w-4 h-4 bg-gray-200 rounded ml-2"></div>
                      </div>
                    </div>
                    
                    {/* Search Bar */}
                    <div className="bg-gray-100 rounded-lg p-3 mb-4 flex items-center">
                      <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
                      <span className="text-gray-500 text-sm">Search for a food</span>
                    </div>
                    
                    {/* Tabs */}
                    <div className="flex space-x-4 mb-4">
                      <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">All</div>
                      <div className="text-gray-500 text-sm">My Meals</div>
                      <div className="text-gray-500 text-sm">My Recipes</div>
                      <div className="text-gray-500 text-sm">My Foods</div>
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="space-y-2 mb-4">
                      <div className="bg-primary-50 border border-primary-200 rounded-lg p-3 flex items-center">
                        <div className="w-6 h-6 bg-primary-600 rounded-full mr-3"></div>
                        <span className="text-sm font-medium">Voice Log</span>
                        <div className="bg-primary-600 text-white text-xs px-2 py-1 rounded ml-2">NEW</div>
                      </div>
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-center">
                        <div className="w-6 h-6 bg-gray-400 rounded mr-3"></div>
                        <span className="text-sm">Scan a Barcode</span>
                      </div>
                    </div>
                    
                    {/* History */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium">History</span>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>Most Recent</span>
                        <div className="w-4 h-4 bg-gray-300 rounded ml-1"></div>
                      </div>
                    </div>
                    
                    {/* Food Items */}
                    <div className="space-y-1 mb-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium text-xs">Scrambled eggs</div>
                          <div className="text-xs text-gray-500">182 cal, 2 large</div>
                        </div>
                        <div className="w-3 h-3 bg-gray-300 rounded"></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium text-xs">Wheat toast</div>
                          <div className="text-xs text-gray-500">90 cal, 1 slice</div>
                        </div>
                        <div className="w-3 h-3 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                    
                    {/* Bottom Buttons */}
                    <div className="flex space-x-2 mt-2">
                      <button className="flex-1 border border-primary-600 text-primary-600 py-1 rounded text-xs">Try Again</button>
                      <button className="flex-1 bg-primary-600 text-white py-1 rounded text-xs">Log</button>
                    </div>
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
                    Track calories, macros & more
                  </h3>
                  <p className="text-lg text-gray-300">
                    Log even faster with tools like barcode scan & the NEW voice log.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Step 2 - Progress Tracking */}
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
                    Follow your progress
                  </h3>
                  <p className="text-lg text-gray-300">
                    Forget perfection. This is about building long-term habits—and enjoying the journey.
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
                  {/* Phone Screen - Progress Interface */}
                  <div className="bg-white rounded-2xl p-3 h-80 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold">Nutrition</span>
                      <button className="text-primary-600 text-sm font-medium">EXPORT</button>
                    </div>
                    
                    {/* Tabs */}
                    <div className="flex space-x-4 mb-4">
                      <div className="text-gray-500 text-sm">Calories</div>
                      <div className="text-gray-500 text-sm">Nutrients</div>
                      <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">Macros</div>
                    </div>
                    
                    {/* Chart Title */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm">Week view - Last 7 Days</h4>
                    </div>
                    
                    {/* Bar Chart */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-purple-500 rounded"></div>
                        <span className="text-xs">Carbohydrates</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded"></div>
                        <span className="text-xs">Fat</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded"></div>
                        <span className="text-xs">Protein</span>
                      </div>
                    </div>
                    
                    {/* Summary */}
                    <div className="space-y-1 mb-3 text-xs">
                      <div>Carbohydrates (158g) 10.938 25%</div>
                      <div>Fat (158g) 1.983 25%</div>
                    </div>
                    
                    {/* Premium Feature */}
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded mr-1"></div>
                      <span className="text-xs text-gray-600">Premium Feature</span>
                    </div>
                    
                    {/* Food List */}
                    <div>
                      <div className="text-xs font-medium mb-1">Food Highest in Calories</div>
                      <div className="space-y-1 text-xs">
                        <div>Power Sandwich (900)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              </div>
            </div>
          </div>

          {/* Step 3 - Meal Planning */}
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
                  {/* Phone Screen - Meal Planning Interface */}
                  <div className="bg-white rounded-2xl p-3 h-80 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold">Plan</span>
                      <div className="w-5 h-5 bg-gray-300 rounded"></div>
                    </div>
                    
                    {/* Tabs */}
                    <div className="flex space-x-4 mb-4">
                      <div className="border-b-2 border-primary-600 pb-1">
                        <span className="text-sm font-medium">Meal Planner</span>
                      </div>
                      <div className="text-gray-500 text-sm">Groceries</div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-2 mb-4">
                      <div className="flex-1 bg-primary-600 text-white rounded-lg p-2 text-center">
                        <div className="text-lg mb-1">+</div>
                        <div className="text-xs">Create</div>
                      </div>
                      <div className="flex-1 bg-gray-100 text-gray-600 rounded-lg p-2 text-center">
                        <div className="text-lg mb-1">✏️</div>
                        <div className="text-xs">Edit</div>
                      </div>
                      <div className="flex-1 bg-gray-100 text-gray-600 rounded-lg p-2 text-center">
                        <div className="text-lg mb-1">⋯</div>
                        <div className="text-xs">More</div>
                      </div>
                    </div>
                    
                    {/* Date and Calories */}
                    <div className="mb-4">
                      <div className="font-semibold text-sm">Tuesday, July 23</div>
                      <div className="text-xs text-gray-500">2,100 cal</div>
                    </div>
                    
                    {/* Meal Cards */}
                    <div className="space-y-2">
                      {/* Breakfast */}
                      <div className="border border-gray-200 rounded-lg p-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-gray-200 rounded"></div>
                          <div className="flex-1">
                            <div className="text-xs font-medium">Yogurt & Granola</div>
                            <div className="text-xs text-gray-500">378 cal</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Lunch */}
                      <div className="border border-gray-200 rounded-lg p-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-gray-200 rounded"></div>
                          <div className="flex-1">
                            <div className="text-xs font-medium">Chickpea Taco</div>
                            <div className="text-xs text-gray-500">494 cal</div>
                          </div>
                        </div>
                      </div>
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
                    Eat better and hit your goals
                  </h3>
                  <p className="text-lg text-gray-300">
                    Learn which foods help you feel your best, and get tailored weekly meal plans!
                  </p>
                </motion.div>
              </div>
            </div>
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
              Everything you need to know about Ilaaj AI.
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
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of users who have achieved their health goals with Ilaaj AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ilaaj AI</h3>
              <p className="text-gray-400 mb-4">
                AI-powered health tracking for real life. Transform your health journey with personalized insights.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ilaaj AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}