import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustiomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem}></CartItem>
        ))
      ) : (
        <span className="empty-message">Youre cart is empty</span>
      )}
    </div>
    <CustiomButton onClick={() => history.push("/checkout")}>
      GO TO CHECKOUT
    </CustiomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

// const mapStateToProps = (state) => {
//   const { cartItems } = state.cart;
//   console.log(cartItems);
//   return { cartItems };
// };

export default withRouter(connect(mapStateToProps)(CartDropdown));
