import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
}

const PageHero = ({ title, subtitle, backgroundImage, children }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream via-beige/40 to-cream">
      {backgroundImage && (
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      <div className="relative container mx-auto px-4 py-24 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-forest-green mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-brown/90 leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 flex justify-center">{children}</div>}
      </div>
    </section>
  );
};

export default PageHero;
