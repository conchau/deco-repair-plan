import React, {useState, useEffect} from "react";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { chargeBasic, chargePremium } from "../actions";

function Option() {
    const price = useSelector(state => state.price);
    const history = useHistory();
    const dispatch = useDispatch();

    //Make a GET request to check logged in status; redirect to login page if not logged in.
    // useEffect(()=> {
    //     axios.get("http://localhost:4000/check")
    //         .then(response => {
    //             console.log(response.data)
    //             if (response.data === false) {
    //                 history.push("/login");
    //             } else {
    //                 console.log("Welcome!");
    //             }
    //         });
    // }, []);

    //Need to find a way to check the Redux store for logged in status.
    //Only render this component if logged in

    function premiumClick() {
        history.push("/payment");
        dispatch(chargePremium());
    }

    function basicClick() {
        history.push("/payment");
        dispatch(chargeBasic());
    }

    return (
        <div className="page-container">
        <h1 className="page-header">Select Option</h1>
            <button
                className="option-button premium-button"
                onClick={premiumClick}>
                <h1 className="option-title">New Premium Plan</h1>
            </button>
            <button
                className="option-button basic-button"
                onClick={basicClick}>
                <h1 className="option-title">New Basic Plan</h1>
            </button>
            <button
                className="option-button lookup-button"
                onClick={() => history.push("/lookup")}>
                <h1 className="option-title">Customer Lookup</h1>
            </button>
            {/* <button
                className="back-button"
                onClick={() => history.push("/login")}>
                <ArrowBackIcon></ArrowBackIcon>
            </button> */}
            <Footer />
        </div>
    )
}

export default Option;
