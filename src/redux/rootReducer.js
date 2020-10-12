import { combineReducers } from "redux";
import { stockReducer } from "./reducers/products/stockReducer";
import { cashUserReducer } from "./reducers/coins/cashUserReducer";
import { displayReducer } from "./reducers/display/displayReducer"
import { cashMachineReducer } from "./reducers/coins/cashMachineReducer";
import { roleReducer } from './reducers/role/roleReducer'


export const rootReducer = combineReducers({
    products: stockReducer,
    cashUser: cashUserReducer,
    display: displayReducer,
    cashMachine: cashMachineReducer,
    providerMode: roleReducer
});
