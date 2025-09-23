import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import AvailableDogsPage from './pages/AvailableDogs';
import ServicesPage from './pages/Services';
import GalleryPage from './pages/Gallery';
import TestimonialsPage from './pages/Testimonials';
import BlogIndexPage from './pages/Blog';
import BlogPostPage from './pages/BlogPost';
import ContactPage from './pages/Contact';
import FAQPage from './pages/FAQ';
import NotFoundPage from './pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="available-dogs" element={<AvailableDogsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="blog" element={<BlogIndexPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
