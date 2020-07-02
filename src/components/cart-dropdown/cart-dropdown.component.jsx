import React from "react";
import { connect } from "react-redux";

import CustiomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem}></CartItem>
      ))}
    </div>
    <CustiomButton>GO TO CHECKOUT</CustiomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

// const mapStateToProps = (state) => {
//   const { cartItems } = state.cart;
//   console.log(cartItems);
//   return { cartItems };
// };

export default connect(mapStateToProps)(CartDropdown);
