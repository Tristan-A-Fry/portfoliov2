
import React, { useState } from "react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow z-10">
            <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <a href="#home" className="text-lg font-bold text-customCyan">
                    Tristan Fry
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6">
                    <a href="#home" className="hover:text-customCyan">
                        Home
                    </a>
                    <a href="#about" className="hover:text-customCyan">
                        About
                    </a>
                    <a href="#projects" className="hover:text-customCyan">
                        Projects
                    </a>
                    <a href="#contact" className="hover:text-customCyan">
                        Contact
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="block md:hidden text-customCyan"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {/* Hamburger Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </nav>

            {/* Mobile Links */}
            <div
                className={`md:hidden bg-white shadow-lg ${
                    isMenuOpen ? "block" : "hidden"
                }`}
            >
                <a
                    href="#home"
                    className="block px-4 py-2 text-customCyan hover:bg-gray-100"
                >
                    Home
                </a>
                <a
                    href="#about"
                    className="block px-4 py-2 text-customCyan hover:bg-gray-100"
                >
                    About
                </a>
                <a
                    href="#projects"
                    className="block px-4 py-2 text-customCyan hover:bg-gray-100"
                >
                    Projects
                </a>
                <a
                    href="#contact"
                    className="block px-4 py-2 text-customCyan hover:bg-gray-100"
                >
                    Contact
                </a>
            </div>
        </header>
    );
}

export default Header;
