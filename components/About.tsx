"use client";

import React from 'react';
import { motion } from 'framer-motion';

import SectionHeading from './SectionHeading';
import ColorSplash from './ColorSplash';

import { useSectionInView } from '@/lib/hooks';
import { textFadeInAnimationVariant } from '@/lib/animation-variants';

export default function About() {
    const { ref } = useSectionInView("About", 0.75); // Ref for nav bar highlight(custom hook)

    return (
        <section
            id='about'
            ref={ref}
            className="relative mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-10 md:scroll-mt-28"
        >
            {/* Background color splash */}
            <ColorSplash
                lightColor="bg-[#ebead2]"
                darkColor="dark:bg-[#5d5936]"
                screenSide="right"
            />

            {/* Heading */}
            <SectionHeading>About me</SectionHeading>

            {/* Text */}
            <div className='flex flex-col gap-4 text-gray-500 dark:text-gray-300'>
                <motion.p
                    variants={textFadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true
                    }}
                >
                    My journey into the world of web development began back in <span className='font-semibold'>2021</span>, and it has become a passion ever since. The aspect of it, that I find most enjoyable is the <span className='font-bold'>Frontend</span> development.
                </motion.p>

                <motion.p
                    variants={textFadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true
                    }}
                >
                    I enjoy the process of creating new things, brainstorming different ways to improve parts of already existing projects, and all the challenges that go hand in hand with all that. Making progress, after being stuck on a particular problem, is one of the most satisfying feelings.
                </motion.p>

                <motion.p
                    variants={textFadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true
                    }}
                >
                    Providing a pleasant user experience, easy on the eye interface and writing clean, understandable code, are among my top priorities. My goal is not only to make people feel comfortable looking at the design of the app, but also while taking a look under the hood.
                </motion.p>

                <motion.p
                    variants={textFadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true
                    }}
                >
                    As a person(as well as a <span className='font-bold'>developer</span>), I consider my curiosity to be one of my best qualities. I have a fondness for well-told stories, no matter the medium- books, movies or games, so naturally these are among my favorite ways to spend my free time.
                </motion.p>
            </div>
        </section>
    );
};