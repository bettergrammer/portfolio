import React from 'react';
import CardTitle from './cardtitle.jsx';
import CardDescription from './carddescription.jsx';
import CardTechUsed from './cardtechused.jsx';

export default function ProjectCard({ id, title, description, techUsed = [], showModule }) {
    return (
        <div id={id} className="project-card-container">
            <CardTitle title={title} />
            <CardDescription description={description} />
            <CardTechUsed techUsed={techUsed} />
            <button type="button" id={`button-${id}`} className="demo-button" onClick={showModule}>DEMO</button>
        </div>
    )
};