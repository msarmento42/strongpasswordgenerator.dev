import React from 'react';
import { affiliates } from '@/lib/affiliates';

const NordPassInContentCallout: React.FC = () => {
  const nordpass = affiliates.nordpass;

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6 flex flex-col md:flex-row items-center justify-between shadow-sm">
      <div className="flex-grow text-center md:text-left mb-4 md:mb-0">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">
          {nordpass.name} - {nordpass.badge}
        </h3>
        <p className="text-blue-700 text-base">
          {nordpass.description}
        </p>
      </div>
      <div className="flex-shrink-0">
        <a
          href={nordpass.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          {nordpass.cta}
        </a>
      </div>
    </div>
  );
};

export default NordPassInContentCallout;
