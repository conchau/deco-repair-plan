import React, {useState} from "react";
import Axios from "axios";
import { useHistory } from 'react-router-dom';

function Register() {
    const history = useHistory();
    const [isMouseOver, setMouseOver] = useState(false);
    const [buttonDisplay, setButtonDisplay] = useState(false);

    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOver(false);
    }

    function handleUsernameInput(event) {
        setRegisterUsername(event.target.value);
    }

    function handlePasswordInput(event) {
        setRegisterPassword(event.target.value);
        setButtonDisplay(true);
    }

    function validateForm(){
        if (registerUsername === null || registerPassword === null) {
            alert("Please fill all required fields.");
            return false;
        }
    }

    function submitUser() {
        Axios.post("http://localhost:4000/register", {
            username: registerUsername,
            password: registerPassword
        }).then(function(res) {
                console.log(res);
                // if (res.data === "User already exists") {
                //     history.push("/register");
                // } else if (res.data === "User created") {
                //     history.push("/registerconfirmed");
                // }
            });

        history.push("/registerconfirmed");
    }

    return (
    <div className="page-container">
        <h1 className="page-header">Register</h1>
            <form onSubmit={validateForm}>
                <input type="text" placeholder="User Name" className="login-input" onChange={handleUsernameInput}/>
                <input type="text" placeholder="Password" className="login-input" onChange={handlePasswordInput}/>
                {buttonDisplay === true && (
                <button
                    type="submit"
                    className="login-input signIn"
                    style={{backgroundColor: isMouseOver ? "black" : "#E75A25"}}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onClick={submitUser}
                >Register
                </button> )}
            </form>
    </div>
    )
}

export default Register;