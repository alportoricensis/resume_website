"use client";

import React, { useState, useEffect } from "react";
import Image from 'next/image';

export function TitleText({title_text, delay}) {
    const useTitle = (title_text, speed) => {
        const [titleText, setTitleText] = useState("");

        useEffect(() => {
            let index = titleText.length;
            const renderTime = setInterval(() => {
                if (index < title_text.length) {
                    setTitleText(titleText + title_text.charAt(index));
                    index++;
                } else {
                    clearInterval(renderTime);
                }
            }, speed);

            return () => {
                clearInterval(renderTime);
            }
        }, [titleText, speed]);

        return titleText;
    };

    var speed = 50;
    const titleText = useTitle(title_text, speed);
    return <p className="titleTitle">{titleText}</p>;
};

export default function Title() {
    return (
        <section id="title">
            <div className="titleWrapper">
                <TitleText title_text={"print(\"Hello World!\")\nI'm Alex; Nice to meet you!"}></TitleText>
                <Image priority={true} className="aboutMePicture" width={500} height={500} src="/Headshot.jpeg" alt="AboutMe">
                </Image>
            </div>
        </section>
    )
}