import { allProduct } from "../actiontypes/actiontype"
import { productInitialState } from "../initialState/productInitialState/productInitialState"

export const productReducers = (state = productInitialState, action) => {
    switch (action.type) {
        case allProduct:
            return state = {
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}