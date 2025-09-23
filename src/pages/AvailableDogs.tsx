import React from 'react';
import { ArrowRight } from 'lucide-react';
import FeaturedDogs from '../components/FeaturedDogs';
import PawDivider from '../components/PawDivider';
import Contact from '../components/Contact';
import PageHero from '../components/PageHero';
import SEO, { SITE_URL } from '../components/SEO';

const adoptionSteps = [
  {
    title: 'Share Your Preferences',
    description: 'Let us know the breeds, age range, and temperament that fit your lifestyle so we can recommend the right companion.',
  },
  {
    title: 'Meet & Match',
    description: 'Schedule a private visit to interact with our puppies, review health records, and ask questions directly with our team.',
  },
  {
    title: 'Prepare for Homecoming',
    description: 'We guide you through supplies, nutrition plans, and follow-up vet visits to ensure a smooth transition into your home.',
  },
];

const AvailableDogsPage = () => {
  return (
    <div className="bg-cream">
      <SEO
        title="Available Puppies | Doghouse Rwanda"
        description="Browse current and upcoming litters from Doghouse Rwanda. Every puppy is health-certified, socialized, and supported by our expert team."
        keywords="puppies for sale Rwanda, adopt dog Kigali, available dogs"
        url={`${SITE_URL}/available-dogs`}
      />
      <PageHero
        title="Available Puppies"
        subtitle="Browse carefully selected litters from ethical breeding lines. Every puppy receives comprehensive veterinary care, early socialization, and lifetime support from the Doghouse Rwanda family."
        backgroundImage="https://images.pexels.com/photos/5732457/pexels-photo-5732457.jpeg?auto=compress&cs=tinysrgb&w=1200"
      >
        <a
          href="https://wa.me/250123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gold hover:bg-light-gold text-white font-semibold px-6 py-3 rounded-full transition-colors"
        >
          Check Current Availability
          <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </PageHero>

      <FeaturedDogs />

      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <h2 className="font-heading text-3xl font-bold text-forest-green text-center mb-8">
            Adoption Journey
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {adoptionSteps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-gold text-white rounded-full flex items-center justify-center font-heading text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="font-heading text-xl font-bold text-forest-green mb-2">
                  {step.title}
                </h3>
                <p className="text-brown/80 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PawDivider />
      <Contact />
    </div>
  );
};

export default AvailableDogsPage;
