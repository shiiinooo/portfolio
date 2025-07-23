import React from 'react';

interface VideoBackgroundProps {
  src: string;
  fallbackImage?: string;
  overlay?: boolean;
  className?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  src, 
  fallbackImage, 
  overlay = true, 
  className = "" 
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={fallbackImage}
      >
        <source src={src} type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        {fallbackImage && (
          <img 
            src={fallbackImage} 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </video>
      
      {/* Optional overlay for better text readability */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40"></div>
      )}
    </div>
  );
};

export default VideoBackground;