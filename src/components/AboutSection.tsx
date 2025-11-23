'use client';

import { useRef, useEffect } from 'react';
import { Code, Database, Server, Zap, Star, Award, Target, Users } from 'lucide-react';
import { personalInfo } from '@/constants/portfolio-data';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {

  // GSAP refs
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const glowRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'Frontend Development', icon: Code, description: 'React, Next.js, TypeScript', color: 'from-blue-500 to-cyan-500' },
    { name: 'Backend Development', icon: Server, description: 'Node.js, Express.js, APIs', color: 'from-green-500 to-emerald-500' },
    { name: 'Database Management', icon: Database, description: 'MongoDB, Redis, Firebase, PostgreSQL', color: 'from-purple-500 to-pink-500' },
    { name: 'DevOps & Deployment', icon: Zap, description: 'Cloud platforms, CI/CD', color: 'from-orange-500 to-red-500' }
  ];

  const stats = [
    { number: '1.3+', label: 'Years Experience', icon: Award },
    { number: '8+', label: 'Projects Completed', icon: Target },
    { number: '5+', label: 'Technologies Mastered', icon: Star },
    { number: '100%', label: 'Client Satisfaction', icon: Users }
  ];

  // GSAP Animations
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Master timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Title animation with text reveal
      tl.fromTo(titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );

      // Image entrance with 3D rotation
      tl.fromTo(imageRef.current,
        {
          x: -100,
          y: 50,
          opacity: 0,
          rotationY: -15,
          scale: 0.8
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotationY: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out"
        },
        "-=0.8"
      );

      // Stats counter animation
      if (statsRef.current?.children) {
        tl.fromTo(Array.from(statsRef.current.children),
          {
            y: 50,
            opacity: 0,
            scale: 0.8
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)"
          },
          "-=0.5"
        );
      }

      // Skills cards animation
      if (skillsRef.current?.children) {
        tl.fromTo(Array.from(skillsRef.current.children),
          {
            y: 60,
            opacity: 0,
            rotationX: 45
          },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out"
          },
          "-=0.3"
        );
      }

      // Floating elements continuous animation
      floatingElementsRef.current.forEach((element, index) => {
        if (element) {
          gsap.to(element, {
            y: "random(-20, 20)",
            x: "random(-15, 15)",
            rotation: "random(-180, 180)",
            duration: "random(3, 6)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.5
          });
        }
      });

      // Glow effect animation
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          scale: 1.2,
          opacity: 0.6,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }

      // Hover animations for interactive elements
      const skillCards = skillsRef.current?.children;
      if (skillCards) {
        Array.from(skillCards).forEach(card => {
          if (card) {
            card.addEventListener('mouseenter', () => {
              gsap.to(card, {
                scale: 1.05,
                y: -10,
                rotationY: 5,
                duration: 0.3,
                ease: "power2.out"
              });
            });

            card.addEventListener('mouseleave', () => {
              gsap.to(card, {
                scale: 1,
                y: 0,
                rotationY: 0,
                duration: 0.3,
                ease: "power2.out"
              });
            });
          }
        });
      }

      // Image hover effect
      if (imageRef.current) {
        imageRef.current.addEventListener('mouseenter', () => {
          gsap.to(imageRef.current, {
            scale: 1.05,
            rotationY: 5,
            duration: 0.4,
            ease: "power2.out"
          });
        });

        imageRef.current.addEventListener('mouseleave', () => {
          gsap.to(imageRef.current, {
            scale: 1,
            rotationY: 0,
            duration: 0.4,
            ease: "power2.out"
          });
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="min-h-screen flex items-center py-20 px-4 relative overflow-hidden">
      {/* Transparent Background */}
      <div className="absolute inset-0 bg-transparent" />

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full mb-6 inline-block">
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Crafting Digital <span className="gradient-text">Experiences</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A passionate developer who transforms ideas into reality through clean code,
            innovative solutions, and user-centered design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Clean Image Section */}
          <div className="relative">
            <div ref={imageRef} className="relative group">
              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl scale-105" />

              {/* Clean Image Container */}
              <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-2 rounded-3xl shadow-xl border border-white/20">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover"
                  />

                  {/* Simple Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

            </div>
          </div>

          {/* Right Column - Compact Content */}
          <div className="space-y-8">
            {/* Bio Section */}
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Hi, I&apos;m <span className="gradient-text">Kalyan</span> 👋
              </h3>

              <div className="space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  {personalInfo.bio}
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I specialize in building scalable web applications with a focus on performance,
                  user experience, and modern development practices.
                </p>
              </div>
            </div>

            {/* Compact Stats Grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Core Skills */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white">Core Expertise</h4>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                        <skill.icon className="w-4 h-4 text-white" />
                      </div>
                      <h5 className="font-semibold text-white text-sm">{skill.name}</h5>
                    </div>
                    <p className="text-xs text-gray-300">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
