'use client'
import React, { useState } from 'react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export default function FaqPage() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setActiveFaq((prev) => (prev === id ? null : id));
  };

  const faqs: FaqItem[] = [
    {
      id: 'faq1',
      question: 'What services does HunterGlobal offer?',
      answer:
        'HunterGlobal specializes in international trade services, including import/export solutions, trade finance, logistics management, and market analysis. We help businesses connect across global markets and streamline their trading operations.',
    },
    {
      id: 'faq2',
      question: 'How do I start trading with HunterGlobal?',
      answer:
        'Getting started is simple. Contact our team through our website or email, and our representatives will guide you through our onboarding process, assess your needs, and create a customized trading solution for your business.',
    },
    {
      id: 'faq3',
      question: 'What markets does HunterGlobal operate in?',
      answer:
        'We operate globally with a strong presence in Asia-Pacific, particularly in Australia and surrounding regions. Our network extends to major trading hubs worldwide, allowing us to facilitate international trade across diverse markets.',
    },
    {
      id: 'faq4',
      question: 'What types of products do you handle?',
      answer:
        'We handle a wide range of products across various industries, including consumer goods, industrial equipment, raw materials, and specialized products. Each category is managed with strict quality control and compliance measures.',
    },
    {
      id: 'faq5',
      question: 'How does HunterGlobal ensure quality control?',
      answer:
        'We maintain strict quality control through comprehensive supplier verification, regular product inspections, and adherence to international standards. Our quality assurance team monitors every stage of the trading process.',
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50">
      <main className="container mx-auto flex-grow space-y-12 px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* FAQ Introduction */}
          <div className="mb-12 text-center">
            <p className="text-lg text-gray-600">
              Find answers to common questions about our services and
              operations. If you can&apos;t find what you&apos;re looking for,
              please contact our support team.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                onClick={() => toggleFaq(faq.id)}
                className={`rounded-lg border border-gray-200 p-6 shadow-sm hover:cursor-pointer transition-all duration-300 ${activeFaq === faq.id
                  ? 'bg-blue-50 text-red-600'
                  : 'bg-white hover:bg-blue-50 hover:text-red-600 text-blue-600'
                  }`}
              >
                <div className="flex justify-between">
                  <h3
                    className="mb-3 text-xl font-semibold"
                  >
                    {faq.question}
                  </h3>
                  <span
                    className="text-xl font-bold p-2 text-center">
                    {activeFaq === faq.id ? '-' : '+'}
                  </span>
                </div>
                {activeFaq === faq.id && (
                  <p className="text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 rounded-lg bg-blue-50 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-blue-900">
              Still have questions?
            </h2>
            <p className="mb-6 text-gray-600">
              Our team is here to help. Contact us for personalized assistance.
            </p>
            <a
              href="mailto:support@hunterglobal.com"
              className="inline-block rounded-full bg-blue-600 px-8 py-3 text-white transition-colors hover:bg-blue-700"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main >
    </div >
  );
}