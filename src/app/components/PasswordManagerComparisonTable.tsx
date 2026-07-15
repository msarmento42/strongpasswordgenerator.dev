import React from 'react';

interface PasswordManager {
  name: string;
  tagline: string;
  freeTier: string;
  startingPrice: string;
  unlimitedDevices: string;
  openSource: string;
  hardware2FA: string;
  passkeys: string;
  familyPlan: string;
  url: string;
  badge?: string;
  badgeColor?: string;
}

const passwordManagers: PasswordManager[] = [
  {
    name: 'NordPass',
    tagline: 'Zero-knowledge password manager with a generous free tier',
    freeTier: 'Yes',
    startingPrice: '$2.99/mo',
    unlimitedDevices: 'Yes',
    openSource: 'No',
    hardware2FA: 'Yes',
    passkeys: 'Yes',
    familyPlan: 'Yes',
    url: 'https://nordpass.com/a/strongpasswordgenerator',
    badge: 'Editor\'s Pick',
    badgeColor: 'bg-green-100 text-green-800',
  },
  {
    name: 'Bitwarden',
    tagline: 'The open-source password manager trusted by millions',
    freeTier: 'Yes',
    startingPrice: 'Free (Premium $3.33/mo)',
    unlimitedDevices: 'Yes',
    openSource: 'Yes',
    hardware2FA: 'Yes',
    passkeys: 'Yes',
    familyPlan: 'Yes',
    url: 'https://bitwarden.com/a/strongpasswordgenerator',
  },
  {
    name: '1Password',
    tagline: 'Best password manager for families and teams',
    freeTier: 'No',
    startingPrice: '$2.99/mo',
    unlimitedDevices: 'Yes',
    openSource: 'No',
    hardware2FA: 'Yes',
    passkeys: 'Yes',
    familyPlan: 'Yes',
    url: 'https://1password.com',
  },
];

const PasswordManagerComparisonTable: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Password Manager Comparison</h2>
      <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
        <table className="min-w-max md:w-full text-sm text-left text-gray-700">
          <thead className="text-xs text-gray-900 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3">Feature</th>
              {passwordManagers.map((manager) => (
                <th key={manager.name} scope="col" className={`px-4 py-3 text-center ${manager.badge ? 'border-b-2 border-green-300' : ''}`}>
                  <div className="flex flex-col items-center">
                    <span className="font-semibold text-base">{manager.name}</span>
                    {manager.badge && (
                      <span className={`mt-1 px-2 py-0.5 rounded text-xs font-medium ${manager.badgeColor}`}>
                        {manager.badge}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <td className="px-4 py-3 font-medium text-gray-900">Tagline</td>
              {passwordManagers.map((manager) => (
                <td key={manager.name} className="px-4 py-3 text-center text-gray-600 italic">
                  {manager.tagline}
                </td>
              ))}
            </tr>
            <tr className="bg-gray-50 border-b">
              <td className="px-4 py-3 font-medium text-gray-900">Free tier</td>
              {passwordManagers.map((manager) => (
                <td key={manager.name} className="px-4 py-3 text-center">
                  {manager.freeTier}
                </td>
              ))}
            </tr>
            <tr className="bg-white border-b">
              <td className="px-4 py-3 font-medium text-gray-900">Starting price</td>
              {passwordManagers.map((manager) => (
                <td key={manager.name} className="px-4 py-3 text-center">
                  {manager.startingPrice}
                </td>
              ))}
            </tr>
            <tr className="bg-gray-50 border-b">
              <td className="px-4 py-3 font-medium text-gray-900">Unlimited devices</td>
              {passwordManagers.map((manager) => (
                <td key={manager.name} className="px-4 py-3 text-center">
                  {manager.unlimitedDevices}
                </td>
              ))}
            </tr>
            <tr className="bg-white border-b">
              <td className="px-4 py-3 font-medium text-gray-900">Open source</td>
              {passwordManagers.map((manager) => (
                <td key={manager.name} className="px-4 py-3 text-center">
                  {manager.openSource}
                </td>
              ))}
            </tr>
            <tr className="bg-gray-50 border-b">
              <td className="px-4 py-3 font-medium text-gray-900">Hardware 2FA</td>
              {passwordManagers.map((manager) => (
                <td key={manager.name} className="px-4 py-3 text-center">
                  {manager.hardware2FA}
                </td>
              ))}
            </tr>
            <tr className="bg-white border-b">
              <td className="px-4 py-3 font-medium text-gray-900">Passkeys support</td>
              {passwordManagers.map((manager) => (
                <td key={manager.name} className="px-4 py-3 text-center">
                  {manager.passkeys}
                </td>
              ))}
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 font-medium text-gray-900">Family plan</td>
              {passwordManagers.map((manager) => (
                <td key={manager.name} className="px-4 py-3 text-center">
                  {manager.familyPlan}
                </td>
              ))}
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-3 font-medium text-gray-900">Link</td>
              {passwordManagers.map((manager) => (
                <td key={manager.name} className="px-4 py-3 text-center">
                  <a
                    href={manager.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
                  >
                    Visit
                  </a>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PasswordManagerComparisonTable;
