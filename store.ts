
import { useState, useEffect } from 'react';
import { Course, NewsItem, SiteSettings, User, MediaItem } from './types';
import { INITIAL_COURSES, INITIAL_NEWS, INITIAL_SETTINGS } from './constants';

// Simulated latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export function useDataStore() {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Database Tables
  const [courses, setCourses] = useState<Course[]>(() => {
    const saved = localStorage.getItem('db_courses');
    return saved ? JSON.parse(saved) : INITIAL_COURSES.map(c => ({ ...c, status: 'published' }));
  });

  const [news, setNews] = useState<NewsItem[]>(() => {
    const saved = localStorage.getItem('db_news');
    return saved ? JSON.parse(saved) : INITIAL_NEWS.map(n => ({ ...n, status: 'published' }));
  });

  const [settings, setSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem('db_settings');
    return saved ? JSON.parse(saved) : INITIAL_SETTINGS;
  });

  const [media, setMedia] = useState<MediaItem[]>(() => {
    const saved = localStorage.getItem('db_media');
    return saved ? JSON.parse(saved) : [
      { id: '1', url: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8', alt: 'Kid Scientist', type: 'image/jpeg', uploadedAt: '2024-01-01' },
      { id: '2', url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837', alt: 'Robotics Lab', type: 'image/jpeg', uploadedAt: '2024-01-02' },
      { id: '3', url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa', alt: 'Galaxy', type: 'image/jpeg', uploadedAt: '2024-01-03' }
    ];
  });

  // Persistence Effects
  useEffect(() => localStorage.setItem('db_courses', JSON.stringify(courses)), [courses]);
  useEffect(() => localStorage.setItem('db_news', JSON.stringify(news)), [news]);
  useEffect(() => localStorage.setItem('db_settings', JSON.stringify(settings)), [settings]);
  useEffect(() => localStorage.setItem('db_media', JSON.stringify(media)), [media]);

  // Simulated API Methods (Backend Management System Logic)
  
  const login = async (user: string, pass: string) => {
    setLoading(true);
    await delay(800);
    if (user === 'admin' && pass === 'science') {
      const newUser: User = { id: 'u1', username: 'admin', role: 'admin', lastLogin: new Date().toISOString() };
      setCurrentUser(newUser);
      setLoading(false);
      return true;
    }
    setLoading(false);
    return false;
  };

  const logout = () => setCurrentUser(null);

  const updateSettings = async (newSettings: Partial<SiteSettings>) => {
    setLoading(true);
    await delay(500);
    setSettings(prev => ({ ...prev, ...newSettings }));
    setLoading(false);
  };

  const addCourse = async (course: Course) => {
    setLoading(true);
    await delay(600);
    setCourses(prev => [course, ...prev]);
    setLoading(false);
  };

  const updateCourse = async (id: string, updated: Partial<Course>) => {
    setLoading(true);
    await delay(200);
    setCourses(prev => prev.map(c => c.id === id ? { ...c, ...updated } : c));
    setLoading(false);
  };

  const deleteCourse = async (id: string) => {
    setLoading(true);
    await delay(400);
    setCourses(prev => prev.filter(c => c.id !== id));
    setLoading(false);
  };

  const addNews = async (newsItem: NewsItem) => {
    setLoading(true);
    await delay(600);
    setNews(prev => [newsItem, ...prev]);
    setLoading(false);
  };

  const updateNews = async (id: string, updated: Partial<NewsItem>) => {
    setLoading(true);
    await delay(200);
    setNews(prev => prev.map(n => n.id === id ? { ...n, ...updated } : n));
    setLoading(false);
  };

  const deleteNews = async (id: string) => {
    setLoading(true);
    await delay(400);
    setNews(prev => prev.filter(n => n.id !== id));
    setLoading(false);
  };

  const uploadMedia = async (url: string, alt: string) => {
    setLoading(true);
    await delay(1000); // Simulate large file upload
    const newItem: MediaItem = {
      id: Math.random().toString(36).substr(2, 9),
      url,
      alt,
      type: 'image/jpeg',
      uploadedAt: new Date().toISOString()
    };
    setMedia(prev => [newItem, ...prev]);
    setLoading(false);
    return newItem;
  };

  const deleteMedia = async (id: string) => {
    setLoading(true);
    await delay(300);
    setMedia(prev => prev.filter(m => m.id !== id));
    setLoading(false);
  };

  return {
    loading,
    currentUser,
    courses,
    news,
    settings,
    media,
    login,
    logout,
    updateSettings,
    addCourse,
    updateCourse,
    deleteCourse,
    addNews,
    updateNews,
    deleteNews,
    uploadMedia,
    deleteMedia
  };
}
