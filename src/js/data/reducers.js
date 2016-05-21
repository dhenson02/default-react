'use strict';

import { List } from 'immutable';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const title = function ( state = List(), action ) {
    switch ( action.type ) {
        case 'LETTER_ADDED':
            return state.push(action.letter);
        case 'BACKSPACE':
            return state.delete(-1);
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    title,
    routing: routerReducer
});

export default rootReducer;
