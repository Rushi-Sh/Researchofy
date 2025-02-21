import React from 'react';
import { ArrowRight } from 'lucide-react';
import Content from '../index';

const Home3 = () => {
  
  const {HomePageContent} = Content
  const firstContent = HomePageContent[1];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative group">
              <img 
                src={firstContent.image} 
                alt={firstContent.title}
                className="w-full max-w-md rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-medium">
                ✨ Discover More
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                {firstContent.title}
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {firstContent.text}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group inline-flex items-center justify-center px-8 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-all duration-200 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-gray-700 font-medium border border-gray-200 hover:border-purple-600 hover:text-purple-600 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home3;
