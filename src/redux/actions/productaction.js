import { INIT_PRODUCTS } from "./action-types"

export const initProducts = (products) => {
    return {
        type: INIT_PRODUCTS,
        payload: products
    }
}
