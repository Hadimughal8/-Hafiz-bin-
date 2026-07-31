import React from 'react';
import { WHATSAPP_LINK, TIKTOK_LINK } from '../data/products';

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
  </svg>
);

export const TikTokIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 003 15.68 6.34 6.34 0 009.35 22a6.34 6.34 0 006.34-6.34V9.05a8.16 8.16 0 004.76 1.53v-3.44a4.85 4.85 0 01-.86-.45z" />
  </svg>
);

interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  label?: string;
}

export const WhatsAppButton: React.FC<ButtonProps> = ({
  size = 'md',
  fullWidth = false,
  className = '',
  label = 'WhatsApp',
}) => {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-xs sm:text-sm gap-2.5',
    lg: 'px-8 py-4 text-base gap-3',
  }[size];

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-4 sm:w-5 h-4 sm:h-5',
    lg: 'w-6 h-6',
  }[size];

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center font-bold tracking-wider text-white bg-[#25D366] hover:bg-[#1DA851] rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.7)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 uppercase ${sizeClasses} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
    >
      <WhatsAppIcon className={`${iconSizes} shrink-0 fill-current text-white`} />
      <span>{label}</span>
    </a>
  );
};

export const TikTokButton: React.FC<ButtonProps> = ({
  size = 'md',
  fullWidth = false,
  className = '',
  label = 'TikTok',
}) => {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-xs sm:text-sm gap-2.5',
    lg: 'px-8 py-4 text-base gap-3',
  }[size];

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-4 sm:w-5 h-4 sm:h-5',
    lg: 'w-6 h-6',
  }[size];

  return (
    <a
      href={TIKTOK_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center font-bold tracking-wider text-white bg-[#000000] hover:bg-[#080808] border border-[#25F4EE] rounded-full shadow-[0_0_15px_rgba(37,244,238,0.3)] hover:shadow-[0_0_25px_rgba(37,244,238,0.5),_0_0_25px_rgba(254,44,85,0.4)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 uppercase group ${sizeClasses} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
    >
      <TikTokIcon className={`${iconSizes} shrink-0 fill-current text-white group-hover:text-[#25F4EE] transition-colors`} />
      <span className="group-hover:text-[#FFFFFF] transition-colors">{label}</span>
    </a>
  );
};
