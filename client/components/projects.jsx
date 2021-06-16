import React from 'react';
import ProjectCard from './projectcard.jsx';

export default function Projects({ showModule }) {
    return (
        <div className="projects-container">
            <ProjectCard id={"card1"}
            title={"Reset"}
            description={`Full-stack, dynamic, single-page React app that allows users to effortlessly set, track, and achieve their meditation goals through an intuitive front-end UI`}
            techUsed={['React', 'Redux', 'HTML|CSS', 'SCSS', 'NODE.JS|EXPRESS', 'MYSQL']}
            showModule={showModule}
            />
            <ProjectCard id={"card2"}
            title={"The Success Factory"}
            description={"Sample Description of what this project is and the highlights of what I did. Extra text to see how it will look in the card."}
            techUsed={['React', 'Redux', 'HTML|CSS', 'SCSS']}
            showModule={showModule}
            />
            <ProjectCard id={"card3"}
            title={"Cryptocurrency Charting Tool"}
            description={"Sample Description of what this project is and the highlights of what I did. Extra text to see how it will look in the card."}
            techUsed={['React', 'Redux', 'HTML|CSS', 'SCSS']}
            showModule={showModule}
            />
            <ProjectCard id={"card4"}
            title={"Roomshare 2.0"}
            description={"Sample Description of what this project is and the highlights of what I did. Extra text to see how it will look in the card."}
            techUsed={['React', 'Redux', 'HTML|CSS', 'SCSS']}
            showModule={showModule}
            />
        </div>
    )
};