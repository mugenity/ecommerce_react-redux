import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStrip = price * 100;
  const publishableKey =
    "pk_test_51IHOk3AykjrzdnToiRNTq7CrmiaH2tujlikCbuhWQo7j6baUmyjjaVWAkhatG714Uk3rrF0aAcpkYzWfQRNRQF1G00Ivt0Q1Cq";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="ecommerce"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStrip}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
