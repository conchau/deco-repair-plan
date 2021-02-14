import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import ServiceRepairItemMenu from "./ServiceRepairItemMenu";

function ServiceRepairItem(props) {

    function handleClick() {
        props.onDelete(props.id, props.itemName);
    }

    return (
        <div className="repair-item">
            <p className="repair-item-name">{props.itemName}</p>
            <button onClick={handleClick}>
                    <DeleteIcon />
            </button>
        </div>
    );
}

export default ServiceRepairItem;