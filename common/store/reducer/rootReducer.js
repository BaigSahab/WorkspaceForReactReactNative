import { types } from "../type"

const initialState = {
    list: []
}

const rootReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case types.GET_LIST:
            return { ...state, list: actions.payload }

        default:
            return { ...state }
    }
}

export default rootReducer