'use strict';

import React from 'react';
import PlayerInfo from './PlayerInfo';

class Player extends React.Component {
    constructor ( props ) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div>
                <h1>Player Name</h1>
                <PlayerInfo/>
            </div>
        );
    }
}

export default Player;
