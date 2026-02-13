
export type Category = 'Logo' | 'Branding' | 'Social Media' | 'Print' | 'Web Projects';

export interface Project {
  id: string;
  title: string;
  category: Category;
  image: string;
  description: string;
  tools: string[];
  link?: string;
  date: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: { email: string } | null;
}
