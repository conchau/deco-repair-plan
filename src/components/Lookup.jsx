import React, {useState, useEffect} from "react";
import LookupResult from "./LookupResult";
import Footer from "./Footer";
import { Link, Switch, Route, useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Lookup() {
    const history = useHistory();
    const [isMouseOver, setMouseOver] = useState(false);
    const [buttonDisplay, setButtonDisplay] = useState(false);
    const [searchDisplay, setSearchDisplay] = useState(false);

    const [licensePlate, setLicensePlate] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");

    function handleLicenseInput(event) {
        setLicensePlate(event.target.value);
        setButtonDisplay(true);
        setSearchDisplay(false);
    }

    function handleNameInput(event) {
        setCustomerName(event.target.value);
        setButtonDisplay(true);
        setSearchDisplay(false);
    }

    function handleEmailInput(event) {
        setEmailAddress(event.target.value);
        setButtonDisplay(true);
        setSearchDisplay(false);
    }

    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOver(false);
    }

    function handleSearch() {
        setSearchDisplay(true);
        console.log("Clicked!");
    }

    return (
    <div className="page-container">
        <h1 className="page-header">Customer Lookup</h1>
        <label className="lookup-label">License Plate</label>
            <input type="text" placeholder="License Plate" className="lookup-input" onChange={handleLicenseInput}/>
        <label className="lookup-label">Customer's Full Name</label>
            <input type="text" placeholder="Full Name" className="lookup-input" onChange={handleNameInput}/>
        <label className="lookup-label">Email Address</label>
            <input type="text" placeholder="Email Address" className="lookup-input" onChange={handleEmailInput}/>
            {buttonDisplay === true && (
            <button
                className="lookup-input search"
                style={{backgroundColor: isMouseOver ? "black" : "#E75A25"}}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                // onClick={() => history.push("/lookuptable")}
                onClick={handleSearch}
            >Search
            <i className="fas fa-search"></i>
            </button>
           )}
        {searchDisplay === true && (
            <div className="lookup-result-container">
                <LookupResult
                    license={licensePlate}
                    name={customerName}
                    email={emailAddress}
                />
            </div>
        )}
        <div className="lookup-footer">
            <button
                className="back-button"
                onClick={() => history.push("/option")}>
                <ArrowBackIcon></ArrowBackIcon>
            </button>
            <Footer />
        </div>
    </div>
    )
}

export default Lookup;