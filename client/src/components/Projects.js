
import React from "react";
import {HoverBorderGradient} from "../components/ui/HoverBorderGradient.js";
import portfolioImage from "../assets/images/portfolio.png";
import f1DataVisualizer from "../assets/images/f1datavisualizer.png";
import volunteerWebApp from "../assets/images/volunteerapp.png";
import fryreadsApp from "../assets/images/fryreads_demo.png";
import imsApp from "../assets/images/ims_demo.png";
import { VscAzure } from "react-icons/vsc";
import {
  SiReact,
  SiPostgresql,
  SiDotnet,
  SiTailwindcss,
  SiGo,
  SiMysql,
  SiNodedotjs,
  SiEx
} from "react-icons/si";



import {
  FeatureCard,
  Card,
} from "../components/ui/FeatureCard";

function Projects() {
  const projects = [
    {
      title: "Fryreads - Book Tracking App",
      description:
        "A book tracking app built with .NET Core, React, and PostgreSQL. Hosted on Azure.",
      image: fryreadsApp,
      link: "https://lively-ocean-0565abc10.6.azurestaticapps.net/",
      feature: {
        title: "Built With",
        description: ".NET, React, PostgreSQL, Azure, and TailwindCSS",
        icons: [
          () => <SiTailwindcss className="text-purple-500 h-6 w-6" />,
          () => <SiPostgresql className="text-blue-600 h-6 w-6" />,
          () => <SiReact className="text-cyan-400 h-6 w-6" />,
          () => <SiDotnet className="text-purple-500 h-6 w-6" />,
          () => <VscAzure className="text-blue-400 h-6 w-6" />
        ]
      }
    },
    {
      title: "Inventory Management System",
      description:
        "An inventory management system to mansge inventory and project details, built with .NET Core, React, and PostgreSQL.",
      image: imsApp,
      link: "https://github.com/Tristan-A-Fry/FrysIMS",
      feature: {
        title: "Built With",
        description: ".NET, React, PostgreSQL, Azure, and TailwindCSS",
        icons: [
          () => <SiTailwindcss className="text-purple-500 h-6 w-6" />,
          () => <SiPostgresql className="text-blue-600 h-6 w-6" />,
          () => <SiReact className="text-cyan-400 h-6 w-6" />,
          () => <SiDotnet className="text-purple-500 h-6 w-6" />,
          () => <VscAzure className="text-blue-400 h-6 w-6" />
        ]
      }
    },
    {
      title: "Formula One Data Visualizer",
      description:
        "A powerful dashboard to explore historical and current F1 race data using Go and React.",
      image: f1DataVisualizer,
      link: "https://github.com/Tristan-A-Fry/FormulaOneDataVisualizer",
      feature: {
        title: "Built With",
        description: "React, Go, TailwindCSS",
        icons: [
          () => <SiReact className="text-cyan-400 h-6 w-6" />,
          () => <SiGo className="text-purple-500 h-6 w-6" />,
          () => <SiTailwindcss className="text-blue-600 h-6 w-6" />
        ]
      }
    },
    {
      title: "Volunteer Matching Web App",
      description:
        "A full-stack platform that allows admins to match volunteers with events based on interests.",
      image: volunteerWebApp,
      link: "https://github.com/Tristan-A-Fry/volunteer-matching-app",
      feature: {
        title: "Built With",
        description: "MySQL, Express, React, Node.js",
        icons: [
          () => <SiNodedotjs className="text-purple-500 h-6 w-6" />,
          () => <SiReact className="text-cyan-400 h-6 w-6" />,
          () => <SiMysql className="text-blue-600 h-6 w-6" />
        ]
      }
    },
  ];


  return (
    <section className="py-12 px-4 md:px-16 bg-[#333333]" id="projects">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">
        Projects
      </h2>
      <div className="flex flex-col gap-12">
        {projects.map((project, index) => (
          <div key={index} className="max-w-10xl w-full mx-auto">
            <Card className="flex flex-col md:flex-row gap-8 items-start w-full max-w-10xl mx-auto">
              <div className="md:w-3/5 w-full self-end">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg mb-4 w-full object-cover h-[400px] md:h-[400px]"
                />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <HoverBorderGradient
                  as="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  duration={1} // customize the rotation speed
                  className="text-sm font-semibold"
                  containerClassName="mt-4"
                >
                  View Project
                </HoverBorderGradient>
              </div>

              <div className="md:w-2/5 w-full mt-12">
                <FeatureCard
                  title={project.feature.title}
                  description={project.feature.description}
                  icons={project.feature.icons}
                />
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;




