import React from 'react';
import { affiliates, AffiliateProduct } from '@/lib/affiliates';

interface InContentAffiliateCalloutProps {
  affiliateKey: AffiliateProduct;
}

const InContentAffiliateCallout: React.FC<InContentAffiliateCalloutProps> = ({
  affiliateKey,
}) => {
  const affiliate = affiliates[affiliateKey];

  if (!affiliate) {
    console.warn(`Affiliate data not found for key: ${affiliateKey}`);
    return null; // Or render a fallback UI
  }

  return (
    <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div className="flex-grow">
        {affiliate.badge && (
          <span className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-300/10 mb-2">
            {affiliate.badge}
          </span>
        )}
        <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
          {affiliate.description}
        </p>
      </div>
      <div className="flex-shrink-0">
        <a
          href={affiliate.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
        >
          {affiliate.cta}
          <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default InContentAffiliateCallout;
