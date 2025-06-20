import React from "react";
import hotel from "../assets/hotel.png";
import portfolio from "../assets/port.webp";
import esate from "../assets/Esate.webp";
import blood from "../assets/bloo.webp";
import slipper from "../assets/slipp.png";

const projects = [
  {
    id: 1,
    name: "Hotel-Booking",
    technologies: "MERN Stack",
    image: hotel,
    github: "https://github.com/parthiban3264/VillaVista-Hotel-Booking.git",
  },
  {
    id: 2,
    name: "EsateKing",
    technologies: "MERN Stack",
    image: esate,
    github: "https://github.com/parthiban3264/EsateKing.git",
  },
  {
    id: 3,
    name: "Protfolio",
    technologies: "React + Vite",
    image: portfolio,
    github: "https://github.com/parthiban3264/EsateKing.git",
  },
  {
    id: 4,
    name: "E-commerce",
    technologies: "MERN Stack",
    image: slipper,
    github: "https://github.com/parthiban3264/E-commerce.git",
  },
  {
    id: 5,
    name: "E-commerce_Admin",
    technologies: "MERN Stack",
    image: slipper,
    github: "https://github.com/parthiban3264/E-commerce-Admin.git",
  },
  {
    id: 6,
    name: "Blood_Donor",
    technologies: "Java Script",
    image: blood,
    github: "https://github.com/parthiban3264/Blood_Doner.git",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;