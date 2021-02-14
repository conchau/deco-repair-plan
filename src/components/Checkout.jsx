import React, {useState, useEffect} from "react";
import axiosConfig from "./axiosConfig";
import Footer from "./Footer";
import { Link, Switch, Route, useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

function Checkout(props) {
    const history = useHistory();

    const [emailAddress, setEmailAddress] = useState("");
    const [isProcessing, setProcessingTo] = useState(false);
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const [customerAddError, setCustomerAddError] = useState("undefined");
    const [invoiceAddError, setInvoiceAddError] = useState("undefined");

    const userID = props.location.state.userID;
    const province = props.location.state.province;
    const fullName = props.location.state.fullName;
    const licensePlate = props.location.state.licensePlate;
    const vehicleInfo = props.location.state.vehicleInfo;
    const phoneNumber = props.location.state.phoneNumber;
    const planType = props.location.state.planType;
    const basicCount = props.location.state.basicCount;
    const premiumCount = props.location.state.premiumCount;
    const serviceRepair = props.location.state.serviceRepair;
    const repairItems = props.location.state.repairItems;
    const subtotalBeforeDiscount = props.location.state.subtotalBeforeDiscount;
    const discount = props.location.state.discount;
    const taxes = props.location.state.taxes;
    const total = props.location.state.total;
    const customerName1 = props.location.state.customerName1;
    const licensePlate1 = props.location.state.licensePlate1;
    const vehicleInfo1 = props.location.state.vehicleInfo1;
    const additionalPlanType1 = props.location.state.additionalPlanType1;
    const customerName2 = props.location.state.customerName2;
    const licensePlate2 = props.location.state.licensePlate2;
    const vehicleInfo2 = props.location.state.vehicleInfo2;
    const additionalPlanType2 = props.location.state.additionalPlanType2;
    const customerName3 = props.location.state.customerName3;
    const licensePlate3 = props.location.state.licensePlate3;
    const vehicleInfo3 = props.location.state.vehicleInfo3;
    const additionalPlanType3 = props.location.state.additionalPlanType3;
    const customerName4 = props.location.state.customerName4;
    const licensePlate4 = props.location.state.licensePlate4;
    const vehicleInfo4 = props.location.state.vehicleInfo4;
    const additionalPlanType4 = props.location.state.additionalPlanType4;

    const stripe = useStripe();
    const elements = useElements();

    // Create PaymentIntent as soon as the page loads
    useEffect(() => {
        window
          .fetch("https://deco-repair-plan.herokuapp.com/create-payment-intent", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({items: Math.floor(total * 100)})
          })
          .then(res => {
            return res.json();
          })
          .then(data => {
            setClientSecret(data.clientSecret);
          });
      }, []);

    const cardStyle = {
      hidePostalCode: true,
      style: {
          base: {
            color: "#32325d",
            fontFamily: 'Arial, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
              color: "#32325d"
            }
          },
          invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
          }
        }
      };

    const handleChange = async (event) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
      };

    function handleEmailInput(event) {
        setEmailAddress(event.target.value);
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setProcessingTo(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement)
            }
          });
          if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessingTo(false);
          } else {
            setError(null);
            setProcessingTo(false);
            setSucceeded(true);

            //Add main customer to database
            axiosConfig.post("/customer/insert", {
                province: province,
                fullName: fullName,
                licensePlate: licensePlate,
                vehicleInfo: vehicleInfo,
                planType: planType,
                phoneNumber: phoneNumber,
                email: emailAddress
            }).then((response) => {
                console.log(response.data.errno);
                setCustomerAddError(response.data.errno);
            });

            //If necessary, add additional customers to database
            if (customerName1 !== ""){
              axiosConfig.post("/customer/insert", {
                province: province,
                fullName: customerName1,
                licensePlate: licensePlate1,
                vehicleInfo: vehicleInfo1,
                planType: additionalPlanType1,
                phoneNumber: phoneNumber,
                email: emailAddress
              });
            }

            if (customerName2 !== ""){
              axiosConfig.post("/customer/insert", {
                province: province,
                fullName: customerName2,
                licensePlate: licensePlate2,
                vehicleInfo: vehicleInfo2,
                planType: additionalPlanType2,
                phoneNumber: phoneNumber,
                email: emailAddress
              });
            }

            if (customerName3 !== ""){
              axiosConfig.post("/customer/insert", {
                province: province,
                fullName: customerName3,
                licensePlate: licensePlate3,
                vehicleInfo: vehicleInfo3,
                planType: additionalPlanType3,
                phoneNumber: phoneNumber,
                email: emailAddress
              });
            }

            if (customerName4 !== ""){
              axiosConfig.post("/customer/insert", {
                province: province,
                fullName: customerName4,
                licensePlate: licensePlate4,
                vehicleInfo: vehicleInfo4,
                planType: additionalPlanType4,
                phoneNumber: phoneNumber,
                email: emailAddress
              });
            }

            // //Add invoice to database
            axiosConfig.post("/invoice/insert", {
                userID: userID,
                province: province,
                planType: planType,
                basicCount: basicCount,
                premiumCount: premiumCount,
                serviceRepair: serviceRepair,
                repairItems: repairItems,
                subtotalBeforeDiscount: subtotalBeforeDiscount,
                discount: discount,
                taxes: taxes,
                total: total,
                fullName: fullName,
                licensePlate: licensePlate,
                vehicleInfo: vehicleInfo,
                phoneNumber: phoneNumber,
                email: emailAddress
            }).then((response) => {
                console.log(response.data.errno);
                setInvoiceAddError(response.data.errno);
            });

            (history.push("/checkoutconfirmed"));
          }
      };

    return (
    <div className="page-container">
        <h1 className="page-header">Checkout</h1>
        <label className="lookup-label">Email Address</label>
            <input type="text" placeholder="Email Address" className="checkout-input" onChange={handleEmailInput}/>
        <div className="stripe-form">
            <form onSubmit={handleFormSubmit}>
            <CardElement id="card-element" className="card-input" options={cardStyle} onChange={handleChange} />
            <button className="pay-button" disabled={isProcessing}>
                <span id="button-text">
                {isProcessing ? (
                    <div className="spinner" id="spinner"></div>
                ) : (
                    `Pay $${total}`
                )}
                </span>
            </button>
            {/* Show any error that happens when processing the payment */}
            {error && (
                <div className="card-error" role="alert">
                {error}
                </div>
            )}
            {/* Show a success message upon completion */}
            <p className={succeeded ? "result-message" : "result-message hidden"}>
                Payment succeeded, see the result in your
                <a
                href={`https://dashboard.stripe.com/test/payments`}
                >
                {" "}
                Stripe dashboard.
                </a> Refresh the page to pay again.
            </p>
            </form>
            {/* <p>Customer Add Error: {customerAddError}</p>
            <p>Invoice Add Error: {invoiceAddError}</p>
            {customerAddError === undefined && invoiceAddError === undefined && (
                <p>NO ERROR!</p>
            )} */}
        </div>
        <div className="lookup-footer">
            <button
                className="back-button"
                onClick={() => history.push("/payment")}>
                <ArrowBackIcon></ArrowBackIcon>
            </button>
            <Footer />
        </div>
    </div>
    )
}

export default Checkout;