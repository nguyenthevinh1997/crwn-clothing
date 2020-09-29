import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publicableKey =
    "pk_test_51HWeYMIDvvg9rXFTEgddK51Wt574oGb0W2090UvIX3tXPUA9Itm96Zp7ZDydWY70QrY00QNdEDI0HGDT87KwGy4Y00Ytn7NsMS";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publicableKey}
    />
  );
};

export default StripeCheckoutButton;
