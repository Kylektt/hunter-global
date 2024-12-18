import React from 'react';

export default function ServicePage() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50">
      {/* Hero Section */}
      <header className="border-t bg-blue-900 py-16">
        <div className="mx-auto w-full max-w-4xl text-center lg:text-start">
          <h1 className="mb-4 text-5xl font-bold text-red-600">Our Services</h1>
        </div>
      </header>

      <main className="container mx-auto flex-grow space-y-12 px-16 py-16">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
          {/* Services Introduction */}
          <div className="mb-10 flex flex-col items-center justify-center gap-x-0 gap-y-6 max-md:mx-auto max-md:max-w-lg lg:mb-16 lg:flex-row lg:justify-between lg:gap-y-0">
            <div className="relative w-full text-center lg:w-2/4 lg:text-left">
              <h2 className="mx-auto max-w-max text-4xl font-bold leading-[3.25rem] text-gray-900 lg:mx-0 lg:mb-6 lg:max-w-md">
                Global Trading Solutions
              </h2>
            </div>
            <div className="relative w-full text-center lg:w-2/4 lg:text-left">
              <p className="mb-5 text-lg font-normal text-gray-500">
                We offer comprehensive international trade services designed to streamline your global business operations
              </p>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {/* Service Card 1 */}
            <div className="group relative rounded-2xl bg-blue-900 p-6 transition-all duration-500 hover:bg-red-600">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Import/Export Solutions</h3>
              <p className="text-sm text-gray-300 group-hover:text-white">
                Comprehensive import/export services with customs clearance and documentation support
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="group relative rounded-2xl bg-blue-900 p-6 transition-all duration-500 hover:bg-red-600">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Trade Finance</h3>
              <p className="text-sm text-gray-300 group-hover:text-white">
                Flexible financing solutions to support your international trade operations
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="group relative rounded-2xl bg-blue-900 p-6 transition-all duration-500 hover:bg-red-600">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Logistics Management</h3>
              <p className="text-sm text-gray-300 group-hover:text-white">
                End-to-end logistics solutions including warehousing and distribution
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="group relative rounded-2xl bg-blue-900 p-6 transition-all duration-500 hover:bg-red-600">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Market Analysis</h3>
              <p className="text-sm text-gray-300 group-hover:text-white">
                Expert market insights and analysis to guide your international trade decisions
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}