import React from 'react';
import Link from 'next/link';

import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className='mb-10 px-4 text-center text-gray-500'>

            {/* Social links */}
            <div className='flex justify-center items-center gap-2 my-2'>
                {/* Github */}
                <Link
                    href="https://github.com/AntonRusev"
                    target="_blank"
                >
                    <FaGithubSquare className='h-6 w-6 hover:text-black dark:hover:text-white transition' />
                </Link>

                {/* LinkedIn */}
                <Link
                    href="https://www.linkedin.com/in/anton-rusev-9861a5277/"
                    target="_blank"
                >
                    <FaLinkedin className='h-6 w-6 hover:text-black dark:hover:text-white transition'/>
                </Link>
            </div>

            {/* Copyright */}
            <p className='mb-2 text-xs'>© 2024 Anton Rusev. All rights reserved.</p>

            {/* App tech-stack */}
            <p className='semibold'>
                This portfolio was built with: <span>React, NextJS, TypeScript, Tailwind CSS, Shadcn/ui, Framer Motion, React Email and Resend.</span>
            </p>
        </footer>
    );
};