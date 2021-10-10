import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const items = useSelector((state) => state.cartItems.cart);
  console.log(items);
  return <div></div>;
}

export default Cart;
