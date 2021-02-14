import React, {useState} from "react";
import Axios from "axios";
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();
    const [isMouseOver, setMouseOver] = useState(false);
    const [buttonDisplay, setButtonDisplay] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOver(false);
    }

    function handleUsernameInput(event) {
        setUsername(event.target.value);
    }

    function handlePasswordInput(event) {
        setPassword(event.target.value);
        setButtonDisplay(true);
    }

    function handleLogin() {
        Axios.post("http://localhost:4000/login", {
            username: username,
            password: password
        }).then(function(res) {
            console.log(res.data);
        });
        // .then(() => {
        //     console.log("Successfully added user to the database.");
        // });

        history.push("/option");
    }

    return (
    <div className="page-container">
        <h1 className="page-header">Repair Plan App Login</h1>
            <input type="text" placeholder="User Name" className="login-input" onChange={handleUsernameInput}/>
            <input type="text" placeholder="Password" className="login-input" onChange={handlePasswordInput}/>
            {buttonDisplay === true && (
            <button
                className="login-input signIn"
                style={{backgroundColor: isMouseOver ? "black" : "#E75A25"}}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={handleLogin}
            >Login
            </button> )}
    </div>
    )
}

export default Login;