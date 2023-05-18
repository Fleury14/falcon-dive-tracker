import React from 'react';
import { keyItems } from '../../data';
import styled, { ThemeProvider } from 'styled-components';
import './ki-tracker.css';

const KITracker = ({ KI, onToggle, theme }) => {

    // debug
    console.log('ki', KI);
    console.log('theme', theme)

    // CSS can still be used for the layout
    // styled inactive KI
    const InactiveKeyItem = styled.button`
        background-color: ${props => props.theme.bg};
        color: ${props => props.theme.fg};
        border: 2px solid ${props => props.theme.fg};
        height: 50px;
        width: 100px;
        margin-bottom: 20px;
        border-radius: 3px;
        &:hover {
            cursor: pointer;
        }
    `;
    
    // styled active KI
    const ActiveKeyItem = styled.button`
        background-color: ${props => props.theme.fg};
        color: ${props => props.theme.bg};
        border: 2px solid ${props => props.theme.bg};
        height: 50px;
        width: 100px;
        margin-bottom: 20px;
        border-radius: 3px;
    `

    

    // loop through KI and display each as clickable
    // onclick should call click handler with the appropriate KI to toggle
    return (
        <div className="ki-tracker-container">
            {keyItems.map(item => {
                return KI[item.slug] == true ? (
                    <ThemeProvider theme={theme}>
                        <ActiveKeyItem onClick={() => onToggle(item.slug)}>
                            {item.title}
                        </ActiveKeyItem>
                    </ThemeProvider>
                ) : (
                    <ThemeProvider theme={theme}>
                        <InactiveKeyItem onClick={() => onToggle(item.slug)}>
                            {item.title}
                        </InactiveKeyItem>
                    </ThemeProvider>
                );
            })}
        </div>
    )
}

export default KITracker;