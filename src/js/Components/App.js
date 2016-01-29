'use strict';

import React from 'react';
import Player from './Player';

class App extends React.Component {
    constructor ( props ) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <Player/>
            </div>
        );
    }
}

//render(<App title="Hey"/>, document.getElementById("main"));

export default App;
