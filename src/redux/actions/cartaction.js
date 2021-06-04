import { ADD_TO_CART, REMOVE_ITEM_FROM_CART, CLEAR_CART } from "./action-types"

export const addItemToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}


export const removeItemFromCart = (productId) => {
    return {
        type: REMOVE_ITEM_FROM_CART,
        payload: productId
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}