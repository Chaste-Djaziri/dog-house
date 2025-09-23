import React from 'react';
import FAQSection from '../components/FAQ';
import Contact from '../components/Contact';
import PageHero from '../components/PageHero';
import SEO, { SITE_URL } from '../components/SEO';

const FAQPage = () => {
  return (
    <div className="bg-cream">
      <SEO
        title="Dog HouseRwanda FAQ | Adoption & Care"
        description="Get answers about Dog HouseRwanda's adoption process, health guarantees, training services, and post-adoption support."
        keywords="dog adoption questions Rwanda, Dog Housefaq, dog breeder support"
        url={`${SITE_URL}/faq`}
      />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find quick answers about adoption, health guarantees, training packages, and what to expect when working with Dog HouseRwanda."
        backgroundImage="https://images.pexels.com/photos/7210701/pexels-photo-7210701.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />

      <FAQSection />
      <Contact />
    </div>
  );
};

export default FAQPage;
