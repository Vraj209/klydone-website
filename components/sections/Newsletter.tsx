'use client';

import { useState } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  
  return (
    <Section background="gray" padding="md">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-xl text-blue-100 mb-8">
          Stay ahead in software development, architecture trends and agency insights. Sign up to receive monthly tips, case studies and exclusive offers.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30"
          />
          <Button type="submit" variant="secondary" size="lg">
            Subscribe
          </Button>
        </form>
        
        <p className="text-sm text-blue-100 mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </Section>
  );
}

