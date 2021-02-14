import React, {useState} from "react";
import Footer from "../Footer";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { chargeBasic, chargePremium } from "../../actions";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Info(props) {
    const planPrice = useSelector(state => state.planPrice);
    const renewal = useSelector(state => state.renewal)
    const dispatch = useDispatch();

    const history = useHistory();
    const [isMouseOver, setMouseOver] = useState(false);
    const [buttonDisplay, setButtonDisplay] = useState(false);

    const [customerName, setCustomerName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [licensePlate, setLicensePlate] = useState("");
    const [vehicleInfo, setVehicleInfo] = useState("");

    function handleNameInput(event) {
        setCustomerName(event.target.value);
    }
    function handlePhoneInput(event) {
        setPhoneNumber(event.target.value);
    }
    function handleLicenseInput(event) {
        setLicensePlate(event.target.value);
    }
    function handleVehicleInput(event) {
        setVehicleInfo(event.target.value);
        setButtonDisplay(true);
    }

    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOver(false);
    }

    return (
    <div className="page-container">
        <h1 className="page-header">${planPrice}</h1>
        <p>renews annually for ${renewal}</p>
        <label className="info-label">Customer's Full Name</label>
            <input type="text" placeholder="Full Name" className="info-input" onChange={handleNameInput}/>
        <label className="info-label">Phone Number</label>
            <input type="text" placeholder="Phone Number" className="info-input" onChange={handlePhoneInput}/>
        <label className="info-label">License Plate</label>
            <input type="text" placeholder="License Plate" className="info-input" onChange={handleLicenseInput}/>
        <label className="info-label">Vehicle Make & Model</label>
            <input type="text" placeholder="Vehicle Make & Model" className="info-input" onChange={handleVehicleInput}/>
            {buttonDisplay === true && (
                <Link
                    className="next"
                    to={{
                        pathname: "/payment",
                        state: {
                            name: {customerName},
                            phone: {phoneNumber},
                            license: {licensePlate},
                            vehicle: {vehicleInfo}
                        }
                    }}
                    >
                    Next
                </Link>
            )}
        <button
            className="back-button"
            onClick={() => history.push("/option")}>
            <ArrowBackIcon></ArrowBackIcon>
        </button>
        <Footer />
    </div>
    )
}

export default Info;