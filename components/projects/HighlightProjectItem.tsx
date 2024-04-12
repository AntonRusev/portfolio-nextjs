import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsInfoCircle } from "react-icons/bs";

import { Button } from '../ui/button';

import { highlightProjectsData } from '@/lib/data';
import {
    laptopMockupFadeInAnimationVariant,
    listFadeInAnimationVariant,
    mobileMockupFadeInAnimationVariant,
    textFadeInAnimationVariant,
    titleFadeInAnimationVariant
} from '@/lib/animation-variants';

type HighlightProjectItemProps = typeof highlightProjectsData[number];

// Highlighted project with more info provided than the other projects
export default function HighlightProjectItem({ title, purpose, description, techstack, misc, imageUrlMobile, imageUrlBig, siteUrl, repoUrl }: HighlightProjectItemProps) {

    return (
        <article>
            {/* Title */}
            <motion.div
                variants={titleFadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true
                }}
            >
                <h4 className='text-2xl'>
                    {title}
                </h4>
            </motion.div>

            {/* Button links */}
            <div className='flex justify-center gap-4 mb-8 mt-4 w-full mx-auto'>
                {/* Deployed app */}
                <Button
                    variant="outline"
                    asChild
                >
                    <Link
                        href={siteUrl}
                        target="_blank"
                    >
                        View App
                    </Link>
                </Button>

                {/* GitHub Repository */}
                <Button
                    variant="outline"
                    asChild
                >
                    <Link
                        href={repoUrl}
                        target="_blank"
                    >
                        GitHub Repo
                    </Link>
                </Button>
            </div>

            {/* Overview */}
            <div className='flex flex-col gap-12 text-start whitespace-pre-wrap text-gray-500 dark:text-gray-300'>
                {/* Purpose */}
                <motion.p
                    variants={textFadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true
                    }}
                >
                    {purpose}
                </motion.p>

                <div className="grid grid-cols-1 md:gap-6 md:grid-cols-2">
                    {/* Description */}
                    <motion.p
                        variants={textFadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true
                        }}
                        className="mb-3"
                    >
                        {description}
                    </motion.p>

                    {/* Responsive design mockup for mobile screen*/}
                    <motion.div
                        variants={mobileMockupFadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true
                        }}
                        className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl"
                    >
                        <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                        <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px]">
                            {/* Image */}
                            <img
                                src={imageUrlMobile}
                                className="w-[272px] h-[572px] opacity-90 hover:opacity-100 transition-opacity"
                                alt="mobile pic"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Tech-stack */}
                <motion.p
                    variants={textFadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true
                    }}
                >
                    {techstack}
                </motion.p>

                {/* Responsive design mockup for laptop screen*/}
                <motion.div
                    variants={laptopMockupFadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true
                    }}
                    className='mt-2 md:my-10'
                >
                    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] shadow-xl md:h-[294px] md:max-w-[512px]">
                        <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px]">
                            {/* Image */}
                            <img
                                src={imageUrlBig}
                                className="h-[156px] md:h-[278px] w-full rounded-lg opacity-90 hover:opacity-100 transition-opacity"
                                alt="laptop pic"
                            />
                        </div>
                    </div>
                    <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] shadow-xl max-w-[351px] md:h-[21px] md:max-w-[597px]">
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
                    </div>
                </motion.div>

                {/* Misc list */}
                <ul className='flex flex-col gap-4 mb-10 font-light text-black dark:text-white'>
                    {misc.map((misc, index) => (
                        <motion.li
                            key={index}
                            variants={listFadeInAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true
                            }}
                            custom={index}
                        >
                            <BsInfoCircle className='inline' />
                            <span className='font-extralight'>{'  '}{misc}</span>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </article>
    );
};