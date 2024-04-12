"use client";

import React from 'react';
import { motion } from 'framer-motion';

import SectionHeading from './SectionHeading';
import ColorSplash from './ColorSplash';
import CustomForm from './CustomForm';

import { useSectionInView } from '@/lib/hooks';
import { formFadeInAnimationVariant } from '@/lib/animation-variants';

export default function Contact() {
    const { ref } = useSectionInView("Contact", 0.5); // Ref for nav bar highlight(custom hook)

    return (
        <motion.section
            id="contact"
            ref={ref}
            className='relative mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-10 md:scroll-mt-28'
            variants={formFadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true
            }}
        >
            {/* Background color splash */}
            <ColorSplash
                lightColor="bg-[#ebead2]"
                darkColor="dark:bg-[#5d5936]"
                screenSide="right"
            />

            {/* Heading */}
            <SectionHeading>Contact Me</SectionHeading>

            {/* Email link */}
            <p>
                Feel free to contact me directly at <a href='mailto:rsv.antn@gmail.com' className='underline'>rsv.antn@gmail.com</a>, or through the form below.
            </p>

            {/* FORM */}
            <div className='my-8'>
                <CustomForm />
            </div>
        </motion.section>
    );
};
