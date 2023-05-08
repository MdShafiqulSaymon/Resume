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
							<small>1+ Years Working</small>
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
						As a web developer, I am passionate about creating visually
						appealing and functional websites that meet the needs of my clients.
						With experience in both front-end and back-end development, I have
						the skills to turn ideas into fully functional websites. <br />
						My journey in web development started with the desire to bring my
						creative vision to life. Over time, I have honed my skills in HTML,
						CSS, JavaScript, and other web development technologies. This has
						allowed me to develop websites that are both beautiful and
						user-friendly.
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
