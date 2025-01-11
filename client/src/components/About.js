import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiMysql, SiExpress, SiDotnet} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
function About() {
    return (
        <section id="about" className="min-h-screen bg-gray-50 p-6 text-black flex flex-col items-center justify-center">
            {/* Title */}
            <h2 className="text-4xl font-bold text-customCyan mb-12 text-center">About</h2>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
                {/* About Text Section */}
                <div className="flex-1 flex flex-col items-center text-center">
                    {/* Profile Image */}
                    <img
                        src={require('../assets/images/myPhoto.jpg')} 
                        alt="Your Profile"
                        className="w-40 h-40 rounded-full border-4 border-customCyan mb-6"
                    />

                    {/* About Paragraph */}
                    <p className="text-lg leading-relaxed">
                        I am a brand-new graduate from the University of Houston with a B.S in Computer Science and a minor in Mathematics. 
                        I am a full stack developer with a deep passion for the backend, and specializing in tools such as Express and .Net.  
                        When I am not at my computer I spend my time reading, playing video games, and keeping fit.

                    </p>
                </div>

                {/* Tools/Skills Section */}
                <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center">
                    <DiVisualstudio className="text-5xl text-pink-500" />
                    <p className="mt-2">C#</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiDotnet className="text-5xl text-black" />
                        <p className="mt-2">.Net</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiJavascript className="text-5xl text-yellow-400" />
                        <p className="mt-2">JavaScript</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiExpress className="text-5xl text-gray-500" />
                        <p className="mt-2">Express.js</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaHtml5 className="text-5xl text-red-500" />
                        <p className="mt-2">HTML</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaCss3Alt className="text-5xl text-blue-500" />
                        <p className="mt-2">CSS</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaReact className="text-5xl text-blue-400" />
                        <p className="mt-2">React</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiMysql className="text-5xl text-green-500" />
                        <p className="mt-2">MySql</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaNodeJs className="text-5xl text-green-600" />
                        <p className="mt-2">Node.js</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaGitAlt className="text-5xl text-orange-500" />
                        <p className="mt-2">Git</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;





