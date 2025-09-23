import React from 'react';
import FAQSection from '../components/FAQ';
import Contact from '../components/Contact';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { SITE_URL } from '../config/seo';
import { buildFaqSchema, buildGenericBreadcrumbs } from '../utils/seo';
import { FAQ_ITEMS } from '../data/faq';

const FAQPage = () => {
  return (
    <div className="bg-cream">
      <SEO
        title="Dog HouseRwanda FAQ | Adoption & Care"
        description="Get answers about Dog HouseRwanda's adoption process, health guarantees, training services, and post-adoption support."
        keywords="dog adoption questions Rwanda, Dog HouseRwanda FAQ, dog breeder support"
        url={`${SITE_URL}/faq`}
        jsonLd={[
          buildFaqSchema(FAQ_ITEMS),
          buildGenericBreadcrumbs('FAQ', '/faq'),
        ]}
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
