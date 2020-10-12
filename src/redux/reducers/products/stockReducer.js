import { INCREMENT_STOCK, DECREMENT_STOCK } from "../../actions/products/actionTypes";
import { config } from "../../../config"

const initialState = config.vendingProdcutStock;

export const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_STOCK:
      {
        const product = state[action.payload]
        const newProduct = {}
        newProduct[action.payload] = { ...product }
        newProduct[action.payload].stock = newProduct[action.payload].stock + 1;
        return ({
          ...state, ...newProduct
        })
      }
      ;

    case DECREMENT_STOCK:
      {
        const product = state[action.payload]
        const newProduct = {}
        newProduct[action.payload] = { ...product }
        newProduct[action.payload].stock = newProduct[action.payload].stock - 1;
        return ({
          ...state, ...newProduct
        })
      }
      ;

    default:
      return state;
      ;
  }
};
