import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import RepairItemMenu from "./RepairItemMenu";

function RepairItem(props) {

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

export default RepairItem;