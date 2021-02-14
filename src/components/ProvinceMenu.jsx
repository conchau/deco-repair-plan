import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { chargeBasic, chargePremium } from "../actions";
import { Dropdown } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

function ProvinceMenu(props) {

    const [provinceSelect, setProvinceSelect] = useState("- - Select Your Province - -");

    function handleProvinceSelect(event) {
        setProvinceSelect(event.target.name);
        props.onSelect(event.target.name);
    }

    return(
    <div>
    <Dropdown className="province-menu">
        <Dropdown.Toggle
            style={{backgroundColor: "#e75a25"}}
        >
        {provinceSelect}
        </Dropdown.Toggle>

        <Dropdown.Menu className="repair-item-menu">
            <Dropdown.Item
                name="AB"
                onClick={handleProvinceSelect}
                >AB
            </Dropdown.Item>
            <Dropdown.Item
                name="BC"
                onClick={handleProvinceSelect}
                >BC
            </Dropdown.Item>
            <Dropdown.Item
                name="MB"
                onClick={handleProvinceSelect}
                >MB
            </Dropdown.Item>
            <Dropdown.Item
                name="ON"
                onClick={handleProvinceSelect}
                >ON
            </Dropdown.Item>
            <Dropdown.Item
                name="SK"
                onClick={handleProvinceSelect}
                >SK
            </Dropdown.Item>
            <Dropdown.Item
                name="YT"
                onClick={handleProvinceSelect}
                >YT
            </Dropdown.Item>

        </Dropdown.Menu>
    </Dropdown>
    </div>
    )
}

export default ProvinceMenu;