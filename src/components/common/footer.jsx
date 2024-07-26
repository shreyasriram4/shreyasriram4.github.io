import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="https://github.com/shreyasriram4">GitHub</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="www.linkedin.com/in/shreyasriram4">LinkedIn</Link>
						</li>
						<li className="footer-nav-link-item">
							<a href="mailto:shreyasriram4@gmail.com">Email</a>

						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2023 Shreya Sriram | All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
