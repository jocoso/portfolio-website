import React from "react";

import { Slide } from "../../components";

export default function About() {

    return (

        <Slide title='About Me'>
            
            <p>
                <span className="font-bold block mb-5">Hello!</span>
                
                I am Joshua Collado, and I graduated from Lehman College with a bachelor's degree in 
                Computer Science. My journey began by sharing my programming knowledge with middle 
                and highschool students for four incredible years. For four years, I've sparked their 
                curiosity and helped over a hundred students with their projects, however, I am seeking to pursue my real passion.
                It is this goal that that motivated me to create this portfolio.
            </p>

            <p>
                I am committed to developing new technologies that are user-friendly, adaptable, 
                exceptionally robust, and reliable. I excel in conceptualizing innovative software 
                solutions and crafting unique digital assets. Moreover, I take great satisfaction in 
                addressing and resolving bizarre examples of seemingly straightforward errors. 
                This love for attention to detail in problem-solving is not just a skill—it's a passion
                that drives my professional fulfillment and success.
            </p>
            <p>
                I am developing a version control system called <a href="https://github.com/jocoso/kraken">Kraken</a>, inspired by the formidable 
                creature of legend and my favorite animal. Kraken was conceived out of a need
                for a more art-friendly version control solution, as platforms like GitHub don't excel 
                at managing art-related content. Instead of settling for less, I created a tool tailored to these 
                needs. Kraken enhances flexibility through custom scripts that streamline and optimize the process, 
                minimizing the pains of working on a group art project, all within a user-friendly interface. 
                Kraken uses Google Drive to save projects and helps artists with the organization of their working
                by offering file architecture that helps keep projects organized and neat.
                If you're interested in learning more, especially for artistic projects, I invite you to explore Kraken.
            </p>

            <p>
                I am also designing a browser-adventure game titled <a href="#">Magebound</a>. It is still
                being conceptualized, as also is what a browser-adventure game is, but
                I am more than excited to find out! If you are interested in seeing my plans
                for this game, click here.
            </p>

            <p>
                Feel free to get in touch. I'd love to get feedback, 
                and if you are a company, I'd also be glad to get in touch!
            </p>
            
        </Slide>

    );
};

