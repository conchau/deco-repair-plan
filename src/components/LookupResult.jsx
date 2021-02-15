import React, {useState, useEffect} from "react";
import axiosConfig from "./axiosConfig";
import { Link, Switch, Route } from 'react-router-dom';
import LookupResultField from "./LookupResultField";

function LookupResult(props) {

    const [customerList, setCustomerList] = useState([]);
    const license = props.license;
    const name = props.name;
    const email = props.email;

    function createField(customer) {
        return (
            <LookupResultField
                key={customer.id}
                province={customer.province}
                name={customer.full_name}
                license={customer.license_plate}
                vehicle={customer.vehicle_info}
                plan={customer.plan_type}
                phone={customer.phone_number}
                email={customer.email_address}
            />
        );
    }


    useEffect(()=> {
        axiosConfig.get("/customer/lookup", {
            params: {
                license,
                name,
                email
            }
            })
            .then(response => {
                setCustomerList(response.data)
                console.log(response.data)
            });
    }, [license, name, email]);

    return (
        <div>
            <div className="lookup-headings-box">
                <p className="lookup-headings-field">Details</p>
                <p className="lookup-headings-field">Name</p>
                <p className="lookup-headings-field">License</p>
                <p className="lookup-headings-field optional">Vehicle</p>
                <p className="lookup-headings-field optional">Plan</p>
            </div>
            {customerList.map(createField)}
        </div>
    );
}

export default LookupResult;