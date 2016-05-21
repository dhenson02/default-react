'use strict';

import React from 'react';

class Home extends React.Component {
    constructor ( props ) {
        super(props);
    }

    shouldComponentUpdate ( nextProps ) {
        return nextProps.title !== this.props.title;
    }

    componentWillMount () {
        if ( this.props.params.title ) {
            this.setTitle(this.props.params.title);
        }
    }

    handleKeyDown ( e ) {
        e.preventDefault();
        const key = e.which;
        if ( key !== 8 ) {
            this.props.addLetter(key);
        }
        else {
            this.props.backspace();
        }
        e.target.value = '';
    }

    handleKeyUp ( e ) {
        e.preventDefault();
        e.target.value = '';
    }

    setTitle ( title ) {
        for ( let i = 0; i < title.length; ++i ) {
            this.props.addLetter(title.charAt(i));
        }
    }

    render () {
        return (
            <row centered>
                <column cols="12">
                    <form className="forms">
                        <label>Title
                            <span className="desc">Enter a new page title</span>
                        </label>
                        <input type="text"
                               id="title-input"
                               placeholder="Typing shows below..."
                               ref="titleInput"
                               onKeyDown={e => this.handleKeyDown(e)}
                               onKeyUp={e => this.handleKeyUp(e)}/>
                        <button type="button"
                                onMouseDown={() => this.props.backspace()}
                                onMouseUp={() => this.refs.titleInput.focus()}
                                round>&#10643;</button>
                    </form>
                </column>
            </row>
        );
    }
}

export default Home;
