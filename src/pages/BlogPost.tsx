import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Tag } from 'lucide-react';
import PageHero from '../components/PageHero';
import SEO, { SITE_URL } from '../components/SEO';
import { getPostBySlug, getRecentPosts } from '../data/blogPosts';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;
  const recentPosts = getRecentPosts(4).filter((recent) => recent.slug !== slug);

  if (!post) {
    return (
      <div className="bg-cream min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <SEO
          title="Article Not Found | Doghouse Rwanda"
          description="The blog article you requested could not be found. Explore the latest pet care tips and guides from Doghouse Rwanda instead."
          keywords="dog blog Rwanda, pet care tips"
          url={`${SITE_URL}/blog`}
        />
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-forest-green mb-4">
          Article not found
        </h1>
        <p className="text-brown/80 max-w-xl mb-8">
          The blog post you are looking for may have been moved or removed. Browse our latest articles to keep up with pet care tips and adoption stories.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center bg-gold hover:bg-light-gold text-white font-semibold px-6 py-3 rounded-full transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </div>
    );
  }

  const articleUrl = `${SITE_URL}/blog/${post.slug}`;
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: post.date,
    url: articleUrl,
    mainEntityOfPage: articleUrl,
  };

  return (
    <div className="bg-cream">
      <SEO
        title={`${post.title} | Doghouse Rwanda Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        image={post.image}
        url={articleUrl}
        type="article"
        jsonLd={articleJsonLd}
      />
      <PageHero
        title={post.title}
        subtitle={post.excerpt}
        backgroundImage={post.image}
      >
        <div className="flex flex-col sm:flex-row gap-4 items-center text-brown/80 text-sm">
          <span className="flex items-center gap-2">
            <User className="w-4 h-4" /> {post.author}
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" /> {new Date(post.date).toLocaleDateString()}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> {post.readTime}
          </span>
        </div>
      </PageHero>

      <article className="container mx-auto px-4 py-16 grid lg:grid-cols-[2fr,1fr] gap-12">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-8">
          {post.content.map((paragraph, index) => (
            <p key={index} className="text-brown/80 leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}

          <div className="bg-cream border border-beige rounded-2xl p-6">
            <h2 className="font-heading text-xl font-bold text-forest-green mb-4">
              Key Takeaways
            </h2>
            <ul className="space-y-3 text-brown/80">
              {post.keyTakeaways.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-gold font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-semibold"
              >
                <Tag className="w-3 h-3" /> {tag}
              </span>
            ))}
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center text-forest-green font-semibold hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to articles
          </Link>
        </div>

        <aside className="space-y-8">
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="font-heading text-lg font-bold text-forest-green mb-4">
              Latest Posts
            </h3>
            <div className="space-y-4">
              {recentPosts.map((recent) => (
                <Link
                  key={recent.id}
                  to={`/blog/${recent.slug}`}
                  className="block group"
                >
                  <p className="font-semibold text-brown/80 group-hover:text-gold transition-colors">
                    {recent.title}
                  </p>
                  <span className="text-xs text-brown/60">
                    {new Date(recent.date).toLocaleDateString()} • {recent.readTime}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="font-heading text-lg font-bold text-forest-green mb-4">
              Need Personalized Advice?
            </h3>
            <p className="text-brown/80 mb-4">
              Schedule a consultation with our certified team for tailored breeding, training, and nutrition guidance.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center w-full bg-gold hover:bg-light-gold text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </aside>
      </article>
    </div>
  );
};

export default BlogPostPage;
