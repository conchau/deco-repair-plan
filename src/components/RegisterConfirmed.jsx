import React, {useState} from "react";
import { useHistory } from 'react-router-dom';

function RegisterConfirmed() {
    const history = useHistory();
    const [isMouseOver, setMouseOver] = useState(false);

    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOver(false);
    }

    return (
        <div className="page-container">
            <h1 className="page-header">Registration Confirmed!</h1>
            <button
                className="login-input signIn"
                style={{backgroundColor: isMouseOver ? "black" : "#E75A25"}}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={() => history.push("/login")}
            >Login Page
            </button>
        </div>
    )
}

export default RegisterConfirmed;