import React from 'react';
import { KIChecks } from '../../data';
import styled, { ThemeProvider } from 'styled-components';
import './location.css';

const OverworldLocation = styled.div`
    color: ${props => props.theme.over};
`;

const OverworldUncleared = styled.button`
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.over};
    border: none;
    height: 30px;
    width: 100%;
`;

const OverworldCleared = styled.button`
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.over};
    opacity: 0.5;
    border: none;
    height: 30px;
    width: 100%;
`;
const UndergroundLocation = styled.div`
    color: ${props => props.theme.under};
`;
const UndergroundUncleared = styled.button`
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.under};
    border: none;
    height: 30px;
    width: 100%;
`;

const UndergroundCleared = styled.button`
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.under};
    opacity: 0.5;
    border: none;
    height: 30px;
    width: 100%;
`;
const MoonLocation = styled.div`
    color: ${props => props.theme.moon};
`;
const MoonUncleared = styled.button`
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.moon};
    border: none;
    height: 30px;
    width: 100%;
`;

const MoonCleared = styled.button`
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.moon};
    opacity: 0.5;
    border: none;
    height: 30px;
    width: 100%;
`;

const LocationTracker = ({ available, locations, onToggle, theme }) => {
    // debug
    // console.log('available', available);
    // console.log('locations', locations);

    // divide available checks into overworld, underworld, and moon
    const overChecks = KIChecks.filter(check => check.zone === 1 && available[check.slug] === true);
    const underChecks = KIChecks.filter(check => check.zone === 2 && available[check.slug] === true);
    const moonChecks = KIChecks.filter(check => check.zone === 3 && available[check.slug] === true);    


    // loop through available checks using available prop, use the location object to determine if its been check
    // each item should have the respective key passed in the toggle handler
    return (
        <div className='location-checker-container'>
            <ThemeProvider theme={theme}>
                <OverworldLocation>
                    <p>Overworld</p>
                    {overChecks.map(check => locations[check.slug] === true ? 
                    (
                        <ThemeProvider key={`loc-${check.slug}`} theme={theme}>
                            <OverworldCleared onClick={() => onToggle(check.slug)}>{check.name}</OverworldCleared>
                        </ThemeProvider>
                    ) : (
                        <ThemeProvider theme={theme} key={`loc-${check.slug}`}>
                            <OverworldUncleared onClick={() => onToggle(check.slug)}>{check.name}</OverworldUncleared>
                        </ThemeProvider>
                    ))}
                </OverworldLocation>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
                <UndergroundLocation>
                    <p>Underground</p>
                    {underChecks.map(check => locations[check.slug] === true ? 
                    (
                        <ThemeProvider key={`loc-${check.slug}`} theme={theme}>
                            <UndergroundCleared onClick={() => onToggle(check.slug)}>{check.name}</UndergroundCleared>
                        </ThemeProvider>
                    ) : (
                        <ThemeProvider key={`loc-${check.slug}`} theme={theme}>
                            <UndergroundUncleared onClick={() => onToggle(check.slug)}>{check.name}</UndergroundUncleared>
                        </ThemeProvider>
                    ))}
                </UndergroundLocation>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
                <MoonLocation>
                    <p>Moon</p>
                    {moonChecks.map(check => locations[check.slug] === true ? 
                    (
                        <ThemeProvider key={`loc-${check.slug}`} theme={theme}>
                            <MoonCleared onClick={() => onToggle(check.slug)}>{check.name}</MoonCleared>
                        </ThemeProvider>
                    ) : (
                        <ThemeProvider key={`loc-${check.slug}`} theme={theme}>
                            <MoonUncleared onClick={() => onToggle(check.slug)}>{check.name}</MoonUncleared>
                        </ThemeProvider>
                    ))}
                </MoonLocation>
            </ThemeProvider>
        {/* {KIChecks.map(check => {
            if (available[check.slug] === true) return <button key={`location-${check.slug}`} className={locations[check.slug] === true ? 'spot-complete' : 'spot-open'}>{check.name}</button>
            else return <span className="not-available">{check.name}</span>
        })} */}
        </div>
    )
}

export default LocationTracker;