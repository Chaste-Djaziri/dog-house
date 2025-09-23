import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import ContactSection from '../components/Contact';
import PawDivider from '../components/PawDivider';
import FAQ from '../components/FAQ';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { SITE_URL } from '../config/seo';
import { buildContactPageSchema, buildGenericBreadcrumbs } from '../utils/seo';

const contactChannels = [
  {
    icon: Phone,
    label: 'Call or WhatsApp',
    value: '+250 787 272 038',
    description: 'Reach us Monday–Saturday, 8 AM to 6 PM. We love quick check-ins and urgent questions.',
  },
  {
    icon: Mail,
    label: 'Email Support',
    value: 'info@doghouserw.com',
    description: 'Expect a reply within 24 hours. Perfect for sharing adoption preferences or documentation.',
  },
  {
    icon: MapPin,
    label: 'Visit Our Kennel',
    value: 'Kigali, Rwanda (by appointment only)',
    description: 'Schedule a guided tour of our facility and meet available puppies in a calm environment.',
  },
];

const ContactPage = () => {
  return (
    <div className="bg-white">
      <SEO
        title="Contact Dog HouseRwanda | Book a Visit"
        description="Call, WhatsApp, or email Dog HouseRwanda to discuss available puppies, training services, or schedule a kennel tour in Kigali."
        keywords="contact dog breeders Rwanda, Dog HouseRwanda contact, book dog visit"
        url={`${SITE_URL}/contact`}
        jsonLd={[
          buildContactPageSchema({
            description:
              'Call, WhatsApp, or email Dog HouseRwanda to discuss available puppies, training services, or schedule a kennel tour in Kigali.',
          }),
          buildGenericBreadcrumbs('Contact', '/contact'),
        ]}
      />
      <PageHero
        title="Contact Dog HouseRwanda"
        subtitle="We’re here to guide you through adoption, training, and lifelong care. Reach out through your preferred channel and our team will respond promptly."
        backgroundImage="https://images.pexels.com/photos/7210538/pexels-photo-7210538.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {contactChannels.map((channel) => (
            <div key={channel.label} className="bg-cream rounded-3xl p-6 shadow-lg">
              <channel.icon className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-heading text-xl font-bold text-forest-green mb-2">
                {channel.label}
              </h3>
              <p className="text-brown font-semibold mb-2">{channel.value}</p>
              <p className="text-brown/70 text-sm">{channel.description}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
      <PawDivider />
      <FAQ />
    </div>
  );
};

export default ContactPage;
