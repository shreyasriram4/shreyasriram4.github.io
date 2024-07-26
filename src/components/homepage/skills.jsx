import React from 'react';
import './styles/skills.css';

// Import your icons here
import pythonIcon from '../../images/python.png';
import pytorchIcon from '../../images/pytorch.png';
import tensorflowIcon from '../../images/tensorflow.png';
import rIcon from '../../images/r.png';
import jsIcon from '../../images/javascript.png';
import tableauIcon from '../../images/tableau.png';
import gitIcon from '../../images/git.png';
import apacheSparkIcon from '../../images/spark.png';
import mysqlIcon from '../../images/mysql.png';
import dockerIcon from '../../images/docker.png';
import reactIcon from '../../images/react.png';
import awsIcon from '../../images/aws.png';
import mlIcon from '../../images/ml.png';
import nlpIcon from '../../images/nlp.png';
import cvIcon from '../../images/cv.jpg';
import dataEngineeringIcon from '../../images/data_engineering.png';
import dataVisualizationIcon from '../../images/data_viz.png';

const skills = [
    { category: 'Languages', skills: [
        { icon: pythonIcon, name: 'Python' },
        { icon: rIcon, name: 'R' },
        { icon: mysqlIcon, name: 'SQL' },
        { icon: jsIcon, name: 'JavaScript' }
    ]},
    { category: 'Frameworks', skills: [
        { icon: pytorchIcon, name: 'PyTorch' },
        { icon: tensorflowIcon, name: 'TensorFlow' },
        { icon: gitIcon, name: 'Git' },
        { icon: apacheSparkIcon, name: 'Apache Spark' },
        { icon: dockerIcon, name: 'Docker' },
        { icon: reactIcon, name: 'React' },
        { icon: awsIcon, name: 'AWS' },
        { icon: tableauIcon, name: 'Tableau' }
    ]},
    { category: 'Domains', skills: [
        { icon: mlIcon, name: 'Machine Learning' },
        { icon: nlpIcon, name: 'Natural Language Processing' },
        { icon: cvIcon, name: 'Computer Vision' },
        { icon: dataEngineeringIcon, name: 'Data Engineering' },
        { icon: dataVisualizationIcon, name: 'Data Visualization' },
    ]}
];

const Skills = () => {
    return (
        <div className="skills-container">
            {skills.map((category, index) => (
                <div key={index} className="skills-category">
                    <h3 className="skills-category-title">{category.category}</h3>
                    <div className="skills-list">
                        {category.skills.map((skill, index) => (
                            <div className="skill" key={index}>
                                <img src={skill.icon} className="skill-icon" alt={skill.name} />
                                <p className="skill-name">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;
