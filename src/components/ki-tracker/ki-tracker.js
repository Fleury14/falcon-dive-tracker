import React from 'react';
import { keyItems } from '../../data';
import './ki-tracker.css';

const KITracker = ({ KI, onToggle }) => {

    // debug
    console.log('ki', KI);

    // loop through KI and display each as clickable
    // onclick should call click handler with the appropriate KI to toggle
    return (
        <>
            {keyItems.map(item => {
                return <button className={KI[item.slug] === true ? 'has-item' : 'does-not-have-item'} onClick={() => onToggle(item.slug)}>{item.title}</button>
            })}
        </>
    )
}

export default KITracker;