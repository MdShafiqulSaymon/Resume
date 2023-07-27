import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
const Footer = () => {
	return (
		<footer>
			<a href="#home" className="footer__logo">
				SAYMON'S TEAM
			</a>
			<ul className="permalinks">
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#services">Services</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
			<div className="footer__socials">
				<a
					href="https://www.facebook.com/profile.php?id=100016532340309"
					target="blank"
				>
					<FaFacebookF />
				</a>
				<a href="https://www.instagram.com/saymon4247/" target="blank">
					<FiInstagram />
				</a>
				<a href="https://twitter.com/Shafiqul_Saymon" target="blank">
					<IoLogoTwitter />
				</a>
			</div>
			<div className="footer__copyright">
				<small>&copy;SAYMON'S TEAM . All Rights reserved</small>
			</div>
		</footer>
	);
};

export default Footer;
