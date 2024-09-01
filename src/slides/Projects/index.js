import React, {useState, useContext} from "react";
import StyleContext from "../styleContext";
import { Slide } from "../../components";

export default function Projects() {
    const currentStyle = useContext(StyleContext).style || 'summer';

    // Data
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
    
    const [ displayedProjects, setProjectsDisplayed ] = useState(projectData);

    // ! Repeated numbers will return repeated data aka fetchedNumbers = [1, 1, 2] will return entries 1 twice
    const handleButtonClick = (types) => {

        const filteredProjects = projectData.filter(project => types.includes(project.type));
        setProjectsDisplayed(filteredProjects);

    }
            
    // Classname of every item in the navigation bar.
    const itemClassName="flex items-center relative z-0 justify-center group min-w-32 px-5 sm:h-19 md:h-19 lg:h-20 text-center";
    const buttonClassName="relative z-10 h-full font-semibold text-base md:text-lg lg:text-xl transition-all duration-300 group-hover:text-shadow-xl";
            
    return(
                
        <Slide title="Projects">  {/* XXX: Don't Style  */}

            <div id="projects-slide" className="w-2/3 mx-auto">

                <p>
                    The sections below display my experience as a programmer.
                </p>
                
                {/* Inner Navigation Bar */}
                <ul className={`${currentStyle}-portfolio-nb portfolio-nb w-2/3 h-fit flex justify-center mx-auto py-0 items-center`}>
                    
                    <li className={itemClassName}>
                        <button className={buttonClassName} onClick={() => handleButtonClick([1, 2, 3])}>All</button>
                        <span className="w-full h-0 group-hover:h-full absolute inset transition-all duration-300 group-hover:shadow-lg"></span>
                    </li>
                    <li className={itemClassName}>
                        <button className={buttonClassName} onClick={() => handleButtonClick([1])}>Websites</button>
                        <span className="w-full h-0 group-hover:h-full absolute inset transition-all duration-300 group-hover:shadow-lg "></span>
                    </li>
                    <li className={itemClassName}>
                        <button className={buttonClassName} onClick={() => handleButtonClick([2])}>CLI</button>
                        <span className="h-0 w-full group-hover:h-full absolute inset transition-all duration-300 group-hover:shadow-lg "></span>
                    </li>
                    <li className={itemClassName}>
                        <button className={buttonClassName} onClick={() => handleButtonClick([3])}>Machine Learning</button>
                        <span className="h-0 w-full group-hover:h-full absolute inset transition-all duration-300 group-hover:shadow-lg "></span>
                    </li>

                </ul>

                {/* Project Container */}
                <div id="displayed-projects" className="w-full min-h-full mt-5 grid sm:grid-cols-2 grid-cols-1 gap-1 items-center text-center">
                    
                    {displayedProjects.map((project, i) => {
                        return (
                            
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
                                    <a className="mt-2 inline-flex justify-center w-full py-4 text-sm font-medium text-center bg-background hover:bg-highlightTwo hover:text-background" href={project.repositoryLink}>Github</a>

                                </div>
                            </div>
                        
                        )
                    })}

                </div>
            </div>
        </Slide>
        

    );
}