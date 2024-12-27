import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
}

export default function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="relative mx-auto border-[14px] border-black rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
      {/* Phone frame details */}
      <div className="absolute top-0 inset-x-0">
        <div className="h-[32px] w-[148px] bg-black mx-auto rounded-b-[1rem]" />
      </div>
      
      {/* Content */}
      <div className="w-full h-full overflow-hidden rounded-[1.5rem]">
        {children}
      </div>
    </div>
  );
}