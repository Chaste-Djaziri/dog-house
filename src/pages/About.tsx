import React from 'react';
import AboutSection from '../components/About';
import PawDivider from '../components/PawDivider';
import ServicesOverview from '../components/Services';
import FAQ from '../components/FAQ';
import PageHero from '../components/PageHero';
import SEO, { SITE_URL } from '../components/SEO';

const milestones = [
  {
    year: '2016',
    title: 'Dog HouseRwanda Opens',
    description:
      'We began with a small team of passionate breeders focused on champion bloodlines and ethical practices.',
  },
  {
    year: '2018',
    title: 'Licensed Nationally',
    description:
      'Our facility earned national breeding certification, reflecting our commitment to canine welfare and transparency.',
  },
  {
    year: '2021',
    title: 'Veterinary Partnerships',
    description:
      'We partnered with leading veterinarians in Kigali to provide comprehensive wellness programs for every litter.',
  },
  {
    year: '2023',
    title: 'Community Outreach',
    description:
      'Launched responsible pet ownership workshops across Rwanda, supporting families with ongoing education.',
  },
];

const teamMembers = [
  {
    name: 'Dr. Marie Uwimana',
    role: 'Lead Veterinarian',
    bio: 'Certified small-animal vet with 12 years of experience in preventive care and neonatal support.',
    image:
      'https://images.pexels.com/photos/7469222/pexels-photo-7469222.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Jean Claude Nkusi',
    role: 'Head Breeder',
    bio: 'Specializes in temperament matching and early socialization to prepare puppies for family life.',
    image:
      'https://images.pexels.com/photos/5732415/pexels-photo-5732415.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Sarah Mugisha',
    role: 'Training Director',
    bio: 'Certified obedience trainer focusing on positive reinforcement techniques for all experience levels.',
    image:
      'https://images.pexels.com/photos/7469228/pexels-photo-7469228.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const AboutPage = () => {
  return (
    <div className="bg-white">
      <SEO
        title="Dog HouseRwanda | Ethical Breeders & Expert Care"
        description="Meet the certified breeders, veterinarians, and trainers behind Dog HouseRwanda. Learn about our milestones, ethical standards, and lifelong support."
        keywords="dog breeders Rwanda, ethical dog breeding, Dog Houseteam"
        url={`${SITE_URL}/about`}
      />
      <PageHero
        title="About Dog HouseRwanda"
        subtitle="A trusted team of breeders, trainers, and veterinarians dedicated to raising healthy, confident dogs for loving families across Rwanda."
        backgroundImage="https://images.pexels.com/photos/4588055/pexels-photo-4588055.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />

      <AboutSection />

      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12">
          <div className="bg-cream rounded-3xl p-8 shadow-lg">
            <h2 className="font-heading text-2xl font-bold text-forest-green mb-6">
              Our Story & Milestones
            </h2>
            <p className="text-brown/80 mb-8">
              From our first carefully planned litter to a thriving community of dog lovers, Dog HouseRwanda has grown alongside the families we support.
            </p>
            <div className="space-y-6">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="flex gap-4">
                  <div className="text-gold font-heading text-2xl font-bold min-w-[60px]">
                    {milestone.year}
                  </div>
                  <div>
                    <h3 className="text-forest-green font-semibold mb-1">{milestone.title}</h3>
                    <p className="text-brown/80">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-cream">
            <h2 className="font-heading text-2xl font-bold text-forest-green mb-6">
              What Sets Us Apart
            </h2>
            <ul className="space-y-4 text-brown/80">
              <li>• Ethical breeding practices that prioritize genetics, temperament, and wellness.</li>
              <li>• Lifetime support for every dog and family in our community.</li>
              <li>• Partnerships with licensed vets, trainers, and behaviorists across Rwanda.</li>
              <li>• Transparent adoption process with detailed health records and guidance.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-forest-green text-center mb-12">
            Meet Our Expert Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-72 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-forest-green">
                    {member.name}
                  </h3>
                  <p className="text-gold uppercase tracking-wide text-xs font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-brown/80 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PawDivider />
      <ServicesOverview />
      <PawDivider />
      <FAQ />
    </div>
  );
};

export default AboutPage;
