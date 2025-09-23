import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, GraduationCap, Scissors, ShoppingBag, Star, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Dog Breeding',
      description: 'Professional breeding services with health-tested parent dogs and proper care protocols.',
      features: ['Health-tested breeding dogs', 'Proper nutrition & care', 'Early socialization', 'Health certificates'],
      price: 'Contact for pricing'
    },
    {
      icon: GraduationCap,
      title: 'Dog Training',
      description: 'Professional training programs for puppies and adult dogs to ensure good behavior.',
      features: ['Basic obedience training', 'House training', 'Behavioral correction', 'Advanced commands'],
      price: 'Starting from RWF 50,000'
    },
    {
      icon: Scissors,
      title: 'Dog Grooming',
      description: 'Complete grooming services to keep your dog healthy, clean, and looking their best.',
      features: ['Bath & blow dry', 'Nail trimming', 'Ear cleaning', 'Coat brushing & styling'],
      price: 'Starting from RWF 15,000'
    },
    {
      icon: ShoppingBag,
      title: 'Pet Supplies',
      description: 'Quality pet supplies and accessories for all your dog\'s needs (coming soon).',
      features: ['Premium dog food', 'Toys & accessories', 'Health supplements', 'Training equipment'],
      price: 'Coming Soon'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest-green mb-4">
            Our Services
          </h2>
          <p className="text-lg text-brown max-w-3xl mx-auto">
            Beyond breeding, we offer comprehensive services to support you and your dog 
            throughout their life journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-gradient-to-br from-cream to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-light-gold rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-heading text-xl font-bold text-forest-green mb-3">
                {service.title}
              </h3>
              
              <p className="text-brown mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-brown">
                    <Star className="w-4 h-4 text-gold mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="border-t border-beige pt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold text-forest-green">
                    {service.price}
                  </span>
                  {service.title !== 'Pet Supplies' && (
                    <div className="flex items-center text-sm text-brown">
                      <Clock className="w-4 h-4 mr-1" />
                      Available Now
                    </div>
                  )}
                </div>
                
                {service.title === 'Pet Supplies' ? (
                  <span className="w-full inline-flex justify-center py-3 rounded-lg font-medium bg-gray-300 text-gray-500 cursor-not-allowed">
                    Coming Soon
                  </span>
                ) : (
                  <Link
                    to="/contact"
                    className="w-full inline-flex justify-center py-3 rounded-lg font-medium bg-gold hover:bg-light-gold text-white transition-colors"
                  >
                    Learn More
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 bg-gradient-to-r from-forest-green to-light-green rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Why Choose Doghouse Rwanda?
          </h3>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            With years of experience and a genuine love for dogs, we provide exceptional 
            service and care that goes beyond just a transaction.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-2">Passionate Care</h4>
              <p className="text-sm opacity-80">Every dog receives love and individual attention</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Star className="w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-2">Professional Service</h4>
              <p className="text-sm opacity-80">Licensed and experienced in dog breeding and care</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-2">Lifetime Support</h4>
              <p className="text-sm opacity-80">We're here to help long after you take your dog home</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
