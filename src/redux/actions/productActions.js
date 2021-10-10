import { actionTypes } from "../constants/actionTypes";
import axios from "axios";
export const fetchProducts = () => async (dispatch) => {
  const resp = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err) => alert(err.message));
  dispatch({
    type: actionTypes.FETCH_PRODUCTS,
    payload: resp.data,
  });
};

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
