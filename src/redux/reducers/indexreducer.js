import { combineReducers } from 'redux';
import CartReducer from './cartreducers';
import TestReducer from './testreducers';

const reducers = combineReducers({
    test1: TestReducer,
    cart: CartReducer
})

export default reducers;