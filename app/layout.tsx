import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import { ThemeProvider } from "@/components/ThemeProvider";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Anton's Portfolio",
    description: "Aspiring Frontend developer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className="!scroll-smooth"
            suppressHydrationWarning
        >
            <body className={`${raleway.className} relative pt-28 sm:pt-36`}>
                {/* Light/Dark theme provider */}
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {/* Trcking the active section with the help of a Context */}
                    <ActiveSectionContextProvider>
                        {/* Header */}
                        <Header />

                        {/* CHILDREN */}
                        {children}

                        {/* Footer */}
                        <Footer />
                    </ActiveSectionContextProvider>


                    {/* Ligh/Dark mode switch */}
                    <ThemeSwitch />

                    {/* Toast Popup */}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
};