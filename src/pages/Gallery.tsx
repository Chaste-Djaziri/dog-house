import React from 'react';
import { Camera } from 'lucide-react';
import GallerySection from '../components/Gallery';
import PawDivider from '../components/PawDivider';
import Testimonials from '../components/Testimonials';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { SITE_URL } from '../config/seo';
import { buildGenericBreadcrumbs } from '../utils/seo';

const GalleryPage = () => {
  return (
    <div className="bg-cream">
      <SEO
        title="Dog HouseRwanda Gallery | Happy Families & Facilities"
        description="Explore adoption day highlights, behind-the-scenes nursery photos, and training moments from Dog HouseRwanda's community."
        keywords="Dog HouseRwanda gallery, dog adoption photos, dog breeders Rwanda"
        url={`${SITE_URL}/gallery`}
        jsonLd={buildGenericBreadcrumbs('Gallery', '/gallery')}
      />
      <PageHero
        title="Gallery & Happy Families"
        subtitle="Peek behind the scenes at Dog HouseRwanda. From our nursery to happy adoption days, every photo celebrates the bond between people and their pets."
        backgroundImage="https://images.pexels.com/photos/7210614/pexels-photo-7210614.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />

      <GallerySection />

      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-shrink-0 w-20 h-20 bg-gold text-white rounded-2xl flex items-center justify-center">
            <Camera className="w-10 h-10" />
          </div>
          <div className="flex-1">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-forest-green mb-4">
              Share Your Dog HouseStory
            </h2>
            <p className="text-brown/80 mb-4">
              We love hearing from families after adoption day. Send us your favorite memories on Instagram or email, and we will feature them in our community highlights.
            </p>
            <p className="text-brown/70 text-sm">
              Tag @doghouse_rw or email gallery@doghouserw.com with your dog’s name, breed, and a short caption to be featured in our monthly round-up.
            </p>
          </div>
        </div>
      </section>

      <PawDivider />
      <Testimonials />
    </div>
  );
};

export default GalleryPage;
