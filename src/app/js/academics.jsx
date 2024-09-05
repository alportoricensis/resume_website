"use client";

import React, { useRef, useEffect } from "react";
import Carat from "./carat";


export default function Academics() {
    const buttonRef = useRef(null);
    useEffect(() => {
        buttonRef.current.click();
    }, []);

    const loadClasses = (courseName) => {
        var index;
    
        var courseList = document.getElementsByClassName("classContent");
        for (index = 0; index < courseList.length; index++) {
            courseList[index].style.display = "none";
        }
    
        var classLinks = document.getElementsByClassName("classLinks");
        for (index = 0; index < classLinks.length; index++) {
            classLinks[index].className = classLinks[index].className.replace(
                "active", ""
            );
        }
    
        document.getElementById(courseName).style.display = "block";
        document.getElementById("academicsTabHead").innerText = (courseName === "ComputerScience") ? "Computer Science" : courseName;
    }

    return (
        <section id="Academics">
            <div className="aboutMeContainer">
                <div className="academicsTitle">
                    <h2>
                        Academics
                    </h2>
                </div>
                <div className="academics">
                    <p className="paragraph1">
                        University of Michigan, Ann Arbor, MI | 3.514 GPA | Graduating WI25
                        <br></br>
                        Bachelors of Science in Engineering in Computer Science with a Minor in Mathematics
                    </p>
                    <div className="academicsTabMenu">
                        <h3 id="academicsTabHead">Computer Science</h3>
                        <div className="academicsTab">
                            <button className="academicsLinks" ref={buttonRef} onClick={() => loadClasses("ComputerScience")}>
                                Computer Science
                            </button>
                            <button className="academicsLinks" onClick={() => loadClasses("Mathematics")}>
                                Mathematics
                            </button>
                            <button className="academicsLinks" onClick={() => loadClasses("Miscellaneous")}>
                                Miscellaneous
                            </button>
                        </div>
                    </div>
                    <div id="ComputerScience" className="classContent" style={{display: "block"}}>
                        <dl className="courseList">
                            <dt><Carat courseID={"eecs388"}></Carat> | EECS 388 | Introduction to Computer Security | WI25 | TBD </dt>
                            <dd className="courseData" id="eecs388" style={{display: "block"}}>An introductory course on computer security. Planned for WI25. Topics include:
                                <ul className="courseList">
                                    <li>Security fundamentals: confidentiality, message integrity, public-key cryptography, and randomness</li>
                                    <li>Web and network security: introduction to web concepts, web attacks and defenses, networking introduction, HTTPS attacks and defenses, and passwords</li>
                                    <li>Host and application security: malware, access control and isolation, application bugs, and digital forensics</li>
                                    <li>Security in the real world: data center security, machine learning security, and privacy</li>
                                </ul>
                            </dd>
                            <br></br>
                            <dt><Carat courseID={"eecs489"}></Carat> | EECS 489 | Computer Networks | WI25 | TBD </dt>
                            <dd className="courseData" id="eecs489" style={{display: "none"}}>A top-down course on how networks operate and network applications are written. Planned for WI25. Topics include:
                                <ul className="courseList">
                                    <li>How distributed systems (such as CDNs and cloud computing systems) work at the application layer</li>
                                    <li>The different transport layer protocols over the internet, and how it runs</li>
                                    <li>Modern distributed system topics, including datacenter networks, software-defined netowrking (SDN), and programmable networks</li>
                                    <li>How the ethernet transfers packets at the link layer</li>
                                </ul>
                            </dd>
                            <br></br>
                            <dt><Carat courseID={"eecs445"}></Carat> | EECS 445 | Introduction to Machine Learning | FA24 | TBD </dt>
                            <dd className="courseData" id="eecs445" style={{display: "none"}}>An introductory course in Machine Learning. Planned for FA24. Topics include:
                                <ul className="courseList">
                                    <li>Theoretical foundation behind foundational algorithms of machine learning</li>
                                    <li>Supervised learning (including regression, classification, kernel methods, and neural networks)</li>
                                    <li>Unsupervised learning (including clustering and autoencoders)</li>
                                    <li>Generative models and reinforcement learning</li>
                                    <li>Practical applications of machine learning to computer vision, data mining, speech recognition, text processing, amongst others</li>
                                </ul>
                            </dd>
                            <br></br>
                            <dt><Carat courseID={"eecs441"}></Carat> | EECS 441 | Mobile App Development for Entrepeneurs | FA24 | TBD </dt>
                            <dd className="courseData" id="eecs441" style={{display: "none"}}>A major design course on engineering mobile applications. Planned for FA24. Topics covered include:
                                <ul className="courseList">
                                    <li>Product design</li>
                                    <li>Project and team management</li>
                                    <li>Development for iOS and Android utilizing Swift and Kotlin</li>
                                    <li>Project based on a ride-share platform for non-profit ride-share providers </li>
                                </ul>
                            </dd>
                            <br></br>
                            <dt><Carat courseID={"eecs482"}></Carat> | EECS 482 | Introduction to Operating Systems | SU24 | A </dt>
                            <dd className="courseData" id="eecs482" style={{display: "none"}}>An introductory course in Operating System concepts. Topics covered include:
                                <ul className="courseList">
                                    <li>Multithreaded programming and concurrency</li>
                                    <li>Address spaces</li>
                                    <li>File systems</li>
                                    <li>Networking basics</li>
                                </ul>
                            </dd>
                            <br></br>
                            <dt><Carat courseID={"eecs484"}></Carat> | EECS 484 | Database Management Systems | SP24 | A </dt>
                            <dd className="courseData" id="eecs484" style={{display: "none"}}>An introductory course on Database Management Systems. Topics covered include:
                                <ul className="courseList">
                                    <li>How to design a Database Management System, store data, and develop applications that communicate with the DBMS</li>
                                    <li>Creating queries using SQL for relational databases, with a focus on OracleDB</li>
                                    <li>Creating queries using mongoDB</li>
                                    <li>Internal design of a DBMS that supports concurrent accesses and robustness</li>
                                    <li>How queries are handled efficiently</li>
                                    <li>Designing an ER-Diagram to create an efficient relational database</li>
                                </ul>
                            </dd>
                            <br></br>
                            <dt><Carat courseID={"eecs485"}></Carat> | EECS 485 | Web Systems | WI24 | B+ </dt>
                            <dd className="courseData" id="eecs485" style={{display: "none"}}>A holistic course on web systems, with a focus on full-stack development. This website was built with the knowledge from this course.
                                Skills developed in this course include SQL, deploying to AWS, HTML and CSS, Python, JavaScript, and React. Topics covered include:
                                <ul className="courseList">
                                    <li>Designing web applications, from static pages to client-side dynamic pages</li>
                                    <li>Creating secure web applications and REST APIs</li>
                                    <li>Introduction to distributed systems with a focus on the web, included storage, DNS, and cloud computing</li>
                                    <li>Web semantics, including text and link analysis, recommender systems, & advertisement</li>
                                </ul>
                            </dd>
                            <br></br>
                            <dt><Carat courseID={"eecs370"}></Carat> | EECS 370 | Introduction to Computer Organization | WI24 | B </dt>
                            <dd className="courseData" id="eecs370" style={{display: "none"}}>An introductory course to how computers execute programs. Topics include:
                                <ul className="courseList">
                                    <li>How processors execute instructions and work in tandem with memory (from registers, to caching, to disk)</li>
                                    <li>How assembly language is translated into machine code</li>
                                </ul>
                            </dd>
                            <br></br>
                            <dt><Carat courseID={"eecs281"}></Carat> | EECS 281 | Data Structures & Algorithms | FA23 | B </dt>
                            <dd className="courseData" id="eecs281" style={{display: "none"}}>An undergraduate level course in data structures and algorithms. Topics include:
                                <ul className="courseList">
                                    <li>Data structures, including, but not limited to: priority queues, hash maps, trees, and sets</li>
                                    <li>Algorithm families, including: greedy, divide and conquer, dynamic programming, and branch and bound</li>
                                    <li>Hashing</li>
                                    <li>Path finding and spanning tree algorithms</li>
                                    <li>Sorting algorithms</li>
                                </ul>
                            </dd>
                            <br></br>
                            <dt><Carat courseID={"eecs376"}></Carat> | EECS 376 | Foundations of Computer Science | FA23 | B </dt>
                            <dd className="courseData" id="eecs376" style={{display: "none"}}>An introduction to the theoretical foundations of Computer Science. Topics include:
                                <ul className="courseList">
                                    <li>Algorithm design and analysis, with a focus on divide and conquer, greedy, and dynamic programming</li>
                                    <li>Computability, with a focus on Turing Machines, undecidable problems, Turing reductions, and Rice's Theorem</li>
                                    <li>Complexity, focusing on the P versus NP problem, NP-Completeness, Polytime Mappings, and Search and Approximation of NP-Hard problems</li>
                                    <li>Randomized algorithms and analyzing them via Hoeffding's Inequality and Concentration Bounds</li>
                                    <li>Introduction to Cryptography, with a focus on Diffie-Hellman Key Exhance and RSA</li>
                                </ul>
                            </dd>
                            <br></br>
                            <dt><Carat courseID={"eecs280"}></Carat> | EECS 280 | Programming and Introduction to Data Structures | WI23 | A </dt>
                            <dd className="courseData" id="eecs280" style={{display: "none"}}>A second-semester foundational programming course. Topics include:
                                <ul className="courseList">
                                    <li>Concepts for programming, including encapsulation, compound types, resource management, inheritance and polymorphism</li>
                                    <li>Key elements of the C++ language, including class, streams, the big three, templates, overloading and exceptions</li>
                                    <li>Introduction to data structures, including stacks, queues, linked lists, binary trees, and containers</li>
                                </ul>
                            </dd>
                            <br></br>
                            <dt><Carat courseID={"eecs203"}></Carat> | EECS 203 | Discrete Mathematics | WI23 | B </dt>
                            <dd className="courseData" id="eecs203" style={{display: "none"}}>Introduction to the mathematical foundations of Computer Science. Topics include:
                                <ul className="courseList">
                                    <li>Set theory and functions</li>
                                    <li>Logic and different ways of proving, including induction, contradiction, and direct proofs</li>
                                    <li>Graph theory and connectivity</li>
                                    <li>Discrete probability, including random variables and expectation</li>
                                </ul>
                            </dd>
                        </dl>
                    </div>
                    <div id="Mathematics" className="classContent" style={{display: "none"}}>
                        <dl className="courseList">
                            <dt><Carat courseID={"math561"}></Carat> | MATH 561 | Introduction to Linear Programming | WI24 | B+ </dt>
                            <dd className="courseData" id="math561" style={{display: "block"}}>Graduate level course in optimization. Topics included:
                                <ul className="courseList">
                                    <li>Formulation of mathematical optimization models</li>
                                    <li>Mathematics and algorithms of linear programs, including dual formulation, the Simplex algorithm, and branch-and-bound</li>
                                    <li>Optimizing linear programs utilizing Gurobi and Python</li>
                                    <li>Formulating and solving integer programs</li>
                                </ul>
                            </dd>
                            <br></br>
                            <dt><Carat courseID={"math463"}></Carat> | MATH 463 | Mathematical Modelling in Biology | FA23 | A </dt>
                            <dd className="courseData" id="math463" style={{display: "none"}}>Mathematical modeling course with a focus on Biology. Topics included:
                                <ul className="courseList">
                                    <li>Formulation of discrete mathematical models and data analysis</li>
                                    <li>Fitting data to models</li>
                                    <li>Machine learning and regression models</li>
                                </ul>
                            </dd>
                            <br></br>
                            <dt><Carat courseID={"biomede241"}></Carat> | BIOMEDE 241 | Statics and Computational Data Analysis | FA22 | B+ </dt>
                            <dd className="courseData" id="biomede241" style={{display: "none"}}>A Statistics and Linear Algebra course focused on data analysis for Biomedical Engineering. Topics included:
                                <ul className="courseList">
                                    <li>Introduction to Linear Algebra</li>
                                    <li>Probability Theory, random variables and sampling</li>
                                    <li>Error and confidence intervals, linear models, ANOVA, Chi-squared</li>
                                </ul>
                            </dd>
                            <br></br>
                            <dt><Carat courseID={"math214"}></Carat> | MATH 214 | Applied Linear Algebra | FA22 | B </dt>
                            <dd className="courseData" id="math214" style={{display: "none"}}>Introductory course in Linear Algebra focused on its applications. Topics included:
                                <ul className="courseList">
                                    <li>Matrix operations</li>
                                    <li>Eigenvalues and Eigenvectors</li>
                                    <li>QR decomposition and least squares</li>
                                </ul>
                            </dd>
                            <br></br>
                        </dl>
                    </div>
                    <div id="Miscellaneous" className="classContent" style={{display: "none"}}>
                        <dl className="courseList">
                            <dt><Carat courseID={"acc300"}></Carat> | ACC 300 | Financial Accounting | WI25 | TBD </dt>
                            <dd className="courseData" id="acc300" style={{display: "block"}}>An introductory course on financial accounting. Planned for WI25. Topics include:
                                <ul className="courseList">
                                    <li>Fundamental concenpts and principals of financial accounting</li>
                                    <li>How the economic activities of a business are reported in a set of financial statements</li>
                                </ul>
                            </dd>
                            <br></br>
                            <dt><Carat courseID={"tchnclcm497"}></Carat> | TCHNCLCM 497 | Advanced Technical Communication for Computer Science | FA24 | TBD </dt>
                            <dd className="courseData" id="tchnclcm497" style={{display: "none"}}>An advanced technical communication course with a focus on Computer Science. Topics include:
                                <ul className="courseList">
                                    <li>Design and writing of task analysis</li>
                                    <li>Design of requirements documents, specifications, and reports</li>
                                </ul>
                            </dd>
                            <br></br>
                            <dt><Carat courseID={"tchnclcm300"}></Carat> | TCHNCLCM 300 | Technical Communication for Computer Engineering | FA23 | A </dt>
                            <dd className="courseData" id="tchnclcm300" style={{display: "none"}}>Introductory course on technical communication. Topics included:
                                <ul className="courseList">
                                    <li>Functionally presenting ideas in written reports and oral presentations</li>
                                    <li>Writing memos, job letters, and resumes</li>
                                    <li>Designing and pitching an application</li>
                                </ul>
                            </dd>
                            <br></br>
                            <dt><Carat courseID={"engr151"}></Carat> | ENGR 151 | Accelerated Introduction to Computation & Programming | WI22 | A </dt>
                            <dd className="courseData" id="engr151" style={{display: "none"}}>First year course on programming. Topics included:
                                <ul className="courseList">
                                    <li>Data visualization and statistics using MATLAB</li>
                                    <li>Introduction to C++, including I/O, functions, OOP, and randomness</li>
                                </ul>
                            </dd>
                            <br></br>
                            <dt><Carat courseID={"bio172"}></Carat> | BIOLOGY 172 | Introductory Biology: Molecular and Developmental | WI22 | A </dt>
                            <dd className="courseData" id="bio172" style={{display: "none"}}>Introductory course on Biology. Topics included:
                                <ul className="courseList">
                                    <li>The chemistry of proteins, enzymes, carbohydrates, lipids, and cellular structure</li>
                                    <li>DNA replication, repairing, regulation, the central dogma, and mutations</li>
                                    <li>How cells utilize chemical energy</li>
                                    <li>Plant and animal physiology and development</li>
                                </ul>
                            </dd>
                            <br></br>
                            <dt><Carat courseID={"engr100"}></Carat> | ENGR 100 | Introduction to Engineering: Design in the Real World | WI22 | A </dt>
                            <dd className="courseData" id="engr100" style={{display: "none"}}>Introductory engineering course with a focus on design. Topics included:
                                <ul className="courseList">
                                    <li>Design and market a new product, from ideation to fabrication</li>
                                    <li>Introduction to CAD tools and 3D printing</li>
                                    <li>Following the design process and its tenets</li>
                                </ul>
                            </dd>
                            <br></br>
                            <dt><Carat courseID={"mse250"}></Carat> | MATSCIE 250 | Principles of Engineering Materials | WI22 | B </dt>
                            <dd className="courseData" id="mse250" style={{display: "none"}}>Introductory course on engineering materials. Topics included:
                                <ul className="courseList">
                                    <li>Differing types of materials, including polymers, composites, ceramics, and others</li>
                                    <li>Mechanics of materials</li>
                                    <li>Electrical properties of materials with an introduction to semiconductors</li>
                                </ul>
                            </dd>
                            <br></br>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    )
}