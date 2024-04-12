import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '../ui/button';

import { otherProjectsData } from '@/lib/data';

type OtherProjectItemProps = typeof otherProjectsData[number];

export default function OtherProjectItem({ title, description, imageUrlBig, siteUrl, repoUrl }: OtherProjectItemProps) {
    return (
        <article className='group relative h-full bg-gray-50 border-black/5 rounded overflow-hidden transition sm:pr-8 sm:h-[15rem] dark:bg-gray-800 hover:bg-gray-200 hover:dark:bg-gray-700'>

            <div className='flex flex-col h-full py-4 px-5 sm:pl-10 sm:ml-5 sm:pr-2 sm:pt-10 sm:w-1/2'>
                {/* Title */}
                <h4 className='text-xl text-start font-semibold'>
                    {title}
                </h4>

                {/* Description */}
                <p className='flex justify-center items-center mt-2 h-full text-center my-auto leading-relaxed font-extralight'>
                    {description}
                </p>

                {/* Links */}
                <div className='flex gap-2 justify-end pt-2'>
                    {/* Deployed app */}
                    <Button
                        asChild
                        className='shadow-xl'
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
                        asChild
                        className='shadow-xl'
                    >
                        <Link
                            href={repoUrl}
                            target="_blank"
                        >
                            GitHub Repo
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Image */}
            <Image
                src={imageUrlBig}
                alt={title}
                width={452}
                height={300}
                quality={70}
                className='hidden sm:block absolute top-8 -right-40 rounded-t-lg shadow-2xl group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-3 group-hover:scale-105 transition'
            />
        </article>
    );
};
