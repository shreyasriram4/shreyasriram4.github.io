import React, { useEffect } from "react";
import { faBriefcase, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import mghIcon from '../../images/mgh.png';
import cornellIcon from '../../images/cornell.png';
import hpIcon from '../../images/hp.png';
import govtechIcon from '../../images/govtech.png';
import crescoIcon from '../../images/cresco.png';
import nusIcon from '../../images/nus.png';
import "./styles/works.css";

// Work and Education Descriptions
const workDescriptions = [
    {
        image: mghIcon,
        title: 'Massachusetts General Hospital',
        subtitle: 'Data Science Intern',
        duration: 'June 2024 - Present',
		description: 'Pioneered the development of stability metrics for machine learning models in clinical settings, particularly radiology. Led empirical experimentation with hundreds of models, and formulated and proved mathematical hypotheses.'
    },
    {
        image: cornellIcon,
        title: 'Cornell University',
        subtitle: 'Graduate Research Assistant',
        duration: 'January 2024 - Present',
		description: 'Implemented Natural Language Processing and Geospatial Data Analytics using Python, QGIS and Tableau to analyze NYC census and 311 data, exploring trends in gentrification through interactive data visualizations.'
    },
    {
        image: hpIcon,
        title: 'HP',
        subtitle: 'Data Science Intern',
        duration: 'January 2023 - May 2023',
		description: "Orchestrated end-to-end development and deployment of a Python and SQL data analytics module to automate statistical analysis in ink manufacturing. This module saves company tens of thousands of man-hours in building dashboards for data-driven decision-making."
    },
    {
        image: govtechIcon,
        title: 'GovTech Singapore',
        subtitle: 'Data Science Intern',
        duration: 'July 2022 - December 2022',
		description: "Pioneered, built and launched a web application that harnessed transformer Natural Language Processing algorithms to cluster and rank news articles with a classification accuracy of up to 90%. Web application speeds up clients' top news identification by 30 minutes a day."
    },
    {
        image: crescoIcon,
        title: 'CrescoData',
        subtitle: 'Data Science Intern',
        duration: 'March 2021 - July 2021',
		description: 'Leveraged Natural Language Processing to independently build a Machine Learning model that automates categorization of products using Python. Model saves clients hundreds of hours in categorizing products with an accuracy of 75%.'
    }
];

const educationDescriptions = [
    {
        image: cornellIcon,
        title: 'Cornell University',
        subtitle: 'Master of Science in Information Systems',
        duration: 'August 2023 - Present',
		description: 'GPA: 3.96/4.0 (Merit Scholarship Award Recipient)'
    },
    {
        image: nusIcon,
        title: 'National University of Singapore',
        subtitle: 'Bachelor of Science in Data Science and Analytics',
        duration: 'August 2019 - May 2023',
		description: 'Grade Classification: Honors (Highest Distinction)'
    }
];

const Works = () => {

    return (
        <div>
            <div className="works">
                <h2 className="section-title">
                    <FontAwesomeIcon icon={faBriefcase} />
                </h2>
                <div className="works-body">
                    {workDescriptions.map((work, index) => (
                        <div className="work" key={index}>
                            <img src={work.image} alt={work.title} className="work-image" />
                            <div className="work-details">
                                <div className="work-title">{work.title}</div>
                                <div className="work-subtitle">{work.subtitle}</div>
                                <div className="work-duration">{work.duration}</div>
                                
                                <div className="work-desc">{work.description}</div>
                                <div className='work-read-more'>Read more...</div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="works padding-top" data-aos="fade-in">
                <h2 className="section-title">
                    <FontAwesomeIcon icon={faBookOpen} />
                </h2>
                <div className="edu-body">
                    {educationDescriptions.map((edu, index) => (
                        <div className="work" key={index}>
                            <img src={edu.image} alt={edu.title} className="work-image" />
                            <div className="work-details">
                                <div className="work-title">{edu.title}</div>
                                <div className="work-subtitle">{edu.subtitle}</div>
                                <div className="work-duration">{edu.duration}</div>
                                
                                <div className="work-desc">{edu.description}</div>
                                <div className='work-read-more'>Read more...</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Works;