import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO, { SITE_URL } from '../components/SEO';

interface ErrorPageProps {
  error?: Error;
  onRetry?: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error, onRetry }) => {
  const location = useLocation();
  const errorMessage = error?.message ?? 'An unexpected error occurred.';

  return (
    <div className="bg-cream min-h-[60vh] flex items-center">
      <SEO
        title="Something Went Wrong | Doghouse Rwanda"
        description="We hit a snag while loading this page. Please try again or return to the homepage."
        url={`${SITE_URL}${location.pathname}`}
      />
      <div className="container mx-auto px-4 py-20">
        <div className="bg-white rounded-3xl shadow-xl border border-cream max-w-3xl mx-auto p-10 text-center">
          <p className="text-gold font-heading text-sm uppercase tracking-widest mb-4">Error</p>
          <h1 className="font-heading text-4xl text-forest-green mb-6">
            Something went wrong
          </h1>
          <p className="text-brown/80 mb-8">
            We're sorry, but we couldn't process your request. Please try again or head back to the homepage.
          </p>
          {errorMessage && (
            <div className="bg-cream rounded-2xl p-4 mb-8 text-sm text-brown/70">
              <p className="font-semibold text-forest-green mb-1">Technical details</p>
              <p className="font-mono whitespace-pre-wrap break-words">{errorMessage}</p>
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {onRetry && (
              <button
                onClick={onRetry}
                className="inline-flex items-center justify-center rounded-full bg-forest-green px-8 py-3 text-white font-semibold hover:bg-forest-green/90 transition"
                type="button"
              >
                Try again
              </button>
            )}
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border border-forest-green px-8 py-3 text-forest-green font-semibold hover:bg-forest-green/10 transition"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
