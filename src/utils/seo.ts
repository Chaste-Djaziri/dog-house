import {
  BRAND_NAME,
  BRAND_TWITTER_HANDLE,
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_PHONE,
  BUSINESS_SOCIAL_PROFILES,
  DEFAULT_SHARE_IMAGE,
  SITE_URL,
} from '../config/seo';

const toAbsoluteUrl = (pathOrUrl: string) => {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }
  const normalised = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${normalised}`;
};

interface BreadcrumbItem {
  name: string;
  url: string;
}

export const buildBreadcrumbList = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const buildOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BRAND_NAME,
  url: SITE_URL,
  logo: toAbsoluteUrl(DEFAULT_SHARE_IMAGE),
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: BUSINESS_PHONE,
      email: BUSINESS_EMAIL,
      contactType: 'customer service',
      areaServed: 'RW',
      availableLanguage: ['English'],
    },
  ],
  sameAs: BUSINESS_SOCIAL_PROFILES,
});

export const buildLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'PetStore',
  name: BRAND_NAME,
  url: SITE_URL,
  image: toAbsoluteUrl(DEFAULT_SHARE_IMAGE),
  telephone: BUSINESS_PHONE,
  email: BUSINESS_EMAIL,
  address: {
    '@type': 'PostalAddress',
    ...BUSINESS_ADDRESS,
  },
  openingHours: ['Mo-Sa 08:00-18:00'],
  priceRange: '$$'
});

export const buildWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BRAND_NAME,
  url: SITE_URL,
  publisher: {
    '@type': 'Organization',
    name: BRAND_NAME,
  },
  inLanguage: 'en',
});

interface FAQItem {
  question: string;
  answer: string;
}

export const buildFaqSchema = (faqs: FAQItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

interface ServiceSchemaInput {
  name: string;
  description: string;
  url: string;
}

export const buildServiceSchemas = (services: ServiceSchemaInput[]) =>
  services.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: BRAND_NAME,
      url: SITE_URL,
    },
    areaServed: 'RW',
    serviceType: service.name,
    url: service.url,
  }));

export const buildContactPageSchema = ({
  description,
}: {
  description: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `${BRAND_NAME} Contact`,
  url: `${SITE_URL}/contact`,
  description,
  publisher: {
    '@type': 'Organization',
    name: BRAND_NAME,
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
  },
});

export const buildTestimonialSchema = (testimonials: Array<{
  author: string;
  quote: string;
}>) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: `${BRAND_NAME} Testimonials`,
  url: `${SITE_URL}/testimonials`,
  review: testimonials.map((testimonial) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: testimonial.author,
    },
    reviewBody: testimonial.quote,
    publisher: {
      '@type': 'Organization',
      name: BRAND_NAME,
    },
  })),
});

export const buildAvailableDogsSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Available Puppies',
  url: `${SITE_URL}/available-dogs`,
  itemListOrder: 'https://schema.org/ItemListOrderDescending',
  numberOfItems: 6,
  provider: {
    '@type': 'Organization',
    name: BRAND_NAME,
    url: SITE_URL,
  },
});

export const buildBlogBreadcrumbs = (slug: string, title: string) =>
  buildBreadcrumbList([
    { name: 'Home', url: SITE_URL },
    { name: 'Blog', url: `${SITE_URL}/blog` },
    { name: title, url: `${SITE_URL}/blog/${slug}` },
  ]);

export const buildGenericBreadcrumbs = (name: string, path: string) =>
  buildBreadcrumbList([
    { name: 'Home', url: SITE_URL },
    { name, url: `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}` },
  ]);

export const ORGANIC_SOCIAL_PROOF = {
  sameAs: BUSINESS_SOCIAL_PROFILES,
  brand: BRAND_NAME,
  twitterHandle: BRAND_TWITTER_HANDLE,
};
