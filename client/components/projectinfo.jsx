import React from 'react';

export default function ProjectInfo({ project }) {

    const displayNames = {
        'reset': 'Reset',
        'theSuccessFactory': 'The Success Factory',
        'cryptoCurrencyChartingTool': 'Cryptocurrency Charting Tool',
        'roomShare2.0': 'Roomshare 2.0'
    }
    return (
        <div className="project-info-wrapper">
            <div className="project-name">
                {displayNames[project.name]}
            </div>
            <a href={project.source} target="_blank" rel="noopener noreferrer">Source Code</a>
        </div>
    )
};