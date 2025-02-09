import React from 'react';

export default function ClientsPage() {
  const clients = [
    { id: 1, name: 'Client 1', logo: '/client1.png' },
    { id: 2, name: 'Client 2', logo: '/client2.png' },
    { id: 3, name: 'Client 3', logo: '/client3.png' },
    { id: 4, name: 'Client 4', logo: '/client4.png' },
    { id: 5, name: 'Client 5', logo: '/client5.png' },
    { id: 6, name: 'Client 6', logo: '/client6.png' },
    { id: 7, name: 'Client 7', logo: '/client7.png' },
    { id: 8, name: 'Client 8', logo: '/client8.png' },
    { id: 9, name: 'Client 9', logo: '/client9.png' },
    { id: 10, name: 'Client 10', logo: '/client10.png' },
    { id: 11, name: 'Client 11', logo: '/client11.png' },
    { id: 12, name: 'Client 12', logo: '/client12.png' },
  ];

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50">
      <main className="container mx-auto flex-grow space-y-12 px-16 py-16">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
          {/* Clients Introduction */}
          <div className="mb-10 flex flex-col items-center justify-center gap-x-0 gap-y-6 max-md:mx-auto max-md:max-w-lg lg:mb-16 lg:flex-row lg:justify-between lg:gap-y-0">
            <div className="relative w-full text-center lg:w-2/4 lg:text-left">
              <h2 className="mx-auto max-w-max text-4xl font-bold leading-[3.25rem] text-gray-900 lg:mx-0 lg:mb-6 lg:max-w-md">
                Trusted by Industry Leaders
              </h2>
            </div>
            <div className="relative w-full text-center lg:w-2/4 lg:text-left">
              <p className="mb-5 text-lg font-normal text-gray-500">
                We are proud to work with leading companies across various industries, helping them achieve their international trade goals.
              </p>
            </div>
          </div>

          {/* Client Grid */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {clients.map((client) => (
              <div
                key={client.id}
                className="group flex items-center justify-center rounded-xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="flex h-24 w-full items-center justify-center rounded-lg bg-gray-50 p-4">
                  {/* Replace with actual client logos */}
                  <span className="text-lg font-medium text-gray-600">{client.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Want to become our client?
            </h3>
            <p className="mb-8 text-gray-600">
              Join our growing network of successful international businesses
            </p>
            <a
              href="/contact"
              className="inline-block rounded-full bg-blue-600 px-8 py-3 text-white transition-colors hover:bg-blue-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}