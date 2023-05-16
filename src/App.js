import React, { useState } from 'react';
import { KITracker, LocationTracker } from './components'

import logo from './logo.svg';
import './App.css';

function App() {

  // establish default KI state (all KIs: false)
  const DEFAULT_KEY_ITEM_STATE = {
    bombRing: false,
    kaipoPass: false,
    sandRuby: false,
    baronKey: false,
    twinHarp: false,
    earthCrystal: false,
    magmaRock: false,
    hovercraft: false,
    ratTail: false,
    lugaeKey: false,
    lucaNecklace: false,
    fryingPan: false,
    darkCrystal: false,
    adamant: false,
    legendSword: false,
    pinkTail: false,
  }

  const [KI, setKI] = useState(DEFAULT_KEY_ITEM_STATE);
  
  // handler for adjusting KI state (must also adjust availability of checks)

  // establish default location checks state (should include available and checked)
  
  // handler for toggling location is checks

  // render KI and location components
  return (
    <div className="App">
      <KITracker />
      <LocationTracker />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
