"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Autoplay from "embla-carousel-autoplay";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import OtherProjectItem from './OtherProjectItem';
import ColorSplash from '../ColorSplash';

import { otherProjectsData } from '@/lib/data';

export default function OtherProjects() {
    const ref = useRef<HTMLDivElement>(null); // Ref for framer-motion 

    // Scroll progress tracker for fade-nin-and-out animation
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    return (
        <div className='relative'>
            {/* Background color splash */}
            <ColorSplash
                lightColor="bg-[#f7c6ef]"
                darkColor="dark:bg-[#704f6b]"
                screenSide="left"
            />

            <motion.div
                ref={ref}
                style={{
                    scale: scaleProgress,
                    opacity: opacityProgress,
                }}
            >
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                        dragFree: true,
                        slidesToScroll: "auto",
                    }}
                    // Auto change slides
                    plugins={[
                        Autoplay({
                            delay: 4000,
                        }),
                    ]}
                    className='shadow-xl'
                >
                    
                    {/* Content Showcase */}
                    <CarouselContent>
                        {otherProjectsData.map((project) => (
                            <CarouselItem key={project.title}>
                                {/* Project */}
                                <OtherProjectItem {...project} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Previous and Next buttons */}
                    <CarouselPrevious className='shadow-xl' />
                    <CarouselNext className='shadow-xl' />
                </Carousel>
            </motion.div>
        </div>
    );
};
