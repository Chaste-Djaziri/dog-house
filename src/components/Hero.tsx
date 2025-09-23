import React from 'react';
import { ArrowRight, Phone, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cream via-beige/20 to-cream">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold rounded-full animate-bounce-gentle"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-forest-green rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-brown rounded-full animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 mt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-forest-green mb-6">
              Trusted Dog <span className="text-gold">Breeding</span> & Sales in <span className="text-brown">Rwanda</span>
            </h1>
            <p className="text-lg md:text-xl text-brown mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Find your perfect companion from our carefully bred, healthy, and loving dogs. 
              We prioritize quality, health, and the happiness of every puppy that finds a forever home.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/available-dogs"
                className="group bg-gold hover:bg-light-gold text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                View Available Puppies
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group border-2 border-forest-green text-forest-green hover:bg-forest-green hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Phone className="mr-2 w-5 h-5" />
                Contact Us
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-forest-green">50+</div>
                <div className="text-sm text-brown">Happy Families</div>
              </div>
              <div className="w-px h-12 bg-beige"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-forest-green">5+</div>
                <div className="text-sm text-brown">Dog Breeds</div>
              </div>
              <div className="w-px h-12 bg-beige"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-forest-green">100%</div>
                <div className="text-sm text-brown">Health Guaranteed</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold to-light-gold rounded-3xl opacity-20 blur-lg"></div>
              <img
                src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Beautiful dog from Doghouse Rwanda"
                className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Instagram Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                <a
                  href="https://www.instagram.com/doghouse_rw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-forest-green hover:text-gold transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm font-medium">@doghouse_rw</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
