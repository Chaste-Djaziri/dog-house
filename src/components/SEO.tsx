import { useEffect } from 'react';
import {
  BRAND_NAME,
  BRAND_TWITTER_HANDLE,
  DEFAULT_KEYWORDS,
  DEFAULT_ROBOTS,
  DEFAULT_SHARE_IMAGE,
  SITE_URL,
} from '../config/seo';

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
  robots?: string;
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

const parseKeywords = (keywords: Keywords) => {
  if (Array.isArray(keywords)) {
    return keywords;
  }
  return keywords
    .split(',')
    .map((keyword) => keyword.trim())
    .filter(Boolean);
};

const normaliseKeywords = (keywords?: Keywords) => {
  const supplied = keywords ? parseKeywords(keywords) : [];
  const seen = new Set<string>();
  const merged = [...DEFAULT_KEYWORDS, ...supplied].filter((keyword) => {
    const trimmed = keyword.trim();
    if (!trimmed) return false;
    const normalised = trimmed.toLowerCase();
    if (seen.has(normalised)) return false;
    seen.add(normalised);
    return true;
  });

  return merged.length > 0 ? merged.join(', ') : undefined;
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
  robots = DEFAULT_ROBOTS,
}: SEOProps) => {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.title = title;

    setMetaTag('name', 'description', description);

    const keywordContent = normaliseKeywords(keywords);
    if (keywordContent) {
      setMetaTag('name', 'keywords', keywordContent);
    }

    setMetaTag('name', 'author', BRAND_NAME);
    setMetaTag('name', 'robots', robots);
    setMetaTag('name', 'application-name', BRAND_NAME);
    setMetaTag('name', 'apple-mobile-web-app-title', BRAND_NAME);

    const canonicalUrl = resolveUrl(url) ?? `${SITE_URL}${window.location.pathname}`;
    setCanonicalLink(canonicalUrl);

    const imageUrl = resolveUrl(image) ?? `${SITE_URL}${DEFAULT_SHARE_IMAGE}`;

    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', imageUrl);
    setMetaTag('property', 'og:image:secure_url', imageUrl);
    setMetaTag('property', 'og:image:alt', title);
    setMetaTag('property', 'og:site_name', BRAND_NAME);
    setMetaTag('property', 'og:locale', 'en_RW');

    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', imageUrl);
    setMetaTag('name', 'twitter:image:alt', title);
    setMetaTag('name', 'twitter:site', BRAND_TWITTER_HANDLE);
    setMetaTag('name', 'twitter:creator', BRAND_TWITTER_HANDLE);
  }, [title, description, keywords, image, url, type, robots]);

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

// eslint-disable-next-line react-refresh/only-export-components
export default SEO;
