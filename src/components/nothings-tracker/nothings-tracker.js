import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './nothings-tracker.css';

const NothingsButton = styled.button`
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.fg};
    border: 2px solid ${props => props.theme.fg};
    width: 50px;
    margin: 0px 50px;
`

const NothingsText = styled.p`
    color: ${props => props.theme.fg};
`

const NothingsTracker = ({ theme, setNothings, nothings }) => {
    
    const lowerNothings = () => {
        if (nothings > 0) setNothings(nothings - 1);
    }

    const raiseNothings = () => {
        setNothings(nothings + 1);
    }

    return (
        <div className="shard-container">
            <ThemeProvider theme={theme}>
                <NothingsButton onClick={() => lowerNothings()}>-</NothingsButton>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
                <NothingsText>Nothings: {nothings}</NothingsText>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
                <NothingsButton  onClick={() => raiseNothings()}>+</NothingsButton>
            </ThemeProvider>
        </div>
    )


}

export default NothingsTracker;