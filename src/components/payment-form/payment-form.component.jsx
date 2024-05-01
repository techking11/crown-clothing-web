import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { PaymentFormContainer, FormContainer } from "./payment-form.styles"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useState } from "react";


export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  
  const amount = useSelector(selectCartTotal);
  const user = useSelector(selectCurrentUser);
  const [processingPayment, setProcessingPayment] = useState(false);

  const paymentHandler = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const response = await fetch("../../../netlify/functions/create-payment-intent.js", {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ amount })
    }).then(res => res.json());
    
    setProcessingPayment(true);
    
    const {
      paymentIntent: { client_secret },
    } = response;    
    console.log(client_secret);
    
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: user.email ?? "Guest",
        }
      }
    });
    
    setProcessingPayment(false);
    
    if (paymentResult.error) alert(paymentResult.error);
    else if (paymentResult.paymentIntent.status === "success") alert("Payment successful");
  }
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <br />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} disabled={processingPayment}> Pay now </Button>
      </FormContainer>
    </PaymentFormContainer>
  )
}