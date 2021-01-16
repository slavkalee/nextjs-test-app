import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers'

const middleware = [thunk];

export default (initialState = {}) => createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
