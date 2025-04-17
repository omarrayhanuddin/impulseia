import React, { useEffect } from 'react';

interface LogoGlowProps {
  imagePath: string;
  alt?: string;
  className?: string;
}

const LogoGlow: React.FC<LogoGlowProps> = ({ 
  imagePath, 
  alt = "Logo", 
  className = "" 
}) => {
  // Add the animation styles dynamically
  useEffect(() => {
    const styleId = 'logo-glow-pulse-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s infinite;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className="relative flex justify-center items-center w-full max-w-[300px]">
      {/* Animated pulse effect */}
      <div className="absolute w-full h-full z-[-2] animate-pulse-glow">
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(114,194,252,0.3)_0%,rgba(138,92,246,0.1)_40%,rgba(0,0,0,0)_70%)]"></div>
      </div>
      
      {/* Enhanced backdrop glow for better contrast */}
      <div className="absolute w-full h-full z-[-1] 
        bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_70%)] 
        dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.25)_0%,rgba(0,0,0,0)_70%)]"
      ></div>
      
      {/* Logo with stronger light outline and enhanced visibility */}
      <img 
        src={imagePath} 
        alt={alt}
        className={`w-full filter 
          brightness-[1.4] contrast-[1.4] 
          dark:brightness-[1.7] dark:contrast-[1.3] 
          drop-shadow-[0_0_2px_rgba(255,255,255,1)] 
          dark:drop-shadow-[0_0_2px_rgba(255,255,255,1)] 
          drop-shadow-[0_0_4px_rgba(255,255,255,0.8)] 
          dark:drop-shadow-[0_0_4px_rgba(255,255,255,0.9)] 
          drop-shadow-[0_0_7px_rgb(114,194,252)] 
          dark:drop-shadow-[0_0_10px_rgb(114,194,252)] 
          drop-shadow-[0_0_15px_rgba(138,92,246,0.842)] 
          dark:drop-shadow-[0_0_15px_rgba(138,92,246,0.6)] 
          saturate-150 dark:saturate-200
          ${className}`}
      />
    </div>
  );
};

export default LogoGlow;