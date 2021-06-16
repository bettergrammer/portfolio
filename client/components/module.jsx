import React from 'react';

export default function Module({ project, removeModule }) {
    return (
        <div className="module">
            <div className="close-module" onClick={removeModule}>x</div>
        </div>
    )
};