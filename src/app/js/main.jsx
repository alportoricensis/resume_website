import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Title from "./title";
import Aboutme from "./aboutme";
import Skills from "./skills";
import Academics from "./academics";
import Projects from "./projects";
import Experience from "./experience";
import Gallery from "./gallery";


const root = createRoot(document.getElementById("reactEntry"));


root.render(
  <StrictMode>
      <Title></Title>
      <Aboutme></Aboutme>
      <Academics></Academics>
      <Skills></Skills>
      <Projects></Projects>
      <Experience></Experience>
  </StrictMode>
);
