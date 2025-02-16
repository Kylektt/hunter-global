import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LEDLightingPage() {
    const services = [
        {
            title: "LED Lighting",
            description:
                "We have upgraded over 6,000 commercial premises to LED lighting Australia-wide. We understand the complexities of upgrading lights to LED and the best way for our clients to make savings while improving their working environment.",
            image: "/led-lighting.jpg",
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
                                LED lighting
                            </h1>
                            <p className="text-gray-900">
                                We have upgraded over 6,000 commercial premises to LED lighting Australia-wide. We understand the complexities of upgrading lights to LED and the best way for our clients to make savings while improving their working environment.
                            </p>
                            <div className="max-w-48">
                                <Link
                                    href="/contact"
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200 flex items-center gap-x-2 text-xl"
                                >
                                    Enqueiry Now
                                </Link>
                            </div>
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