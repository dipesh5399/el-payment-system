import React from "react";
import axios from "axios";
import Stripe from"react-stripe-checkout";
import {toast} from"react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Payment = props => {
     
    let [product] = React.useState({
      name: props.name,
      price: props.p,
      description: "pay charges",
    });
   
    async function handleToken(token, addresses) {
           const response = await axios.post(
        "https://50fel.sse.codesandbox.io/checkout",
        { token, product }
      );
      const { status } = response.data;
      console.log("Response:", response.data);
      if (status === "success") {
        toast("Success! Check email for details", { type: "success" });
     
       if(window.location.pathname === "/Payment") {window.location.replace("/Registration");}
      } else {
        toast("Something went wrong", { type: "error" });
      }
    }
  return (
    <React.Fragment>  
      {window.location.pathname === "/Payment" ?  <div style={{textAlign:"center"}}> <p>Click Button Below:</p> <Stripe
        stripeKey="pk_test_69YjRQJTmgIvWDqSgcPEaZoa00GqGy2ago"
        token={handleToken}
        amount={product.price * 100}
        name="Pay Charges..."
        currency="inr"
  ></Stripe></div> : null}
      {window.location.pathname === "/Homepage" ? <Stripe
        stripeKey="pk_test_69YjRQJTmgIvWDqSgcPEaZoa00GqGy2ago"
        token={handleToken}
        amount={props.p * 100}
        name="Pay Charges..."
        currency="inr"
        email={props.email}        
  ></Stripe>  :null}   
    </React.Fragment>
  );
};
export default Payment;