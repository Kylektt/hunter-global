'use client'

import React from 'react';
import Nav from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MainPageContent = () => {
  const swiperCards = [
    { id: 1, title: "Solar Energy", desc: "Harness the power of the sun." },
    { id: 2, title: "Wind Turbines", desc: "Sustainable wind energy solutions." },
    { id: 3, title: "Battery Storage", desc: "Efficient energy storage systems." },
    { id: 4, title: "LED Lighting", desc: "Cost-effective commercial lighting." },
    { id: 5, title: "EV Charging", desc: "Charging solutions for electric vehicles." },
  ];

  const logos = [
    { src: "path/to/william-adams.png", alt: "William Adams" },
    { src: "path/to/spotlight.png", alt: "Spotlight" },
    { src: "path/to/asahi.png", alt: "Asahi" },
    { src: "path/to/pet-stock.png", alt: "Pet Stock" },
    { src: "path/to/mitre10.png", alt: "Mitre 10" },
  ];

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      <div className="bg-gray-50 text-gray-800 pt-16">
        <Nav />

        {/* Hero Section */}
        <header>
          <section className="py-32 bg-white">
            <div className="flex flex-col md:flex-row items-center md:ml-48">
              {/* Left Side: Text Content */}
              <div className="max-w-xl md:w-1/2 text-left place-items-start">
                <h1 className="text-5xl font-bold text-blue-800 leading-tight max-w-96">
                  Commercial Energy Saving Solutions
                </h1>
                <ul className="mt-6 space-y-6 text-xl text-blue-800 max-w-96">
                  <li className="flex items-center gap-3">
                    <span className="text-4xl">💡</span>
                    Solar PV and battery
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-4xl">🔌</span>
                    LED lighting
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-4xl">🏟️</span>
                    Sports lighting
                  </li>
                </ul>
              </div>

              {/* Right Side: Video */}
              <div className="w-full flex justify-center relative px-8 pt-12 md:pt-0">
                <video
                  className="w-full h-auto min-h-[844px] rounded-lg shadow-lg object-cover"
                  controls
                >
                  <source src="your-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
        </header>


        {/* About Section */}
        <section id="about" className="bg-white">
          <div className="mx-auto max-w-6xl border-b-2 border-blue-900 py-32">
            {/* Heading with line below */}
            <div className="text-center mb-12 border-b-2 border-blue-900 pb-8">
              <h1 className="text-4xl font-semibold text-blue-900 mb-4">What sets us apart</h1>
            </div>

            {/* Content Items */}
            <div className="grid gap-6 pb-16 pt-8 md:grid-cols-4 lg:pt-16">
              <div className="rounded-lg bg-white p-6 text-center shadow-md">
                <svg className="mx-auto mb-4 h-12 w-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http:www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
                <h3 className="font-bold mb-2">100% independent from energy retailers</h3>
                <p className="text-sm text-gray-600">Confidence that we will fully support your energy and cost saving goals</p>
              </div>
              <div className="rounded-lg bg-white p-6 text-center shadow-md">
                <svg className="mx-auto mb-4 h-12 w-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http:www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
                <h3 className="font-bold mb-2">Over 13 years’ experience and a national presence</h3>
                <p className="text-sm text-gray-600">+10,000 energy efficiency, solar and sports lighting upgrades across Australia</p>
              </div>
              <div className="rounded-lg bg-white p-6 text-center shadow-md">
                <svg className="mx-auto mb-4 h-12 w-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http:www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <h3 className="font-bold mb-2">Cutting-edge technologies and solutions</h3>
                <p className="text-sm text-gray-600">We only use market-leading technologies and trusted brands to ensure the best results for your site</p>
              </div>
              <div className="rounded-lg bg-white p-6 text-center shadow-md">
                <svg className="mx-auto mb-4 h-12 w-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http:www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <h3 className="font-bold mb-2">We have worked with some of Australia’s largest companies</h3>
                <p className="text-sm text-gray-600">From huge sites like the MCG to nation-wide energy efficiency and solar PV roll outs. We have done it all</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-white">
          <div className="mx-auto max-w-6xl flex items-center justify-between gap-x-4 border-b-2 border-blue-900 py-32">
            {/* Left Side - Images */}
            <div className="flex flex-col lg:w-1/2 gap-6">
              <div className="flex flex-row gap-6">
                <div className="bg-gray-300 h-64 flex-1 rounded-md"></div>
                <div className="bg-gray-300 h-64 flex-1 rounded-md"></div>
              </div>
              <div className="bg-gray-300 h-96 rounded-md"></div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:w-1/2 flex flex-col justify-center gap-6 text-center lg:text-left mt-6 lg:mt-0 px-16">
              <h2 className="text-3xl font-semibold">Your full-service green energy partner</h2>
              <p className="text-lg text-gray-700">
                We are your one stop shop for all your energy efficiency needs. With over 13 years’ experience in commercial LED lighting, solar and battery storage, we know what it takes to cut your power bill and reduce your CO2 emissions. We will also manage every step of the process for you.
              </p>
              <button className="bg-blue-500 text-white rounded-md hover:bg-blue-600 py-2 max-w-96">
                Learn more about Global Hunter
              </button>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients" className="bg-white py-32">
          <div className="mx-auto max-w-6xl">
            <div className='text-start text-xl space-y-4 py-4'>
              <h1 className='text-red-500'>FOR ALL BUSINESS TYPES</h1>
              <h1 className='text-blue-900 font-bold text-2xl'>Innovative solutions for your industry</h1>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={3}
              navigation={true}
              pagination={{ clickable: true }}
              breakpoints={{
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                480: { slidesPerView: 1 },
              }}
            >
              {swiperCards.map((card) => (
                <SwiperSlide key={card.id}>
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden min-h-96 flex flex-col my-2">
                    {/* Image Placeholder (At Least 40% of the Card) */}
                    <div className="bg-gray-300 flex items-center justify-center min-h-48">
                      <span className="text-gray-500 text-xl">Image</span>
                    </div>
                    {/* Text Content (Remaining Space) */}
                    <div className="flex-grow p-4 text-center flex flex-col justify-center">
                      <h3 className="text-lg font-semibold">{card.title}</h3>
                      <p className="text-sm text-gray-600">{card.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="bg-indigo-900">
          <div className="mx-auto flex">
            {/* Left Image Div - 1/5 width (1:4 ratio with 4/5) */}
            <div
              className="w-1/4 h-96 lg:h-auto bg-gray-300 bg-cover bg-center"
              style={{ backgroundImage: "url('/your-image-url.jpg')" }}
            >
              {/* Replace `/your-image-url.jpg` with the path to your image */}
            </div>

            {/* Right Content Div - 4/5 width (4:5 ratio with the image div) */}
            <div className="w-3/4 p-8 lg:p-16 text-white">
              {/* Heading */}
              <h2 className="text-2xl lg:text-4xl font-semibold mb-8">How we can help your business</h2>
              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Reduce your electricity bills",
                    desc: "Our cutting-edge solutions will lower your electricity bill through reduced energy reliance from the grid.",
                    icon: "⚡",
                  },
                  {
                    title: "Improve your working and playing environment",
                    desc: "Increase the light levels, reduce the glare, and expand the hours your sports facility can play.",
                    icon: "☀️",
                  },
                  {
                    title: "Lower your carbon emissions and contribute to ESG reporting targets",
                    desc: "Reduce your CO2 emissions through conserving your energy or generating your own clean power from the sun.",
                    icon: "🌱",
                  },
                  {
                    title: "Ensure energy security and protection from rising costs",
                    desc: "Your own solar system will protect you from soaring energy costs.",
                    icon: "🔒",
                  },
                  {
                    title: "Share or make money from your excess energy",
                    desc: "The virtual energy network enables excess energy generated and/or stored from a solar system to be distributed to other sites in your network.",
                    icon: "💰",
                  },
                ].map((card, index) => (
                  <div key={index} className="space-y-4 border-b-2 border-white p-4 h-full flex flex-col justify-between">
                    {/* Icon */}
                    <div className="text-4xl">{card.icon}</div>
                    {/* Title */}
                    <h3 className="text-lg font-bold">{card.title}</h3>
                    {/* Description */}
                    <p className="text-sm text-gray-300">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Accreditations */}
        <section id="clients" className="bg-white">
          <div className="mx-auto max-w-6xl border-b-2 border-blue-900 py-32">
            <div className='text-center text-4xl text-blue-900 mb-4 font-bold'>
              Who we have worked for
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={3}
              navigation={true}
              pagination={{ clickable: true }}
              breakpoints={{
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                480: { slidesPerView: 1 },
              }}
            >
              {logos.map((card) => (
                <SwiperSlide key={card.alt}>
                  <div className="bg-white overflow-hidden flex flex-col my-2">
                    {/* Image Placeholder (At Least 40% of the Card) */}
                    <div className="bg-gray-300 flex items-center justify-center min-h-48">
                      <span className="text-gray-500 text-xl">Coming Soon...</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Stories Section */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl py-32">
            <div className="py-4 text-center">
              <h1 className="text-blue-900 font-bold text-4xl">Success Stories</h1>
            </div>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={3}
              navigation={true}
              pagination={{ clickable: true }}
              breakpoints={{
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                480: { slidesPerView: 1 },
              }}
            >
              {logos.map((card, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white overflow-hidden flex flex-col my-2">
                    {/* Image Placeholder (At Least 40% of the Card) */}
                    <div className="bg-gray-300 flex items-center justify-center min-h-48">
                      <span className="text-gray-500 text-xl">Coming Soon...</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section id="faq" className="bg-red-600">
          <div className="mx-auto flex">
            {/* Left Image Div - 1/5 width (1:4 ratio with 4/5) */}
            <div
              className="w-1/4 h-96 lg:h-auto bg-gray-300 bg-cover bg-center"
              style={{ backgroundImage: "url('/your-image-url.jpg')" }}
            >
              {/* Replace `/your-image-url.jpg` with the path to your image */}
            </div>

            {/* Right Content Div - 4/5 width (4:5 ratio with the image div) */}
            <div className="w-3/4 p-8 lg:p-16 text-white max-w-2xl">
              {/* Heading */}
              <h2 className="text-lg lg:text-2xl font-semibold mb-8 text-white border-b-2 border-white pb-4">
                Arrange a callback
              </h2>
              <h2 className="text-2xl lg:text-4xl font-semibold mb-8 text-white">
                Our energy experts are ready to answer your questions
              </h2>
              <div className="max-w-48">
                <Link
                  href="/contact"
                  className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200 flex items-center gap-x-2 text-xl"
                >
                  Enqueiry Now
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div >
  );
};
export default MainPageContent;