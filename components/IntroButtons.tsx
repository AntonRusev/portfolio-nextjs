import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TbPdf } from "react-icons/tb";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export default function IntroButtons() {
    return (
        <TooltipProvider>
            <div className='flex gap-x-12 mb-8'>
                {/* GitHub Profile Link */}
                <motion.div
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{
                        type: "tween",
                        duration: 0.4,
                    }}
                >
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="outline"
                                asChild
                                className='rounded-full w-[4rem] h-[4rem] hover:animate-spin'
                            >
                                <Link
                                    href="https://github.com/AntonRusev"
                                    target="_blank"
                                >
                                    <VscGithub className='h-8 w-8' />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Visit my GitHub profile</p>
                        </TooltipContent>
                    </Tooltip>
                </motion.div>

                {/* PDF view link */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "tween",
                        duration: 0.4,
                    }}
                >
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="outline"
                                asChild
                                className='rounded-full w-[4rem] h-[4rem] hover:animate-spin'
                            >
                                <Link
                                    href="/Anton_Rusev_Resume.pdf"
                                    target="_blank"
                                >
                                    <TbPdf className='h-8 w-8' />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>View my CV</p>
                        </TooltipContent>
                    </Tooltip>
                </motion.div>

                {/* LinkedIn Profile Link*/}
                <motion.div
                    initial={{ opacity: 0, y: 100, x: 100 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{
                        type: "tween",
                        duration: 0.4,
                    }}
                >
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="outline"
                                asChild
                                className='rounded-full w-[4rem] h-[4rem] hover:animate-spin'
                            >
                                <Link
                                    href="https://www.linkedin.com/in/anton-rusev-9861a5277/"
                                    target="_blank"
                                >
                                    <AiOutlineLinkedin className='h-8 w-8' />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Visit my LinkedIn profile</p>
                        </TooltipContent>
                    </Tooltip>
                </motion.div>
            </div>
        </TooltipProvider >
    );
};