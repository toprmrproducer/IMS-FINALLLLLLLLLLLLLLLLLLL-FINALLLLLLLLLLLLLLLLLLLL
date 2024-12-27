import React from 'react';
import { Check } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

const features = [
  'Strategic content planning',
  'Engaging post creation',
  'Community management',
  'Real-time monitoring',
  'Performance analytics',
  'Trend optimization',
  'Brand voice consistency'
];

export default function SocialMediaFeature() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
          <span className="text-white">📱 Supercharge Your Social Success: </span>
          <span className="gradient-text">Full-Service Social Media Management</span>
          <span className="text-white"> 🚀</span>
        </h2>
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Features */}
        <div className="space-y-8">
          <div className="space-y-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="p-1 bg-[#FF0000]/10 rounded-full">
                  <Check className="w-4 h-4 text-[#FF0000]" />
                </div>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Description */}
        <div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Transform your social media presence with our expert management services. We handle everything from content creation to audience engagement, helping your brand stand out in the digital landscape. Let us drive meaningful connections while you focus on growing your business.
          </p>
        </div>
      </div>

      {/* Phone Mockup */}
      <div className="flex justify-center">
        <PhoneMockup />
      </div>
    </div>
  );
}