'use client';

import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { contactInfo } from '@/constants/portfolio-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: contactInfo.github,
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      href: contactInfo.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      href: `mailto:${contactInfo.email}`,
      icon: Mail,
      color: 'hover:text-red-500'
    },
    {
      name: 'Resume',
      href: contactInfo.resume,
      icon: Download,
      color: 'hover:text-green-600'
    }
  ];

  return (
    <footer className="bg-transparent backdrop-blur-sm border-t border-gray-700 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Kalyan Mahato</h3>
            <p className="text-gray-300">
              Full Stack Developer passionate about creating impactful solutions with the MERN stack.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 py-2 text-base"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`min-w-[44px] min-h-[44px] rounded-lg bg-gray-800/50 hover:bg-gray-700/70 text-gray-300 hover:text-white transition-all duration-200 flex items-center justify-center ${link.color}`}
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Kalyan Mahato. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
