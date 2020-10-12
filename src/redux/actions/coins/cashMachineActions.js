import { INCREMENT_COIN_MACHINE, UPDATE_CASH_MACHINE } from "./actionTypes";

export const incrementCoinMachineAction = (coinId) => {
    return ({
        type: INCREMENT_COIN_MACHINE,
        payload: coinId
    });
};
export const updateMachineCashAction = (cashMachine) => {
    return ({
        type: UPDATE_CASH_MACHINE,
        payload: cashMachine
    });
}

