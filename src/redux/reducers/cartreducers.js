import { ADD_TO_CART, REMOVE_ITEM_FROM_CART, CLEAR_CART } from "../actions/action-types"

const initialState = {
    totalPrice: 0,
    cartItems: []

}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            console.log(state.cartItems)
            const tempArray = [...state.cartItems]
            console.log(tempArray)
            return {
                ...state,
                cartItems: tempArray.concat(action.payload),
                totalPrice: state.totalPrice + action.payload.price
            }
            break;
        case REMOVE_ITEM_FROM_CART:
            if (state.cartItems) {
                const tempArray = [...state.cartItems];
                let index = tempArray.findIndex(x => x.id == action.payload);
                tempArray.splice(index, 1);
                return {
                    ...state,
                    cartItems: [...tempArray]
                }
            } else {
                return { ...state }
            }
            break;
        case CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
            break;
        default:
            return state;
            break;

    }

};
export default CartReducer;