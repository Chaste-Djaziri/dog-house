import { useEffect } from 'react';

export const SITE_URL = 'https://doghouse.micorp.pro';
export const DEFAULT_SHARE_IMAGE = '/hero1.jpg';

type Keywords = string | string[];

type JsonLd = Record<string, unknown> | Record<string, unknown>[];

interface SEOProps {
  title: string;
  description: string;
  keywords?: Keywords;
  image?: string;
  url?: string;
  type?: string;
  jsonLd?: JsonLd;
}

const ensureMetaTag = (attribute: 'name' | 'property', value: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${value}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  return element;
};

const setMetaTag = (attribute: 'name' | 'property', value: string, content: string) => {
  const element = ensureMetaTag(attribute, value);
  element.setAttribute('content', content);
};

const setCanonicalLink = (href: string) => {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

const normaliseKeywords = (keywords?: Keywords) => {
  if (!keywords) return undefined;
  return Array.isArray(keywords) ? keywords.join(', ') : keywords;
};

const resolveUrl = (pathOrUrl?: string) => {
  if (!pathOrUrl) return undefined;
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }
  return `${SITE_URL}${pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`}`;
};

const SEO = ({
  title,
  description,
  keywords,
  image = DEFAULT_SHARE_IMAGE,
  url,
  type = 'website',
  jsonLd,
}: SEOProps) => {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.title = title;

    setMetaTag('name', 'description', description);

    const keywordContent = normaliseKeywords(keywords);
    if (keywordContent) {
      setMetaTag('name', 'keywords', keywordContent);
    }

    const canonicalUrl = resolveUrl(url) ?? `${SITE_URL}${window.location.pathname}`;
    setCanonicalLink(canonicalUrl);

    const imageUrl = resolveUrl(image) ?? `${SITE_URL}${DEFAULT_SHARE_IMAGE}`;

    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', imageUrl);
    setMetaTag('property', 'og:site_name', 'Doghouse Rwanda');

    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', imageUrl);
    setMetaTag('name', 'twitter:site', '@doghouse_rw');
  }, [title, description, keywords, image, url, type]);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const existingScript = document.getElementById('seo-jsonld');
    if (existingScript) {
      existingScript.remove();
    }

    if (!jsonLd) return;

    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.id = 'seo-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [jsonLd]);

  return null;
};

export default SEO;
