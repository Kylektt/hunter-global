import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col justify-between bg-gray-50">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}