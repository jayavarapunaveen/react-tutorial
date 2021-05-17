import { Increment_Count } from "./action-types"

export const updateCount = (count) => {
    return {
        type: Increment_Count,
        payload: count
    }
}