import React from 'react';
import CardTitle from './cardtitle.jsx';
import CardDescription from './carddescription.jsx';
import CardTechUsed from './cardtechused.jsx';

export default function ProjectCard({ id, title, description, techUsed = [] }) {
    return (
        <div className="project-card-container">
            <CardTitle title={id, title} />
            <CardDescription description={description} />
            <CardTechUsed techUsed={techUsed} />
            <button type="button">DEMO</button>
        </div>
    )
};