import { combineReducers } from 'redux';
import CartReducer from './cartreducers';
import ProductReducer from './productreducer';
import TestReducer from './testreducers';

const reducers = combineReducers({
    test1: TestReducer,
    cart: CartReducer,
    product: ProductReducer
})

export default reducers;