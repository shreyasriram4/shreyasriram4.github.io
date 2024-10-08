import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";
import About from "./about";
import Skills from "../components/homepage/skills";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage = () => {

    const currentSEO = SEO.find((item) => item.page === "home");


    return (
        <div>
            <title>{INFO.main.title}</title>
            <meta name="description" content={currentSEO.description} />
            <meta name="keywords" content={currentSEO.keywords.join(", ")} />

            <div className="page-content">
                <NavBar active="home" />
                <header className="homepage-header" id='home'>
                    <div className="homepage-header-overlay"></div>
                    <div className="homepage-header-content">
                        <h1 className="homepage-title">SHREYA SRIRAM</h1>
                        <p className="homepage-subtitle">
                            Data Scientist
                        </p>
						<p className="homepage-subtitle">
                            NYC
                        </p>
                        <div className="homepage-socials">
                            <a
                                href={INFO.socials.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="homepage-social-icon"
                                />
                            </a>
							<a
                                href={INFO.socials.linkedin}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="homepage-social-icon"
                                />
                            </a>
                            <a
                                href={`mailto:${INFO.main.email}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faMailBulk}
                                    className="homepage-social-icon"
                                />
                            </a>
                        </div>
                    </div>
                </header>
                    <div className="homepage-container">
                    <div className="section" id='about'>
                    <div className="content-wrapper">
					<div className="title-light about-title">
                        {INFO.about.title}
                    </div>
                        <div className="about">
                            <About />
                        </div>
                    </div>
                    </div>
                    <div className='section' id='works' data-aos='fade-in'>
                    <div className="content-wrapper-works">
					<div className="title-dark homepage-works-title">
                        {"My Experiences"}
                    </div>
                        <div className="homepage-works">
                            <Works />
                        </div>
                    </div>
                    </div>
                    
                    <div className="homepage-projects" id='projects' data-aos='fade-in'>
                        <div className="content-wrapper">
					<div className="title-light homepage-projects-title">
                            My Projects
                        </div>

                        <AllProjects />
                    </div>
                    </div>

					<div className="homepage-skills" id='skills' data-aos='fade-in'>
                    <div className="content-wrapper">
					<div className="title-dark homepage-skills-title">
                            My Skills
                        </div>

                        <Skills />
                    </div>
                    </div>
                    <div className="homepage-articles" data-aos='fade-in' id='articles'>
                    <div className="content-wrapper">
                    <div className="title-light homepage-articles-title">
                            My Articles
                        </div>
                        <div>
                            {INFO.articles.map((article, index) => (
                                
                                    <Article
                                        key={(index + 1).toString()}
                                        date={article.date}
                                        title={article.title}
                                        description={article.description}
                                        img={article.img}
                                        link={article.link} />
                            ))}
                        </div>
                        </div>
                        </div>
                        <div className="page-footer" id='contact'>
                        <div className="content-wrapper">
                            <Footer />
                        </div>
                        </div>
                    </div>
                </div>
		</div>
    );
};

export default Homepage;
