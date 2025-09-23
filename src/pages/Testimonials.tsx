import React from 'react';
import TestimonialsSection from '../components/Testimonials';
import PawDivider from '../components/PawDivider';
import Contact from '../components/Contact';
import PageHero from '../components/PageHero';
import SEO, { SITE_URL } from '../components/SEO';

const stats = [
  { label: 'Families matched', value: '50+' },
  { label: 'Average rating', value: '4.9/5' },
  { label: 'Follow-up check-ins', value: '100%' },
];

const TestimonialsPage = () => {
  return (
    <div className="bg-white">
      <SEO
        title="Dog HouseRwanda Reviews | Happy Families"
        description="Read testimonials from families across Rwanda who adopted through Dog HouseRwanda and enjoy lifetime support from our team."
        keywords="Dog Housereviews, dog adoption stories, dog breeders testimonials"
        url={`${SITE_URL}/testimonials`}
      />
      <PageHero
        title="Testimonials & Success Stories"
        subtitle="Real feedback from Rwandan families who welcomed a Dog Housecompanion into their homes."
        backgroundImage="https://images.pexels.com/photos/7469227/pexels-photo-7469227.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />

      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-cream rounded-3xl p-8 text-center shadow-lg"
            >
              <div className="font-heading text-4xl text-gold font-bold mb-2">
                {stat.value}
              </div>
              <p className="text-brown/80 uppercase tracking-wide text-xs font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <TestimonialsSection />

      <section className="container mx-auto px-4 pb-16">
        <div className="bg-cream rounded-3xl p-8 md:p-12 text-center shadow-lg">
          <h2 className="font-heading text-3xl font-bold text-forest-green mb-4">
            Ready to Share Your Experience?
          </h2>
          <p className="text-brown/80 mb-6 max-w-2xl mx-auto">
            Send us a photo and testimonial after adoption day. Your story helps future families feel confident adopting from Dog HouseRwanda.
          </p>
          <a
            href="mailto:stories@doghouserw.com"
            className="inline-flex items-center justify-center bg-gold hover:bg-light-gold text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Email Your Story
          </a>
        </div>
      </section>

      <PawDivider />
      <Contact />
    </div>
  );
};

export default TestimonialsPage;
