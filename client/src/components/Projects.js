

import React from "react";
import portfolioImage from '../assets/images/portfolio.png';
import f1DataVisualizer from '../assets/images/f1datavisualizer.png';
import volunteerWebApp from '../assets/images/volunteerapp.png'


function Projects() {
    const projects = [
        {
            title: "FullStack Volunteer Web Application",
            description: "A full stack web application to emulate managment for a volunteer organization. Built with React, Tailwind CSS, Express, Node.js, and MySql. Includes unit testing.",
            image: volunteerWebApp,
            link: "https://github.com/Tristan-A-Fry/Full-Stack-Volunteer-Web-App",
        },
        {
            title: "Formula One Data Visualizer",
            description: "A data visualizer for current and historical Formula One data. Built in React, and Go",
            image: f1DataVisualizer,
            link: "https://github.com/Tristan-A-Fry/FormulaOneDataVisualizer",
        },
    ];

    return (
        <section id="projects" className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-center mb-6 text-customCyan">
                My Projects
            </h1>
            <div className="max-w-6xl mx-auto space-y-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden p-4"
                    >
                        {/* Clickable Image */}
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-60 object-cover rounded-lg hover:opacity-80 transition"
                            />
                        </a>

                        {/* Project Title */}
                        <h2 className="text-2xl font-bold mt-4">{project.title}</h2>

                        {/* Project Description */}
                        <p className="text-gray-700 text-center mt-2">{project.description}</p>

                        {/* Learn More Button */}
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-block text-black text-sm font-semibold relative group"
                        >
                            <span className="relative z-10">Learn More</span> {/*Have to add this to prevent text from disappearing when hovering*/}
                            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-customCyan group-hover:bg-customCyan transition-all duration-500"></span>
                            <span className="absolute inset-0 bg-customCyan opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></span>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;


