import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { PaymentFormContainer, FormContainer } from "./payment-form.styles"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"


export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  
  const paymentHandler = async (event) => {
    event.preventDefault();
    if(!stripe || !elements) return;
    
  }
  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <br />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay now </Button>
      </FormContainer>
    </PaymentFormContainer>
  )
}