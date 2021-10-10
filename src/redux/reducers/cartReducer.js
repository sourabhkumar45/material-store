import { actionTypes } from "../constants/actionTypes";

const initState = {
  cart: [],
  total: 0,
};

export const cartReducer = (state = initState, { type, payload }) => {
  console.log(state);
  switch (type) {
    case actionTypes.ADD_TO_CART:
      let arr = state?.cart;
      arr.push(payload);
      state.total = parseInt(state.total + parseInt(payload.price));
      return { ...arr, total: state.total };
    case actionTypes.REMOVE_FROM_CART:
      arr = state.cart.filter((product) => product.title !== payload.title);
      state.total = parseInt(state.total - parseInt(payload.price));
      return { ...arr, total: state.total };
    default:
      return state;
  }
};
