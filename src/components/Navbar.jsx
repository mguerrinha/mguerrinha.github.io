import React, { useEffect, useState } from "react";
import ToggleButton from "../ToggleButton"; 
import { useTheme } from "../ThemeContext";

function Navbar() {
    const { theme } = useTheme();
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            sections.forEach(section => {
                if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                    setActiveSection(section.getAttribute('id'));
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full shadow-md border-b-2 border-main_orange z-50 ${theme === 'light' ? 'bg-bluebg text-whitebg' : 'bg-whitebg text-bluebg'}`}>
            <div className="container mx-auto flex justify-between items-center p-4">
                <h1 className={`text-2xl font-bold ${theme === 'light' ? 'text-whitebg' : 'text-bluebg'}`}>
                    Miguel Guerrinha
                </h1>
                <ul className="flex text-lg">
                    <li> 
                        <ToggleButton/>  
                    </li>
                    <li className={`pt-1 ml-6 nav-link ${activeSection === 'hero' ? 'active' : ''} ${theme === 'light' ? 'text-white' : 'text-bluebg'}`}>
                        <a href="#hero">
                            Home
                        </a>
                    </li>
                    <li className={` pt-1 ml-4 nav-link ${activeSection === 'about' ? 'active' : ''} ${theme === 'light' ? 'text-white' : 'text-bluebg'}`}>
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li className={`pt-1 ml-4 nav-link ${activeSection === 'portfolio' ? 'active' : ''} ${theme === 'light' ? 'text-white' : 'text-bluebg'}`}>
                        <a href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className={`pt-1 ml-4 nav-link ${activeSection === 'contact' ? 'active' : ''} ${theme === 'light' ? 'text-white' : 'text-bluebg'}`}>
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
