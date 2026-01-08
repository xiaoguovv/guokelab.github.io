
import { Course, NewsItem, SiteSettings } from './types';

export const INITIAL_COURSES: Course[] = [
  {
    id: '1',
    title: '银河探索者：量子力学',
    description: '专为好奇心设计的亚原子粒子之旅，旨在理解现实世界的基础构件。',
    category: 'Physics',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    ageGroup: '10-14 岁',
    featured: true,
    status: 'published'
  },
  {
    id: '2',
    title: '神经网络与机器人学',
    description: '构建能够通过复杂的传感器阵列感知周围环境的类人类机器。',
    category: 'Robotics',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    ageGroup: '12-16 岁',
    featured: true,
    status: 'published'
  },
  {
    id: '3',
    title: '生物合成基础',
    description: '通过分子生物学和遗传学的实际实验室工作，理解生命的密码。',
    category: 'Biology',
    image: 'https://images.unsplash.com/photo-1532187875605-2fe358a3d46a?auto=format&fit=crop&q=80&w=800',
    ageGroup: '8-12 岁',
    featured: false,
    status: 'published'
  }
];

export const INITIAL_NEWS: NewsItem[] = [
  {
    id: '1',
    title: '卢米娜学者荣获全国机器人联赛冠军',
    content: '我们的高级机器人团队展示了在AI驱动导航系统方面前所未有的创新。',
    date: '2024-05-15',
    image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=800',
    author: '阿利斯泰尔·索恩博士',
    status: 'published'
  },
  {
    id: '2',
    title: '隆重开幕：星云观测台',
    content: '我们自豪地揭幕全新的先进天文台，配备1.2米口径望远镜。',
    date: '2024-06-01',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800',
    author: '莎拉·詹金斯',
    status: 'published'
  }
];

export const INITIAL_SETTINGS: SiteSettings = {
  heroTitle: '铸就未来的科学思想',
  heroSubtitle: '在这里，好奇心与世界级专业知识碰撞，培养下一代诺贝尔奖得主和创新者。',
  aboutText: '卢米娜科学学院不仅仅是一个教育机构；它是发现的圣地。基于严谨、好奇和动手掌握的原则，我们提供一个将科学兴趣转化为深刻能力的成长环境。',
  academyName: '卢米娜少儿科学学院',
  contactEmail: 'admissions@lumina-science.edu',
  contactPhone: '+1 (555) 789-科学'
};
