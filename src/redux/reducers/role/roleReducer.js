import { ENABLE_PROVIDER_MODE, DISABLE_PROVIDER_MODE } from "../../actions/role/actionTypes";

const initialState = false;

export const roleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ENABLE_PROVIDER_MODE:
            return (true)
        case DISABLE_PROVIDER_MODE:
            return (false)
        default: return state;
    }
};
