import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useActiveSectionContext } from "@/context/ActiveSectionContext";

import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    const { ref, inView } = useInView({
        // Consider element in view, when a % (75 by default) of the element is in view
        threshold,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        // If the section is scrolled through, set it as active
        // If another section was selected and clicked on the nav bar, do not set it active and just skip through it
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        };
    }, [inView, timeOfLastClick, sectionName]);

    return {
        ref,
    };
};