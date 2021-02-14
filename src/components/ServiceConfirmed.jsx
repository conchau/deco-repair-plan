import React from "react";
import { useHistory } from 'react-router-dom';
import Deco_Man_wGun from "../images/Deco_Man_wGun.png";

function ServiceConfirmed(){

    const history = useHistory();

    function handleHomeButton(){
        history.push("/option")
    }

    return (
        <div className="page-container confirmation-screen">
            <h1 className="page-header">Service Repair Confirmed!</h1>
            <img className="deco-man" src={Deco_Man_wGun} alt="deco-man-with-gun" />
            <button className="home-btn" onClick={handleHomeButton}>
                Home
            </button>
        </div>
    )
}

export default ServiceConfirmed;