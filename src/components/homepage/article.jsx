import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/article.css";

const Article = (props) => {
    const { title, description, date, link, img } = props;

    return (
        <div className="homepage-article">
            <img className="article-image" src={img} alt="Article thumbnail" />
            <div className="homepage-article-content">
                <div className="homepage-article-date">|&nbsp;&nbsp;&nbsp;{date}</div>
                <div className="homepage-article-title">{title}</div>
                <div className="homepage-article-description">{description}</div>
                <div className="homepage-article-link">
                    <Link to={link}>
                        Read article <FontAwesomeIcon style={{ fontSize: "10px" }} icon={faChevronRight} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Article;
