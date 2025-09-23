import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What health guarantees do you provide?',
      answer: 'All our puppies come with a comprehensive health guarantee including vaccination records, deworming certificates, and a health certificate from our veterinarian. We also provide a genetic health guarantee for hereditary conditions for the first year.'
    },
    {
      question: 'What dog breeds do you have available?',
      answer: 'We specialize in several popular breeds including Golden Retrievers, German Shepherds, Labradors, Rottweilers, and mixed breeds. Our available dogs change regularly, so please contact us for current availability or check our Available Dogs section.'
    },
    {
      question: 'How much do your dogs cost?',
      answer: 'Our prices vary depending on the breed, age, and pedigree of the dog. Generally, our prices range from competitive rates for mixed breeds to premium prices for purebred dogs. Contact us for specific pricing on available dogs.'
    },
    {
      question: 'Do you offer delivery services?',
      answer: 'Yes, we can arrange delivery within Kigali and surrounding areas for an additional fee. For locations outside the greater Kigali area, we can discuss transportation arrangements. We ensure safe and comfortable transport for all our dogs.'
    },
    {
      question: 'What vaccinations do the puppies receive?',
      answer: 'All our puppies receive age-appropriate vaccinations including DHPP (Distemper, Hepatitis, Parvovirus, Parainfluenza), and rabies vaccination when age-appropriate. We provide complete vaccination records and schedules for future vaccinations.'
    },
    {
      question: 'Can I visit to meet the dogs before purchasing?',
      answer: 'Absolutely! We encourage potential families to visit and meet our dogs. Visits are by appointment only to ensure we can give you proper attention and the dogs are prepared for visitors. Please contact us to schedule a visit.'
    },
    {
      question: 'Do you provide training services?',
      answer: 'Yes, we offer professional dog training services including basic obedience, house training, and behavioral correction. We can start basic training before adoption and continue with ongoing training support for new families.'
    },
    {
      question: 'What ongoing support do you provide after adoption?',
      answer: 'We believe in lifelong relationships with our families. We provide ongoing support including feeding advice, training tips, health guidance, and are always available for questions. We also offer grooming services and can help with veterinary referrals.'
    },
    {
      question: 'What if I need to return a dog?',
      answer: 'While we work hard to ensure perfect matches, we understand situations can change. We have a return policy that allows dogs to be returned to us rather than being rehomed elsewhere. Contact us to discuss specific situations.'
    },
    {
      question: 'How do I reserve a puppy?',
      answer: 'To reserve a puppy, contact us to discuss available dogs and your preferences. We typically require a deposit to hold a specific puppy, with the balance due at pickup. We\'ll guide you through our adoption process and requirements.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest-green mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-brown max-w-2xl mx-auto">
            Find answers to common questions about our dogs, services, and adoption process. 
            Can't find what you're looking for? Feel free to contact us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg transition-all duration-300 animate-fade-up ${
                  openFAQ === index ? 'shadow-xl' : 'hover:shadow-xl'
                }`}
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-gold focus:ring-inset rounded-2xl"
                >
                  <h3 className="font-heading text-lg font-semibold text-forest-green pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center transition-transform duration-300 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}>
                    {openFAQ === index ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-white" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <p className="text-brown leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-brown mb-4">
            Still have questions? We're here to help!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-forest-green hover:bg-light-green text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
