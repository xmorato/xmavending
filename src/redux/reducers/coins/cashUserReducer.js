import { INCREMENT_COIN_USER, REFUND_COINS } from "../../actions/coins/actionTypes";
import { config } from '../../../config'

const initialState = config.currencyList;

export const cashUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COIN_USER:
            {
                const newCoinStock = {}
                newCoinStock[action.payload] = state[action.payload] + 1;
                return ({
                    ...state, ...newCoinStock
                })
            }

        case REFUND_COINS:
            return ({ ...initialState })
        default: return state;
    }
};
