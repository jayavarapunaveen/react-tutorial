import { combineReducers } from 'redux';
import TestReducer from './testreducers';

const reducers = combineReducers({ test1: TestReducer })

export default reducers;