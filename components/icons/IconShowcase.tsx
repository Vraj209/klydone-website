import React from 'react';
import { Icon } from './index';

// Example component to showcase the icon system
export default function IconShowcase() {
  const iconExamples = [
    { name: 'rocket', label: 'Rocket (Launch/Growth)' },
    { name: 'analytics', label: 'Analytics (Data)' },
    { name: 'cloud', label: 'Cloud (Infrastructure)' },
    { name: 'bot', label: 'Bot (AI/Automation)' },
    { name: 'fintech', label: 'Fintech (Credit Card)' },
    { name: 'partnership', label: 'Partnership (Handshake)' },
    { name: 'linkedin', label: 'LinkedIn (Social)' },
    { name: 'github', label: 'GitHub (Development)' }
  ];

  return (
    <div className="bg-gray-900 p-8 rounded-lg">
      <h3 className="text-2xl font-bold text-white mb-6">Icon System Showcase</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {iconExamples.map((example, index) => (
          <div key={index} className="text-center">
            <div className="mb-2 flex justify-center">
              <Icon name={example.name} size={32} className="text-violet-500" />
            </div>
            <p className="text-sm text-gray-300">{example.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-400 text-sm">
          All icons are now Lucide icons following SOLID principles
        </p>
      </div>
    </div>
  );
}