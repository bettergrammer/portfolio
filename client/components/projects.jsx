import React from 'react';
import ProjectCard from './projectcard.jsx';

export default function Projects() {
    return (
        <div className="projects-container">
            <ProjectCard id={"card1"}
            title={"Reset"}
            description={"Sample Description of what this project is and the highlights of what I did. Extra text to see how it will look in the card."}
            techUsed={['React', 'Redux', 'HTML|CSS', 'SCSS']}
            />
            <ProjectCard id={"card2"}
            title={"The Success Factory"}
            description={"Sample Description of what this project is and the highlights of what I did. Extra text to see how it will look in the card."}
            techUsed={['React', 'Redux', 'HTML|CSS', 'SCSS']}
            />
            <ProjectCard id={"card3"}
            title={"Cryptocurrency Charting Tool"}
            description={"Sample Description of what this project is and the highlights of what I did. Extra text to see how it will look in the card."}
            techUsed={['React', 'Redux', 'HTML|CSS', 'SCSS']}
            />
            <ProjectCard id={"card4"}
            title={"Roomshare 2.0"}
            description={"Sample Description of what this project is and the highlights of what I did. Extra text to see how it will look in the card."}
            techUsed={['React', 'Redux', 'HTML|CSS', 'SCSS']}
            />
        </div>
    )
};