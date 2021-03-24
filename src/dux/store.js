import { createStore } from 'redux';
import moviesReducer from './movieReducer'; //exported as default no curlies. no export default - curlies
import {devToolsEnhancer} from 'redux-devtools-extension';

let store = createStore(moviesReducer, devToolsEnhancer())

export default store
