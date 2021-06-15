import React from 'react';
import CardTitle from './cardtitle.jsx';
import CardDescription from './carddescription.jsx';
import CardTechUsed from './cardtechused.jsx';

export default function ProjectCard({ id, title, description, techUsed = [] }) {
    return (
        <div id={id} className="project-card-container">
            <CardTitle title={`${id}-title`, title} />
            <CardDescription description={description} />
            <CardTechUsed techUsed={techUsed} />
            <button type="button" className="demo-button">DEMO</button>
        </div>
    )
};