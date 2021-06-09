import { ADD_TO_CART, REMOVE_ITEM_FROM_CART, CLEAR_CART } from "../actions/action-types"

const initialState = {
    totalPrice: 0,
    cartItems: []

}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            console.log(state.cartItems, action.payload)
            let product = {};
            product = { ...action.payload };
            let tempArray = [...state.cartItems]
            let index = tempArray.findIndex(eachProduct => eachProduct.id == product.id);
            if (index === -1) {
                product['count'] = 1;
                product['total'] = product.price;;
                tempArray = tempArray.concat(product)
                
            } else {
                console.log('...',state.totalPrice)
                product = { ...tempArray[index] };
                product['count'] = product['count'] + 1;
                product['total'] = ((product.count * product.price));
                tempArray[index] = { ...product };

                
            }
            console.log(JSON.stringify(tempArray))
            return {
                ...state,
                cartItems: tempArray,
                totalPrice: tempArray.reduce((currentSum,eachObj) =>((eachObj.total) + currentSum), 0)
            }
            break;
        case REMOVE_ITEM_FROM_CART:
            if (state.cartItems) {
                const tempArray = [...state.cartItems];
                let index = tempArray.findIndex(x => x.id == action.payload);
                if (tempArray[index].count == 1) {
                    tempArray.splice(index, 1);
                } else {
                    let product = { ...tempArray[index] };
                    product['count'] = product['count'] - 1;
                    product['total'] = ((product.count * product.price));
                    tempArray[index] = { ...product };
                }
                return {
                    ...state,
                    cartItems: [...tempArray],
                    totalPrice: tempArray.reduce((currentSum,eachObj) =>((eachObj.total) + currentSum), 0)
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