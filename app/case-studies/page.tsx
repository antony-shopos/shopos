'use client';

import React from 'react';
import Link from 'next/link';
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      category: 'Apparel & Apparel',
      title: 'Vayu Activewear',
      description: 'A fitness apparel brand doubled down on systematic testing. They moved from intuition-based creative to data-backed iteration cycles.',
      result: '36% conversion lift from testing motion; identified seasonal barriers worked best in Q4',
      videoThumbnail: '/thumbnails/vayu.jpg',
    },
    {
      category: 'Food & Beverage',
      title: 'The Pantry Project',
      description: 'A food subscription box that stopped guessing what customers wanted. They built a systematic content graph showing recipe content lifted awareness significantly.',
      result: '23% conversion lift from recipe content; identified seasonal barriers worked best in Oct',
      videoThumbnail: '/thumbnails/pantry.jpg',
    },
    {
      category: 'Home & Living',
      title: 'Luma Home',
      description: 'A home goods brand that learned room context beats product shots. Their testing revealed what customers wanted lifestyle visions to feel at scale.',
      result: 'Cut creative production costs 38% while improving CVR 19% by systematically testing what works',
      videoThumbnail: '/thumbnails/luma.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Use existing header component */}
      <SiteHeader />

      {/* Hero Section */}
      <div className="relative pt-20 pb-16">
        {/* Dashed line top */}
        <div
          className="absolute left-0 right-0 top-0 h-px"
          style={{
            backgroundImage: 'repeating-linear-gradient(to right, #d1d5db 0, #d1d5db 8px, transparent 8px, transparent 16px)',
          }}
        />

        <div className="max-w-4xl mx-auto text-center px-8">
          <h1 className="text-5xl md:text-6xl font-medium mb-6 leading-tight">
            How brands use ShopQS
            <br />
            to <span className="italic text-blue-600">learn</span> what works
          </h1>
          <p className="text-gray-600 text-lg">
            Don't just take our words for it - hear what our customers have to say
          </p>
        </div>
      </div>

      {/* Case Studies */}
      <div className="max-w-5xl mx-auto px-8 py-12 space-y-16">
        {caseStudies.map((study, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
            {/* Video Thumbnail */}
            <div className="w-full md:w-1/2 relative group">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl">
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-l-[20px] border-l-black border-y-[12px] border-y-transparent ml-1" />
                  </button>
                </div>
                {/* Placeholder for video thumbnail - replace with actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900" />
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 pt-4">
              <p className="text-sm text-gray-500 mb-3">{study.category}</p>
              <h2 className="text-3xl font-semibold mb-4">{study.title}</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{study.description}</p>
              <div className="bg-gray-50 border-l-4 border-black pl-4 py-3">
                <p className="text-sm">
                  <span className="font-semibold">Result:</span> {study.result}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="relative mt-24 mb-16">
        {/* Dashed line top */}
        <div
          className="absolute left-0 right-0 top-0 h-px"
          style={{
            backgroundImage: 'repeating-linear-gradient(to right, #d1d5db 0, #d1d5db 8px, transparent 8px, transparent 16px)',
          }}
        />

        <div className="max-w-4xl mx-auto text-center px-8 py-20">
          <h2 className="text-4xl font-medium mb-8">Brands that learn win</h2>
          <button className="px-8 py-3.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-base font-medium">
            Get Started
          </button>
          <p className="text-sm text-gray-500 mt-4">No Credit Card Required</p>
        </div>

        {/* Dashed line bottom */}
        <div
          className="absolute left-0 right-0 bottom-0 h-px"
          style={{
            backgroundImage: 'repeating-linear-gradient(to right, #d1d5db 0, #d1d5db 8px, transparent 8px, transparent 16px)',
          }}
        />
      </div>

      {/* Use existing footer component */}
      <SiteFooter />
    </div>
  );
};

export default CaseStudiesPage;