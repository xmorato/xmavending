import { INCREMENT_STOCK, DECREMENT_STOCK } from "./actionTypes";

export const incrementStockAction = (productId) => {
  return ({
    type: INCREMENT_STOCK,
    payload: productId
  });
};

export const decrementStockAction = (productId) => {
  return ({
    type: DECREMENT_STOCK,
    payload: productId
  });
};
