'use client';

import { useEffect, useState, useCallback } from 'react';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { skills } from '@/constants/portfolio-data';
import Image from 'next/image';

// Color mapping for different skill categories
const getCategoryColor = (category: string) => {
  switch (category) {
    case 'frontend':
      return 'from-blue-500 to-cyan-500';
    case 'backend':
      return 'from-green-500 to-emerald-500';
    case 'database':
      return 'from-purple-500 to-pink-500';
    case 'tools':
      return 'from-orange-500 to-red-500';
    default:
      return 'from-gray-500 to-gray-700';
  }
};

export default function SkillsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [, setCurrent] = useState(0);

  const handleNext = useCallback(() => {
    if (!api) return;
    
    if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
      setCurrent(0);
      api.scrollTo(0);
    } else {
      api.scrollNext();
      setCurrent(prev => prev + 1);
    }
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const timer = setInterval(handleNext, 3000);
    return () => clearInterval(timer);
  }, [api, handleNext]);

  return (
    <div className="w-full">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {skills.map((skill, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
              <div className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(skill.category)} rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getCategoryColor(skill.category)} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {skill.image ? (
                      <div className="w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center p-1">
                        <Image
                          src={skill.image}
                          alt={skill.name}
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                      </div>
                    ) : (
                      <div className="w-6 h-6 bg-white rounded" />
                    )}
                  </div>
                  <span className="text-sm font-medium text-white group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
