import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/Skills";

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4 gap-y-8">
            {/* Intro */}
            <Intro />

            {/* About */}
            <About />

            {/* Skills */}
            <Skills />

            {/* Projects */}
            <Projects />

            {/* Contact */}
            <Contact />
        </main>
    );
}
