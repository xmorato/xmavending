import { INCREMENT_COIN_MACHINE, UPDATE_CASH_MACHINE } from "../../actions/coins/actionTypes";
import { config } from '../../../config'

const initialState = config.currencyList;

export const cashMachineReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COIN_MACHINE:
            {
                const newCoinStock = {}
                newCoinStock[action.payload] = state[action.payload] + 1;
                return ({
                    ...state, ...newCoinStock
                })
            }
        case UPDATE_CASH_MACHINE: {
            console.log("payload", action.payload)
            return (action.payload)
        }

        default: return state;
    }
};
