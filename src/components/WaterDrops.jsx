import React from 'react';

const WaterDrops = () => {
  return (
    <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
      <div className="w-full h-full relative">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="water-drop"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              width: `${Math.random() * 15 + 2}px`,
              height: `${Math.random() * 15 + 5}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default WaterDrops;
