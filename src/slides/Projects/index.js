import React, {useState} from "react";

import { Slide } from "../../components";
import { SlideLink } from "../../components/Viewer/Slide/components";

export default function Projects() {
    const itemClassName="h-10 mx-5 flex items-center hover:text-highlightOne";
    
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

    return(
    
        <Slide title="Projects">
            <p>
                The sections below display my experience in computer science.
                I have included all relevant projects which may be in different 
                levels of completion.
            </p>
            <ul className="flex flex-row justify-center bg-gray-300 rounded-md">
                <li className={itemClassName}>
                    <button onClick={() => handleButtonClick([1, 2, 3])}>All</button>
                </li>
                <li className={itemClassName}>
                    <button onClick={() => handleButtonClick([1])}>Websites</button>
                </li>
                <li className={itemClassName}>
                    <button onClick={() => handleButtonClick([2])}>CLI</button>
                </li>
                <li className={itemClassName}>
                    <button onClick={() => handleButtonClick([3])}>Machine Learning</button>
                </li>
            </ul>
        
            <div id="displayed-projects" className="w-full h-full mt-10 grid grid-cols-3 gap-3 items-center text-center">
                {displayedProjects.map((project, i) => {
                    return (
                        // TAILWIND PLUGIN
                        // CARDS
                        <div key={i} className="h-80 text-white w-full rounded-md grid grid-rows-6 bg-background">
                            <div className="w-full h-full row-span-1  flex justify-center items-center rounded-t-md">
                                <h1 className=" font-bold"> {project.name} </h1>
                            </div>
                            <div className="row-span-3 overflow-hidden flex border-y-4 border-highlightOne">
                                <img src={project.picture} alt={project.description} className="object-cover w-full h-full" />
                            </div>
                            <div className="row-span-2 rounded-b-md flex flex-col items-center justify-center">
                                <p className="h-2/3 w-5/6 text-left pl-2">{project.description}</p>
                                <SlideLink className="h-1/3 bg-highlightOne w-full rounded-b-md" href={project.repositoryLink}>Github</SlideLink>
                            </div>
                        </div>
                    )
                })}
            </div>
        
        </Slide>
        

    );
}