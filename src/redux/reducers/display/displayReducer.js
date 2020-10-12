import { CHANGE_MESSAGE, RESET_MESSAGE } from "../../actions/display/actionTypes";

const initialState = "Welcome to XMA Vending APP, please insert coin and select a product ..."

export const displayReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MESSAGE:
            return (action.payload)
        case RESET_MESSAGE:
            return (initialState)
        default: return state;
    }
};
