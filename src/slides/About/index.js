import React, { useContext } from "react";
import { Slide } from "../../components";
import StyleContext from "../styleContext";
import "./style.css";

export default function About(props) {
    let currentStyle = useContext(StyleContext) || "summer";
    return (
        
        <Slide title='About Me'>  {/* XXX: DON'T STYLE */}
            <div id="aboutme-container" className={`${currentStyle.style}-aboutme-content aboutme-content grid w-full min-h-screen gap-32 sm:grid-cols-1 md:grid-cols-4 md:w-full lg:grid-cols-4 lg:w-10/12 items-start sm:justify-center lg:mx-auto sm:px-14`}>
            
                <div id="aboutme-information " className="md:col-span-2 lg:col-span-2 p-5 sm:p-5 md:p-10 lg:p-10 w-full order-1">
                    <h2 className="text-center sm:font-normal sm:text-6xl md:font-semibold md:text-8xl">About Me</h2>
                    <p className="font-bold text-3xl w-fit my-14">Hey there! </p>
                    <p>
                        I am Joshua and I am a software developer based in NYC.
                        I graduated from Lehman College with a BSc. degree in computer science and
                        for four years I have taught children grades 5-12 how to work and be safe around computers
                        using a curriculum designed by me and tailored to them.
                    </p>

                    <h5>Experience</h5>
                    <p>
                        I have worked as a computer science teacher and mentor
                        leveraging in a strong foundational knowledge of computer basics.
                        My main area of expertise is web development (mostly with tools such as React), Python,
                        C, and C++. I have a fascination with cybersecurity, encryption, and pentesting and I am looking 
                        to specialize in it in the future. I also enjoy writing games in my free time.
                    </p>

                    <h5>Projects</h5>
                    <p>
                        Currently I am working on the following projects:
                    </p>

                    <ul>
                        <li>
                            <h6>This Website</h6>
                            <p>If you are looking at it I succeeded, yay!</p>
                        </li>
                        <li>
                            <h6>Kraken</h6>
                            <p>
                                A version control tool for artist written in nodejs that uses the browser 
                                as a Graphic User Interface for an easily customizable experience.
                            </p>
                        </li>
                        <li>
                            <h6>RAWR</h6>
                            <p>
                                Originally an old engine for text-adventure games, 
                                RAWR is a reporpoused program inteded to become a browser-game engine. 
                                I am intriged in the ways games like Neopets, The Kindom of Loathing, and Dragon Quest work 
                                so I decided why not make a tool that helps me figure it out as well as aid in the
                                creation of more of these underappreciated gems?
                            </p>
                        </li>
                        <li>
                            <h6>Magebound</h6>
                            <p>
                                A testbed for RAWR. A browser-adventure game where one plays as a mage.
                                It will use all of RAWRs capabilities and will work as a proof of concept for the library.
                            </p>
                        </li>
                    </ul>
                    
                </div>
                <div id="aboutme-picture" className="flex justify-center items-center justify-center overflow-hidden min-w-[40rem] max-w-[50rem] h-auto order[-10] md:order-1">
                    <img src={`${process.env.PUBLIC_URL}/aboutme-img.jpg`} alt="me" className="shrink-0 min-w-full min-h-full"/>
                </div>
            </div>
        </Slide>

    );
};

