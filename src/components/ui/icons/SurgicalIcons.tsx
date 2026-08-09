import React from 'react';

const IconContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {children}
  </svg>
);

export const GallstoneIcon = ({ className }: { className?: string }) => (
  <IconContainer className={className}>
    <circle cx="32" cy="32" r="30" />
    <path d="M18 40 C14 26, 24 18, 40 18 C50 18, 52 28, 48 38 C44 48, 22 46, 18 40 Z" />
    <path d="M28 42 C26 50, 36 52, 34 42 C32 34, 30 34, 28 42 Z" />
    <circle cx="28" cy="44" r="1.5" fill="currentColor" />
    <circle cx="32" cy="46" r="1" fill="currentColor" />
  </IconContainer>
);

export const BileDuctSurgeryIcon = ({ className }: { className?: string }) => (
  <IconContainer className={className}>
    <circle cx="32" cy="32" r="30" />
    <path d="M20 30 C16 20, 26 14, 42 14 C50 14, 52 22, 48 30 C44 38, 24 36, 20 30 Z" />
    <path d="M30 30 L30 46" />
    <path d="M34 30 L34 44" />
    <path d="M26 40 L30 40" />
    <path d="M48 48 L32 38" />
    <rect x="46" y="46" width="4" height="4" transform="rotate(-30 48 48)" />
  </IconContainer>
);

export const AppendectomyIcon = ({ className }: { className?: string }) => (
  <IconContainer className={className}>
    <circle cx="32" cy="32" r="30" />
    <path d="M22 20 C22 20, 20 40, 24 46 C28 52, 36 46, 36 46 C36 46, 40 40, 38 20" />
    <path d="M30 48 C30 52, 26 56, 22 54" strokeWidth="2" />
    <path d="M14 50 L26 56" />
  </IconContainer>
);

export const BreastCancerIcon = ({ className }: { className?: string }) => (
  <IconContainer className={className}>
    <circle cx="32" cy="32" r="30" />
    <path d="M24 46 C24 46, 38 20, 32 16 C26 12, 20 22, 28 32 C36 42, 40 46, 40 46" />
    <path d="M24 46 L32 30 L40 46" />
  </IconContainer>
);

export const StapledHemorrhoidIcon = ({ className }: { className?: string }) => (
  <IconContainer className={className}>
    <circle cx="32" cy="32" r="30" />
    <path d="M24 16 L24 36 C24 42, 28 48, 32 48 C36 48, 40 42, 40 36 L40 16" />
    <circle cx="28" cy="46" r="3" />
    <circle cx="36" cy="46" r="3" />
    <path d="M32 48 L32 58" />
    <path d="M26 52 L38 52" />
  </IconContainer>
);

export const LaserProcedureIcon = ({ className }: { className?: string }) => (
  <IconContainer className={className}>
    <circle cx="32" cy="32" r="30" />
    <path d="M44 44 L52 52" strokeWidth="3" />
    <path d="M26 26 L44 44" />
    <path d="M22 22 L16 16" />
    <path d="M28 20 L24 14" />
    <path d="M20 28 L14 24" />
    <path d="M12 28 C16 24, 24 16, 28 12" />
  </IconContainer>
);

export const ThyroidSurgeryIcon = ({ className }: { className?: string }) => (
  <IconContainer className={className}>
    <circle cx="32" cy="32" r="30" />
    <path d="M20 16 C20 24, 24 48, 24 48" />
    <path d="M44 16 C44 24, 40 48, 40 48" />
    <path d="M32 32 C26 26, 20 28, 22 36 C24 42, 30 38, 32 36 C34 38, 40 42, 42 36 C44 28, 38 26, 32 32 Z" />
    <path d="M28 24 L36 24 M28 28 L36 28 M28 40 L36 40" />
  </IconContainer>
);

export const IntestineDisordersIcon = ({ className }: { className?: string }) => (
  <IconContainer className={className}>
    <circle cx="32" cy="32" r="30" />
    <path d="M20 44 L20 24 C20 18, 44 18, 44 24 L44 44" strokeWidth="2" />
    <path d="M26 30 C26 26, 32 26, 32 30 C32 34, 26 34, 26 38 C26 42, 38 42, 38 38 C38 34, 32 34, 32 38" />
  </IconContainer>
);

export const RectalBleedingIcon = ({ className }: { className?: string }) => (
  <IconContainer className={className}>
    <circle cx="32" cy="32" r="30" />
    <path d="M26 20 L26 36 C26 40, 30 46, 32 46 C34 46, 38 40, 38 36 L38 20" />
    <path d="M32 48 C30 50, 28 52, 28 54 C28 56, 36 56, 36 54 C36 52, 34 50, 32 48 Z" fill="currentColor" />
  </IconContainer>
);

export const AbscessManagementIcon = ({ className }: { className?: string }) => (
  <IconContainer className={className}>
    <circle cx="32" cy="32" r="30" />
    <path d="M16 40 C24 40, 26 24, 32 24 C38 24, 40 40, 48 40" />
    <path d="M30 32 L34 32 M32 30 L32 34" />
    <circle cx="32" cy="46" r="1.5" fill="currentColor" />
    <circle cx="32" cy="52" r="1" fill="currentColor" />
  </IconContainer>
);

export const IntestinalCancerIcon = ({ className }: { className?: string }) => (
  <IconContainer className={className}>
    <circle cx="32" cy="32" r="30" />
    <path d="M20 32 C20 20, 44 20, 44 32 C44 44, 20 44, 20 56" />
    <path d="M32 20 C28 18, 30 14, 34 16 C38 18, 36 24, 32 26 Z" />
    <circle cx="32" cy="20" r="8" strokeDasharray="2 2" />
    <circle cx="32" cy="20" r="2" />
  </IconContainer>
);

export const UterineCancerIcon = ({ className }: { className?: string }) => (
  <IconContainer className={className}>
    <circle cx="32" cy="32" r="30" />
    <path d="M32 44 C38 44, 40 38, 40 32 C40 26, 36 22, 32 22 C28 22, 24 26, 24 32 C24 38, 26 44, 32 44 Z" />
    <path d="M24 26 C18 24, 16 28, 16 28" />
    <path d="M40 26 C46 24, 48 28, 48 28" />
    <circle cx="14" cy="30" r="3" />
    <circle cx="50" cy="30" r="3" />
    <circle cx="32" cy="30" r="3" />
    <path d="M30 44 L30 50 M34 44 L34 50" />
  </IconContainer>
);

export const OvarianTumorIcon = ({ className }: { className?: string }) => (
  <IconContainer className={className}>
    <circle cx="32" cy="32" r="30" />
    <path d="M32 40 C36 40, 38 34, 38 28 C38 22, 34 18, 32 18" />
    <path d="M38 22 C44 20, 46 24, 46 24" />
    <circle cx="48" cy="28" r="8" />
    <circle cx="46" cy="26" r="2" />
    <circle cx="50" cy="30" r="1.5" />
  </IconContainer>
);

export const LapOvarianCystIcon = ({ className }: { className?: string }) => (
  <IconContainer className={className}>
    <circle cx="32" cy="32" r="30" />
    <path d="M20 32 C26 30, 28 34, 28 34" />
    <circle cx="32" cy="36" r="6" />
    <path d="M48 16 L36 28" />
    <path d="M36 28 L34 32 L38 34 Z" fill="currentColor" />
  </IconContainer>
);

export const KidneyStonesIcon = ({ className }: { className?: string }) => (
  <IconContainer className={className}>
    <circle cx="32" cy="32" r="30" />
    <path d="M22 22 C16 22, 14 30, 18 36 C22 42, 26 40, 26 34 C26 28, 28 22, 22 22 Z" />
    <path d="M42 22 C48 22, 50 30, 46 36 C42 42, 38 40, 38 34 C38 28, 36 22, 42 22 Z" />
    <path d="M22 36 C22 44, 28 50, 28 50" />
    <path d="M42 36 C42 44, 36 50, 36 50" />
    <circle cx="20" cy="30" r="1.5" fill="currentColor" />
    <circle cx="24" cy="42" r="1.5" fill="currentColor" />
  </IconContainer>
);

export const BladderStonesIcon = ({ className }: { className?: string }) => (
  <IconContainer className={className}>
    <circle cx="32" cy="32" r="30" />
    <path d="M32 46 C40 46, 44 38, 44 30 C44 24, 38 20, 32 20 C26 20, 20 24, 20 30 C20 38, 24 46, 32 46 Z" />
    <path d="M30 46 L30 52 M34 46 L34 52" />
    <circle cx="30" cy="38" r="2" fill="currentColor" />
    <circle cx="34" cy="40" r="1.5" fill="currentColor" />
    <circle cx="32" cy="34" r="2.5" fill="currentColor" />
  </IconContainer>
);

export const AbdominalTumorIcon = ({ className }: { className?: string }) => (
  <IconContainer className={className}>
    <circle cx="32" cy="32" r="30" />
    <path d="M20 16 C20 32, 16 48, 32 50 C48 48, 44 32, 44 16" />
    <circle cx="36" cy="32" r="6" />
    <path d="M36 22 L36 24 M36 40 L36 42 M26 32 L28 32 M44 32 L46 32" />
  </IconContainer>
);

export const DetailedOvarianTumorIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <circle cx="32" cy="32" r="30" fill="#fdf2f8" stroke="#fbcfe8" strokeWidth="2"/>
    <path d="M32 46 C38 46, 42 38, 42 30 C42 22, 36 18, 32 18 C28 18, 22 22, 22 30 C22 38, 26 46, 32 46 Z" fill="#ffe4e6" stroke="#fb7185" strokeWidth="2"/>
    <path d="M22 24 C14 20, 10 26, 10 26" fill="none" stroke="#fb7185" strokeWidth="2" strokeLinecap="round"/>
    <path d="M42 24 C50 20, 54 26, 54 26" fill="none" stroke="#fb7185" strokeWidth="2" strokeLinecap="round"/>
    <ellipse cx="12" cy="28" rx="4" ry="5" fill="#fecdd3" stroke="#e11d48" strokeWidth="1.5"/>
    <ellipse cx="52" cy="28" rx="6" ry="7" fill="#fecdd3" stroke="#e11d48" strokeWidth="1.5"/>
    <circle cx="50" cy="26" r="3" fill="#fda4af" stroke="#be123c" strokeWidth="1"/>
    <circle cx="54" cy="30" r="2" fill="#fda4af" stroke="#be123c" strokeWidth="1"/>
    <circle cx="49" cy="31" r="2.5" fill="#fda4af" stroke="#be123c" strokeWidth="1"/>
    <path d="M28 46 L28 54 M36 46 L36 54" stroke="#fb7185" strokeWidth="2"/>
  </svg>
);

export const DetailedLapOvarianCystIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <circle cx="32" cy="32" r="30" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="2"/>
    <path d="M32 46 C38 46, 42 38, 42 30 C42 22, 36 18, 32 18 C28 18, 22 22, 22 30 C22 38, 26 46, 32 46 Z" fill="#ffe4e6" stroke="#fb7185" strokeWidth="2"/>
    <path d="M22 24 C14 20, 10 26, 10 26" fill="none" stroke="#fb7185" strokeWidth="2" strokeLinecap="round"/>
    <ellipse cx="12" cy="28" rx="5" ry="6" fill="#fecdd3" stroke="#e11d48" strokeWidth="1.5"/>
    <circle cx="12" cy="26" r="3" fill="#fda4af" stroke="#be123c" strokeWidth="1"/>
    <path d="M48 6 L14 24" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M14 24 L10 26 L12 28 Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.5"/>
    <circle cx="44" cy="12" r="4" fill="#38bdf8" opacity="0.3"/>
  </svg>
);

export const DetailedKidneyStonesIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <circle cx="32" cy="32" r="30" fill="#fffbeb" stroke="#fde68a" strokeWidth="2"/>
    <path d="M24 24 C14 24, 12 36, 18 42 C24 48, 30 46, 30 38 C30 30, 32 24, 24 24 Z" fill="#fca5a5" stroke="#dc2626" strokeWidth="2"/>
    <path d="M40 24 C50 24, 52 36, 46 42 C40 48, 34 46, 34 38 C34 30, 32 24, 40 24 Z" fill="#fca5a5" stroke="#dc2626" strokeWidth="2"/>
    <path d="M24 38 C24 48, 28 54, 28 54" fill="none" stroke="#fca5a5" strokeWidth="3" strokeLinecap="round"/>
    <path d="M40 38 C40 48, 36 54, 36 54" fill="none" stroke="#fca5a5" strokeWidth="3" strokeLinecap="round"/>
    <path d="M21 32 L23 30 L25 33 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="1"/>
    <path d="M25 46 L27 45 L27 48 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="1"/>
    <path d="M42 34 L45 33 L44 36 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="1"/>
  </svg>
);

export const DetailedBladderStonesIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <circle cx="32" cy="32" r="30" fill="#fffbeb" stroke="#fde68a" strokeWidth="2"/>
    <path d="M32 50 C44 50, 48 40, 48 30 C48 20, 40 16, 32 16 C24 16, 16 20, 16 30 C16 40, 20 50, 32 50 Z" fill="#fca5a5" stroke="#dc2626" strokeWidth="2"/>
    <path d="M28 50 L28 58 M36 50 L36 58" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 32 L28 28 L30 34 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="1"/>
    <path d="M36 34 L38 31 L40 35 L38 38 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="1"/>
    <path d="M30 40 L34 38 L35 43 L31 44 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="1"/>
    <path d="M24 24 C28 20, 36 20, 40 24" fill="none" stroke="#fecaca" strokeWidth="1.5" strokeDasharray="2 2"/>
  </svg>
);

export const DetailedAbdominalTumorIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <circle cx="32" cy="32" r="30" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2"/>
    <path d="M18 16 C18 36, 14 52, 32 54 C50 52, 46 36, 46 16" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2"/>
    <path d="M24 26 C26 22, 38 22, 40 26 C42 30, 42 40, 40 44 C38 48, 26 48, 24 44 C22 40, 22 30, 24 26 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="2 2"/>
    <circle cx="36" cy="34" r="8" fill="#f87171" stroke="#b91c1c" strokeWidth="1.5"/>
    <circle cx="34" cy="32" r="3" fill="#ef4444"/>
    <path d="M36 22 L36 24 M36 44 L36 46 M24 34 L26 34 M46 34 L48 34" stroke="#f87171" strokeWidth="2" strokeLinecap="round"/>
    <path d="M28 26 L30 28 M42 40 L44 42 M42 26 L40 28 M28 42 L30 40" stroke="#fca5a5" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
