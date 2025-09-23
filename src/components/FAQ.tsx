import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/faq';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

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
            {FAQ_ITEMS.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg transition-all duration-300 animate-fade-up ${
                  openFAQ === index ? 'shadow-xl' : 'hover:shadow-xl'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
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

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
