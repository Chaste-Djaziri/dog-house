import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const SiteLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <ScrollToTop />
      <Header />
      <main className="flex-1 pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
