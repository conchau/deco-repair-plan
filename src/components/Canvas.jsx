import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CanvasDraw from "react-canvas-draw";
import windshield from "../images/windshield-diagram.png";

function Canvas(props) {

// textInput must be declared here so the ref can refer to it
  const canvas = useRef(null);

  function handleClick() {
    canvas.current.clear();
    props.onRetry();
  }

    return (
        <div>
            <button
                className="retry"
                onClick={handleClick}
                >
                Retry
            </button>
            <CanvasDraw
                className="windshield-diagram"
                ref={canvas}
                loadTimeOffset="0"
                lazyRadius="0"
                brushRadius="1"
                brushColor="black"
                catenaryColor="transparent"
                hideGrid="false"
                canvasWidth="300px"
                canvasHeight="128px"
                imgSrc={windshield}
                onChange={props.onChange}
            />
        </div>
    )
}

export default Canvas;