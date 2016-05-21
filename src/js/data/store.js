'use strict';

import { List } from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';

/**
 * For redux devtools in chrome
 */
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const defaults = {
    title: List()
};

const middleware = routerMiddleware(browserHistory);

export const store = createStore(
    rootReducer,
    defaults,
    enhancers,
    applyMiddleware(middleware)
);

export const history = syncHistoryWithStore(browserHistory, store);
