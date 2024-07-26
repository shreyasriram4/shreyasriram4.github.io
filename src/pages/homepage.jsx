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
    const [stayLogo, setStayLogo] = useState(false);
    const [logoSize, setLogoSize] = useState(250);
    const [oldLogoSize, setOldLogoSize] = useState(80);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            let scroll = Math.round(window.pageYOffset, 2);
            let newLogoSize = 80 - (scroll * 4) / 10;

            if (newLogoSize < oldLogoSize) {
                if (newLogoSize > 40) {
                    setLogoSize(newLogoSize);
                    setOldLogoSize(newLogoSize);
                    setStayLogo(false);
                } else {
                    setStayLogo(true);
                }
            } else {
                setLogoSize(newLogoSize);
                setStayLogo(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [logoSize, oldLogoSize]);

    const currentSEO = SEO.find((item) => item.page === "home");

    const logoStyle = {
        left: '200px',
        display: "flex",
        position: stayLogo ? "fixed" : "relative",
        top: stayLogo ? "3vh" : "auto",
        zIndex: 999,
        border: stayLogo ? "1px solid white" : "none",
        borderRadius: stayLogo ? "50%" : "none",
        boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
    };

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
                <div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>
                    <div className="homepage-container">
                    <div className="section" id='about'>
                    <div className="content-wrapper">
					<div className="title about-title">
                        {INFO.about.title}
                    </div>
                        <div className="about">
                            <About />
                        </div>
                    </div>
                    </div>
                    <div className='section' id='works'>
                    <div className="content-wrapper-works">
					<div className="title homepage-works-title">
                        {"My Experiences"}
                    </div>
                        <div className="homepage-works">
                            <Works />
                        </div>
                    </div>
                    </div>
                    
                    <div className="homepage-projects" id='projects' data-aos='fade-in'>
                        <div className="content-wrapper">
					<div className="title homepage-projects-title">
                            My Projects
                        </div>

                        <AllProjects />
                    </div>
                    </div>

					<div className="homepage-skills" id='skills' data-aos='fade-in'>
                    <div className="content-wrapper">
					<div className="title homepage-skills-title">
                            My Skills
                        </div>

                        <Skills />
                    </div>
                    </div>
                    <div className="homepage-articles" data-aos='fade-in' id='articles'>
                    <div className="content-wrapper">
                    <div className="title homepage-articles-title">
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
