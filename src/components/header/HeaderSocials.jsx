import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
const HeaderSocials = () => {
	return (
		<div className="header_socials">
			<a
				href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
				target="_blank"
				rel="noreferrer"
			>
				<BsLinkedin className="icon" />
			</a>
			<a
				href="https://github.com/MdShafiqulSaymon"
				target="blank"
				rel="noreferrer"
			>
				<FaGithub className="icon" />
			</a>
			<a href="https://dribble.com" target="_blank" rel="noreferrer">
				<FiDribbble className="icon" />
			</a>
		</div>
	);
};

export default HeaderSocials;
