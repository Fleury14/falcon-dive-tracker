import React, { useState } from 'react';
import { KITracker, LocationTracker } from './components';
import parseAvailable from './parse-available';
import { themes } from './data'

import './App.css';

function App() {

  //establish theme
  const [theme, setTheme] = useState('dark');
  const themeObj = themes[theme]; 

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
  const toggleKI = (key) => {
    if (KI[key] === undefined) return;
    const newKIState = KI;
    newKIState[key] = !newKIState[key];
    setKI(newKIState);
    setAvailable(parseAvailable({ KI }))
  }

  // establish default location checks state (should include available and checked)
  const DEFAULT_LOCATIONS_STATE = {
    mistCave: false,
    damcyan: false,
    waterfall: false,
    antlion: false,
    fabulDefense: false,
    hobs: false,
    ordeals: false,
    baronInn: false,
    mistVillage: false,
    kaipoInn: false,
    kaipoBed: false,
    baronCastle: false,
    baronOdin: false,
    magnes: false,
    zot: false,
    adamant: false,
    dwarf: false,
    babilTop: false,
    babilCannon: false,
    sealed: false,
    feymarchQueen: false,
    feymarchKing: false,
    sylph: false,
    bahamut: false,
    murasame: false,
    crystalSword: false,
    whiteSpear: false,
    ribbon: false,
    masamune: false,
    giant: false,
  };

  const [locations, setLocations] = useState(DEFAULT_LOCATIONS_STATE);
  const [available, setAvailable] = useState(parseAvailable({ KI: DEFAULT_KEY_ITEM_STATE })) // needs available function
  
  // handler for toggling location is checks
  const toggleLocation = (key) => {
    if (locations[key] === undefined) return;
    const newLocState = KI;
    newLocState[key] = !newLocState[key];
    setLocations(newLocState);
  }

  // side effect to adjust availability on every KI adjustment (or not?)

  // render KI and location components
  return (
    <div style={{ backgroundColor: themeObj.bg, color: theme.fg, minHeight: '100vh' }}>
      <KITracker KI={KI} onToggle={(key) => toggleKI(key)} theme={themeObj} />
      <LocationTracker available={available} locations={locations} onToggle={(key) => toggleLocation(key)} theme={themeObj}/>
      
    </div>
  );
}

export default App;
