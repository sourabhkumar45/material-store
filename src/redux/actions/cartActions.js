import { actionTypes } from "../constants/actionTypes";

export const addToCart = (product) => {
  console.log(product);
  return {
    type: actionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: product,
  };
};
