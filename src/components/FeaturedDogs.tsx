import React, { useState } from 'react';
import { Heart, Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedDogs = () => {
  const [selectedBreed, setSelectedBreed] = useState('All');
  const [selectedGender, setSelectedGender] = useState('All');

  const dogs = [
    {
      id: 1,
      name: 'Bella',
      breed: 'Golden Retriever',
      age: '3 months',
      gender: 'Female',
      price: 'Contact for Price',
      image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=800',
      available: true,
      vaccinated: true,
      description: 'Playful and friendly puppy, great with children.'
    },
    {
      id: 2,
      name: 'Max',
      breed: 'German Shepherd',
      age: '4 months',
      gender: 'Male',
      price: 'Contact for Price',
      image: 'https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&w=800',
      available: true,
      vaccinated: true,
      description: 'Intelligent and loyal, perfect guard dog potential.'
    },
    {
      id: 3,
      name: 'Luna',
      breed: 'Labrador',
      age: '2 months',
      gender: 'Female',
      price: 'Contact for Price',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=800',
      available: true,
      vaccinated: false,
      description: 'Sweet and gentle, loves to play and cuddle.'
    },
    {
      id: 4,
      name: 'Rex',
      breed: 'Rottweiler',
      age: '5 months',
      gender: 'Male',
      price: 'Contact for Price',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=800',
      available: false,
      vaccinated: true,
      description: 'Strong and confident, well-socialized puppy.'
    }
  ];

  const breeds = ['All', ...new Set(dogs.map(dog => dog.breed))];
  const genders = ['All', 'Male', 'Female'];

  const filteredDogs = dogs.filter(dog => {
    return (selectedBreed === 'All' || dog.breed === selectedBreed) &&
           (selectedGender === 'All' || dog.gender === selectedGender);
  });

  return (
    <section id="dogs" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest-green mb-4">
            Available Dogs
          </h2>
          <p className="text-lg text-brown max-w-2xl mx-auto">
            Meet our adorable puppies looking for their forever homes. 
            All dogs come with health certificates and vaccination records.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <select
              value={selectedBreed}
              onChange={(e) => setSelectedBreed(e.target.value)}
              className="px-4 py-2 border border-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            >
              {breeds.map(breed => (
                <option key={breed} value={breed}>
                  {breed === 'All' ? 'All Breeds' : breed}
                </option>
              ))}
            </select>
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="px-4 py-2 border border-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            >
              {genders.map(gender => (
                <option key={gender} value={gender}>
                  {gender === 'All' ? 'All Genders' : gender}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Dogs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredDogs.map((dog, index) => (
            <div
              key={dog.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up ${
                !dog.available ? 'opacity-75' : ''
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative">
                <img
                  src={dog.image}
                  alt={dog.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  {dog.available ? (
                    <span className="bg-light-green text-white px-2 py-1 rounded-full text-xs font-medium">
                      Available
                    </span>
                  ) : (
                    <span className="bg-brown text-white px-2 py-1 rounded-full text-xs font-medium">
                      Adopted
                    </span>
                  )}
                </div>
                <button className="absolute top-4 left-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-forest-green" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-xl font-bold text-forest-green">
                    {dog.name}
                  </h3>
                  <div className="text-gold font-semibold">
                    {dog.price}
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-brown text-sm">
                    <span className="font-medium w-16">Breed:</span>
                    <span>{dog.breed}</span>
                  </div>
                  <div className="flex items-center text-brown text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{dog.age}</span>
                  </div>
                  <div className="flex items-center text-brown text-sm">
                    <span className="w-4 h-4 mr-2">♂♀</span>
                    <span>{dog.gender}</span>
                  </div>
                </div>
                
                <p className="text-brown text-sm mb-4">
                  {dog.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {dog.vaccinated && (
                      <span className="bg-light-green text-white px-2 py-1 rounded text-xs">
                        Vaccinated
                      </span>
                    )}
                  </div>
                </div>
                
                {dog.available ? (
                  <Link
                    to="/contact"
                    className="w-full inline-flex justify-center py-2 rounded-lg font-medium bg-gold hover:bg-light-gold text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                ) : (
                  <span className="w-full inline-flex justify-center py-2 rounded-lg font-medium bg-gray-300 text-gray-500 cursor-not-allowed">
                    Not Available
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-brown mb-4">
            Don't see what you're looking for? We have more dogs available!
          </p>
          <Link
            to="/contact"
            className="bg-forest-green hover:bg-light-green text-white font-semibold px-8 py-3 rounded-full transition-colors inline-flex items-center"
          >
            <Phone className="w-4 h-4 mr-2" />
            Contact Us for More Options
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDogs;
