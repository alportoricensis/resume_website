import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";


export default function Gallery() {
    return (
        <div className="aboutMeContainer">
            <h2>
                About Me
            </h2>
            <div className="aboutMe">
                <p className="paragraph1">
                    Hello World! It's a pleasure to meet you. I'm Alex Nunez-Carrasquillo, a Senior majoring in Computer Science and 
                    Minoring in Mathematics at The University of Michigan, Ann Arbor. Originally from Canóvanas, Puerto Rico, I spend my free time 
                    biking around the Border-to-Border trail, kayaking down the Huron River, building in Cities Skylines, tending to my houseplants, 
                    or growing crops in Stardew Valley. I visit my home occasionally, where I soak in the sea salt on the beach and visit my family. However, my 
                    true passion has always been computers, and anything related to them - from scripting in LUA on Roblox as a child, to pursuing a degree in 
                    Computer Science as an adult, I hope to one day apply my passion to help make people's quality of life better. My skills, experience, 
                    and passion would make me a perfect fit for your team!
                </p>
                <img className="aboutMePicture" src="/static/images/AboutMePicture.jpeg" alt="AboutMe">
                </img>
            </div>
        </div>
    )
}