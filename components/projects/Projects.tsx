"use client";

import React from 'react';

import SectionHeading from '../SectionHeading';
import HighlightProjectItem from './HighlightProjectItem';
import OtherProjects from './OtherProjects';
import ColorSplash from '../ColorSplash';

import { useSectionInView } from '@/lib/hooks';
import { highlightProjectsData } from '@/lib/data';

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.2); // Ref for nav bar highlight(custom hook)

    return (
        <section
            id='projects'
            ref={ref}
            className="relative mb-28 max-w-[80%] md:max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-10 md:scroll-mt-28"
        >
            {/* Background color splash */}
            <ColorSplash
                lightColor="bg-[#fbe2e3]"
                darkColor="dark:bg-[#946263]"
                screenSide="right"
            />

            {/* Heading */}
            <SectionHeading>My Projects</SectionHeading>

            {/* Projects Highlights */}
            <div>
                <ul>
                    {highlightProjectsData.map((project) => (
                        <li key={project.title}>
                            <HighlightProjectItem {...project} />
                        </li>
                    ))}
                </ul>
            </div>

            {/* Other Projects */}
            <h4 className='text-center text-xl mb-6'>
                Some of my other projects:
            </h4>
            <OtherProjects />
        </section>
    );
};