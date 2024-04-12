"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCaretDown } from "react-icons/fa";

import IntroButtons from './IntroButtons';
import ColorSplash from './ColorSplash';

import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
    const { ref } = useSectionInView("Intro", 0.5); // Ref for nav bar highlight(custom hook)

    return (
        <section
            id='intro'
            ref={ref}
            className='mb-28 max-w-[45rem] text-center sm:mb-0 scroll-mt-[100rem]'
        >
            {/* Background color splashes */}
            <ColorSplash
                lightColor="bg-[#dbd7fb]"
                darkColor="dark:bg-[#676394]"
                screenSide="right"
            />
            <ColorSplash
                lightColor="bg-[#dbd7fb]"
                darkColor="dark:bg-[#676394]"
                screenSide="left"
            />

            <div className='flex flex-col items-center justify-center md:gap-8'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.4,
                    }}
                >
                    {/* Author Image */}
                    <Image
                        src="https://avatars.githubusercontent.com/u/102323013?v=4"
                        alt="Anton's portrait"
                        width={300}
                        height={300}
                        quality={95}
                        priority={true}
                        className='object-cover rounded-full border-[0.35rem] border-white shadow-xl'
                    />
                </motion.div>

                <motion.div
                    className='py-4 my-10 max-w-[30rem] text-2xl font-light leading-[1.5] whitespace-pre-wrap'
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {/* Short intro text */}
                    <p>Hi, I'm Anton!</p>
                    <p className='mt-4 text-gray-600 dark:text-gray-300'>A Frontend development enthusiast, currently focused on broadening my skill set and abilities.</p>

                </motion.div>

                {/* Links and download button */}
                <IntroButtons />

                {/* Arrow down */}
                <div className='hidden md:flex animate-bounce mb-12'>
                    <FaCaretDown /> 
                </div>
            </div>
        </section>
    );
};