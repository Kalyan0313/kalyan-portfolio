'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Building2 } from 'lucide-react';
import { experience } from '@/constants/portfolio-data';

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Work Experience
          </h2>
          <p className="text-gray-400">
            My professional journey and key contributions
          </p>
        </motion.div>

        {/* Experience List */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 pb-8 border-l-2 border-white/10 last:pb-0 hover:border-primary/50 transition-colors duration-300"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0">
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                {exp.current && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="ml-4">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                      {exp.current && (
                        <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs font-medium rounded border border-green-500/30">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Building2 className="w-4 h-4 text-primary" />
                      <p className="text-base font-semibold text-primary">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm flex-shrink-0">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4 text-gray-300">
                  {exp.description.map((desc, descIndex) => (
                    <li key={descIndex} className="text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-primary mt-1.5 text-xs">●</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-white/5 text-gray-400 text-xs font-medium rounded border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}