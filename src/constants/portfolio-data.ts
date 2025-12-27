import { Project, Skill, Experience, ContactInfo } from '@/types';
import { getTotalExperience } from '@/lib/calculateExperience';

export const projects: Project[] = [
  {
    id: 'kidkruz',
    title: 'Kidkruz',
    description: 'School Transport Management App with real-time tracking and parent notifications.',
    longDescription: 'A comprehensive school transport management system built with React, Node.js, MongoDB, Firebase, and Socket.io. Features include driver scans for student onboarding, real-time trip tracking, and instant parent notifications for enhanced safety and peace of mind.',
    image: '/kidkruz_project.avif',
    techStack: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Socket.io', 'Express.js'],
    liveUrl: 'https://kidkruz.com',
    githubUrl: 'https://github.com/kalyanmahato/kidkruz',
    featured: true
  },
  {
    id: 'grass-app',
    title: 'Grass App',
    description: 'Full-stack E-commerce platform with admin panel and CMS management.',
    longDescription: 'A modern e-commerce platform built with Next.js, TypeScript, and Tailwind CSS. Features include user/admin panels, CMS management, responsive design, advanced filters, shopping cart, and secure payment integration.',
    image: '/grass_app.webp',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Node.js', 'Stripe'],
    liveUrl: 'https://grass-app.com',
    githubUrl: 'https://github.com/kalyanmahato/grass-app',
    featured: true
  },
  {
    id: 'raise-labs',
    title: 'Raise Labs',
    description: 'Flight booking system with Amadeus API integration and secure payments.',
    longDescription: 'A comprehensive flight booking system built with Next.js, Amadeus API, Redis, and Razorpay. Features include advanced flight search, real-time pricing, booking management, Redis caching for performance, and secure payment processing.',
    image: '/reiselabs.webp',
    techStack: ['Next.js', 'Amadeus API', 'Redis', 'Razorpay', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://raiselabs.com',
    githubUrl: 'https://github.com/kalyanmahato/raise-labs',
    featured: true
  },
  {
    id: 'jp-store',
    title: 'JP Store',
    description: 'E-commerce website with responsive design and advanced product filtering.',
    longDescription: 'A responsive e-commerce website built with modern web technologies. Features include product catalog, advanced filtering system, shopping cart functionality, and mobile-first responsive design.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop&crop=center',
    techStack: ['React', 'CSS3', 'JavaScript', 'Responsive Design'],
    liveUrl: 'https://jpstore.com',
    githubUrl: 'https://github.com/kalyanmahato/jp-store',
    featured: false
  }
];

export const skills: Skill[] = [
  // Core MERN Stack
  {
    name: 'MongoDB',
    level: 90,
    category: 'database',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'
  },
  {
    name: 'Express.js',
    level: 95,
    category: 'backend',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    invert: true
  },
  {
    name: 'React.js',
    level: 95,
    category: 'frontend',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
  },
  {
    name: 'Node.js',
    level: 95,
    category: 'backend',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'
  },

  // Frontend Technologies
  {
    name: 'TypeScript',
    level: 90,
    category: 'frontend',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
  },
  {
    name: 'Next.js',
    level: 90,
    category: 'frontend',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    invert: true
  },
  {
    name: 'Tailwind CSS',
    level: 95,
    category: 'frontend',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
  },
  {
    name: 'JavaScript',
    level: 95,
    category: 'frontend',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
  },

  // Backend & Database
  {
    name: 'REST APIs',
    level: 95,
    category: 'backend',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg'
  },
  {
    name: 'PostgreSQL',
    level: 85,
    category: 'database',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'
  },
  {
    name: 'MySQL',
    level: 80,
    category: 'database',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'
  },
  {
    name: 'Redis',
    level: 80,
    category: 'database',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg'
  },
  {
    name: 'Firebase',
    level: 85,
    category: 'database',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg'
  },

  // Tools & Services
  {
    name: 'Socket.io',
    level: 85,
    category: 'tools',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg',
    invert: true
  },
  {
    name: 'Docker',
    level: 85,
    category: 'tools',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg'
  },
  {
    name: 'CI/CD',
    level: 75,
    category: 'tools',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    invert: true
  },
  {
    name: 'Git',
    level: 90,
    category: 'tools',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
  }
];

export const experience: Experience[] = [
  {
    id: 'excellis-associate',
    company: 'Excellis IT',
    position: 'Associate Web Developer',
    duration: 'Jan 2025 - Present',
    description: [
      'Working on large-scale travel booking platform (Raise Labs) contributing to both frontend and backend development',
      'Developing scalable, high-performance features and integrating third-party APIs for seamless user experience',
      'Built key frontend components using Next.js, Tailwind CSS, Bootstrap, and Redux for responsive UI',
      'Integrated Amadeus API for real-time flight data, search results, pricing, and availability',
      'Built backend services with Node.js, Express, and TypeScript for user bookings and authentication',
      'Implemented Redis for caching API responses and improving application performance',
      'Integrated Razorpay for secure payment processing and designed MongoDB schemas for data storage'
    ],
    techStack: ['Next.js', 'TypeScript', 'React', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'Razorpay', 'Amadeus API'],
    current: true
  },
  {
    id: 'excellis-intern',
    company: 'Excellis IT',
    position: 'Web Development Intern',
    duration: 'Jul 2024 - Jan 2025',
    description: [
      'Contributed to both frontend and backend development in real-world client projects',
      'Worked on Kidkruz - School Transport Management Platform with real-time tracking and notifications',
      'Developed core features using Next.js, React, Redux, Node.js, Express, and MongoDB',
      'Integrated Firebase for authentication and push notifications, Socket.io for real-time communication',
      'Built responsive, mobile-friendly UIs with Tailwind CSS and Bootstrap',
      'Worked on Grass App - E-commerce platform with user-facing website and admin panel',
      'Developed backend APIs handling product listing, user authentication, and order logic'
    ],
    techStack: ['Next.js', 'React', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Socket.io', 'Tailwind CSS', 'Bootstrap'],
    current: false
  }
];

export const contactInfo: ContactInfo = {
  email: 'mahatokalyan2@gmail.com',
  phone: '+91 9641072290',
  github: 'https://github.com/Kalyan0313',
  linkedin: 'https://www.linkedin.com/in/kalyan-mahato-366444244',
  resume: 'https://drive.google.com/file/d/1KIIzVS9eQzRomi9sCTSRwzE3hASq7JMf/view?usp=sharing'
};

export const personalInfo = {
  name: 'Kalyan Mahato',
  title: 'Full Stack Developer',
  subtitle: 'MERN Stack | Backend Specialist',
  bio: `I'm a passionate Full Stack Developer with 1.6+ years of experience building scalable and user-friendly applications. Skilled in the MERN stack, I love creating impactful projects that solve real-world problems.`,
  avatar: '/kalyan_logo.JPG',
  location: 'Kolkata, India',
  available: true
};

export const education = {
  id: 'iem-btech',
  institution: 'Institute of Engineering and Management',
  degree: 'B.Tech',
  field: 'Computer Science and Engineering',
  location: 'Kolkata, India',
  cgpa: '8.38',
  startYear: '2020',
  endYear: '2023'
};
