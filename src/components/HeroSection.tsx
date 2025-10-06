'use client';

import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { contactInfo } from '@/constants/portfolio-data';

export default function HeroSection() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: contactInfo.linkedin,
    },
    {
      name: 'GitHub',
      icon: Github,
      href: contactInfo.github,
    },
    {
      name: 'Email',
      icon: Mail,
      href: `mailto:${contactInfo.email}`,
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-lg text-muted-foreground">
            Namaste 🙏, I&apos;m <span className="font-semibold text-foreground">Kalyan</span>. A passionate full stack developer
          </p>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
        >
          <div className="text-foreground">Building scalable</div>
          <div className="text-foreground">web applications with</div>
          <div className="text-foreground">
            focus on <span className="gradient-text">Performance</span> & <span className="gradient-text">User Experience</span>
          </div>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          A multidisciplinary developer crafting digital experiences that resonate with innovation, efficiency, and modern web technologies.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <motion.a
            href={contactInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-black rounded-lg font-semibold shadow-lg hover:bg-green-600 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out border-2 border-green-500"
          >
            Download Resume
            <Download className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-4"
        >
          <p className="text-sm text-muted-foreground">Find me on</p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}