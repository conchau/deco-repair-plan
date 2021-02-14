import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dropdown } from "react-bootstrap";

function Coupon(props) {

    const [couponSelect, setCouponSelect] = useState("- - Coupon - -");

    function handleCouponSelect(event) {
        setCouponSelect(event.target.name);
        props.onClick(event.target.name);
    }

    return(
    <div>
    <Dropdown>
        <Dropdown.Toggle
            id="dropdown-basic"
            style={{backgroundColor: "black"}}
        >
        {couponSelect}
        </Dropdown.Toggle>

        <Dropdown.Menu className="repair-item-menu">
            {props.plan === "Basic" && (
            <Dropdown.Item
                name="- - Coupon - -"
                onClick={handleCouponSelect}
                >- - Coupon - -
            </Dropdown.Item>
            )}
            {props.plan === "Basic" && (
            <Dropdown.Item
                name="$10 Coupon"
                onClick={handleCouponSelect}
                >$10 Coupon
            </Dropdown.Item>
            )}

        </Dropdown.Menu>
    </Dropdown>
    </div>
    )
}

export default Coupon;