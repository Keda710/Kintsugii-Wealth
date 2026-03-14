import { Linkedin, Instagram, Youtube } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/socialLinks';
import type { SocialLink } from '../types';

const ICONS: Record<SocialLink['icon'], React.ComponentType<{ className?: string }>> = {
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
};

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
  linkClassName?: string;
}

export function SocialLinks({
  className = '',
  iconClassName = 'w-5 h-5',
  linkClassName = 'p-2 text-navy/40 hover:text-gold transition-colors',
}: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {SOCIAL_LINKS.map(({ href, icon }) => {
        const Icon = ICONS[icon];
        return (
          <a
            key={icon}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            <Icon className={iconClassName} />
          </a>
        );
      })}
    </div>
  );
}
