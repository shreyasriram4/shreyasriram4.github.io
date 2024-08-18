import React from "react";
import Slider from "react-slick";
import Project from "./project";
import INFO from "../../data/user";
import "./styles/allProjects.css";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const AllProjects = () => {

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,  // Default to 3 slides visible for larger screens
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,  // iPad landscape size
                settings: {
                    slidesToShow: 2,  // Show 2 slides on iPad size screens
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,  // Phone size
                settings: {
                    slidesToShow: 1,  // Only one project visible at a time
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            }
        ]
    };

    return (
        <div className='all-projects-container'>
            <Slider {...settings}>
                {INFO.projects.map((project, index) => (
                    <div key={index}>
                        <Project
                            logos={project.logos}
                            title={project.title}
                            img={project.img}
                            description={project.description}
                            linkText={project.linkText}
                            link={project.link}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default AllProjects;