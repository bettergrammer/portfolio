import React from 'react';
import Projects from './projects.jsx';

export default function Skew4({ showModule }) {
    return (
        <div className="wrapper">
            <div id="skew4" className="cus-div">
                <div className="content">
                    <h3>Project Portfolio</h3>
                    <Projects showModule={showModule}/>
                </div>
            </div>
        </div>
    )
};