import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Mugisha',
      location: 'Kigali, Rwanda',
      rating: 5,
      text: 'We got our Golden Retriever from Doghouse Rwanda 6 months ago, and we couldn\'t be happier! The team was professional, caring, and provided excellent support throughout the process. Our puppy came healthy, vaccinated, and well-socialized.',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      dogName: 'Bella'
    },
    {
      name: 'Jean Baptiste',
      location: 'Huye, Rwanda',
      rating: 5,
      text: 'Outstanding service! The German Shepherd we adopted has been an amazing addition to our family. The health guarantee and ongoing support made us feel confident in our choice. Highly recommended!',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      dogName: 'Max'
    },
    {
      name: 'Grace Uwimana',
      location: 'Musanze, Rwanda',
      rating: 5,
      text: 'The breeding quality is exceptional. Our Labrador is healthy, intelligent, and has the sweetest temperament. The team at Doghouse Rwanda truly cares about their dogs and their new families.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      dogName: 'Luna'
    },
    {
      name: 'David Nkurunziza',
      location: 'Rubavu, Rwanda',
      rating: 5,
      text: 'Professional, trustworthy, and genuinely caring. We\'ve bought two dogs from them and both experiences were excellent. Their after-sale support and training advice have been invaluable.',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
      dogName: 'Rex & Lucky'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest-green mb-4">
            Happy Families
          </h2>
          <p className="text-lg text-brown max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers say about 
            their experience with Doghouse Rwanda.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-cream to-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Decorative Quote */}
            <div className="absolute top-6 left-6 text-gold/20">
              <Quote className="w-16 h-16" />
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-gold fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl text-brown italic leading-relaxed mb-6">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-gold"
                  />
                  <div className="text-left">
                    <div className="font-heading font-bold text-forest-green">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-brown">
                      {testimonials[currentTestimonial].location}
                    </div>
                    <div className="text-gold text-sm font-medium">
                      Dog: {testimonials[currentTestimonial].dogName}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-forest-green hover:text-gold hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-forest-green hover:text-gold hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-gold w-8'
                  : 'bg-beige hover:bg-brown'
              }`}
            />
          ))}
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {testimonials.filter((_, index) => index !== currentTestimonial).slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-cream p-6 rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-current" />
                ))}
              </div>
              
              <p className="text-brown text-sm mb-4 italic">
                "{testimonial.text.substring(0, 120)}..."
              </p>
              
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-forest-green text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-brown text-xs">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-brown mb-4">
            Ready to join our family of happy dog owners?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-gold hover:bg-light-gold text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
