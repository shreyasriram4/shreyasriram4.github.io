import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
    const { logos, title, description, linkText, link, img } = props;

    return (
        <React.Fragment>
            <div className="project">
                <Link to={link}>
                    <div className="project-container">
                        <img className="project-img" src={img}>

                        </img>
                        <div className="project-logo-container">
                            {logos.map((logo, index) => (
                                <div key={index} className="project-logo">
                                    <img src={logo} alt={`Logo ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                        <div className="project-title">{title}</div>
                        <div className="project-description">{description}</div>
                        <div className="project-link">
                            <div className="project-link-icon">
                                <FontAwesomeIcon icon={faLink} />
                            </div>
                            <div className="project-link-text">{linkText}</div>
                        </div>
                    </div>
                </Link>
            </div>
        </React.Fragment>
    );
};

export default Project;
