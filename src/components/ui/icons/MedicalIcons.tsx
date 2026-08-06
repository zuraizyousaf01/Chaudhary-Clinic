import React from 'react';

export const LaparoscopyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Shield */}
    <path d="M32 60 C32 60, 12 48, 12 24 V12 L32 4 L52 12 V24 C52 48, 32 60, 32 60 Z" />
    {/* Abdomen sides */}
    <path d="M24 24 C26 36, 26 44, 24 48" />
    <path d="M40 24 C38 36, 38 44, 40 48" />
    {/* Navel */}
    <path d="M32 38 C32 40, 30 40, 30 38" />
    {/* Laparoscopic ports */}
    {/* Left port */}
    <path d="M16 28 L26 32" />
    <rect x="14" y="26" width="4" height="4" transform="rotate(22 16 28)" />
    {/* Right port */}
    <path d="M48 28 L38 32" />
    <rect x="46" y="26" width="4" height="4" transform="rotate(-22 48 28)" />
    {/* Bottom port */}
    <path d="M32 50 L32 42" />
    <rect x="30" y="50" width="4" height="4" />
  </svg>
);

export const GallbladderIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="32" cy="32" r="30" />
    {/* Liver */}
    <path d="M18 40 C14 26, 24 18, 40 18 C50 18, 52 28, 48 38 C44 48, 22 46, 18 40 Z" />
    {/* Gallbladder */}
    <path d="M28 42 C26 50, 36 52, 34 42 C32 34, 30 34, 28 42 Z" />
    <path d="M31 38 L31 32" />
    <path d="M26 46 L28 48" />
  </svg>
);

export const HerniaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="32" cy="32" r="30" />
    {/* Abdominal wall layers */}
    <path d="M20 16 L20 48" />
    <path d="M26 16 L26 48" />
    <path d="M32 16 L32 24 C32 24, 46 26, 46 32 C46 38, 32 40, 32 40 L32 48" /> {/* Bulge */}
    <path d="M40 16 L40 22" />
    <path d="M40 42 L40 48" />
    {/* Intestine loop bulging out */}
    <path d="M26 30 C32 30, 44 26, 44 32 C44 38, 32 34, 26 34" />
    {/* Mesh / Patch */}
    <path d="M30 20 L30 44" strokeDasharray="2 3" strokeWidth="2" />
  </svg>
);

export const MaternityIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="32" cy="32" r="30" />
    {/* Face profile and belly */}
    <path d="M26 16 C30 16, 30 20, 30 20 C30 20, 32 20, 32 22 C32 24, 30 24, 30 26 C30 28, 34 28, 36 34 C38 40, 48 42, 48 50 C48 56, 42 58, 36 58" />
    {/* Arm cradling belly */}
    <path d="M30 34 C32 44, 38 50, 44 50" />
    <path d="M22 22 L22 58" /> {/* back line */}
  </svg>
);

export const HighRiskPregnancyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="32" cy="32" r="30" />
    {/* Pregnant belly silhouette */}
    <path d="M24 16 C28 16, 30 20, 30 24 C30 28, 46 32, 46 44 C46 52, 40 56, 34 56" />
    {/* Heart symbol on belly */}
    <path d="M38 38 C40 36, 44 36, 44 38 C44 42, 38 46, 38 46 C38 46, 32 42, 32 38 C32 36, 36 36, 38 38 Z" />
    {/* Warning/Cross sign */}
    <path d="M48 20 L48 28 M44 24 L52 24" />
    <path d="M20 20 L20 56" />
  </svg>
);

export const GynecologyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="32" cy="32" r="30" />
    {/* Uterus */}
    <path d="M32 44 C38 44, 40 38, 40 32 C40 26, 36 22, 32 22 C28 22, 24 26, 24 32 C24 38, 26 44, 32 44 Z" />
    {/* Fallopian tubes */}
    <path d="M24 26 C18 24, 16 28, 16 28" />
    <path d="M40 26 C46 24, 48 28, 48 28" />
    {/* Ovaries */}
    <circle cx="14" cy="30" r="3" />
    <circle cx="50" cy="30" r="3" />
    {/* Cervix/Vagina */}
    <path d="M30 44 L30 50 M34 44 L34 50" />
    <path d="M28 50 C28 50, 32 52, 36 50" />
  </svg>
);
