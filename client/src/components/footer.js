
import React from "react";
import { FaLinkedin, FaGithub} from "react-icons/fa"; // Import specific icons

function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-[#1a1a1a] text-white shadow z-10">
            <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
                {/* Branding */}
                <div className="text-lg text-white">
                    ©2025 Tristan Fry
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-6">
                    <a
                        href="https://www.linkedin.com/in/tristan-a-fry/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-customCyan transition-colors text-2xl"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/Tristan-A-Fry"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-customCyan transition-colors text-2xl"
                    >
                        <FaGithub />
                    </a>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;

