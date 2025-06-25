import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Clock, MapPin, Phone, Star, Scissors, Users, Award, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

// Import images
import barberShop1 from './assets/barber-shop-1.jpg'
import barberShop2 from './assets/barber-shop-2.jpg'
import barberShop3 from './assets/barber-shop-3.jpg'
import heroBarber from './assets/hero-barber.jpg'

function App() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      name: "Men's Haircut",
      description: "Professional haircuts tailored to your style and preferences",
      duration: "30-45 min",
      price: "From $52"
    },
    {
      name: "Beard Trimming",
      description: "Expert beard shaping and trimming for the perfect look",
      duration: "20-30 min",
      price: "From $25"
    },
    {
      name: "Men's Shaving",
      description: "Traditional hot towel shave for the ultimate grooming experience",
      duration: "45-60 min",
      price: "From $45"
    },
    {
      name: "Hair & Styling",
      description: "Complete hair styling services for any occasion",
      duration: "30-45 min",
      price: "From $40"
    }
  ]

  const reviews = [
    {
      name: "Krishna Vyas",
      rating: 5,
      text: "I recently visited for a last minute (late night) men's haircut, and I couldn't be more pleased with the result. From the moment I walked in, I felt welcomed by the friendly staff and the clean, modern atmosphere. My stylist, Oya, was amazing."
    },
    {
      name: "Fiorenzo Sapia",
      rating: 5,
      text: "Oya did an amazing job, and I will be coming here for all my future haircuts. With very little details given, she knew exactly what I was looking for. This should be the go-to place for any guy wanting a great haircut."
    },
    {
      name: "Luke Anderson",
      rating: 5,
      text: "Friendly and helpful staff. Was able to see me quickly. Took their time and made sure haircut was done carefully. Very talented stylist!"
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-slate-800" />
              <h1 className="text-2xl font-bold text-slate-800">Men Haircut Salon</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-slate-600 hover:text-slate-800 transition-colors">Services</a>
              <a href="#about" className="text-slate-600 hover:text-slate-800 transition-colors">About</a>
              <a href="#reviews" className="text-slate-600 hover:text-slate-800 transition-colors">Reviews</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-800 transition-colors">Contact</a>
            </nav>
            <Button className="bg-slate-800 hover:bg-slate-700">
              <Phone className="h-4 w-4 mr-2" />
              Book Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBarber})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div {...fadeInUp}>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Premium Grooming
              <span className="block text-4xl md:text-6xl text-slate-300">in Midtown NYC</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Experience the finest in men's haircuts and grooming services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-slate-800 hover:bg-slate-700 text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-800 text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                (646) 201-9303
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        id="services" 
        className="py-20 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h3 className="text-4xl font-bold text-slate-800 mb-4">Our Services</h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Professional grooming services tailored to the modern gentleman
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card 
                  className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-slate-300"
                  onClick={() => setActiveService(index)}
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800">{service.name}</CardTitle>
                    <CardDescription className="text-slate-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary" className="text-slate-600">
                        <Clock className="h-3 w-3 mr-1" />
                        {service.duration}
                      </Badge>
                      <span className="font-bold text-slate-800">{service.price}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-20 bg-slate-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h3 className="text-4xl font-bold text-slate-800 mb-6">About Our Salon</h3>
              <p className="text-lg text-slate-600 mb-6">
                Located in the heart of Midtown Manhattan, Men Haircut Salon has been providing 
                exceptional grooming services to discerning gentlemen. Our team of skilled barbers 
                combines traditional techniques with modern styling to deliver the perfect look for every client.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Users className="h-12 w-12 text-slate-800 mx-auto mb-2" />
                  <h4 className="font-bold text-slate-800">Expert Barbers</h4>
                  <p className="text-slate-600">Skilled professionals</p>
                </div>
                <div className="text-center">
                  <Award className="h-12 w-12 text-slate-800 mx-auto mb-2" />
                  <h4 className="font-bold text-slate-800">4.9 Rating</h4>
                  <p className="text-slate-600">219+ reviews</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
              <img src={barberShop1} alt="Modern barber shop interior" className="rounded-lg shadow-lg" />
              <img src={barberShop2} alt="Professional barber at work" className="rounded-lg shadow-lg mt-8" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Reviews Section */}
      <motion.section 
        id="reviews" 
        className="py-20 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h3 className="text-4xl font-bold text-slate-800 mb-4">What Our Clients Say</h3>
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
              <span className="text-xl font-bold text-slate-800 ml-2">4.9</span>
              <span className="text-slate-600">(219 reviews)</span>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="font-bold text-slate-800">{review.name}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 italic">"{review.text}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-20 bg-slate-800 text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h3 className="text-4xl font-bold mb-4">Visit Us Today</h3>
            <p className="text-xl text-slate-300">
              Experience the difference at Men Haircut Salon - Midtown, NYC
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp}>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-slate-300" />
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p className="text-slate-300">44 W 55th St, New York, NY 10019</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-slate-300" />
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p className="text-slate-300">(646) 201-9303</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-slate-300" />
                  <div>
                    <h4 className="font-bold">Hours</h4>
                    <p className="text-slate-300">Monday - Sunday: 8:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-white text-slate-800 hover:bg-slate-100">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Your Appointment
                </Button>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <div className="bg-slate-700 rounded-lg p-4">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24183.159686308918!2d-74.00411386974568!3d40.74233676123351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590ba6c24c11%3A0xf69933c38d14b0e5!2sMen%20Haircut%20Salon%20-%20Midtown%2C%20NYC!5e0!3m2!1sen!2sng!4v1750860695771!5m2!1sen!2sng" 
                  width="100%" 
                  height="300" 
                  style={{border:0, borderRadius: '0.5rem'}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Men Haircut Salon Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Scissors className="h-6 w-6" />
              <span className="text-xl font-bold">Men Haircut Salon - Midtown, NYC</span>
            </div>
            <p className="text-slate-400">
              © 2025 Men Haircut Salon. All rights reserved. | Professional grooming services in the heart of Manhattan.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

