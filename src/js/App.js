'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import { store, history } from './data/store';

import Main from './components/Main';
import Home from './components/Home';

const App = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Main}>
                <IndexRoute component={Home} />
                <Route path="/:title" component={Home} />
            </Route>
        </Router>
    </Provider>
);

render(App, document.getElementById("main"));
