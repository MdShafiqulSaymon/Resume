import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About ME</h2>
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="" />
					</div>
				</div>
				<div className="about__contant">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icons" />
							<h5>Experience</h5>
							<small>2+ Years Working</small>
						</article>
						<article className="about__card">
							<FiUsers className="about__icons" />
							<h5>Clients</h5>
							<small>10+ WorldWide</small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className="about__icons" />
							<h5>Projects</h5>
							<small>20+ Completed Projects</small>
						</article>
					</div>
					<p>
						"I'm Md. Shafiqul (Mr. Saymon) Hasan, a passionate Microservice and DevOps enthusiast with a strong background in Kubernetes and Backend Engineering. I specialize in Node.js and have a robust experience in Full Stack Engineering. I thrive in solving complex problems through competitive programming and am dedicated to leveraging my skills to build scalable and efficient systems. Welcome to my portfolio!.
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
