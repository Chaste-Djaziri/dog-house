import React from 'react';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getRecentPosts } from '../data/blogPosts';

const BlogPreview = () => {
  const posts = getRecentPosts(3);

  return (
    <section id="blog" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest-green mb-4">
            Pet Care Blog
          </h2>
          <p className="text-lg text-brown max-w-2xl mx-auto">
            Stay informed with expert tips, breed guides, and helpful advice to ensure 
            your dog lives a healthy and happy life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-forest-green mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-brown mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-brown mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-brown mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center space-x-1 text-brown/60">
                    <Tag className="w-3 h-3" />
                    <span>{post.tags[0]}</span>
                  </div>
                </div>
                
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex items-center text-gold hover:text-forest-green font-medium transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-forest-green to-light-green rounded-2xl p-8 md:p-12 text-white text-center mt-16">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Stay Updated with Pet Care Tips
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest articles, tips, and updates 
            about dog care, training, and available puppies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-brown placeholder-brown/60 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button className="bg-gold hover:bg-light-gold text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm opacity-70 mt-4">
            We respect your privacy and will never spam you.
          </p>
        </div>

        {/* Blog CTA */}
        <div className="text-center mt-12">
          <p className="text-brown mb-4">
            Want to read more articles about dog care and training?
          </p>
          <Link
            to="/blog"
            className="bg-forest-green hover:bg-light-green text-white font-semibold px-8 py-3 rounded-full transition-colors inline-flex items-center"
          >
            Visit Our Full Blog
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
