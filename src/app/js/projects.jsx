"use client";

import React from "react";


export default function Projects() {
    const nextProj = (type) => {
        if (type === "c") {
            var projectList = document.getElementsByClassName("cProjectData");
            var index;
            
            for (index = 0; index < projectList.length; index++) {
                if (projectList[index].style.display === "block") {
                    projectList[index].style.display = "none";
                    projectList[(index+1)%projectList.length].style.display = "block";
                    break;
                }
            }
        } else {
            var projectList = document.getElementsByClassName("pProjectData");
            var index;
            
            for (index = 0; index < projectList.length; index++) {
                if (projectList[index].style.display === "block") {
                    projectList[index].style.display = "none";
                    projectList[(index+1)%projectList.length].style.display = "block";
                    break;
                }
            }
        }
    }

    const prevProj = (type) => {
        if (type === "c") {
            var projectList = document.getElementsByClassName("cProjectData");
            var index;
            
            for (index = 0; index < projectList.length; index++) {
                if (projectList[index].style.display === "block") {
                    projectList[index].style.display = "none";
                    if (index === 0) {
                        projectList[projectList.length - 1].style.display = "block";
                    } else {
                        projectList[index-1].style.display = "block";
                    }
                    break;
                }
            }
        } else {
            var projectList = document.getElementsByClassName("pProjectData");
            var index;
            
            for (index = 0; index < projectList.length; index++) {
                if (projectList[index].style.display === "block") {
                    projectList[index].style.display = "none";
                    if (index === 0) {
                        projectList[projectList.length - 1].style.display = "block";
                    } else {
                        projectList[index-1].style.display = "block";
                    }
                    break;
                }
            }
        }
    }

    return (
        <section id="Projects">
            <div className="aboutMeContainer">
                <h2>
                    Projects
                </h2>
                <div className="projNavMenu">
                    <div className="aboutMeContainer">
                        <div className="projects">
                            <div className="projNavMenu">
                                <button onClick={() => prevProj("c")} className="projButton">&lt;</button>
                                <h3>Class Projects</h3>
                                <button onClick={() => nextProj("c")} className="projButton">&gt;</button>
                            </div>
                            <dl className="courseList">
                                <div id="clientSideDynamic" className="cProjectData" style={{display: "block"}}>
                                    <dt>Client-Side Dynamic Clone of Instagram | EECS485 </dt>
                                    <dd>Implemented a full-stack, client-side dynamic clone of Instagram using Python, React, and SQLite. Users 
                                        are able to post comments, create accounts, upload photos and follow other users via AJAX calls to a 
                                        REST API implemented in React. As part of the project, I deployed the web page on AWS. Skills developed include:
                                        <ul className="courseList">
                                            <li>Full-Stack Development</li>
                                            <li>React, JavaScript, Python, SQL</li>
                                            <li>Building a REST API</li>
                                            <li>HTML & CSS</li>
                                            <li>HTTP Basic Authentication</li>
                                        </ul>
                                    </dd>
                                    </div>
                                <div id="scalableSearchEngine" className="cProjectData" style={{display: "none"}}>
                                    <dt>Scalable Search Engine | EECS485 </dt>
                                    <dd>Built a scalable search engine by creating an inverted index of scraped web pages using MapReduce, performing 
                                        text and link analysis, and returning the results via a REST API. Users can type in a query and select a PageRank 
                                        weight, with results returned in ranked order. Skills developed include:
                                        <ul className="courseList">
                                            <li>MapReduce processing of scraped web pages</li>
                                            <li>React, JavaScript, Python, SQL</li>
                                            <li>Building a REST API</li>
                                            <li>Creating an inverted index for web search</li>
                                            <li>Knowledge of how search engines function and SEO</li>
                                        </ul>
                                    </dd>
                                </div>
                                <div id="multithreadedFS" className="cProjectData" style={{display: "none"}}>
                                    <dt>Multithreaded Networked File Server | EECS482 </dt>
                                    <dd>Designed a multithreaded, networked file server from scratch. Users communicated with the file server via ports 
                                        and sockets, sending CREATE, DELETE, WRITE, and READ requests to the server, and requests were handled using 
                                        the Boost Threading and Synchronization libraries. The project had a focus on file systems at a lower level 
                                        (with files and directories represented as inodes and blocks) but can be adapted to a higher level file system. 
                                        Skills developed include:
                                        <ul className="courseList">
                                            <li>Lower level network communication via ports and sockets</li>
                                            <li>Substantial multithreaded programming with fine-grained locking</li>
                                            <li>Knowledge of how Operating Systems store files and data</li>
                                        </ul>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <div className="aboutMeContainer">
                        <div>
                            <div className="projNavMenu">
                                <button onClick={() => prevProj("p")} className="projButton">&lt;</button>
                                <h3>Personal Projects</h3>
                                <button onClick={() => nextProj("p")} className="projButton">&gt;</button>
                            </div>
                            <dl className="courseList">
                                <div id="personalWebsite" className="pProjectData" style={{display: "block"}}>
                                    <dt>Personal Webpage | SU2024</dt>
                                    <dd>Built a personal resume webpage using React and NextJS. Skills developed include:
                                        <ul className="courseList">
                                            <li>JavaScript</li>
                                            <li>React and NextJS</li>
                                            <li>HTML & CSS</li>
                                            <li>Deploying on AWS and registering a domain</li>
                                        </ul>
                                    </dd>
                                </div>
                                <div id="vrpProject" className="pProjectData" style={{display: "none"}}>
                                    <dt>Vehicle Routing & Rideshare Application | SU2024 & FA2024</dt>
                                    <dd>Currently a work in progress application for routing drivers and assigning passengers in a ride-share application. I work as a driver for
                                        the University of Michigan's SafeRide program, which has encountered logistical issues in assigning passengers that
                                        have led to hour long wait times and poor throughput.
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}