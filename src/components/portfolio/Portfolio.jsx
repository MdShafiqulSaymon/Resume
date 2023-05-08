import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
const data = [
	{
		id: 1,
		image: IMG1,
		title: "Todo List for daily planning",
		github: "https://github.com/MdShafiqulSaymon/TodoList",
		demo: "https://daily-task-apps.netlify.app/",
	},
	{
		id: 2,
		image: IMG2,
		title: "Task Mate to track your day",
		github: "https://github.com/MdShafiqulSaymon/Task-mate-React-App-",
		demo: "https://task-mate-todo-list.netlify.app/",
	},
	{
		id: 3,
		image: IMG3,
		title: "Tik-tac-Toe Game ",
		github: "www.github.com",
		demo: "https://saymons-tic-tac-toe-game.netlify.app/",
	},
	{
		id: 4,
		image: IMG4,
		title: "Muslims Books(Native App)",
		github: "https://github.com/MdShafiqulSaymon/Muslims-Books",
		demo: "https://play.google.com/store/apps/details?id=com.saymon.muslimsbooks&fbclid=IwAR0DjjRgLlfMixv4yQ7zno0mL0OcGf6wF2Re9O-rHRrYG4CSDJCKvc-u8tU",
	},
	{
		id: 5,
		image: IMG5,
		title: "Muslims Books Offline Version(Native App)",
		github: "https://github.com/MdShafiqulSaymon/Muslims-Books-Offline-Version",
		demo: "https://play.google.com/store/apps/details?id=com.saymon.muslimsbooksoffline&fbclid=IwAR1PYAx7XmP61Xs2Uj8Me6KdbElciG6YKvQTna_EN0qRKI8EpYd2TCwKSl0",
	},
	{
		id: 6,
		image: IMG6,
		title: "Simple Calculator",
		github: "https://github.com/MdShafiqulSaymon/Simple-Calculator",
		demo: "https://play.google.com/store/apps/details?id=com.saymon.calculator&fbclid=IwAR1Iqs1tAsyydXQzHtInS1MzpTOyd5TMvIQsQtTr1QGF7pzbsB3FwyxsHN8",
	},
];
const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>MY Recent Work</h5>
			<h2>Portfolio</h2>
			<div className="container portfolio__container">
				{data.map(({ id, image, title, github, demo }) => {
					return (
						<article className="portfolio__item">
							<div className="portfolio__item-image">
								<img src={image} alt={title} />
							</div>
							<h3>{title}</h3>
							<div className="portfolio__item-cta">
								<a href={github} className="btn" target="blank">
									Github
								</a>
								<a href={demo} className="btn btn-primary" target="blank">
									LiveDemo
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
