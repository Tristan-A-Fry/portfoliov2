
import React from "react";
import { FaLinkedin, FaGithub} from "react-icons/fa"; // Import specific icons

function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-white shadow z-10">
            <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
                {/* Branding */}
                <div className="text-lg font-bold text-customCyan">
                    © 2025 My Portfolio
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-6">
                    <a
                        href="https://www.linkedin.com/in/tristan-a-fry/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors text-2xl"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/Tristan-A-Fry"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-black transition-colors text-2xl"
                    >
                        <FaGithub />
                    </a>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;

