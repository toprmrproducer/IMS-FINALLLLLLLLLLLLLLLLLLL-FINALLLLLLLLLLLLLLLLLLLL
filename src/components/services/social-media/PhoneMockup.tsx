import React from 'react';
import PhoneFrame from '../../ui/phone/PhoneFrame';

export default function PhoneMockup() {
  return (
    <div className="relative">
      <PhoneFrame>
        <img 
          src="https://static.wixstatic.com/media/4671a5_21a35688d0a042938181c983a89a3240~mv2.png/v1/fill/w_370,h_663,fp_0.17_0.68,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Simple%20Phone%20Reminder%20Valentine's%20Day%20Instagram%20Story.png"
          alt="Social Media Content"
          className="w-full h-full object-cover"
        />
      </PhoneFrame>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF0000]/20 to-transparent blur-3xl -z-10" />
    </div>
  );
}