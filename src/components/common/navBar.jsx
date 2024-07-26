import React from "react";
import { Link } from "react-scroll";
import "./styles/navBar.css";

const NavBar = (props) => {
    const { active } = props;

    return (
        <React.Fragment>
            <div className="nav-container">
                <nav className="navbar">
                    <div className="nav-background">
                        <ul className="nav-list">
                            <li className={active === "home" ? "nav-item active" : "nav-item"}>
                                <Link to="home" smooth={true} duration={500}>Home</Link>
                            </li>
                            <li className={active === "about" ? "nav-item active" : "nav-item"}>
                                <Link to="about" smooth={true} duration={500}>About</Link>
                            </li>
							<li className={active === "works" ? "nav-item active" : "nav-item"}>
                                <Link to="works" smooth={true} duration={500}>Experiences</Link>
                            </li>
                            <li className={active === "projects" ? "nav-item active" : "nav-item"}>
                                <Link to="projects" smooth={true} duration={500}>Projects</Link>
                            </li>
							<li className={active === "skills" ? "nav-item active" : "nav-item"}>
                                <Link to="skills" smooth={true} duration={500}>Skills</Link>
                            </li>
                            <li className={active === "articles" ? "nav-item active" : "nav-item"}>
                                <Link to="articles" smooth={true} duration={500}>Articles</Link>
                            </li>
							<li className={active === "contact" ? "nav-item active" : "nav-item"}>
                                <Link to="contact" smooth={true} duration={500}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default NavBar;
