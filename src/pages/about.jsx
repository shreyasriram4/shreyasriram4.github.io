import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";
import aboutImg from "../images/homepage.jpg";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration in milliseconds
        });
    }, []);

    // Split the description into paragraphs
    const paragraphs = INFO.about.description.split('\n').map((para, index) => (
        <p key={index} className="paragraph-indent">
            {para.trim()}
        </p>
    ));

    return (
        <div className="about-container" data-aos="fade-in">

            <div className="about-main">
                <div className="about-right-side">

                    <div className="subtitle about-subtitle">
                        {paragraphs}
                    </div>
                </div>

                <div className="about-left-side">
                    <div className="about-image-container">
                        <div className="about-image-wrapper">
                            <img
                                src={aboutImg}
                                alt="about"
                                className="about-image"
                            />
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default About;


