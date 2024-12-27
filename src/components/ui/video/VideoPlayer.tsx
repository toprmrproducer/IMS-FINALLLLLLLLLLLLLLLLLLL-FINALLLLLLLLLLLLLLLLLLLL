import React, { useState } from 'react';
import { Play } from 'lucide-react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="max-w-[400px] mx-auto">
      <div className="hover-scale aspect-[9/16] bg-gradient-to-br from-black/80 to-[#FF0000]/20 rounded-xl relative overflow-hidden border border-[#FF0000]/20">
        {/* Thumbnail Overlay */}
        {!isPlaying && (
          <div 
            className="absolute inset-0 z-20 cursor-pointer group"
            onClick={handlePlay}
          >
            <img 
              src="https://static.wixstatic.com/media/4671a5_ffe3e4df8fbc41d1bacb96383a31a1ce~mv2.png/v1/fill/w_295,h_524,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/4671a5_ffe3e4df8fbc41d1bacb96383a31a1ce~mv2.png"
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-4 rounded-full bg-[#FF0000]/90 group-hover:bg-[#FF0000] transition-colors duration-300">
                <Play className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        )}
        
        {/* Video Player */}
        <iframe 
          src={`https://player.vimeo.com/video/1041470723?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&controls=1${isPlaying ? '&autoplay=1' : ''}`}
          className="absolute inset-0 w-full h-full"
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          title="IMS Marketing Video"
        />
      </div>
    </div>
  );
}