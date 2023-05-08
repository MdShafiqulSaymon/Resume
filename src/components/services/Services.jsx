import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
	return (
		<section id="services">
			<h5>What I Offer</h5>
			<h2>Services</h2>
			<div className="container services_container">
				{/* UI/UX part */}
				<article className="services">
					<div className="services_head">
						<h3>UI/UX Design</h3>
					</div>
					<ul className="services_list">
						<li>
							<BiCheck className="services_list-icon" />
							<p>Lorem isndfkjlkjkljsdfjlsdkjfjl</p>
						</li>
						<li>
							<BiCheck className="services_list-icon" />
							<p>Lorem isndfkjlkjkljsdfjlsdkjfjl</p>
						</li>
						<li>
							<BiCheck className="services_list-icon" />
							<p>Lorem isndfkjlkjkljsdfjlsdkjfjl</p>
						</li>
						<li>
							<BiCheck className="services_list-icon" />
							<p>Lorem isndfkjlkjkljsdfjlsdkjfjl</p>
						</li>
					</ul>
				</article>
				{/* Web Dev */}
				<article className="services">
					<div className="services_head">
						<h3>Web Development</h3>
					</div>
					<ul className="services_list">
						<li>
							<BiCheck className="services_list-icon" />
							<p>Lorem isndfkjlkjkljsdfjlsdkjfjl</p>
						</li>
						<li>
							<BiCheck className="services_list-icon" />
							<p>Lorem isndfkjlkjkljsdfjlsdkjfjl</p>
						</li>
						<li>
							<BiCheck className="services_list-icon" />
							<p>Lorem isndfkjlkjkljsdfjlsdkjfjl</p>
						</li>
						<li>
							<BiCheck className="services_list-icon" />
							<p>Lorem isndfkjlkjkljsdfjlsdkjfjl</p>
						</li>
					</ul>
				</article>
				{/* Contant Creations */}
				<article className="services">
					<div className="services_head">
						<h3>Back-End Technology</h3>
					</div>
					<ul className="services_list">
						<li>
							<BiCheck className="services_list-icon" />
							<p>Lorem isndfkjlkjkljsdfjlsdkjfjl</p>
						</li>
						<li>
							<BiCheck className="services_list-icon" />
							<p>Lorem isndfkjlkjkljsdfjlsdkjfjl</p>
						</li>
						<li>
							<BiCheck className="services_list-icon" />
							<p>Lorem isndfkjlkjkljsdfjlsdkjfjl</p>
						</li>
						<li>
							<BiCheck className="services_list-icon" />
							<p>Lorem isndfkjlkjkljsdfjlsdkjfjl</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
};

export default Services;
