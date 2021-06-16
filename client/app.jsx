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

const cards = {
    'button-card1': 'reset',
    'button-card2': 'theSuccessFactory',
    'button-card3': 'cryptoCurrencyChartingTool',
    'button-card4': 'roomShare2.0'
};

function App() {
    const showModule = (e) => {
        let id = e.target.id;
        console.log('id', id);
        console.log('project', cards[id]);
    };
    return (
        <div className="AppContainer">
            <Skew1 />
            <Skew2 />
            <Skew3 />
            <Skew4 showModule={showModule}/>
            <Skew5 />
            <SuccessFactoryGiphy/>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('app'));