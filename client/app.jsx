import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Skew1 from './components/skew1.jsx';
import Skew2 from './components/skew2.jsx';
import Skew3 from './components/skew3.jsx';
import Skew4 from './components/skew4.jsx';
import Skew5 from './components/skew5.jsx';

function App() {
    return (
        <div className="AppContainer">
            <Skew1 />
            <Skew2 />
            <Skew3 />
            <Skew4 />
            <Skew5 />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('app'));