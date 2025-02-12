import React from 'react';
import Image from 'next/image';

export default function ServicePage() {
  const services = [
    {
      title: "LED Lighting",
      description:
        "We have upgraded over 6,000 commercial premises to LED lighting Australia-wide. We understand the complexities of upgrading lights to LED and the best way for our clients to make savings while improving their working environment.",
      image: "/led-lighting.jpg",
    },
    {
      title: "Sports Lighting",
      description:
        "Upgrade or install LED sports lights to significantly improve your lighting levels, lower your operating cost and improve the experience for both athletes and spectators.",
      image: "/sports-lighting.jpg",
    },
    {
      title: "Solar PV and Battery",
      description:
        "We have designed and installed solar PV and battery solutions since 2010, with thousands of residential and commercial premises now generating their own energy. We are now a focused commercial solar specialist and a New Energy Tech Approved Seller.",
      image: "/solar-pv-battery.jpg",
    },
    {
      title: "Energy Monitoring & Management",
      description:
        "State-of-the-art intelligent monitoring solutions to ensure you get the most from your solar investment and you’re not wasting any money. Our solutions provide a robust and reliable method of ensuring your system is performing as forecast.",
      image: "/energy-monitoring.jpg",
    },
    {
      title: "Virtual Energy Network",
      description:
        "The Virtual Energy Network (VEN) is a cutting-edge distributed energy solution for solar. A smarter solution to further reduce your operating costs as well as your carbon emissions.",
      image: "/virtual-energy.jpg",
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-white">
      {/* Hero Section */}
      <header>
        <section className="py-32 bg-white">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-x-72">
            {/* Left Side: Text Content */}
            <div className="max-w-xl space-y-4 ml-12">
              <h1 className="text-xl text-red-500 leading-tight">SERVICES</h1>
              <h1 className="text-4xl font-bold text-blue-900 leading-tight">
                Your partner in commercial energy efficiency and sports lighting solutions
              </h1>
              <ul className="text-blue-900 grid grid-cols-2 gap-8 py-8">
                {[
                  "LED Lighting",
                  "Sports Lighting",
                  "Solar PV and Battery",
                  "Energy Monitoring & Management",
                  "Virtual Energy Network",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="relative pb-1 after:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-yellow-400 hover:after:bg-red-500"
                  >
                    {item}
                  </li>
                ))}
              </ul>
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

      <main className="container mx-auto flex-grow space-y-12 px-16 py-16">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
          <div className="grid grid-cols-1 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative flex flex-col md:flex-row bg-gray-50 transition-all duration-500 hover:bg-white hover:shadow-lg min-h-[540px]"
              >
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-blue-900">{service.title}</h3>
                    <p className="text-sm text-gray-900">{service.description}</p>
                  </div>
                  <button className="mt-10 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700">
                    Read More
                  </button>
                </div>
                <div className="w-full md:w-3/4 bg-gray-300 overflow-hidden h-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600} // Define the width and height
                    height={400}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <section className="bg-blue-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Our Full Service</h2>
        <p className="mt-4 max-w-3xl mx-auto">
          We are your one-stop shop for all your commercial energy efficiency needs. With over nine years’ experience in commercial LED and solar, we know what it takes to cut your power bill and reduce your CO2 emissions. We will also manage every step of the process for you.
        </p>
        <div className="mt-6 space-x-4">
          <button className="px-6 py-3 bg-white text-blue-900 rounded-md hover:bg-gray-300">For your industry</button>
          <button className="px-6 py-3 bg-white text-blue-900 rounded-md hover:bg-gray-300">Enquire today</button>
        </div>
      </section>
    </div>
  );
}
