'use client';

import { useState, useRef } from "react";
import { X, Play } from "lucide-react";

const FloatingVideo = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 w-40 h-40 rounded-full overflow-hidden shadow-lg border border-gray-600 bg-black">
      <div className="relative w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-full"
          loop
          controls
        >
          <source src="/screen-capture.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/70 transition"
          >
            <Play size={20} className="text-white" />
          </button>
        )}

        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 bg-white text-black rounded-full p-1 hover:bg-red-600 hover:text-white transition text-xs"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};

export default FloatingVideo;
