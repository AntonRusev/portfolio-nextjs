import React from 'react';
import { motion } from 'framer-motion';

import { headingFadeInAnimationVariant } from '@/lib/animation-variants';

type SectionHeadingProps = {
    children: React.ReactNode;
};

// Divider styling
const gradientStyle = {
    backgroundImage: "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.6) 40.83%, rgba(149, 131, 198, 0.3) 65.57%, rgba(149, 131, 198, 0) 107.92%)"
};

export default function SectionHeading({ children }: SectionHeadingProps) {

    return (
        <motion.div
            className='flex'
            variants={headingFadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true
            }}
        >
            {/* Divider start */}
            <div
                className=" w-1/5 h-px max-w-6xl mx-auto my-20"
                style={gradientStyle}
            >
            </div>

            {/* Title */}
            <h2 className="flex items-center text-3xl drop-shadow text-start font-thin tracking-widest whitespace-nowrap py-4 my-4 px-2">
                {children}
            </h2>

            {/* Divider end */}
            <div
                className=" w-full h-px max-w-6xl mx-auto my-20"
                style={gradientStyle}
            >
            </div>
        </motion.div>
    );
};