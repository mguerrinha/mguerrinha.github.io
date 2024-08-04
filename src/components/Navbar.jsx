import React from "react";
import ToggleButton from "../ToggleButton"; 
import { useTheme } from "../ThemeContext";

function Navbar() {
    const { theme } = useTheme();

    return (
        <nav className={`fixed top-0 p-3 left-0 w-full shadow-md z-50 ${theme === 'light' ? 'bg-white text-black' : 'bg-sec_black text-white'}`}>
            <div className="container mx-auto flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold">Miguel Guerrinha</h1>
                <ul className="flex text-lg">
                    <li> 
                        <ToggleButton/>  
                    </li>
                    <li className="pl-2 ml-2 hover:text-main_orange">
                        <a href="/">
                            Home
                        </a>
                    </li>
                    <li className="pl-2 ml-2 hover:text-main_orange">
                        <a href="/about">
                            About
                        </a>
                    </li>
                    <li className="pl-2 ml-2 hover:text-main_orange">
                        <a href="/portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className="pl-2 ml-2 hover:text-main_orange">
                        <a href="/contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
