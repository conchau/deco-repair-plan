import React from "react";
import { useHistory } from "react-router-dom";
import Profile from "./Profile";

function LookupResultField(props) {

    const history = useHistory();

    const foundId = props.key;
    const foundProvince = props.province;
    const foundName = props.name;
    const foundLicense = props.license;
    const foundVehicle = props.vehicle;
    const foundPlan = props.plan;
    const foundPhone = props.phone;
    const foundEmail = props.email;

    function handleViewClick () {

        //Update Redux store with customer info THEN make another GET request to db
        //Need to determine which field was clicked and pass the relevant data somehow

        history.push({
            pathname: "/profile",
            state: {
                idResult: foundId,
                provinceResult: foundProvince,
                nameResult: foundName,
                licenseResult: foundLicense,
                vehicleResult: foundVehicle,
                planResult: foundPlan,
                phoneResult: foundPhone,
                emailResult: foundEmail
            }
        });

    };

    return (
        <div className="lookup-result-box">
            <div className="lookup-result-field view">
                <button
                    className="view-button"
                    onClick={handleViewClick}
                    >View
                </button>
            </div>
            <p className="lookup-result-field">{foundName}</p>
            <p className="lookup-result-field">{foundLicense}</p>
            <p className="lookup-result-field optional">{foundVehicle}</p>
            <p className="lookup-result-field optional">{foundPlan}</p>
        </div>
    )
}

export default LookupResultField;