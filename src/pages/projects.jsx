import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({
            duration: 1200, // Animation duration in milliseconds
        });
    }, []);

    const currentSEO = SEO.find((item) => item.page === "projects");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Projects | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet>

            <div className="page-content">
                <NavBar active="projects" />
                <div className="content-wrapper" data-aos="fade-in">
                    <div className="projects-logo-container">
                        <div className="projects-logo">
                            <Logo width={46} />
                        </div>
                    </div>
                    <div className="projects-container">
                        <div className="title projects-title">
                            Personal Projects
                        </div>

                        <div className="subtitle projects-subtitle">
                            I've worked on a variety of projects over the years. Some took hours and others took months. Some were done for fun and others for class. Here are a few of them.
                        </div>

                        <div className="projects-list">
                            <AllProjects />
                        </div>
                    </div>
                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Projects;
