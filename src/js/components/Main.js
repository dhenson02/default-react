'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

import Title from './Title';

class Main extends React.Component {
    constructor ( props ) {
        super(props);
    }

    shouldComponentUpdate ( nextProps ) {
        return nextProps.title !== this.props.title;
    }

    render () {
        return (
            <div style={{ maxWidth: '960px', margin: '50px auto' }}>
                {this.props.children ?
                 React.cloneElement(this.props.children, this.props) :
                 null}
                <Title title={this.props.title}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
