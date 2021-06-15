import React from 'react';
import ProjectCard from './projectcard.jsx';

export default function Projects() {
    return (
        <div className="projects-container">
            <ProjectCard id={"card1"}
            title={"Example Title"}
            description={"Sample Description of what this project is and the highlights of what I did. Extra text to see how it will look in the card."}
            techUsed={['React', 'Redux', 'HTML|CSS', 'SCSS']}
            />
        </div>
    )
};