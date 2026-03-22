import React from 'react';
import { useTheme } from '../context/AppContext';

interface LogoProps {
  size?: number;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 40, showText = true }) => {
  const { darkMode } = useTheme();

  return (
    <div className="flex items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-xl"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Ring */}
        <circle cx="50" cy="50" r="46" stroke="url(#logoGradient)" strokeWidth="6" />
        
        {/* Inner Circular Structure */}
        <path
          d="M50 10C27.9 10 10 27.9 10 50C10 72.1 27.9 90 50 90C72.1 90 90 72.1 90 50C90 27.9 72.1 10 50 10ZM50 84C31.2 84 16 68.8 16 50C16 31.2 31.2 16 50 16C68.8 16 84 31.2 84 50C84 68.8 68.8 84 50 84Z"
          fill="url(#logoGradient)"
          opacity="0.8"
        />

        {/* Top Left: Lightning Bolt (Energy) */}
        <path
          d="M38 22L28 42H38L33 62L48 37H38L43 22H38Z"
          fill="#3b82f6"
          filter="url(#glow)"
        />
        
        {/* Top Right: Water Drop (Water) */}
        <path
          d="M70 22C64 22 60 28 60 36C60 44 64 50 70 50C76 50 80 44 80 36C80 28 76 22 70 22ZM70 44C67 44 65 41 65 36C65 31 67 27 70 27C73 27 75 31 75 36C75 41 73 44 70 44Z"
          fill="#06b6d4"
          filter="url(#glow)"
        />
        
        {/* Bottom Left: Globe (Connectivity) */}
        <g filter="url(#glow)">
          <circle cx="32" cy="68" r="10" stroke="#3b82f6" strokeWidth="2" />
          <path d="M24 68H40M32 60V76" stroke="#3b82f6" strokeWidth="1" />
          <path d="M32 58C36 58 40 62 40 66" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
          <path d="M32 54C40 54 46 60 46 68" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Bottom Right: Gear (Process) */}
        <g filter="url(#glow)">
          <path
            d="M70 58C68 58 66 60 66 62V64L64 66H62C60 66 58 68 58 70C58 72 60 74 62 74H64L66 76V78C66 80 68 82 70 82C72 82 74 80 74 78V76L76 74H78C80 74 82 72 82 70C82 68 80 66 78 66H76L74 64V62C74 60 72 58 70 58Z"
            fill="#1e40af"
          />
          <path
            d="M66 70L69 73L74 68"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Center Cross Divider */}
        <path d="M50 18V38M50 62V82M18 50H38M62 50H82" stroke="url(#logoGradient)" strokeWidth="3" strokeLinecap="round" />
      </svg>
      
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`text-xl font-black tracking-tighter uppercase ${darkMode ? 'text-white' : 'text-blue-900'}`}>
            UTILITY HUB
          </span>
          <div className="flex items-center gap-1">
            <div className="h-[2px] flex-grow bg-cyan-500"></div>
            <span className="text-sm font-black text-cyan-500 tracking-widest">PRO</span>
            <div className="h-[2px] flex-grow bg-cyan-500"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
