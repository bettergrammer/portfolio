import React from 'react';

export default function CardDescription({ description }) {
    return (
        <div className="project-card-description">
            <p>{description}</p>
        </div>
    );
};