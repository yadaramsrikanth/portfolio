import React from "react";
import Header from "../Header";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";
import { BsLinkedin,BsGithub } from "react-icons/bs";
import "./index.css"
const Home=()=><>
<div className="header-container"> <Header/></div>
<div className="Home-container" id="Home"> 
<h1 className="home-heading"><span className="greetings">Hello</span> I am Srikanth Yadaram</h1>
<p className="home-para">-------FULL STACK DEVELOPER</p>
<div className="platform-containers">
<button type="button" className="linkedin-button"><a className="anchor-linkedin" href="https://www.linkedin.com/in/srikanthyadaram/"><BsLinkedin size={32}/></a></button>
<button type="button" className="linkedin-button github-button"><a className="anchor-github" href="https://github.com/yadaramsrikanth"><BsGithub size={32}/></a></button>
</div>
</div>
<div className="about-container" id="About">
   <About/> 
</div>
<div className="about-container" id="Skills">
   <Skills/>
</div>
<div className="about-container" id="Projects">
   <Projects/>
</div>
<div className="contact-container" id="Contact">
   <Contact/>
</div>
</>
export default Home