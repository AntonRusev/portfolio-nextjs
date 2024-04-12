import { links } from "./data";

// TYPES

export type SectionName = (typeof links)[number]['name'];

export type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
};

export type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export type ContactFormEmailProps = {
    name: string,
    email: string,
    message: string,
};