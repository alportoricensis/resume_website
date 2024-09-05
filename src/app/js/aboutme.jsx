"use client";

import React from "react";
import Image from 'next/image';


export default function Aboutme() {
    return (
        <section id="Aboutme">
            <div className="aboutMeContainer">
                <h2>
                    About Me
                </h2>
                <div className="aboutMe">
                    <Image className="aboutMePicture" width={250} height={250} src="/AboutMePicture.jpeg" alt="AboutMe">
                    </Image>
                    <div>
                        <p className="paragraph1">
                            I'm Alex Nunez-Carrasquillo, a Senior majoring in Computer Science and 
                            Minoring in Mathematics at The University of Michigan, Ann Arbor. Originally from Canóvanas, Puerto Rico, I spend my free time 
                            biking around the Border-to-Border trail, kayaking down the Huron River, building in Cities Skylines, tending to my houseplants, 
                            or growing crops in Stardew Valley. I visit my home occasionally, where I soak in the sea salt on the beach and visit my family. However, my 
                            true passion has always been computers, and anything related to them - from scripting in LUA on Roblox as a child, to pursuing a degree in 
                            Computer Science as an adult, I hope to one day apply my passion to help make people's quality of life better. My skills, experience, 
                            and passion would make me a perfect fit for your team!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}