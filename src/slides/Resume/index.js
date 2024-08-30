import React from "react";

import { Slide } from "../../components";

export default function ResumeSlide() {
    // Obtaining data from the `database`...
    const resumeData = {
        name: "Joshua Collado",
        summary:
            "Detail-oriented innovator with a comprehensive understanding of developing secure, user-focused applications across multiple platforms and a proven ability to learn and implement new technologies. ",
        contact: {
            number: "(347)984-5273",
            email: "joshua.colladojh@gmail.com",
            location: "Albany, NY",
            online: [
                {
                    name: "Github",
                    link: "https://github.com/jocoso",
                },
                {
                    name: "Linkedin",
                    link: "https://www.linkedin.com/in/jocoso5273/",
                },
                {
                    name: "Website",
                    link: "http://localhost:3000/",
                },
            ],
        },
        experience: [
            {
                companyName: "Nuasin Next Generation High School",
                companyLocation: "New York, NY",
                jobTitle: "Computer Science Teacher  ",
                dateJobStart: "Jun 2022",
                dateJobEnd: "Present",
                points: [
                    "Delivered an engaging curriculum to a class of over 80 high school students, aiding students in developing proficiency in programming and improving their problem-solving skills",
                    "Oversaw and managed four cohorts of  25 to 30 students daily, and applied data-driven methods to track and substancially improve the overall student performance",
                    "Co-designed weekly lessons and provided strategic support on lesson plans, resulting in an 12% increase in Regents passing grades compared to previous years",
                    "Supported and challenged a selected group of talented students by designing programming challenges and providing debugging assistance, which led  to the creation of a student-led lunch group for programming, peer support and collaboration",
                ],
            },  
            {
                companyName: "Valence College Prep",
                companyLocation: "New York, NY",
                jobTitle: "Computer Science Teacher",
                dateJobStart: "Jun 2020",
                dateJobEnd: "Nov 2021",
                points: [
                    "Designed a comprehensive computer science curriculum for grades five to eight, focusing on foundational programming skills, digital literacy and online security",
                    "Developed and executed weekly lesson plans based on data collected from previous weeks, while monitoring and ensuring the continuous improvement in student engagement and learning outcomes",
                    "Collaborated in weekly staff meetings to analyze student data and other sensitive information, using insights to develop a data-driven curriculum tailored to student engagement and technical proficiency",

                ],
            },
            {
                companyName: "DoSomething.org",
                companyLocation: "New York, NY",
                jobTitle: "Software Engineer Intern",
                dateJobStart: "Jun 2019", 
                dateJobEnd: "Sep 2019",
                points: [
                    "Assisted in developing user-centric React modules for the organization’s main website, improving navigation and significantly improving user experience",
                    "Collaborated on data migration to a new database, quickly mastering and integrating Contentful and GraphQL, which enhanced the site’s content management capabilities",
                    "Conducted thorough debugging and testing of new features, ensuring robustness and seamless user experience across multiple platforms",
                ],
            },
        ],
        education: [
            {
                schoolName: "Columbia University",
                schoolLocation: "New York, NY",
                dateGraduation: "Oct. 2024",
                certOrDeg: "Full-Stack Development Bootcamp",
                points: [
                    "Engaged in a comprehensive, project-based focused on mastering React, SQL, Node.js, JavaScript, HTML, and CSS",
                    "Focused and adhering to corporate coding standards and implementing best practices to effectively prepare for real-world software development challenges",
                    "Collaborated on multiple team projects, simulating a professional development environment to sharpen coding and design skills",
                ],
            },

            {
                schoolName: "Lehman College",
                schoolLocation: "New York, NY",
                dateGraduation: "Aug. 2019",
                certOrDeg: "B.Sc. In Computer Science",
                points: [
                    "Relevant Coursework: Problem Solving with Computer Programming, Operating Systems Fundamentals, Computer Systems Management & Support, Data Structures and Algorithms, Calculus I and II",
                    "Participated in coding competitions organized by teachers and mentors, enhancing my programming skills through hands-on experience and fostering collaboration with peers",
                    "Leader of the National Society of Black Engineers (NSBE) and the Society of Hispanic Professional Engineers (SHPE), contributing to workshops and organizing the 2020 NSBE-SHPE Hackathon",
                ]
            },
        ],
    };

    return (
        <Slide title="Resume">
            {/*  */}
            <h4 id="resume-name">{resumeData.name}</h4>
            <div id="resume-contact">
                <p id="tel-number">{resumeData.contact.number}</p>
                <p id="email">{resumeData.contact.email}</p>
                <p id="location">{resumeData.contact.location}</p>
                {resumeData.contact.online.map((site, i) => {
                    return (
                        <a
                            key={i}
                            href={site.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {site.name}
                        </a>
                    );
                })}
            </div>
            
            <h5>Summary</h5>
            <p id="summary">{resumeData.summary}</p>

            <h5>Experience</h5>
            {
                resumeData.experience.map((exp, i) => {
                    return(<div key={i}>
                        <h5 id="company-name">{exp.companyName}</h5>
                        <p id="job-title">{exp.jobTitle}</p>
                        <div id="dates">
                            {exp.dateJobStart}
                            {exp.dateJobEnd}
                        </div>
                        <p id="job-points">
                            {
                                exp.points.map((point, i) => {
                                    return <p key={i}>{point}</p>
                                })
                            }
                        </p>
                    </div>);
                })
        }

        <h5>Education</h5>
        {
            resumeData.education.map((edu, i) => {
                return(<div key={i}>
                    <h6 id="school-name">{edu.schoolName}</h6>
                    <p id="school-location">{edu.schoolLocation}</p>
                    <div id="date-graduation">
                        {edu.dateGraduation}
                    </div>
                    <p id="cert-or-deg">{edu.certOrDeg}</p>
                    <p id="job-points">
                        {
                            edu.points.map((point, i) => {
                                return <p key={i}>{point}</p>
                            })
                        }
                    </p>
                </div>);
            })
        }
        </Slide>
    );
}
