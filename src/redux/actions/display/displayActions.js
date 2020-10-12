import { CHANGE_MESSAGE, RESET_MESSAGE } from "./actionTypes";

export const changeMessageAction = (message) => {
  return ({
    type: CHANGE_MESSAGE,
    payload: message
  });
};
export const resetMessageAction = () => {
  return ({
    type: RESET_MESSAGE,
  });
};