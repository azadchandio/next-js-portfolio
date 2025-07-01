'use client';

import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

const FloatingVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="w-full h-full overflow-hidden shadow-lg border border-gray-600 bg-black group rounded-md">
      <div className="relative w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover scale-[1.2] transition-transform duration-300"
          loop
          playsInline
        >
          <source src="/testingg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play button */}
        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/70 transition"
          >
            <Play size={20} className="text-white" />
          </button>
        )}

        {/* Pause button on hover */}
        {isPlaying && (
          <button
            onClick={handlePause}
            className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black/30 hover:bg-black/60 transition"
          >
            <Pause size={20} className="text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default FloatingVideo;
