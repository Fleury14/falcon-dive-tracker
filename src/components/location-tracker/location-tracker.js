import React from 'react';
import { KIChecks } from '../../data';

const LocationTracker = ({ available, locations, onToggle }) => {
    // debug
    console.log('available', available);
    console.log('locations', locations);


    // loop through available checks using available prop, use the location object to determine if its been check
    // each item should have the respective key passed in the toggle handler
    return (
        <>
        {KIChecks.map(check => {
            if (available[check.slug] === true) return <button key={`location-${check.slug}`} className={locations[check.slug] === true ? 'spot-complete' : 'spot-open'}>{check.name}</button>
            else return <span className="not-available">{check.name}</span>
        })}
        </>
    )
}

export default LocationTracker;