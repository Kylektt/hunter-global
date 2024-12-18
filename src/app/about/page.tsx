import React from 'react';


export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50">
      {/* Hero Section */}
      <header className="border-t bg-blue-900 py-16">
        <div className="mx-auto w-full max-w-4xl text-center lg:text-start">
          <h1 className="mb-4 text-5xl font-bold text-red-600">About US</h1>
        </div>
      </header>

      <main className="container mx-auto flex-grow space-y-12 px-16 py-16">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
          <div className="grid w-full grid-cols-1 items-center justify-start gap-10 lg:grid-cols-2 xl:gap-12">
            <div className="inline-flex w-full flex-col items-center justify-center gap-10 lg:items-start">
              <div className="flex w-full flex-col items-start justify-center gap-8">
                <div className="flex flex-col items-center justify-start gap-4 lg:items-start">
                  <div className="flex w-full flex-col items-center justify-start gap-3 lg:items-start">
                    <h2 className="font-manrope text-center text-4xl font-bold leading-normal text-indigo-700 lg:text-start">Our Story</h2>
                    <p className="text-center text-base font-normal leading-relaxed text-gray-500 lg:text-start">
                      HunterGlobal emerged from a vision to revolutionize international trade. Our journey began with a simple yet powerful mission: to bridge global markets and create seamless trading opportunities for businesses worldwide.
                    </p>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-center gap-6">
                  <div className="grid w-full grid-cols-1 items-center justify-start gap-8 md:grid-cols-2">
                    <div className="inline-flex h-full w-full flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 p-3.5 transition-all duration-700 ease-in-out hover:border-gray-400">
                      <h4 className="font-manrope text-2xl font-bold leading-9 text-gray-900">12+ Months</h4>
                      <p className="text-base font-normal leading-relaxed text-gray-500">Influencing Digital Landscapes Together</p>
                    </div>
                    <div className="inline-flex h-full w-full flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 p-3.5 transition-all duration-700 ease-in-out hover:border-gray-400">
                      <h4 className="font-manrope text-2xl font-bold leading-9 text-gray-900">99+ Products</h4>
                      <p className="text-base font-normal leading-relaxed text-gray-500">Excellence Achieved Through Success</p>
                    </div>
                  </div>
                  <div className="grid h-full w-full grid-cols-1 items-center justify-start gap-8 md:grid-cols-2">
                    <div className="inline-flex w-full flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 p-3.5 transition-all duration-700 ease-in-out hover:border-gray-400">
                      <h4 className="font-manrope text-2xl font-bold leading-9 text-gray-900">99+ Awards</h4>
                      <p className="text-base font-normal leading-relaxed text-gray-500">Our Dedication to Innovation Wins Understanding</p>
                    </div>
                    <div className="inline-flex h-full w-full flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 p-3.5 transition-all duration-700 ease-in-out hover:border-gray-400">
                      <h4 className="font-manrope text-2xl font-bold leading-9 text-gray-900">99% Happy Clients</h4>
                      <p className="text-base font-normal leading-relaxed text-gray-500">Mirrors our Focus on Client Satisfaction.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full items-start justify-center lg:justify-start">
              <div className="relative h-full w-full rounded-3xl border-gray-200 sm:h-[646px] sm:w-[564px] sm:border sm:bg-gray-100">
                {/* <img 
                  className="h-full w-full rounded-3xl object-cover sm:ml-5 sm:mt-5" 
                  src="https://images.stockcake.com/public/4/4/f/44f81919-8330-4390-ad1d-d47d1b365a5d_medium/global-business-model-stockcake.jpg" 
                  alt="about Us image" 
                /> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}