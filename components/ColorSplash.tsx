import React from 'react';

type ColorSplashProps = {
    lightColor: string;
    darkColor: string;
    screenSide: "left" | "right";
};

export default function ColorSplash({ lightColor, darkColor, screenSide }: ColorSplashProps) {
    {/* Empty div for background color splash */ }
    if (screenSide === "left") {
        return (
            <div className={`${lightColor} absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] ${darkColor}`}></div>
        );
    } else if (screenSide === "right") {
        return (
            <div className={`${lightColor} absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] ${darkColor}`}></div>
        );
    };
};
