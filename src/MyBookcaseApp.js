import React from 'react';
import Router from './Router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'remote-redux-devtools';
import reduxThunk from 'redux-thunk';

import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(reduxThunk)
));

const MyBookcaseApp = prop => (
    <Provider store={store}>
        <Router />
    </Provider>
)

export default MyBookcaseApp;