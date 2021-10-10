import { actionTypes } from "../constants/actionTypes";

const initState = {
  products: [],
};

export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case actionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
