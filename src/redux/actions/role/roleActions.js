import { ENABLE_PROVIDER_MODE, DISABLE_PROVIDER_MODE } from "./actionTypes";

export const enableProviderMode = () => {
  return ({
    type: ENABLE_PROVIDER_MODE
  });
};
export const disableProviderMode = () => {
  return ({
    type: DISABLE_PROVIDER_MODE
  });
};