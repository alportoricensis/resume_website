"use client";

import React from "react";
import Image from 'next/image';


export default function Skills() {
    return (
        <section id="Skills">
            <div className="aboutMeContainer">
                <h2>
                    Skills
                </h2>
                    <h3>
                        Programming Languages
                    </h3>
                    <div className="skillsContainer">
                        <div className="skill">
                            <Image className="logoPicture" height={50} width={50} src="/C++_logo.png" alt="C/C++">
                            </Image>
                            <h4>C/C++</h4>
                        </div>
                        <div className="skill">
                            <Image className="logoPicture" height={50} width={50} src="/pythonlogo.png" alt="Python">
                            </Image>
                            <h4>Python</h4>
                        </div>
                        <div className="skill">
                            <Image className="logoPicture" height={50} width={50} src="/javalogo.png" alt="Java">
                            </Image>
                            <h4>Java</h4>
                        </div>
                        <div className="skill">
                            <Image className="logoPicture" height={50} width={50} src="/jslogo.png" alt="JavaScript">
                            </Image>
                            <h4>JavaScript</h4>
                        </div>
                        <div className="skill">
                            <Image className="logoPicture" height={50} width={50} src="/matlablogo.png" alt="MATLAB">
                            </Image>
                            <h4>MATLAB</h4>
                        </div>
                    </div>
                    <h3>
                        Tools & Frameworks
                    </h3>
                    <div className="skillsContainer">
                        <div className="skill">
                            <Image className="logoPicture" height={50} width={50} src="/html5logo.png" alt="HTML5">
                            </Image>
                            <h4>HTML</h4>
                        </div>
                        <div className="skill">
                            <Image className="logoPicture" height={50} width={50} src="/csslogo.png" alt="css">
                            </Image>
                            <h4>CSS</h4>
                        </div>
                        <div className="skill">
                            <Image className="logoPicture" height={50} width={50} src="/reactlogo.png" alt="React">
                            </Image>
                            <h4>React</h4>
                        </div>
                        <div className="skill">
                            <Image className="logoPicture" height={50} width={50} src="/giticon.png" alt="Git">
                            </Image>
                            <h4>Git</h4>
                        </div>
                        <div className="skill">
                            <Image className="logoPicture" height={50} width={50} src="/sqllogo.png" alt="SQL">
                            </Image>
                            <h4>SQL</h4>
                        </div>                        
                    </div>
            </div>
        </section>
    )
}