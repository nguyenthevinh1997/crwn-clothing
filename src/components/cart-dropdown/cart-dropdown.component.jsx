import React from "react";

import CustiomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustiomButton>GO TO CHECKOUT</CustiomButton>
  </div>
);
export default CartDropdown;
