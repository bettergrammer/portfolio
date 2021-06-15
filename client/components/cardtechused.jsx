import React from 'react';

export default function CardTechUsed({ techUsed }) {
    return (
        <div className="project-card-tech-used">
            <ul>
                {techUsed.map((tech, i) => {
                    return (
                        <li key={i} className={"tech-li"}>{`- ${tech}`}</li>
                    )
                })}
            </ul>
        </div>
    );
};