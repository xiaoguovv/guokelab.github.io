
export interface User {
  id: string;
  username: string;
  role: 'admin' | 'teacher';
  lastLogin: string;
}

export interface MediaItem {
  id: string;
  url: string;
  alt: string;
  type: string;
  uploadedAt: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: 'Physics' | 'Biology' | 'Robotics' | 'Astronomy' | 'Chemistry' | 'Nature' | 'Space';
  image: string;
  ageGroup: string;
  featured: boolean;
  status: 'published' | 'draft';
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  image: string;
  author: string;
  status: 'published' | 'draft';
}

export interface SiteSettings {
  heroTitle: string;
  heroSubtitle: string;
  aboutText: string;
  academyName: string;
  contactEmail: string;
  contactPhone: string;
}

export type PublicView = 
  | { type: 'home' }
  | { type: 'courses_archive' }
  | { type: 'course_detail', id: string }
  | { type: 'news_detail', id: string }
  | { type: 'enroll', courseId?: string }
  | { type: 'franchise' };

export type AppView = 'public' | 'admin_login' | 'admin_dashboard';
