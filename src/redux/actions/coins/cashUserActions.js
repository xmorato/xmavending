import { INCREMENT_COIN_USER, REFUND_COINS } from "./actionTypes";

export const incrementCoinUserAction = (coinId) => {
    return ({
        type: INCREMENT_COIN_USER,
        payload: coinId
    });
};

export const refundCoinsAction = () => {
    return ({
        type: REFUND_COINS
    });
};
