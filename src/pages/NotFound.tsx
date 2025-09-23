import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO, { SITE_URL } from '../components/SEO';

const NotFoundPage = () => {
  const location = useLocation();

  return (
    <div className="bg-cream min-h-[60vh] flex items-center">
      <SEO
        title="Page Not Found | Doghouse Rwanda"
        description="The page you are looking for might have been moved or no longer exists."
        url={`${SITE_URL}${location.pathname}`}
      />
      <div className="container mx-auto px-4 py-20">
        <div className="bg-white rounded-3xl shadow-xl border border-cream max-w-3xl mx-auto p-10 text-center">
          <p className="text-gold font-heading text-sm uppercase tracking-widest mb-4">404 error</p>
          <h1 className="font-heading text-4xl text-forest-green mb-6">We couldn't find that page</h1>
          <p className="text-brown/80 mb-8">
            The page <span className="font-semibold">{location.pathname}</span> does not seem to exist. It may have been moved or removed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-forest-green px-8 py-3 text-white font-semibold hover:bg-forest-green/90 transition"
            >
              Go to homepage
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-forest-green px-8 py-3 text-forest-green font-semibold hover:bg-forest-green/10 transition"
            >
              Contact support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
