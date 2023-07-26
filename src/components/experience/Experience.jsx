import React from "react";
import "./experience.css";
import { AiFillCalendar } from "react-icons/ai";
const Experience = () => {
	return (
		<section className="education show-animate" id="experience">
			<h2 className="heading">
				My <span>Journey</span>
				<span className="animate scroll"></span>
			</h2>

			<div className="education-row">
				<div className="education-column">
					<h3 className="title">
						Education<span className="animate scroll"></span>
					</h3>

					<div className="education-box">
						<div className="education-content">
							<div className="content">
								<div className="year">
									<AiFillCalendar className="edu-icon" />
									2020-Present
								</div>
								<h3>B.Sc. in CSE - CUET</h3>
								<p>
									I am pursuing Computer Science &amp; Engineering Degree.
									<br />
									Activities and societies: CUET Computer Club.
								</p>
							</div>
						</div>
						<div className="education-content">
							<div className="content">
								<div className="year">
									<AiFillCalendar className="edu-icon" />
									2017-2019
								</div>
								<h3>HSC - Uttara Residential School & College</h3>
								<p>
									<span>Grade: </span>5.00 out of 5.00
								</p>
							</div>
						</div>
						<div className="education-content">
							<div className="content">
								<div className="year">
									<AiFillCalendar className="edu-icon" />
									2012-2017
								</div>
								<h3>SSC - Ratnopur Secondary School</h3>
								<p>
									<span>Grade: </span>5.00 out of 5.00
								</p>
							</div>
						</div>
						<span className="animate scroll"></span>
					</div>
				</div>

				<div className="education-column">
					<h3 className="title">
						Experience<span className="animate scroll"></span>
					</h3>

					<div className="education-box">
						<div className="education-content">
							<div className="content">
								<div className="year">
									<AiFillCalendar className="edu-icon" />
									2023-(3 month Internship)
								</div>
								<h3>Front-End Developer - The Tork</h3>
								<p>
									3-month Frontend React Developer internship at The Tork,
									contributing to the creation of dynamic web applications with
									a focus on user-friendly interfaces and efficient state
									management.
								</p>
								<div className="know">
									<a
										href="https://github.com/MdShafiqulSaymon"
										target="_blank"
										rel="noreferrer"
									>
										Know More
									</a>
								</div>
							</div>
						</div>
						<div className="education-content">
							<div className="content">
								<div className="year">
									<AiFillCalendar className="edu-icon" />
									2020-Present
								</div>
								<h3>Competitive Programmar</h3>
								<p>
									Highly skilled Competitive Programmer adept at devising
									efficient algorithms and data structures to tackle challenging
									coding problems, delivering optimal solutions under time
									constraints. <br /> Accomplished Competitive Programmer with a
									track record of solving 2000+ complex problems and
									participating in 150+ coding contests, consistently achieving
									commendable ratings.
								</p>
								<div className="know">
									<a
										href="https://www.stopstalk.com/user/profile/MdShafiqul_saymon"
										target="_blank"
									>
										Know More
									</a>
								</div>
							</div>
						</div>

						<span className="animate scroll"></span>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Experience;
