import React, {useState} from "react";

import { Slide } from "../../components";
import { SlideLink } from "../../components/Viewer/Slide/components";

export default function Projects() {
    
    // Data retrieved from fetch
    const projectData = [
        {
            name: "Kraken",
            type: 2, // 1 = Website, 2 = CLI, 3 = Machine Learning
            description: 
            "A version control system for artists.",
            repositoryLink: "https://github.com/jocoso/kraken",
            deployment: "", // If applicable
            picture: `${process.env.PUBLIC_URL}/project-kraken-img.png`,
        },
        {
            name: "Magebound",
            type: 1, // 1 = Website, 2 = CLI, 3 = Machine Learning
            description: 
            "A browser-adventure game.",
            repositoryLink: "https://github.com/jocoso/kraken",
            deployment: "", // If applicable
            picture: `${process.env.PUBLIC_URL}/project-magebound-img.webp`,
        },
        {
            name: "Paws to Doors",
            type: 1,
            description:
            "A website for pet adoption.",
            repositoryLink: "https://github.com/jocoso/paws-to-doors",
            deployment: "https://paws-to-doors.onrender.com/",
            picture: `${process.env.PUBLIC_URL}/project-p2d-img.png`,
        },
        {
            name: "Oliver",
            type: 3,
            description: 
            "An AI for organizing your files.",
            repositoryLink: "https://github.com/jocoso/Oliver",
            picture: `${process.env.PUBLIC_URL}/project-oliver-img.webp`,
        }
    ];
    
    const [ displayedProjects, setProjectsDisplayed] = useState(projectData);
    
    // Types = array of 1's and 2's for now
    // ! Repeated numbers will cause repeated data
    const handleButtonClick = (types) => {
        const filteredProjects = projectData.filter(project => types.includes(project.type));
        setProjectsDisplayed(filteredProjects)
    }
            
    // Classname of every item in the navigation bar.
    const itemClassName="flex relative px-5 min-w-32 sm:h-19 md:h-19 lg:h-20 items-center justify-center text-center group";
    const buttonClassName="h-full text-base md:text-lg lg:text-xl font-semibold relative z-10 transition-all duration-300 group-hover:text-shadow-xl group-hover:text-highlightTwo";
            
    return(
                
        <Slide title="Projects">
            <p>
                The sections below display my experience in computer science.
                I have included all relevant projects which may be in different 
                levels of completion.
            </p>
            
            <ul className="w-full h-full flex justify-center py-5 items-center rounded-t-lg bg-gray-300 shadow-lg">
                <li className={itemClassName}>
                    <button className={buttonClassName} onClick={() => handleButtonClick([1, 2, 3])}>All</button>
                    <span className="w-0 h-full group-hover:w-full absolute inset transition-all duration-300 group-hover:shadow-lg shadow-highlightOne bg-highlightOne"></span>
                </li>
                <li className={itemClassName}>
                    <button className={buttonClassName} onClick={() => handleButtonClick([1])}>Websites</button>
                    <span className="w-0 h-full group-hover:w-full absolute inset transition-all duration-300 group-hover:shadow-lg shadow-highlightOne bg-highlightOne"></span>
                </li>
                <li className={itemClassName}>
                    <button className={buttonClassName} onClick={() => handleButtonClick([2])}>CLI</button>
                    <span className="w-0 h-full group-hover:w-full absolute inset transition-all duration-300 group-hover:shadow-lg shadow-highlightOne bg-highlightOne"></span>
                </li>
                <li className={itemClassName}>
                    <button className={buttonClassName} onClick={() => handleButtonClick([3])}>Machine Learning</button>
                    <span className="w-0 h-full group-hover:w-full absolute inset transition-all duration-300 group-hover:shadow-lg shadow-highlightOne bg-highlightOne"></span>
                </li>
            </ul>
        
            <div id="displayed-projects" className="w-full min-h-full mt-5 grid sm:grid-cols-2 grid-cols-1 gap-1 items-center text-center">
                {displayedProjects.map((project, i) => {
                    return (
                        // TAILWIND PLUGIN
                        // CARDS
                        <div key={i} className=" overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
                            {/* PICTURE */}
                            <a href={project.repositoryLink} target="_blank" rel="noreferrer" className="block h-80 overflow-hidden">
                                <img src={project.picture} alt={project.description} className="rounded-t-lg w-full h-full object-cover transition duration-500 ease-in-out transform hover:scale-110" />
                            </a>

                            {/* INFO */}
                            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out bg-black bg-opacity-60 rounded-lg flex flex-col justify-center">

                                <a href={project.repositoryLink} className="text-2xl font-bold tracking-tight text-highlightTwo">
                                    <h1 className=" font-bold"> {project.name} </h1>
                                </a>

                                <p className="mb-3 font-normal text-gray-300">{project.description}</p>
                                <SlideLink className="mt-2 inline-flex justify-center w-full py-4 text-sm font-medium text-center bg-background hover:bg-highlightTwo hover:text-background" href={project.repositoryLink}>Github</SlideLink>

                            </div>
                        </div>
                    )
                })}
            </div>
        
        </Slide>
        

    );
}