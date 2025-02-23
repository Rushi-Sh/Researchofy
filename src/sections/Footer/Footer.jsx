import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Content from '../index';

const Footer = () => {
  const { FooterContent } = Content;

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FooterContent.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">{section.section}</h3>
              
              {section.links && (
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className="hover:text-purple-400 transition-colors duration-200"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              
              {section.details && (
                <div className="space-y-3">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-10 w-10 text-purple-400" />
                    {section.details.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-purple-400" />
                    <a 
                      href={`tel:${section.details.phone}`}
                      className="hover:text-purple-400 transition-colors duration-200"
                    >
                      {section.details.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-purple-400" />
                    <a 
                      href={`mailto:${section.details.email}`}
                      className="hover:text-purple-400 transition-colors duration-200"
                    >
                      {section.details.email}
                    </a>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2025 Researchofy. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="/privacy" className="hover:text-purple-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-purple-400 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;