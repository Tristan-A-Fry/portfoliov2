
import React from "react";

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow z-10">
            <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
                <a href="#home" className="text-lg font-bold text-customCyan">
                    Tristan Fry
                </a>
                <div className="space-x-6">
                    <a href="#home" className="hover:text-customCyan">
                        Home
                    </a>
                    <a href="#about" className="hover:text-customCyan">
                        About
                    </a>
                    <a href="#projects" className="hover:text-customCyan">
                        Projects
                    </a>
                    <a href="#skills" className="hover:text-customCyan">
                       Skills 
                    </a>
                    <a href="#contact" className="hover:text-customCyan">
                        Contact
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
