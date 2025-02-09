import React from 'react';


export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-white text-gray-800">
      {/* Hero Section */}
      {/* Hero Section */}
      <header>
        <section className="py-32 bg-white">
          <div className="flex flex-col lg:flex-row items-start lg:items-center">
            {/* Left Side: Text Content */}
            <div className="max-w-6xl lg:w-1/2 space-y-4 ml-12">
              <h1 className="text-xl text-red-500 leading-tight">ABOUT US</h1>
              <h1 className="text-4xl font-bold text-blue-900 leading-tight">
                Who is Hunter Global?
              </h1>
              <p className="text-gray-900">
                Australia’s leading energy efficiency and sports lighting company. For over 13 years we have served businesses and government facilities in efforts to minimise energy consumption and costs.
              </p>
              <p className="text-gray-900">
                We provide full-turnkey solutions for LED lighting, sports lighting and solar PV and battery storage.
              </p>
            </div>

            {/* Right Side: Image Placeholder */}
            <div className="w-full flex justify-center relative px-8 pt-16 lg:pt-0">
              <div className="w-full min-h-[540px] bg-gray-500 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-gray-600">Image Placeholder</span>
              </div>
            </div>
          </div>
        </section>
      </header>

      {/* About Section */}
      <section id="about" className="bg-white">
        <div className="lg:mx-auto max-w-7xl border-b-2 border-blue-900 py-32 mx-8">
          {/* Heading with line below */}
          <div className="text-center mb-12 border-b-2 border-blue-900 pb-8">
            <h1 className="text-4xl font-semibold text-blue-900 mb-4">Full turn-key solutions</h1>
            <p className='text-center'>
              All of our installations are project managed by us. We have established and trusted partnerships with all suppliers and subcontractors. We also have our own in-house technical lighting and solar engineering teams to ensure you get the most out of your investment.
            </p>
          </div>

          {/* Content Items */}
          <div className="grid gap-6 pb-16 pt-8 lg:grid-cols-5 lg:pt-16">
            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <svg className="mx-auto mb-4 h-12 w-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http:www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
              </svg>
              <h3 className="font-bold mb-2">LED Design and development</h3>
              <p className="text-sm text-gray-600">We design our own range of market-leading LED lights for both internal lights and lights on poles.</p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <svg className="mx-auto mb-4 h-12 w-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http:www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
              <h3 className="font-bold mb-2">Project design and technical support</h3>
              <p className="text-sm text-gray-600">We will thoroughly assess your LED lighting and solar needs. We have dedicated lighting solutions and solar engineering teams.</p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <svg className="mx-auto mb-4 h-12 w-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http:www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <h3 className="font-bold mb-2">Project management, installation and activation</h3>
              <p className="text-sm text-gray-600">We manage all projects ourselves with our own people. We develop installation and delivery plans for accuracy, quality and safety management.</p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <svg className="mx-auto mb-4 h-12 w-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http:www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <h3 className="font-bold mb-2">Subsidy evidence gathering and submissions</h3>
              <p className="text-sm text-gray-600">We have been an Accredited Person with the VEU program since the beginning. We have our own in-house compliance team.</p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <svg className="mx-auto mb-4 h-12 w-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http:www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <h3 className="font-bold mb-2">Post-installation customer service and warranty</h3>
              <p className="text-sm text-gray-600">If things do go wrong, we are here to help. Our service warranty is two years.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="products">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row py-32 px-8 lg:px-0">
          {/* Left Image Div - 1/4 width */}
          <div className="w-full lg:w-1/2 h-96 lg:h-auto bg-yellow-500 bg-cover bg-center flex flex-col justify-center items-start p-8 text-white">
            <h1 className="text-4xl font-bold mb-4 text-red-500">Why Hunter Global?</h1>
            <p className="text-sm text-gray-900">
              We’re a team of passionate energy experts. From LED lighting to solar and beyond, if there is a way to improve energy outcomes for your business, we are at the leading edge.
            </p>
          </div>

          {/* Right Content Div - 3/4 width */}
          <div className="w-full p-8 lg:p-16 text-white bg-blue-900">
            {/* Cards */}
            <div className="grid grid-cols-1 gap-8">
              {[
                {
                  title: "100% independent from energy retailers",
                  desc: "Confidence that we will fully support your energy and cost-saving goals",
                  icon: "⚡",
                },
                {
                  title: "Over 13 years’ experience and we install nationally",
                  desc: "+10,000 energy efficiency, solar, and sports lighting upgrades across Australia",
                  icon: "☀️",
                },
                {
                  title: "Cutting-edge technologies and solutions",
                  desc: "Market-leading lights, technology to enable you to share electricity generated with other sites and the best available energy monitoring solutions",
                  icon: "🌱",
                },
                {
                  title: "We have worked with Australia’s largest companies, governments and local councils",
                  desc: "From massive and complex sites like the MCG to national rollouts for Charter Hall, Caterpillar, and Apex Steel",
                  icon: "🔒",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 h-full"
                >
                  {/* Icon */}
                  <div className="text-4xl flex-shrink-0">{card.icon}</div>
                  {/* Text Content */}
                  <div>
                    <h3 className="text-lg font-bold">{card.title}</h3>
                    <p className="text-sm text-gray-300">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-8 bg-blue-900 text-white py-32">
          {/* Heading */}
          <h2 className="text-2xl lg:text-4xl font-semibold mb-6 text-center">Certified and Trusted</h2>

          {/* Description */}
          <p className="text-sm lg:text-base mb-8 text-center">
            We have over 13 years’ experience, accredited under all major state and national energy efficiency schemes,
            including Victorian Energy Upgrades (VEU) and NSW’s Energy Savings Scheme (ESS).
            We are ISO 9001 certified, ISO 14001 and ISO 45001 certified.
            We are also the official sports lighting partner of Hockey Australia and Football NSW.
          </p>

          {/* Images Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-full h-40 bg-gray-500 flex items-center justify-center rounded-lg"
              >
                <span className="text-gray-200">Coming Soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}