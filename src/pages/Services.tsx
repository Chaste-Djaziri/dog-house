import React from 'react';
import { CheckCircle } from 'lucide-react';
import ServicesSection from '../components/Services';
import PawDivider from '../components/PawDivider';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import PageHero from '../components/PageHero';
import SEO, { SITE_URL } from '../components/SEO';

const servicePackages = [
  {
    name: 'Puppy Starter Bundle',
    description: 'Ideal for new dog parents—includes vaccination schedule, crate training plan, and nutrition roadmap.',
    perks: ['Health certificate & vet records', 'Personalized feeding plan', 'First grooming session voucher'],
  },
  {
    name: 'Training Essentials',
    description: 'Six-week positive reinforcement program tailored to puppies or adult dogs needing a refresh.',
    perks: ['Weekly one-on-one sessions', 'Homework exercises & progress tracking', 'Lifetime access to training resources'],
  },
  {
    name: 'Breeder Support Plus',
    description: 'Comprehensive breeding consultation for owners planning their first litter with expert oversight.',
    perks: ['Genetic screening guidance', 'Whelping support plan', 'Postnatal puppy development coaching'],
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-white">
      <SEO
        title="Dog Services in Rwanda | Breeding, Training & Grooming"
        description="Explore Doghouse Rwanda services including ethical breeding, tailored training programs, grooming, and breeder consultations for every life stage."
        keywords="dog services Rwanda, dog training Kigali, dog grooming Rwanda"
        url={`${SITE_URL}/services`}
      />
      <PageHero
        title="Services That Support Every Stage"
        subtitle="From selective breeding to lifelong training and wellness support, our team surrounds every dog and family with expert care."
        backgroundImage="https://images.pexels.com/photos/7210515/pexels-photo-7210515.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />

      <ServicesSection />

      <section className="bg-cream py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-forest-green text-center mb-12">
            Tailored Packages
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicePackages.map((pkg) => (
              <div key={pkg.name} className="bg-white rounded-3xl shadow-lg p-6 flex flex-col">
                <h3 className="font-heading text-xl font-bold text-forest-green mb-3">
                  {pkg.name}
                </h3>
                <p className="text-brown/80 mb-6 flex-1">{pkg.description}</p>
                <ul className="space-y-2 text-sm text-brown/80">
                  {pkg.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-gold mt-0.5" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PawDivider />
      <Testimonials />

      <PawDivider />
      <Contact />
    </div>
  );
};

export default ServicesPage;
