import React from 'react';
import ProjectInfo from './projectinfo.jsx';

export default function Module({ project, removeModule }) {
    return (
        <div className="module">
            <div className="close-module" onClick={removeModule}>x</div>
            <ProjectInfo project={project} />
        </div>
    )
};