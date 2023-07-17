import React from "react";
import "./Skills.css";
const Skills = () => {
	return (
		<div className="skillsSection">
			<section className="skills" id="skills">
				<h2 className="heading">
					My <span>Skills</span>
					<span className="animate scroll"></span>
				</h2>

				<div className="skills-row">
					<div className="skills-column">
						<h3 className="title">
							Coding Skills<span className="animate scroll"></span>
						</h3>

						<div className="skills-box">
							<div className="skills-content">
								<div className="progress">
									<h3>
										C/C++ <span>90%</span>
									</h3>
									<div className="bar">
										<span></span>
									</div>
								</div>

								<div className="progress">
									<h3>
										HTML <span>90%</span>
									</h3>
									<div className="bar">
										<span></span>
									</div>
								</div>

								<div className="progress">
									<h3>
										CSS <span>80%</span>
									</h3>
									<div className="bar">
										<span></span>
									</div>
								</div>

								<div className="progress">
									<h3>
										Javascript <span>70%</span>
									</h3>
									<div className="bar">
										<span></span>
									</div>
								</div>

								<div className="progress">
									<h3>
										Python <span>70%</span>
									</h3>
									<div className="bar">
										<span></span>
									</div>
								</div>

								<div className="progress">
									<h3>
										Java <span>80%</span>
									</h3>
									<div className="bar">
										<span></span>
									</div>
								</div>
								<div className="progress">
									<h3>
										React.js <span>80%</span>
									</h3>
									<div className="bar">
										<span></span>
									</div>
								</div>
								<div className="progress">
									<h3>
										Node.js (Express) <span>60%</span>
									</h3>
									<div className="bar">
										<span></span>
									</div>
								</div>
								<div className="progress">
									<h3>
										SQL <span>80%</span>
									</h3>
									<div className="bar">
										<span></span>
									</div>
								</div>
								<div className="progress">
									<h3>
										MongoDB <span>70%</span>
									</h3>
									<div className="bar">
										<span></span>
									</div>
								</div>
							</div>
							<span className="animate scroll"></span>
						</div>
					</div>

					<div className="skills-column">
						<h3 className="title">
							Professional Skills
							<span className="animate scroll"></span>
						</h3>

						<div className="skills-box">
							<div className="skills-content">
								<div className="progress">
									<h3>
										Front-End Design <span>90%</span>
									</h3>
									<div className="bar">
										<span></span>
									</div>
								</div>

								<div className="progress">
									<h3>
										Backend / Server Side <span>70%</span>
									</h3>
									<div className="bar">
										<span></span>
									</div>
								</div>

								<div className="progress">
									<h3>
										Web Design &amp; Development <span>85%</span>
									</h3>
									<div className="bar">
										<span></span>
									</div>
								</div>

								<div className="progress">
									<h3>
										Microsoft Office <span>80%</span>
									</h3>
									<div className="bar">
										<span></span>
									</div>
								</div>
								<div className="progress">
									<h3>
										Problem Solving in Different Online Judge <span>50%</span>
									</h3>
									<div className="bar">
										<span></span>
									</div>
								</div>
							</div>

							<span className="animate scroll"></span>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Skills;
