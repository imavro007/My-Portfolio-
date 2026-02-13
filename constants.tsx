
import React from 'react';
import { 
  Palette, 
  Layers, 
  Share2, 
  Printer, 
  ShoppingBag, 
  Code2 
} from 'lucide-react';
import { Category, Project } from './types';

export const CATEGORIES: Category[] = ['Logo', 'Branding', 'Social Media', 'Print', 'Web Projects'];

export const SERVICES = [
  {
    title: 'Logo & Visual Identity',
    description: 'Crafting unique and memorable logos that define your brand essence.',
    icon: <Palette className="w-8 h-8" />,
  },
  {
    title: 'Brand Identity System',
    description: 'Developing cohesive brand guidelines, color palettes, and typography.',
    icon: <Layers className="w-8 h-8" />,
  },
  {
    title: 'Social Media Creatives',
    description: 'Engaging visuals designed for maximum impact across all social platforms.',
    icon: <Share2 className="w-8 h-8" />,
  },
  {
    title: 'Print & Packaging',
    description: 'Professional layouts for physical media and product packaging solutions.',
    icon: <Printer className="w-8 h-8" />,
  },
  {
    title: 'Marketing Materials',
    description: 'Banners, brochures, and flyers that effectively communicate your message.',
    icon: <ShoppingBag className="w-8 h-8" />,
  },
  {
    title: 'Front-End Development',
    description: 'Building responsive, high-performance web experiences using modern tech.',
    icon: <Code2 className="w-8 h-8" />,
  },
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Lumina Tech Branding',
    category: 'Branding',
    image: 'https://picsum.photos/seed/lumina/800/600',
    description: 'A comprehensive brand identity for a tech startup focusing on AI solutions.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    date: '2024-01-15'
  },
  {
    id: '2',
    title: 'Apex Logo Design',
    category: 'Logo',
    image: 'https://picsum.photos/seed/apex/800/600',
    description: 'Minimalist geometric logo representing growth and precision.',
    tools: ['Adobe Illustrator'],
    date: '2023-11-20'
  },
  {
    id: '3',
    title: 'Portfolio Website',
    category: 'Web Projects',
    image: 'https://picsum.photos/seed/web/800/600',
    description: 'Highly responsive and interactive portfolio built with React and Tailwind.',
    tools: ['React', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://github.com',
    date: '2024-03-01'
  }
];
