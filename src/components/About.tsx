import React from 'react';
import { Heart, Award, Shield, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Love & Care',
      description: 'Every dog receives individual attention, love, and care from birth to adoption.'
    },
    {
      icon: Shield,
      title: 'Health Guarantee',
      description: 'All puppies come with full health certificates and vaccination records.'
    },
    {
      icon: Award,
      title: 'Quality Breeding',
      description: 'We follow strict breeding standards to ensure healthy, well-tempered dogs.'
    },
    {
      icon: Users,
      title: 'Lifetime Support',
      description: 'Our relationship continues after adoption with ongoing advice and support.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest-green mb-4">
            About Dog HouseRwanda
          </h2>
          <p className="text-lg text-brown max-w-3xl mx-auto">
            Founded with a passion for connecting loving families with healthy, happy dogs, 
            we are Rwanda's premier dog breeding and sales business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-up">
            <img
              src="https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Our breeding facility"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="animate-fade-up" style={{animationDelay: '0.2s'}}>
            <h3 className="font-heading text-2xl font-bold text-forest-green mb-4">
              Our Mission
            </h3>
            <p className="text-brown mb-6 leading-relaxed">
              At Dog HouseRwanda, we believe every dog deserves a loving home and every family 
              deserves a loyal companion. Our mission is to breed healthy, well-socialized dogs 
              while maintaining the highest standards of care and ethics.
            </p>
            <p className="text-brown mb-6 leading-relaxed">
              We specialize in various breeds, ensuring each puppy is raised in a nurturing 
              environment where they receive proper nutrition, veterinary care, and socialization 
              from day one.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-forest-green">Certified Breeder</div>
                <div className="text-sm text-brown">Licensed and registered in Rwanda</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="text-center p-6 bg-cream rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-light-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-heading text-xl font-bold text-forest-green mb-2">
                {value.title}
              </h4>
              <p className="text-brown">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;