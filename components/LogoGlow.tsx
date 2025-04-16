import React from 'react';

interface LogoGlowProps {
  imagePath: string;
  alt?: string;
  className?: string;
  bubbleCount?: number;
}

const LogoGlow: React.FC<LogoGlowProps> = ({ 
  imagePath, 
  alt = "Logo", 
  className = "",
  bubbleCount = 12
}) => {
  // Generate random bubble positions
  const bubbles = Array.from({ length: bubbleCount }).map((_, i) => {
    const angle = (i * (360 / bubbleCount)) + (Math.random() * 30 - 15);
    const distance = 50 + Math.random() * 20;
    const size = 2 + Math.random() * 3;
    const delay = Math.random() * 2;
    const duration = 3 + Math.random() * 2;
    
    return {
      angle,
      distance,
      size,
      delay,
      duration
    };
  });

  return (
    <div className="relative flex justify-center items-center w-full max-w-[300px]">
      {/* Main logo with subtle glow */}
      <img 
        src={imagePath} 
        alt={alt}
        className={`w-full brightness-105 contrast-110 ${className}`}
        style={{
          filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.3))',
        }}
      />
      
      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {bubbles.map((bubble, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-white opacity-20 animate-float"
            style={{
              left: '50%',
              top: '50%',
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              transform: `translate(-50%, -50%) 
                           translate(${Math.cos(bubble.angle * Math.PI / 180) * bubble.distance}px, 
                                    ${Math.sin(bubble.angle * Math.PI / 180) * bubble.distance}px)`,
              animationDelay: `${bubble.delay}s`,
              animationDuration: `${bubble.duration}s`,
            }}
          />
        ))}
      </div>
      
      {/* Add this to your global CSS or CSS-in-JS */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(-50%, -50%) 
                       translate(var(--tx), var(--ty));
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: translate(-50%, -50%) 
                       translate(calc(var(--tx) * 1.2), calc(var(--ty) * 1.2));
            opacity: 0;
          }
        }
        .animate-float {
          animation-name: float;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default LogoGlow;