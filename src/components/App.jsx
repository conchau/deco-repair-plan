import React, {useState, useEffect} from "react";
import { Router, Switch, Route } from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Header from "./Header";
import Register from "./Register";
import RegisterConfirmed from "./RegisterConfirmed";
import Login from "./Login";
import Option from "./Option";
import Lookup from "./Lookup";
import Payment from "./Payment";
import Profile from "./Profile";
import Service from "./Service";
import ServiceConfirmed from "./ServiceConfirmed";
import Checkout from "./Checkout";
import CheckoutConfirmed from "./CheckoutConfirmed";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51IEnXcCKorqkOjaTrfxaxji3bAqy5PZZur0r1hpsP3ueUL0FvGkofaa8Ddk6sOqy4xVRwExv32XEsqyTTRLIdDMh00z3FKCygY");

const App = () => {
    return (
        <>
            <Header />
            <Elements stripe={stripePromise}>
            <Route render={({location}) => (
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={450}
                    classNames="fade"
                >

                    <Switch location={location}>

                        <Route exact path="/" component={Option}></Route>
                        <Route exact path="/option" component={Option}></Route>
                        <Route exact path="/lookup" component={Lookup}></Route>
                        <Route exact path="/profile" component={Profile}></Route>
                        <Route exact path="/service" component={Service}></Route>
                        <Route exact path="/serviceconfirmed" component={ServiceConfirmed}></Route>
                        <Route exact path="/checkout" component={Checkout}></Route>
                        <Route exact path="/checkoutconfirmed" component={CheckoutConfirmed}></Route>
                        <Route exact path="/payment" component={Payment}></Route>
                        <Route exact path="/checkout" component={Checkout}></Route>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            )} />
            </Elements>
        </>
    );
};


export default App;