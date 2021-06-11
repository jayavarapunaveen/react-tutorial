import { INIT_PRODUCTS } from "../actions/action-types";



const initialState = {
    allProducts: []
}


const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_PRODUCTS:
            return ({
                ...state,
                allProducts: action.payload
            })
            break;
        default:
            return state;
            break;
    }
}
export default ProductReducer;