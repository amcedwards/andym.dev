// Company SVG Icons - White, 64x64, crisp design

export const TDBankIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" fill="#00A74D" rx="8"/>
    <text x="32" y="42" fontSize="28" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">TD</text>
  </svg>
);

export const SourcedGroupIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="32" fill="#1F2937"/>
    <g fill="white">
      {/* S */}
      <path d="M 18 22 Q 20 20 24 20 Q 26 20 27 21 Q 28 22 27 24 Q 26 25 24 25 Q 20 25 18 28 Q 16 31 18 34 Q 20 36 24 36 Q 26 36 28 35 L 28 32"/>
      {/* G */}
      <path d="M 36 20 Q 40 20 42 22 Q 44 24 44 28 L 44 36 Q 44 40 42 42 Q 40 44 36 44 Q 32 44 30 42 Q 28 40 28 36 L 32 36 Q 32 38 33 39 Q 34 40 36 40 Q 38 40 39 39 Q 40 38 40 36 L 40 28 Q 40 26 39 25 Q 38 24 36 24 Q 34 24 33 25"/>
    </g>
  </svg>
);

export const IntuitIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" fill="#1B8FD4" rx="8"/>
    <text x="32" y="45" fontSize="32" fontWeight="900" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">I</text>
  </svg>
);

export const D2LIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" fill="#00A74D" rx="8"/>
    {/* D2L exponent design - simplified */}
    <g fill="white">
      <circle cx="24" cy="32" r="10"/>
      <path d="M 38 20 L 46 20 L 46 44 L 38 44 Q 32 44 32 32 Q 32 20 38 20 M 38 24 L 38 40 Q 36 40 36 32 Q 36 24 38 24"/>
      {/* Small exponent dot */}
      <circle cx="48" cy="24" r="3"/>
    </g>
  </svg>
);
