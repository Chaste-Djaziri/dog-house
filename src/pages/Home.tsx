import React from 'react';
import Hero from '../components/Hero';
import PawDivider from '../components/PawDivider';
import About from '../components/About';
import FeaturedDogs from '../components/FeaturedDogs';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import BlogPreview from '../components/Blog';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';
import { SITE_URL } from '../config/seo';
import {
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildWebsiteSchema,
} from '../utils/seo';

const HomePage = () => {
  return (
    <>
      <SEO
        title="Dog HouseRwanda | Trusted Dog Breeding & Dog Care"
        description="Discover healthy, well-socialized puppies and lifelong support from Dog HouseRwanda. Ethical breeding, training, grooming, and pet care services in Kigali."
        keywords="dog breeding Rwanda, puppies for sale Kigali, dog training Rwanda, pet care blog"
        url={SITE_URL}
        jsonLd={[
          buildOrganizationSchema(),
          buildLocalBusinessSchema(),
          buildWebsiteSchema(),
        ]}
      />
      <Hero />
      <PawDivider />
      <About />
      <PawDivider />
      <FeaturedDogs />
      <PawDivider />
      <Services />
      <PawDivider />
      <Gallery />
      <PawDivider />
      <Testimonials />
      <PawDivider />
      <BlogPreview />
      <PawDivider />
      <Contact />
      <PawDivider />
      <FAQ />
    </>
  );
};

export default HomePage;
