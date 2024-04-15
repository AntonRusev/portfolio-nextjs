"use client";

import React from 'react';
import { motion } from 'framer-motion';

import SectionHeading from './SectionHeading';
import ColorSplash from './ColorSplash';

import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { skillsFadeInAnimationVariant, textFadeInAnimationVariant } from '@/lib/animation-variants';

export default function Skills() {
    const { ref } = useSectionInView("Skills", 0.75);

    const rows = [];
    let index = 0;

    // Iterate over the skillsData and create a rows of skills in a pyramid
    for (let i = 1; index < skillsData.length; i++) {
        const rowskillsData = [];

        for (let j = 0; j < i && index < skillsData.length; j++) {
            rowskillsData.push(skillsData[index]);
            index++;
        };
        rows.push(rowskillsData);
    };

    return (
        <section
            id='skills'
            ref={ref}
            className='relative mb-28 max-w-[45rem] text-center sm:mb-40 scroll-mt-10 md:scroll-mt-28'
        >
            {/* Background color splash */}
            <ColorSplash
                lightColor="bg-[#d5f3e0]"
                darkColor="dark:bg-[#517c61]"
                screenSide="left"
            />

            {/* Heading */}
            <SectionHeading>My Skills</SectionHeading>

            {/* Skills list */}
            <div className="flex flex-col justify-center gap-2 items-center">
                {rows.map((row, i) => (
                    <ul key={i} className="flex flex-wrap justify-center  gap-2 md:flex-nowrap">
                        {row.map((skill, index) => (
                            <motion.li
                                key={skill}
                                className='px-5 py-3 bg-black border border-black/[0.1] text-white tracking-widest font-bold rounded-xl shadow dark:bg-white dark:text-black'
                                variants={skillsFadeInAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.1, ease: 'easeInOut' }}
                                viewport={{
                                    once: true
                                }}
                                custom={index}
                            >
                                {skill}
                            </motion.li>
                        ))}
                    </ul>
                ))}
            </div>

            {/* Description */}
            <motion.p
                variants={textFadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true
                }}
                className='font-extralight tracking-wider my-12'
            >
                Some of the tools and technologies that I&apos;ve used in my projects.
            </motion.p>
        </section>
    );
};