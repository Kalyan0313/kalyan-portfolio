'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '@/constants/portfolio-data';
import Image from 'next/image';

// Skill card component - Minimal logo only
const SkillCard = ({ skill }: { skill: typeof skills[0] }) => {
  return (
    <div className="group relative flex items-center justify-center min-w-[100px] mx-6 flex-shrink-0">
      {/* Icon - Just the logo */}
      <div className="relative">
        {skill.image ? (
          <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-125">
            <Image
              src={skill.image}
              alt={skill.name}
              width={64}
              height={64}
              className={`w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0 ${skill.invert ? 'invert' : ''}`}
            />
          </div>
        ) : (
          <div className="w-16 h-16 bg-white/10 rounded-lg" />
        )}

        {/* Tooltip on hover */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          <span className="text-xs text-white font-medium bg-black/80 px-3 py-1 rounded-md">
            {skill.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative pb-12">
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container with CSS Animation */}
          <div className="overflow-hidden">
            <div
              className="flex items-center animate-scroll hover:[animation-play-state:paused]"
              style={{
                width: 'max-content',
              }}
            >
              {duplicatedSkills.map((skill, index) => (
                <SkillCard key={`skill-${index}`} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}