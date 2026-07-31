import React from 'react';

interface BHLogoProps {
  className?: string;
  size?: number;
  showGlow?: boolean;
}

export const BHLogo: React.FC<BHLogoProps> = ({ className = 'w-12 h-12', size, showGlow = true }) => {
  const customStyle = size ? { width: `${size}px`, height: `${size}px` } : undefined;

  return (
    <div 
      className={`relative inline-block select-none ${showGlow ? 'drop-shadow-[0_0_15px_rgba(212,175,55,0.35)]' : ''} ${className}`}
      style={customStyle}
    >
      <svg
        viewBox="0 0 300 300"
        className="w-full h-full transform transition-transform duration-300 hover:scale-105"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gold Metallic Linear & Radial Gradients */}
          <linearGradient id="bhGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF0B2" />
            <stop offset="35%" stopColor="#E6C657" />
            <stop offset="70%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8F6B1A" />
          </linearGradient>

          <linearGradient id="bhGoldBright" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F5E498" />
            <stop offset="50%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>

          <radialGradient id="goldGlowBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(212, 175, 55, 0.2)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
          </radialGradient>

          {/* Curved Text Paths */}
          {/* Top Arc for "MEN - WOMEN - KIDS" */}
          <path id="topTextArc" d="M 45,150 A 105,105 0 1,1 255,150" fill="none" />
          {/* Bottom Arc for "HOUSE OF BRANDS" */}
          <path id="bottomTextArc" d="M 35,150 A 115,115 0 0,0 265,150" fill="none" />
        </defs>

        {/* Outer Glow Circle */}
        <circle cx="150" cy="150" r="145" fill="url(#goldGlowBg)" />

        {/* Outer Gold Border Ring */}
        <circle cx="150" cy="150" r="142" fill="none" stroke="url(#bhGoldGradient)" strokeWidth="5" />
        <circle cx="150" cy="150" r="135" fill="none" stroke="rgba(212,175,55,0.4)" strokeWidth="1.5" />

        {/* Inner Black Disk */}
        <circle cx="150" cy="150" r="133" fill="#0E0E0E" />

        {/* Inner Gold Border Ring */}
        <circle cx="150" cy="150" r="96" fill="none" stroke="url(#bhGoldGradient)" strokeWidth="3" />
        <circle cx="150" cy="150" r="92" fill="none" stroke="rgba(212,175,55,0.3)" strokeWidth="1" />

        {/* Curved Top Text: MEN - WOMEN - KIDS */}
        <text fill="url(#bhGoldGradient)" fontSize="13" fontWeight="800" letterSpacing="3.5">
          <textPath href="#topTextArc" startOffset="50%" textAnchor="middle">
            MEN - WOMEN - KIDS
          </textPath>
        </text>

        {/* Left Star */}
        <g transform="translate(32, 147) scale(0.7)">
          <path d="M 0,-10 L 3,-3 L 10,0 L 3,3 L 0,10 L -3,3 L -10,0 L -3,-3 Z" fill="url(#bhGoldBright)" />
        </g>

        {/* Right Star */}
        <g transform="translate(268, 147) scale(0.7)">
          <path d="M 0,-10 L 3,-3 L 10,0 L 3,3 L 0,10 L -3,3 L -10,0 L -3,-3 Z" fill="url(#bhGoldBright)" />
        </g>

        {/* Curved Bottom Text: HOUSE OF BRANDS */}
        <text fill="url(#bhGoldGradient)" fontSize="15" fontWeight="900" letterSpacing="4.5">
          <textPath href="#bottomTextArc" startOffset="50%" textAnchor="middle">
            HOUSE OF BRANDS
          </textPath>
        </text>

        {/* Laurel Wreath Ornament (Left Branch) */}
        <g fill="none" stroke="url(#bhGoldGradient)" strokeWidth="2.2" strokeLinecap="round">
          {/* Main Stem */}
          <path d="M 82 170 C 72 130, 90 95, 120 78" />
          {/* Leaves */}
          <path d="M 80 160 Q 68 152 72 144 Q 82 148 84 156" fill="url(#bhGoldGradient)" />
          <path d="M 80 142 Q 65 132 72 124 Q 82 130 84 138" fill="url(#bhGoldGradient)" />
          <path d="M 85 125 Q 70 112 78 104 Q 88 110 89 120" fill="url(#bhGoldGradient)" />
          <path d="M 94 108 Q 80 94 90 86 Q 98 94 98 104" fill="url(#bhGoldGradient)" />
          <path d="M 106 93 Q 95 78 106 72 Q 112 82 110 90" fill="url(#bhGoldGradient)" />
        </g>

        {/* Laurel Wreath Ornament (Right Branch - Mirrored) */}
        <g fill="none" stroke="url(#bhGoldGradient)" strokeWidth="2.2" strokeLinecap="round">
          <path d="M 218 170 C 228 130, 210 95, 180 78" />
          <path d="M 220 160 Q 232 152 228 144 Q 218 148 216 156" fill="url(#bhGoldGradient)" />
          <path d="M 220 142 Q 235 132 228 124 Q 218 130 216 138" fill="url(#bhGoldGradient)" />
          <path d="M 215 125 Q 230 112 222 104 Q 212 110 211 120" fill="url(#bhGoldGradient)" />
          <path d="M 206 108 Q 220 94 210 86 Q 202 94 202 104" fill="url(#bhGoldGradient)" />
          <path d="M 194 93 Q 205 78 194 72 Q 188 82 190 90" fill="url(#bhGoldGradient)" />
        </g>

        {/* Center "BH" Monogram */}
        <g fill="url(#bhGoldBright)" stroke="#4A3709" strokeWidth="0.8">
          {/* Elegant Serif Italic 'BH' Monogram */}
          <text
            x="150"
            y="142"
            fontFamily="Cinzel, Georgia, serif"
            fontSize="74"
            fontWeight="900"
            fontStyle="italic"
            textAnchor="middle"
            letterSpacing="-3"
            filter="drop-shadow(2px 3px 4px rgba(0,0,0,0.8))"
          >
            BH
          </text>
        </g>

        {/* Curved Gold Ribbon at Bottom of Wreath */}
        <g>
          {/* Ribbon Backing / Shadow */}
          <path d="M 95 168 L 205 168 L 195 186 L 105 186 Z" fill="#8F6B1A" />
          {/* Ribbon Front */}
          <path
            d="M 90 165 C 130 160, 170 160, 210 165 L 202 185 C 165 182, 135 182, 98 185 Z"
            fill="url(#bhGoldGradient)"
            stroke="#FFF0B2"
            strokeWidth="0.8"
          />
          {/* Ribbon Fold Ends */}
          <path d="M 90 165 L 82 175 L 98 185 Z" fill="#694C10" />
          <path d="M 210 165 L 218 175 L 202 185 Z" fill="#694C10" />

          {/* Text inside Ribbon: "Bin Hafiz" */}
          <text
            x="150"
            y="179"
            fontFamily="Cinzel, serif"
            fontSize="14"
            fontWeight="800"
            fill="#0B0B0B"
            textAnchor="middle"
            letterSpacing="1"
          >
            Bin Hafiz
          </text>
        </g>
      </svg>
    </div>
  );
};
