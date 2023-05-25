import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './shard-tracker.css';

const ShardButton = styled.button`
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.fg};
    border: 2px solid ${props => props.theme.fg};
    width: 50px;
    margin: 0px 50px;
`

const ShardText = styled.p`
    color: ${props => props.theme.fg};
`

const ShardTracker = ({ theme }) => {
    const [shards, setShards] = useState(0);

    const lowerShards = () => {
        if (shards > 0) setShards(shards - 1);
    }

    const raiseShards = () => {
        setShards(shards + 1);
    }

    return (
        <div className="shard-container">
            <ThemeProvider theme={theme}>
                <ShardButton onClick={() => lowerShards()}>-</ShardButton>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
                <ShardText>Shards: {shards}</ShardText>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
                <ShardButton  onClick={() => raiseShards()}>+</ShardButton>
            </ThemeProvider>
        </div>
    )


}

export default ShardTracker;