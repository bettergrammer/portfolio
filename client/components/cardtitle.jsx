import React from 'react';

export default function CardTitle({ id, title }) {
    return (
        <div className="project-card-title">
            <h2>{title}</h2>
        </div>
    );
};