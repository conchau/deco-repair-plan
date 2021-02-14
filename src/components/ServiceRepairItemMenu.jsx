import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { chargeBasic, chargePremium } from "../actions";
import { Dropdown } from "react-bootstrap";

function ServiceRepairItemMenu(props) {

    function mainItemSelected(event) {
        const repairItem = event.target.name;

        props.onAdd(repairItem);

        props.onSelect(repairItem);
    }

    function additionalItemSelected(event) {
        const additionalRepairItem = event.target.name;

        props.onAdd(additionalRepairItem);
    }

    return(
    <div>
    <Dropdown>
        <Dropdown.Toggle
            id="dropdown-basic"
            style={{backgroundColor: "#e75a25"}}
        >
        - - Select Repair Items - -
        </Dropdown.Toggle>

        <Dropdown.Menu className="repair-item-menu">
            {props.mainRepair === false && (
            <Dropdown.Item
                name="No Repair"
                onClick={mainItemSelected}
                >No Repair
            </Dropdown.Item>
            )}
            {props.noRepair === false && props.mainRepair === false && (
            <Dropdown.Item
                name="Small Chip"
                onClick={mainItemSelected}
                >Small Chip
            </Dropdown.Item>
            )}
            {props.noRepair === false && props.mainRepair === false && (
            <Dropdown.Item
                name="Big Chip"
                onClick={mainItemSelected}
                >Big Chip
            </Dropdown.Item>
            )}
            {props.noRepair === false && props.mainRepair === false && (
            <Dropdown.Item
                name="Crack Repair"
                onClick={mainItemSelected}
                >Crack Repair
            </Dropdown.Item>
            )}
            {props.noRepair === false && props.mainRepair === false && (
            <Dropdown.Item
                name="Crack Stop"
                onClick={mainItemSelected}
                >Crack Stop
            </Dropdown.Item>
            )}
            {props.noRepair === false && props.mainRepair === true && (
            <Dropdown.Item
                name="Additional Chip"
                onClick={additionalItemSelected}
                >Additional Chip
            </Dropdown.Item>
            )}
            {props.noRepair === false && props.mainRepair === true && (
            <Dropdown.Item
                name="Additional Syringe"
                onClick={additionalItemSelected}
                >Additional Syringe
            </Dropdown.Item>
            )}
            {props.noRepair === false && props.mainRepair === true && (
            <Dropdown.Item
                name="Mobile Fee ($20 Charge)"
                onClick={additionalItemSelected}
                >Mobile Fee ($20 Charge)
            </Dropdown.Item>
            )}
        </Dropdown.Menu>
    </Dropdown>
    </div>
    )
}

export default ServiceRepairItemMenu;