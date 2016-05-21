'use strict';

import React from 'react';

class Title extends React.Component {
    constructor ( props ) {
        super(props);
    }

    shouldComponentUpdate ( nextProps ) {
        return nextProps.title !== this.props.title;
    }

    render () {
        const title = this.props.title.join('');
        return (
            <row>
                <column cols="12">
                    <h1 className="title"
                        style={{
                            whiteSpace: 'normal',
                            wordWrap: 'break-all',
                            maxWidth: '100%',
                            width: '100%',
                            display: 'inline'
                        }}>
                        {`${title}`}
                    </h1>
                </column>
            </row>
        );
    }
}

export default Title;
