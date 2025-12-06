import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  price?: string;
  icon: LucideIcon;
  badge?: string;
  cta: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
  icon: LucideIcon;
}