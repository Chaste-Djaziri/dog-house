import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag } from 'lucide-react';
import PageHero from '../components/PageHero';
import SEO, { SITE_URL } from '../components/SEO';
import { blogPosts } from '../data/blogPosts';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const sortedPosts = useMemo(
    () =>
      [...blogPosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    []
  );

  const categories = useMemo(() => {
    const distinct = Array.from(new Set(blogPosts.map((post) => post.category)));
    return ['All', ...distinct];
  }, []);

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') {
      return sortedPosts;
    }
    return sortedPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory, sortedPosts]);

  const featuredPost = sortedPosts[0];

  const blogJsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Doghouse Rwanda Pet Care Blog',
      description:
        'Expert advice, training tips, and lifestyle inspiration from the Doghouse Rwanda team of breeders, vets, and trainers.',
      url: `${SITE_URL}/blog`,
      blogPost: sortedPosts.slice(0, 5).map((post) => ({
        '@type': 'BlogPosting',
        headline: post.title,
        image: post.image,
        author: {
          '@type': 'Person',
          name: post.author,
        },
        datePublished: post.date,
        description: post.excerpt,
        url: `${SITE_URL}/blog/${post.slug}`,
      })),
    }),
    [sortedPosts]
  );

  return (
    <div className="bg-cream">
      <SEO
        title="Pet Care Blog | Doghouse Rwanda"
        description="Read the latest pet care guides, training routines, breed insights, and wellness tips curated by the Doghouse Rwanda team."
        keywords="pet care blog, dog training tips, dog health Rwanda"
        url={`${SITE_URL}/blog`}
        jsonLd={blogJsonLd}
      />
      <PageHero
        title="Pet Care Blog"
        subtitle="Expert advice, training tips, health insights, and heartwarming stories to help you care for your dog with confidence."
        backgroundImage="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1200"
      >
        <div className="flex flex-col sm:flex-row gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                category === activeCategory
                  ? 'bg-gold text-white shadow-lg'
                  : 'bg-white text-forest-green hover:bg-gold/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </PageHero>

      <section className="container mx-auto px-4 py-16 space-y-16">
        {featuredPost && (
          <article className="grid lg:grid-cols-2 gap-10 bg-white rounded-3xl shadow-xl overflow-hidden">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-full object-cover"
            />
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-block bg-gold/10 text-gold font-semibold px-3 py-1 rounded-full text-sm mb-4">
                Featured
              </span>
              <h2 className="font-heading text-3xl font-bold text-forest-green mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-brown/80 mb-6 text-lg leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-brown/70 text-sm mb-6">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" /> {featuredPost.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(featuredPost.date).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {featuredPost.readTime}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 bg-cream px-3 py-1 rounded-full text-xs font-medium text-brown"
                  >
                    <Tag className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="inline-flex w-full sm:w-auto items-center justify-center bg-forest-green hover:bg-light-green text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Read Featured Story
              </Link>
            </div>
          </article>
        )}

        <div>
          <h3 className="font-heading text-2xl font-bold text-forest-green mb-8">
            Latest Articles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover rounded-t-2xl"
                  />
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <span className="inline-block text-xs font-semibold text-gold uppercase tracking-wide mb-3">
                    {post.category}
                  </span>
                  <Link to={`/blog/${post.slug}`} className="flex-1">
                    <h4 className="font-heading text-xl font-bold text-forest-green mb-3">
                      {post.title}
                    </h4>
                  </Link>
                  <p className="text-brown/80 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between text-sm text-brown/70">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" /> {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-forest-green mb-4">
                Never Miss a Training Tip or Health Update
              </h3>
              <p className="text-brown/80 mb-6">
                Join our community newsletter for curated pet care guidance, early access to available puppies, and upcoming events at Doghouse Rwanda.
              </p>
              <ul className="space-y-3 text-brown/80">
                <li>• Monthly vet-approved health insights tailored to Rwanda</li>
                <li>• Training routines for every life stage</li>
                <li>• Adoption stories, community highlights, and exclusive offers</li>
              </ul>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-brown/70 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-beige focus:border-gold focus:ring-2 focus:ring-gold outline-none text-brown"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-brown/70 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-beige focus:border-gold focus:ring-2 focus:ring-gold outline-none text-brown"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold hover:bg-light-gold text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Subscribe to Pet Care Updates
              </button>
              <p className="text-xs text-brown/60">
                By subscribing you agree to receive occasional updates from Doghouse Rwanda. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
