"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { BsMoon, BsSun } from 'react-icons/bs';

import { Button } from "@/components/ui/button";

// Light/Dark theme mode switch
export default function ThemeSwitch() {
    const { theme, setTheme } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0.5, y: -100, }}
            animate={{ opacity: 1, y: 0, }}
        >
            {/* Switch button */}
            <Button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className='fixed flex justify-center items-center bottom-5 right-5 w-[2.5rem] h-[2.5rem] text-xl rounded-full hover:scale-[1.15] active:scale-105 transition-all'
            >
                {/* Light Mode Icon (switch from dark to light) */}
                <BsSun className='min-w-[20px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' /> 
                {/* Dark Mode Icon  (switch from light to dark) */}
                <BsMoon className='absolute rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100' />
            </Button>
        </motion.div>
    );
};