import Aboutme from './js/aboutme.jsx';
import Title from './js/title.jsx';
import Academics from './js/academics.jsx';
import Skills from './js/skills.jsx';
import Projects from './js/projects.jsx';
import Experience from './js/experience.jsx';
import Image from 'next/image';

export default function Home() {
  return (
    <main className=".main">
          <div className="navMenu">
              <div>
                  <a href="#title" className="titleButton">
                        <Image className="logoPicture" height={50} width={50} src="/logo.png" alt="Alex Nunez-Carrasquillo">
                        </Image>
                  </a>
              </div>
              <div className="navButtons">
                  <a className="navButton" href="#Aboutme">About Me</a>
                  <a className="navButton" href="#Academics">Academics</a>
                  <a className="navButton" href="#Skills">Skills</a>
                  <a className="navButton" href="#Projects">Projects</a>
                  <a className="navButton" href="#Resume">Resume</a>
              </div>
          </div>
          <Title></Title>
          <Aboutme></Aboutme>
          <Academics></Academics>
          <Skills></Skills>
          <Projects></Projects>
          <Experience></Experience>
          <div className="footer">
              <div>
                  <p className="footerText">
                      Contact Information:
                      <br></br>
                      anunezc@umich.edu
                      <br></br>
                      (787) 636-8789
                      <br></br>
                      <a href='https://www.linkedin.com/in/anunezcarrasquillo/'>LinkedIn</a>
                  </p>
              </div>
              <p className="footerText">
                  All trademarks and logos belong to their respective owners; I am not affiliated with any logo holder.
              </p>
          </div>
      </main>
  );
}
