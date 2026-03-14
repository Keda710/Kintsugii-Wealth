export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface SocialLink {
  href: string;
  icon: 'linkedin' | 'instagram' | 'youtube';
}
