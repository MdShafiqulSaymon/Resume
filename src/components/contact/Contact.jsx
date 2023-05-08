import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_litf1ru",
				"template_r9s6vmx",
				form.current,
				"ddhQTzXC6Y_1KpvEn"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};
	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact</h2>
			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail className="contact__option-icon" />
						<h4>Email</h4>
						<h5>mdshafiqulsaymon@gmail.com</h5>
						<a href="mailto:mdshafiqulsaymon@gmail.com">Send a Messege</a>
					</article>
					<article className="contact__option">
						<RiMessengerLine className="contact__option-icon" />
						<h4>Messenger</h4>
						<h5>Anything you want me</h5>
						<a
							href="https://m.me/profile.php?id=100016532340309"
							target="blank"
						>
							Send a Messege
						</a>
					</article>
					<article className="contact__option">
						<BsWhatsapp className="contact__option-icon" />
						<h4>WhatsApp</h4>
						<h5>+8801888326497</h5>
						<a href="https://wa.me/+8801888326497" target="blank">
							Send a Messege
						</a>
					</article>
				</div>

				<form ref={form} onSubmit={sendEmail} name="contact__form">
					<input
						type="text"
						name="name"
						placeholder="Your Full Name"
						required
					/>
					<input type="email" name="email" placeholder="Your Email" />
					<textarea
						name="messege"
						id=""
						rows="7"
						placeholder="Your Messege"
					></textarea>
					<button type="submit" className="btn btn-primary">
						Send a Messege
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
