
import React from "react";

function Projects() {
    const projects = [
        { title: "Portfolio Website", description: "A personal portfolio site." },
        { title: "E-Commerce App", description: "A shopping app with React." },
    ];

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="border p-4 rounded shadow hover:shadow-lg transition"
                    >
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="mt-2">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
