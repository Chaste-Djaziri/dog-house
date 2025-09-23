import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest-green mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-brown max-w-2xl mx-auto">
            Ready to find your perfect companion? We'd love to hear from you. 
            Get in touch and let's help you find your new best friend.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-up">
            <div className="bg-gradient-to-br from-cream to-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-heading text-2xl font-bold text-forest-green mb-6">
                Send us a Message
              </h3>
              
              {submitStatus === 'success' && (
                <div className="bg-light-green text-white p-4 rounded-lg mb-6">
                  <p className="font-medium">Thank you for your message!</p>
                  <p className="text-sm opacity-90">We'll get back to you within 24 hours.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-forest-green mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-forest-green mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
                      placeholder="+250 787 272 038"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-forest-green mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-forest-green mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="buying">Buying a Dog</option>
                    <option value="breeding">Breeding Services</option>
                    <option value="training">Dog Training</option>
                    <option value="grooming">Dog Grooming</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-forest-green mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about what you're looking for, preferred breed, any questions..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-light-gold disabled:bg-beige text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-up" style={{animationDelay: '0.2s'}}>
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-2xl font-bold text-forest-green mb-6">
                  Contact Information
                </h3>
                <p className="text-brown mb-8">
                  We're here to help you find your perfect companion. Reach out through any of 
                  these channels and we'll respond as quickly as possible.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-cream rounded-lg">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-green mb-1">Phone</h4>
                    <p className="text-brown">+250 787 272 038</p>
                    <p className="text-sm text-brown opacity-80">Available 8 AM - 6 PM, Monday - Saturday</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-cream rounded-lg">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-green mb-1">Email</h4>
                    <p className="text-brown">info@doghouserw.com</p>
                    <p className="text-sm text-brown opacity-80">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-cream rounded-lg">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-green mb-1">Location</h4>
                    <p className="text-brown">Kigali, Rwanda</p>
                    <p className="text-sm text-brown opacity-80">Visit by appointment only</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-cream rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-green mb-1">Instagram</h4>
                    <a
                      href="https://www.instagram.com/doghouse_rw/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brown hover:text-gold transition-colors"
                    >
                      @doghouse_rw
                    </a>
                    <p className="text-sm text-brown opacity-80">Follow for daily updates</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-2xl text-white text-center">
                <MessageCircle className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Quick Contact via WhatsApp</h4>
                <p className="text-sm mb-4 opacity-90">
                  Get instant responses to your questions
                </p>
                <a
                  href="https://wa.me/250787272038?text=Hi! I'm interested in your dogs."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Business Hours */}
              <div className="bg-forest-green p-6 rounded-2xl text-white">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 mr-2" />
                  <h4 className="font-semibold">Business Hours</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;