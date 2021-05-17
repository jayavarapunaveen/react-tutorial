import { Increment_Count, RESET_COUNT } from "../actions/action-types"


const initialState = {
    displayCount: 2
}


const TestReducer = (state = initialState, action) => {

    switch (action.type) {

        case Increment_Count:
            return {
                ...state,
                displayCount: state.displayCount + action.payload
            }
            break;
        case RESET_COUNT:
            console.log('reset count')
            return {
                ...state,
                displayCount: 0
            }
            break;
        default:
            return state;
            break;

    }

}

export default TestReducer;