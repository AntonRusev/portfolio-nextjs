"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import clsx from 'clsx';

import { useActiveSectionContext } from '@/context/ActiveSectionContext';

import { links } from '@/lib/data';

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <header className='z-[999] relative'>
            {/* Empty div for navbar background */}
            <motion.div
                className='fixed top-0 left-1/2 h-[3.5rem] -translate-x-1/2 bg-white w-full rounded-none border-white border-opacity-40 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[30rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'
                initial={{ y: -100, opacity: 0, x: "-50%" }}
                animate={{ y: 0, opacity: 1, x: "-50%" }}
            >
            </motion.div>

            {/* Navigation */}
            <nav className='flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 h-12 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
                <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-400 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
                    {links.map(link => (
                        <motion.li
                            className='relative h-3/4 flex items-center justify-center'
                            key={link.name}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                href={link.hash}
                                onClick={() => {
                                    setActiveSection(link.name);
                                    setTimeOfLastClick(Date.now())
                                }}
                                className={clsx('flex w-full items-center justify-center p-3 hover:text-gray-900 dark:hover:text-gray-500 transition', {
                                    // Active section text color
                                    'text-gray-900': activeSection === link.name,
                                })}
                            >
                                {/* Section link name */}
                                {link.name}

                                {/* Empty div for active section background color */}
                                {link.name === activeSection &&
                                    <motion.div
                                        className='absolute bg-gray-200 rounded-full inset-0 -z-10'
                                        layoutId='activeSection'
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30
                                        }}
                                    >
                                    </motion.div>
                                }
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
