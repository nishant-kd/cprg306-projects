"use client";
import React, { useRef, useState } from "react";
import Profile from '../profile/page'
import About from '../about/page'
import Skills from '../skills/page'
import Projects from '../projects'
import Qualifications from '../qualifications'
import Footer from '../footer/page'

const Header = () => {
    const skillsRef = useRef(null);
    const qualificationsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        })
    }
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <div>
            <header className='text-right text-xl font-semibold mb-10'>
                <div className="hidden md:block">
                <button className='text-bold mr-14'>Home</button>
                <button onClick={() => scrollToSection(skillsRef)} className='text-bold mr-14 '>Skills</button>
                <button onClick={() => scrollToSection(qualificationsRef)} className='text-bold mr-14'>Qualifications</button>
                <button onClick={() => scrollToSection(projectsRef)} className='text-bold mr-14 '>Projects</button>
                <button onClick={() => scrollToSection(contactRef)} className='text-bold mr-14  border border-2 border-purple-600 rounded-full bg-gray-900 text-white p-1 pl-2 pr-2'>Say Hi!</button>
                <p className='border-b-2 border-black p-1'></p>
                </div>
                <div className="md:hidden flex items-left px-2 pt-1">
                    <details className="dropdown">
                        <summary className="text-bold text-black text-3xl border-white btn bg-white">☰</summary>
                        <ul className="p-2 text-md shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 text-white">
                            <li><button onClick={() => scrollToSection(skillsRef)}>Skills</button></li>
                            <li><button onClick={() => scrollToSection(qualificationsRef)}>Qualifications</button></li>
                            <li><button onClick={() => scrollToSection(projectsRef)}>Projects</button></li>
                            <li><button onClick={() => scrollToSection(contactRef)}>Say Hi!</button></li>
                        </ul>
                    </details>
                </div>
            </header>
            <div className="">
                <Profile/>
                <About/>
                <Skills ref={skillsRef}/>
                <div className="flex justify-center space-x-20">
                    <Qualifications ref={qualificationsRef}/>
                    <Projects ref={projectsRef}/>
                </div>
            </div>
            <Footer ref={contactRef}/>
        </div>
    );
};

export default Header;
