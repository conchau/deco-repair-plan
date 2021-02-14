import React, {useState, useEffect} from "react";
import axiosConfig from "./axiosConfig";
import LookupResult from "./LookupResult";
import ProfileResultField from "./ProfileResultField";
import Footer from "./Footer";
import { Link, Switch, Route, useHistory, useLocation } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Profile(props) {
    const history = useHistory();
    const location = useLocation()
    const [isMouseOver, setMouseOver] = useState(false);
    const [serviceRepairList, setServiceRepairList] = useState([]);

    const foundId = location.state.idResult;
    const foundProvince = location.state.provinceResult;
    const foundName = location.state.nameResult;
    const foundLicense = location.state.licenseResult;
    const foundVehicle = location.state.vehicleResult;
    const foundPlan = location.state.planResult;
    const foundPhone = location.state.phoneResult;
    const foundEmail = location.state.emailResult;

    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOver(false);
    }

    function handleService() {
        history.push({
            pathname: "/service",
            state: {
                provinceResult: foundProvince,
                nameResult: foundName,
                licenseResult: foundLicense,
                vehicleResult: foundVehicle,
                planResult: foundPlan,
                phoneResult: foundPhone,
                emailResult: foundEmail
            }
        });
    }

    useEffect(()=> {
        axiosConfig.get("/invoice", {
            params: {
                foundEmail
            }
            })
            .then(response => {
                setServiceRepairList(response.data)
                console.log(response.data)
            });
    }, [foundEmail]);

    function createField(invoice) {
        return (
            <ProfileResultField
                key={invoice.id}
                date={invoice.date}
                user={invoice.user_id}
                repairItems={invoice.repair_items}
                name={invoice.full_name}
                license={invoice.license_plate}
                vehicle={invoice.vehicle_info}
                plan={invoice.plan_type}
            />
        );
    }

    return (
    <div className="page-container">
        <h1 className="page-header">Customer Profile</h1>
        <div className="result-box">
            <div className="result-labels">
                <p>Full Name:</p>
                <p>License Plate:</p>
                <p>Vehicle Info:</p>
                <p>Plan Type:</p>
                <p>Phone:</p>
                <p>Email Address:</p>
            </div>
            <div className="result-data">
                <p className="result-text">{foundName}</p>
                <p className="result-text">{foundLicense}</p>
                <p className="result-text">{foundVehicle}</p>
                <p className="result-text">{foundPlan}</p>
                <p className="result-text">{foundPhone}</p>
                <p className="result-text">{foundEmail}</p>
            </div>
        </div>
            <button
                className="lookup-input search"
                style={{backgroundColor: isMouseOver ? "black" : "#E75A25"}}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={handleService}
            >Service
            <i class="fas fa-tools"></i>
            </button>
            <div className="profile-result-container">
                <div className="profile-headings-box">
                    <p className="profile-headings-field">Date</p>
                    <p className="profile-headings-field">User</p>
                    <p className="profile-headings-field">Repair Items</p>
                    <p className="profile-headings-field">License</p>
                </div>
                {serviceRepairList.map(createField)}
            </div>
        <div className="lookup-footer">
            <button
                className="back-button"
                onClick={() => history.push("/lookup")}>
                <ArrowBackIcon></ArrowBackIcon>
            </button>
            <Footer />
        </div>
    </div>
    )
}

export default Profile;