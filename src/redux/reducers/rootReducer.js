import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
  allRroducts: productReducer,
  cartItems: cartReducer,
});

export default rootReducer;
