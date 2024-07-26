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
		slidesToShow: 3,
		slidesToScroll: 3,
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