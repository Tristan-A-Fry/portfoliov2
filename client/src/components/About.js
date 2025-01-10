
import React from "react";
import myPhoto from '../assets/images/myPhoto.jpg'

function About() {
    return (
        <section id="about" className="min-h-screen flex items-center bg-gray-50 p-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
                {/* Image Section */}
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                    <img
                        src={myPhoto}
                        alt="My Photo"
                        className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="text-center md:text-left">
                    <h1 className="text-4xl font-bold mb-4 text-customCyan">About Me</h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        I am a brand-new graduate from the University of Houston with a B.S in Computer Science and a minor in Mathematics. 
                        I am a passionate computer science graduate seeking a dynamic position in a forward-thinking organization. 
                        Open to relocation for new challenges and to contribute innovative solutions that drive positive change in the field. 
                        Committed to continuous learning and making a meaningful impact through technology.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed mt-6">
                       Some of the things I am interested in include Formula One, video games, fitness, and reading. 
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;




