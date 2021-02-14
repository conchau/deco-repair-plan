import React from "react";
import { useHistory } from "react-router-dom";

function ProfileResultField(props) {

    const history = useHistory();

    const foundId = props.key;
    const foundDate = props.date.slice(0,10);
    const foundUser = props.user;
    const foundRepairItems = props.repairItems;
    const foundProvince = props.province;
    const foundName = props.name;
    const foundLicense = props.license;
    const foundVehicle = props.vehicle;
    const foundPlan = props.plan;
    const foundPhone = props.phone;
    const foundEmail = props.email;


    return (
        <div className="profile-result-box">
            <p className="profile-result-field">{foundDate}</p>
            <p className="profile-result-field">{foundUser}</p>
            <p className="profile-result-field">{foundRepairItems}</p>
            <p className="profile-result-field">{foundLicense}</p>
        </div>
    )
}

export default ProfileResultField;