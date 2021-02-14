import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, Switch, Route } from 'react-router-dom';

function LookupTable() {

    const [customerList, setCustomerList] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:4000/customer/lookup")
            .then(response => {
                setCustomerList(response.data)
                console.log(customerList)
            });
    }, []);

    return (
        <div>
            <h1>Lookup Table</h1>
            <ul>
                {customerList.map(customer => (
                <li key={customer.id}>
                    Name: {customer.full_name} || License Plate: {customer.license_plate}
                </li>
                ))}
            </ul>
        </div>
    );
}

export default LookupTable;