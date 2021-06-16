import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Skew1 from './components/skew1.jsx';
import Skew2 from './components/skew2.jsx';
import Skew3 from './components/skew3.jsx';
import Skew4 from './components/skew4.jsx';
import Skew5 from './components/skew5.jsx';
import ResetGiphy from './components/resetgiphy.jsx';
import SuccessFactoryGiphy from './components/successfactorygiphy.jsx';
import CryptoCurrencyGiphy from './components/cryptocurrencygiphy.jsx';
import RoomShareGiphy from './components/roomsharegiphy.jsx';
import Module from './components/module.jsx';

const names = {
    'button-card1': 'reset',
    'button-card2': 'theSuccessFactory',
    'button-card3': 'cryptoCurrencyChartingTool',
    'button-card4': 'roomShare2.0'
};

const sources = {
    'reset': 'https://github.com/bettergrammer/rpt19-mvp-starter',
    'theSuccessFactory': 'https://github.com/bettergrammer/TheSuccessFactory',
    'cryptoCurrencyChartingTool': 'https://github.com/bettergrammer/BCC',
    'roomShare2.0': 'https://github.com/bettergrammer/rpt19-front-end-capstone'
}

function App() {

    const [showModuleBool, setShowModuleBool] = useState(false);
    const [currentProject, setCurrentProject] = useState({name:'reset', source:'https://github.com/bettergrammer/rpt19-mvp-starter'});

    const showModule = (e) => {
        let id = e.target.id;
        let name = names[id];
        let source = sources[name];

        let project = {
            name,
            source
        };
        setShowModuleBool(true);
        setCurrentProject(project);
    };

    const removeModule = (e) => {
        setShowModuleBool(false);
    }

    return (
        <div className="AppContainer">
            <Skew1 />
            <Skew2 />
            <Skew3 />
            <Skew4 showModule={showModule}/>
            {showModuleBool ? <Module project={currentProject} removeModule={removeModule}/> : null}
            <Skew5 />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('app'));