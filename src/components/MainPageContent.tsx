import React from 'react';

const MainPageContent = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="bg-gray-50 text-gray-800">
        {/* Navigation */}
        <nav className="bg-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">HunterGlobal</div>
            <div className="space-x-4">
              <a href="#about" className="hover:text-blue-600">About</a>
              <a href="#services" className="hover:text-blue-600">Services</a>
              <a href="#clients" className="hover:text-blue-600">Clients</a>
              <a href="#products" className="hover:text-blue-600">Products</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="bg-blue-50 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-blue-800 mb-4">Global Trading Solutions</h1>
            <p className="text-xl text-gray-600 mb-6">Connecting Markets, Delivering Excellence</p>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">Get in Touch</a>
          </div>
        </header>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Who We Are</h2>
            <div className="text-center text-gray-600">
              <p>HunterGlobal is a dynamic import and export trading company established in Victoria, Australia in 2022. We specialize in connecting businesses across global markets with strategic trading solutions.</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">What We Do</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <svg className="w-12 h-12 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
                <h3 className="font-bold mb-2">Global Trade</h3>
                <p className="text-sm text-gray-600">Strategic import and export trading solutions</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <svg className="w-12 h-12 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
                <h3 className="font-bold mb-2">Market Intelligence</h3>
                <p className="text-sm text-gray-600">Insights and strategic market analysis</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <svg className="w-12 h-12 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <h3 className="font-bold mb-2">Supply Chain</h3>
                <p className="text-sm text-gray-600">Efficient logistics and supply management</p>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Clients</h2>
            <div className="grid md:grid-cols-4 gap-6 opacity-70">
              <div className="bg-gray-100 p-6 rounded-lg text-center">Client Logo 1</div>
              <div className="bg-gray-100 p-6 rounded-lg text-center">Client Logo 2</div>
              <div className="bg-gray-100 p-6 rounded-lg text-center">Client Logo 3</div>
              <div className="bg-gray-100 p-6 rounded-lg text-center">Client Logo 4</div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Product Range</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="font-bold mb-2">Category 1</h3>
                <p className="text-sm text-gray-600">Product subcategory details</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="font-bold mb-2">Category 2</h3>
                <p className="text-sm text-gray-600">Product subcategory details</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="font-bold mb-2">Category 3</h3>
                <p className="text-sm text-gray-600">Product subcategory details</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">Download Brochure</a>
            </div>
          </div>
        </section>

        {/* Accreditations */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Accreditations</h2>
            <div className="grid md:grid-cols-4 gap-6 opacity-70">
              <div className="bg-gray-100 p-6 rounded-lg text-center">Accreditation 1</div>
              <div className="bg-gray-100 p-6 rounded-lg text-center">Accreditation 2</div>
              <div className="bg-gray-100 p-6 rounded-lg text-center">Accreditation 3</div>
              <div className="bg-gray-100 p-6 rounded-lg text-center">Accreditation 4</div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-2">What are our primary markets?</h3>
                <p className="text-gray-600">We operate across multiple international trade corridors.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-2">How do we ensure quality?</h3>
                <p className="text-gray-600">Rigorous supply chain management and strategic partnerships.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-2">What makes us unique?</h3>
                <p className="text-gray-600">Our adaptive approach and deep market insights.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Let&rsquo;s Connect</h2>
            <p className="mb-6">Ready to explore global trading opportunities?</p>
            <a href="mailto:contact@hunterglobal.com.au" className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 transition">Contact Us</a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p>© 2024 HunterGlobal Australia Pty Ltd | ABN 77 662 501 920</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainPageContent;