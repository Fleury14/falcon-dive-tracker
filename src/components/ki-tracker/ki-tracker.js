import React from 'react';
import { keyItems } from '../../data';

const KITracker = ({ KI, onToggle }) => {

    // debug
    console.log('ki', KI);

    // loop through KI and display each as clickable
    // onclick should call click handler with the appropriate KI to toggle
    return (
        <>
            {keyItems.map(item => {
                return <button onClick={() => onToggle(item.slug)}>{item.title}</button>
            })}
        </>
    )
}

export default KITracker;