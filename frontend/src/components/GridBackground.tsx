import React from 'react';

export function GridBackground() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {/* Animated gradient background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(120deg, #1F3B73 0%, #1ABC9C 60%, #F1C40F 100%)',
        opacity: 0.7,
        animation: 'gradientMove 12s ease-in-out infinite',
      }} />
      {/* SVG grid overlay */}
      <svg width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1F3B73" strokeWidth="2.5" />
          </pattern>
        </defs>
        <rect width="1440" height="900" fill="url(#grid)" />
      </svg>
      {/* Blurred abstract shape for depth */}
      <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: '10%', left: '60%', filter: 'blur(60px)', opacity: 0.3 }}>
        <circle cx="300" cy="300" r="200" fill="#1ABC9C" />
        <circle cx="400" cy="200" r="100" fill="#F1C40F" />
      </svg>
      {/* Keyframes for animated gradient */}
      <style>{`
        @keyframes gradientMove {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        div[aria-hidden="true"] > div {
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
}
