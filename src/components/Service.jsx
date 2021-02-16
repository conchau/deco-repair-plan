import React, {useRef, useState, useEffect} from "react";
import axiosConfig from "./axiosConfig";
import { Link, Switch, Route, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { chargeBasic, chargePremium, addItemPremium, addItemBasic, addNoRepairPremium, addNoRepairBasic, addSmallChip, addBigChip, addCrackRepair, addCrackStop, addAdditionalChip, addAdditionalSyringe, addMobileFee, removeSmallChip, removeBigChip, removeCrackRepair, removeCrackStop, removeAdditionalChip, removeAdditionalSyringe, removeMobileFee, addDiscount, selectAB, selectBC, selectMB, selectON, selectSK, selectYT, addPremium1, addBasic1, removePlan1, addPremium2, addBasic2, removePlan2, addPremium3, addBasic3, removePlan3, addPremium4, addBasic4, removePlan4 } from "../actions";
import CancelIcon from '@material-ui/icons/Cancel';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Canvas from "./Canvas";
import ServiceRepairItemMenu from "./ServiceRepairItemMenu";
import ServiceRepairItem from "./ServiceRepairItem";

function Service(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [isMouseOver, setMouseOver] = useState(false);
    const [buttonDisplay, setButtonDisplay] = useState(false);

    const foundProvince = props.location.state.provinceResult;
    const foundName = props.location.state.nameResult;
    const foundLicense = props.location.state.licenseResult;
    const foundVehicle = props.location.state.vehicleResult;
    const foundPlan = props.location.state.planResult;
    const foundPhone = props.location.state.phoneResult;
    const foundEmail = props.location.state.emailResult;

    const [userIDInput, setUserIDInput] = useState("");
    const [mainRepair, setMainRepair] = useState(false);
    const [noRepair, setNoRepair] = useState(false);
    const [items, setItems] = useState([]);
    const mainRepairItems = ["No Repair", "Small Chip", "Big Chip", "Crack Repair", "Crack Stop"];
    const [drawStatus, setDrawStatus] = useState(false);

    // ADDITIONAL PLAN VARIABLES AND FUNCTIONS
    const additional1 = useSelector(state => state.additional1);
    const additional2 = useSelector(state => state.additional2);
    const additional3 = useSelector(state => state.additional3);
    const additional4 = useSelector(state => state.additional4);

    function checkTaxRate() {
        if (foundProvince === "AB"){
            setTaxes(0.05);
        } else if (foundProvince === "BC"){
            setTaxes(0.12);
        } else if (foundProvince === "MB"){
            setTaxes(0.12);
        } else if (foundProvince === "ON"){
            setTaxes(0.13);
        } else if (foundProvince === "SK"){
            setTaxes(0.11);
        } else if (foundProvince === "YT"){
            setTaxes(0.05);
        }
    }

    //PRICE STATES
    const [taxes, setTaxes] = useState(0);
    const repairPlanFee = ({additional1}.additional1 + {additional2}.additional2 +{additional3}.additional3 + {additional4}.additional4);
    const preDiscountSubtotal = ({additional1}.additional1 + {additional2}.additional2 +{additional3}.additional3 + {additional4}.additional4);
    const subtotal = ({additional1}.additional1 + {additional2}.additional2 +{additional3}.additional3 + {additional4}.additional4);
    const totalPrice = ((subtotal) * (1 + taxes)).toFixed(2);

    const [customerNameInput1, setCustomerNameInput1] = useState("");
    const [licensePlateInput1, setLicensePlateInput1] = useState("");
    const [vehicleInfoInput1, setVehicleInfoInput1] = useState("");
    const [additionalPlanType1, setAdditionalPlanType1] = useState("");
    const [customerNameInput2, setCustomerNameInput2] = useState("");
    const [licensePlateInput2, setLicensePlateInput2] = useState("");
    const [vehicleInfoInput2, setVehicleInfoInput2] = useState("");
    const [additionalPlanType2, setAdditionalPlanType2] = useState("");
    const [customerNameInput3, setCustomerNameInput3] = useState("");
    const [licensePlateInput3, setLicensePlateInput3] = useState("");
    const [vehicleInfoInput3, setVehicleInfoInput3] = useState("");
    const [additionalPlanType3, setAdditionalPlanType3] = useState("");
    const [customerNameInput4, setCustomerNameInput4] = useState("");
    const [licensePlateInput4, setLicensePlateInput4] = useState("");
    const [vehicleInfoInput4, setVehicleInfoInput4] = useState("");
    const [additionalPlanType4, setAdditionalPlanType4] = useState("");

    const [addButtonDisplay1, setAddButtonDisplay1] = useState(true);
    const [addButtonDisplay2, setAddButtonDisplay2] = useState(true);
    const [addButtonDisplay3, setAddButtonDisplay3] = useState(true);
    const [addButtonDisplay4, setAddButtonDisplay4] = useState(true);

    const [addOptionDisplay1, setAddOptionDisplay1] = useState(false);
    const [addOptionDisplay2, setAddOptionDisplay2] = useState(false);
    const [addOptionDisplay3, setAddOptionDisplay3] = useState(false);
    const [addOptionDisplay4, setAddOptionDisplay4] = useState(false);

    const [addDisplay1, setAddDisplay1] = useState(false);
    const [addDisplay2, setAddDisplay2] = useState(false);
    const [addDisplay3, setAddDisplay3] = useState(false);
    const [addDisplay4, setAddDisplay4] = useState(false);

    const [basicCount, setBasicCount] = useState(0);
    const [premiumCount, setPremiumCount] = useState(0);

    function handleNameInput1(event) {
        setCustomerNameInput1(event.target.value);
    }
    function handleLicenseInput1(event) {
        setLicensePlateInput1(event.target.value);
    }
    function handleVehicleInput1(event) {
        setVehicleInfoInput1(event.target.value);
    }

    function handleNameInput2(event) {
        setCustomerNameInput2(event.target.value);
    }
    function handleLicenseInput2(event) {
        setLicensePlateInput2(event.target.value);
    }
    function handleVehicleInput2(event) {
        setVehicleInfoInput2(event.target.value);
    }

    function handleNameInput3(event) {
        setCustomerNameInput3(event.target.value);
    }
    function handleLicenseInput3(event) {
        setLicensePlateInput3(event.target.value);
    }
    function handleVehicleInput3(event) {
        setVehicleInfoInput3(event.target.value);
    }

    function handleNameInput4(event) {
        setCustomerNameInput4(event.target.value);
    }
    function handleLicenseInput4(event) {
        setLicensePlateInput4(event.target.value);
    }
    function handleVehicleInput4(event) {
        setVehicleInfoInput4(event.target.value);
    }

    function addClick1() {
        setAddDisplay1(true);
        setAddButtonDisplay1(false);
        setAddOptionDisplay1(true);
        dispatch(addPremium1());
        setPremiumCount(premiumCount + 1);
        setAdditionalPlanType1("Additional Premium");
    }

    function addClick2() {
        setAddDisplay2(true);
        setAddButtonDisplay2(false);
        setAddOptionDisplay2(true);
        dispatch(addPremium2());
        setPremiumCount(premiumCount + 1);
        setAdditionalPlanType2("Additional Premium");
    }

    function addClick3() {
        setAddDisplay3(true);
        setAddButtonDisplay3(false);
        setAddOptionDisplay3(true);
        dispatch(addPremium3());
        setPremiumCount(premiumCount + 1);
        setAdditionalPlanType3("Additional Premium");
    }

    function addClick4() {
        setAddDisplay4(true);
        setAddButtonDisplay4(false);
        setAddOptionDisplay4(true);
        dispatch(addPremium4());
        setPremiumCount(premiumCount + 1);
        setAdditionalPlanType4("Additional Premium");
    }

    //References to additional plan type buttons for updating the CSS on toggle
    const premium1 = useRef(null);
    const basic1 = useRef(null);
    const premium2 = useRef(null);
    const basic2 = useRef(null);
    const premium3 = useRef(null);
    const basic3 = useRef(null);
    const premium4 = useRef(null);
    const basic4 = useRef(null);

    function addBasic1Click() {
        premium1.current.className = "inactive-add";
        basic1.current.className = "active-add";
        dispatch(addBasic1());
        setBasicCount(basicCount + 1);
        setPremiumCount(premiumCount - 1);
        setAdditionalPlanType1("Additional Basic");
    }
    function addPremium1Click() {
        premium1.current.className = "active-add";
        basic1.current.className = "inactive-add";
        dispatch(addPremium1());
        setBasicCount(basicCount - 1);
        setPremiumCount(premiumCount + 1);
        setAdditionalPlanType1("Additional Premium");
    }
    function addBasic2Click() {
        premium2.current.className = "inactive-add";
        basic2.current.className = "active-add";
        dispatch(addBasic2());
        setBasicCount(basicCount + 1);
        setPremiumCount(premiumCount - 1);
        setAdditionalPlanType2("Additional Basic");
    }
    function addPremium2Click() {
        premium2.current.className = "active-add";
        basic2.current.className = "inactive-add";
        dispatch(addPremium2());
        setBasicCount(basicCount - 1);
        setPremiumCount(premiumCount + 1);
        setAdditionalPlanType2("Additional Premium");
    }
    function addBasic3Click() {
        premium3.current.className = "inactive-add";
        basic3.current.className = "active-add";
        dispatch(addBasic3());
        setBasicCount(basicCount + 1);
        setPremiumCount(premiumCount - 1);
        setAdditionalPlanType3("Additional Basic");
    }
    function addPremium3Click() {
        premium3.current.className = "active-add";
        basic3.current.className = "inactive-add";
        dispatch(addPremium3());
        setBasicCount(basicCount - 1);
        setPremiumCount(premiumCount + 1);
        setAdditionalPlanType3("Additional Premium");
    }
    function addBasic4Click() {
        premium4.current.className = "inactive-add";
        basic4.current.className = "active-add";
        dispatch(addBasic4());
        setBasicCount(basicCount + 1);
        setPremiumCount(premiumCount - 1);
        setAdditionalPlanType4("Additional Basic");
    }
    function addPremium4Click() {
        premium4.current.className = "active-add";
        basic4.current.className = "inactive-add";
        dispatch(addPremium4());
        setBasicCount(basicCount - 1);
        setPremiumCount(premiumCount + 1);
        setAdditionalPlanType4("Additional Premium");
    }
    function deleteClick1() {
        setAddDisplay1(false);
        setAddButtonDisplay1(true);
        setAddOptionDisplay1(false);
        setCustomerNameInput1("");
        setLicensePlateInput1("");
        setVehicleInfoInput1("");
        dispatch(removePlan1());

        if ({additional1}.additional1 === 30) {
            setBasicCount(basicCount - 1);
        } else if ({additional1}.additional1 === 40) {
            setPremiumCount(premiumCount - 1);
        }
    }
    function deleteClick2() {
        setAddDisplay2(false);
        setAddButtonDisplay2(true);
        setAddOptionDisplay2(false);
        setCustomerNameInput2("");
        setLicensePlateInput2("");
        setVehicleInfoInput2("");
        dispatch(removePlan2());

        if ({additional2}.additional2 === 30) {
            setBasicCount(basicCount - 1);
        } else if ({additional2}.additional2 === 40) {
            setPremiumCount(premiumCount - 1);
        }
    }
    function deleteClick3() {
        setAddDisplay3(false);
        setAddButtonDisplay3(true);
        setAddOptionDisplay3(false);
        setCustomerNameInput3("");
        setLicensePlateInput3("");
        setVehicleInfoInput3("");
        dispatch(removePlan3());

        if ({additional3}.additional3 === 30) {
            setBasicCount(basicCount - 1);
        } else if ({additional3}.additional3 === 40) {
            setPremiumCount(premiumCount - 1);
        }
    }
    function deleteClick4() {
        setAddDisplay4(false);
        setAddButtonDisplay4(true);
        setAddOptionDisplay4(false);
        setCustomerNameInput4("");
        setLicensePlateInput4("");
        setVehicleInfoInput4("");
        dispatch(removePlan4());

        if ({additional4}.additional4 === 30) {
            setBasicCount(basicCount - 1);
        } else if ({additional4}.additional4 === 40) {
            setPremiumCount(premiumCount - 1);
        }
    }


    function handleUserIDInput(event) {
        setUserIDInput(event.target.value);
    }

    function updateDropDown (name) {
        if (name === "No Repair") {
            setNoRepair(true);
            setMainRepair(true);
        } else if (name === "Additional Chip" && mainRepair === false || name === "Additional Syringe" && mainRepair === false || name === "Mobile Fee ($20 Charge)" && mainRepair === false) {
            setMainRepair(true);
        } else if (name === "Small Chip" || name === "Big Chip" || name === "Crack Repair" || name === "Crack Stop") {
            setMainRepair(true);
        }
    }

    //NEW REPAIR ITEM ADDITIONS
    function addItem (newItem) {
        console.log(newItem);

        setItems((prevItems) => {
            return [...prevItems, newItem];
        });


        //Update the Hypothetical Repair Price
        if (newItem === "No Repair" && foundPlan === "Premium") {
            dispatch(addNoRepairPremium());
        } else if (newItem === "No Repair" && foundPlan === "Basic") {
            dispatch(addNoRepairBasic());
        } else if (newItem === "Small Chip") {
            dispatch(addSmallChip());
        } else if (newItem === "Big Chip") {
            dispatch(addBigChip());
        } else if (newItem === "Crack Repair") {
            dispatch(addCrackRepair());
        } else if (newItem === "Crack Stop") {
            dispatch(addCrackStop());
        } else if (newItem === "Additional Chip") {
            dispatch(addAdditionalChip());
        } else if (newItem === "Additional Syringe") {
            dispatch(addAdditionalSyringe());
        } else if (newItem === "Mobile Fee ($20 Charge)") {
            dispatch(addMobileFee());
        }
    }

    //NEW REPAIR ITEM DELETIONS
    function deleteItem(id, name) {
        console.log(name);
        //call an action to delete
        if (name === "No Repair") {
            setNoRepair(false);
            setMainRepair(false);
        } else if (name === "Small Chip") {
            dispatch(removeSmallChip());
            setMainRepair(false);
            if (foundPlan === "Premium") {
                dispatch(chargePremium());
            } else if (foundPlan === "Basic") {
                dispatch(chargeBasic());
            }
        } else if (name === "Big Chip") {
            dispatch(removeBigChip());
            setMainRepair(false);
            if (foundPlan === "Premium") {
                dispatch(chargePremium());
            } else if (foundPlan === "Basic") {
                dispatch(chargeBasic());
            }
        } else if (name === "Crack Repair") {
            dispatch(removeCrackRepair());
            setMainRepair(false);
            if (foundPlan === "Premium") {
                dispatch(chargePremium());
            } else if (foundPlan === "Basic") {
                dispatch(chargeBasic());
            }
        } else if (name === "Crack Stop") {
            dispatch(removeCrackStop());
            setMainRepair(false);
            if (foundPlan === "Premium") {
                dispatch(chargePremium());
            } else if (foundPlan === "Basic") {
                dispatch(chargeBasic());
            }
        } else if (name === "Additional Chip") {
            dispatch(removeAdditionalChip());
        } else if (name === "Additional Syringe") {
            dispatch(removeAdditionalSyringe());
        } else if (name === "Mobile Fee ($20 Charge)") {
            dispatch(removeMobileFee());
        }

        setItems((prevItems) => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
    }

    function handleDraw() {
        setDrawStatus(true);
        checkTaxRate();
    }

    function resetCanvas() {
        setDrawStatus(false);
        console.log(items.length);
    }

    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOver(false);
    }

    function handleGo() {
        //First check that all additional plan inputs are completed
        if ({additional1}.additional1 > 0 && (customerNameInput1 === "" || licensePlateInput1 === "" || vehicleInfoInput1 === "")){
            alert("All inputs are required!");
            return;
        } else if ({additional2}.additional2 > 0 && (customerNameInput2 === "" || licensePlateInput2 === "" || vehicleInfoInput2 === "")){
            alert("All inputs are required!");
            return;
        } else if ({additional3}.additional3 > 0 && (customerNameInput3 === "" || licensePlateInput3 === "" || vehicleInfoInput3 === "")){
            alert("All inputs are required!");
            return;
        } else if ({additional4}.additional4 > 0 && (customerNameInput4 === "" || licensePlateInput4 === "" || vehicleInfoInput4 === "")){
            alert("All inputs are required!");
            return;
        }

        //If necessary, add additional customers to database
        if (customerNameInput1 !== "" || customerNameInput2 !== "" || customerNameInput3 !== "" || customerNameInput4 !== ""){
            history.push({
                pathname: "/checkoutservice",
                state: {
                    userID: userIDInput,
                    province: foundProvince,
                    fullName: foundName,
                    licensePlate: foundLicense,
                    vehicleInfo: foundVehicle,
                    phoneNumber: foundPhone,
                    planType: foundPlan,
                    basicCount: basicCount,
                    premiumCount: premiumCount,
                    serviceRepair: 1,
                    repairItems: items.toString(),
                    subtotalBeforeDiscount: preDiscountSubtotal,
                    taxes: (totalPrice - subtotal),
                    total: totalPrice,
                    customerName1: customerNameInput1,
                    licensePlate1: licensePlateInput1,
                    vehicleInfo1: vehicleInfoInput1,
                    additionalPlanType1: additionalPlanType1,
                    customerName2: customerNameInput2,
                    licensePlate2: licensePlateInput2,
                    vehicleInfo2: vehicleInfoInput2,
                    additionalPlanType2: additionalPlanType2,
                    customerName3: customerNameInput3,
                    licensePlate3: licensePlateInput3,
                    vehicleInfo3: vehicleInfoInput3,
                    additionalPlanType3: additionalPlanType3,
                    customerName4: customerNameInput4,
                    licensePlate4: licensePlateInput4,
                    vehicleInfo4: vehicleInfoInput4,
                    additionalPlanType4: additionalPlanType4
                }
            });
          } else if (customerNameInput1 === "" && customerNameInput2 === "" && customerNameInput3 === "" && customerNameInput4 === ""){
            //Add invoice to database
                axiosConfig.post("/invoice/insert", {
                userID: userIDInput,
                province: foundProvince,
                planType: foundPlan,
                basicCount: basicCount,
                premiumCount: premiumCount,
                serviceRepair: 1,
                repairItems: items.toString(),
                subtotalBeforeDiscount: 0,
                discount: 0,
                taxes: 0,
                total: 0,
                fullName: foundName,
                licensePlate: foundLicense,
                vehicleInfo: foundVehicle,
                phoneNumber: foundPhone,
                email: foundEmail
            }).then((response) => {
                console.log(response.data.errno);
            }).then(history.push("/serviceconfirmed"));
            }

        // if (customerNameInput2 !== ""){
        //     axiosConfig.post("/customer/insert", {
        //         province: foundProvince,
        //         fullName: customerNameInput2,
        //         licensePlate: licensePlateInput2,
        //         vehicleInfo: vehicleInfoInput2,
        //         planType: additionalPlanType2,
        //         phoneNumber: foundPhone,
        //         email: foundEmail
        //     });
        // }

        // if (customerNameInput3 !== ""){
        //     axiosConfig.post("/customer/insert", {
        //       province: foundProvince,
        //       fullName: customerNameInput3,
        //       licensePlate: licensePlateInput3,
        //       vehicleInfo: vehicleInfoInput3,
        //       planType: additionalPlanType3,
        //       phoneNumber: foundPhone,
        //       email: foundEmail
        //     });
        // }

        // if (customerNameInput4 !== ""){
        //     axiosConfig.post("/customer/insert", {
        //       province: foundProvince,
        //       fullName: customerNameInput4,
        //       licensePlate: licensePlateInput4,
        //       vehicleInfo: vehicleInfoInput4,
        //       planType: additionalPlanType4,
        //       phoneNumber: foundPhone,
        //       email: foundEmail
        //     });
        // }
    }

    function handleBackButton() {
        history.push({
            pathname: "/profile",
            state: {
                nameResult: foundName,
                licenseResult: foundLicense,
                vehicleResult: foundVehicle,
                planResult: foundPlan,
                phoneResult: foundPhone,
                emailResult: foundEmail
            }
        });
    }

    return (
        <div className="page-container">
        <h1 className="page-header">Service Repair</h1>
            <div className="service">
                <div className="service-summary-1">
                    <label className="info-label">User ID</label>
                        <input type="text" placeholder="User ID" className="service-input user" maxLength="4" pattern="\d{4}" onChange={handleUserIDInput} required/>
                    <div className="service-repair-item-section">
                        <ServiceRepairItemMenu
                            noRepair={noRepair}
                            mainRepair={mainRepair}
                            onAdd={addItem}
                            onSelect={updateDropDown}
                        />
                        {items.map((item, index) => {
                            return (
                                <ServiceRepairItem
                                    key={index}
                                    id={index}
                                    itemName={item}
                                    onDelete={deleteItem}
                                />
                            );
                        })}
                    {/* ADDITIONAL PLAN 1 */}
                    {items.length > 0 && userIDInput !== "" && mainRepair === true && addButtonDisplay1 === true && (
                                <button
                                    className="add-vehicle"
                                    onClick={addClick1}
                                    >Add Vehicle
                                </button>
                            )}
                            {addOptionDisplay1 === true && (
                                <div className="additional-plan-options">
                                    <button
                                        className="active-add"
                                        name="Additional Premium"
                                        ref={premium1}
                                        onClick={addPremium1Click}
                                        >Premium
                                    </button>
                                    <button
                                        className="inactive-add"
                                        name="Additional Basic"
                                        ref={basic1}
                                        onClick={addBasic1Click}
                                        >Basic
                                    </button>
                                    <CancelIcon
                                        className="cancel-icon"
                                        fontSize="large"
                                        onClick={deleteClick1}
                                    />
                                </div>
                            )}
                            {addDisplay1 === true && (
                                <form name="additional-plan-1">
                                    <label className="info-label">2nd Full Name</label>
                                        <input type="text" placeholder="Full Name" className="service-input" onChange={handleNameInput1} required/>
                                    <label className="info-label">2nd License Plate</label>
                                        <input type="text" placeholder="License Plate" className="service-input" onChange={handleLicenseInput1} required/>
                                    <label className="info-label">2nd Vehicle Make & Model</label>
                                        <input type="text" placeholder="Vehicle Make & Model" className="service-input" onChange={handleVehicleInput1} required/>
                                </form>
                            )}

                        {/* ADDITIONAL PLAN 2 */}
                        {customerNameInput1 !== "" && licensePlateInput1 !== "" && vehicleInfoInput1 !== "" && addButtonDisplay2 === true && addDisplay1 === true && (
                            <button
                                className="add-vehicle"
                                onClick={addClick2}
                                >Add Vehicle
                            </button>
                        )}
                        {addOptionDisplay2 === true && (
                            <div className="additional-plan-options">
                                <button
                                    className="active-add"
                                    name="Additional Premium"
                                    ref={premium2}
                                    onClick={addPremium2Click}
                                    >Premium
                                </button>
                                <button
                                    className="inactive-add"
                                    name="Additional Basic"
                                    ref={basic2}
                                    onClick={addBasic2Click}
                                    >Basic
                                </button>
                                <CancelIcon
                                    className="cancel-icon"
                                    fontSize="large"
                                    onClick={deleteClick2}
                                />
                            </div>
                        )}
                        {addDisplay2 === true && (
                            <form name="additional-plan-2">
                                <label className="info-label">3rd Full Name</label>
                                    <input type="text" placeholder="Full Name" className="service-input" onChange={handleNameInput2} required/>
                                <label className="info-label">3rd License Plate</label>
                                    <input type="text" placeholder="License Plate" className="service-input" onChange={handleLicenseInput2} required/>
                                <label className="info-label">3rd Vehicle Make & Model</label>
                                    <input type="text" placeholder="Vehicle Make & Model" className="service-input" onChange={handleVehicleInput2} required/>
                            </form>
                        )}

                        {/* ADDITIONAL PLAN 3 */}
                        {customerNameInput2 !== "" && licensePlateInput2 !== "" && vehicleInfoInput2 !== "" && addButtonDisplay3 === true && addDisplay2 === true && (
                            <button
                                className="add-vehicle"
                                onClick={addClick3}
                                >Add Vehicle
                            </button>
                        )}
                        {addOptionDisplay3 === true && (
                            <div className="additional-plan-options">
                                <button
                                    className="active-add"
                                    name="Additional Premium"
                                    ref={premium3}
                                    onClick={addPremium3Click}
                                    >Premium
                                </button>
                                <button
                                    className="inactive-add"
                                    name="Additional Basic"
                                    ref={basic3}
                                    onClick={addBasic3Click}
                                    >Basic
                                </button>
                                <CancelIcon
                                    className="cancel-icon"
                                    fontSize="large"
                                    onClick={deleteClick3}
                                />
                            </div>
                        )}
                        {addDisplay3 === true && (
                            <form name="additional-plan-3">
                                <label className="info-label">4th Full Name</label>
                                    <input type="text" placeholder="Full Name" className="service-input" onChange={handleNameInput3} required/>
                                <label className="info-label">4th License Plate</label>
                                    <input type="text" placeholder="License Plate" className="service-input" onChange={handleLicenseInput3} required/>
                                <label className="info-label">4th Vehicle Make & Model</label>
                                    <input type="text" placeholder="Vehicle Make & Model" className="service-input" onChange={handleVehicleInput3} required/>
                            </form>
                        )}

                        {/* ADDITIONAL PLAN 4 */}
                        {customerNameInput3 !== "" && licensePlateInput3 !== "" && vehicleInfoInput3 !== "" && addButtonDisplay4 === true && addDisplay3 === true && (
                            <button
                                className="add-vehicle"
                                onClick={addClick4}
                                >Add Vehicle
                            </button>
                        )}
                        {addOptionDisplay4 === true && (
                            <div className="additional-plan-options">
                                <button
                                    className="active-add"
                                    name="Additional Premium"
                                    ref={premium4}
                                    onClick={addPremium4Click}
                                    >Premium
                                </button>
                                <button
                                    className="inactive-add"
                                    name="Additional Basic"
                                    ref={basic4}
                                    onClick={addBasic4Click}
                                    >Basic
                                </button>
                                <CancelIcon
                                    className="cancel-icon"
                                    fontSize="large"
                                    onClick={deleteClick4}
                                />
                            </div>
                        )}
                        {addDisplay4 === true && (
                            <form name="additional-plan-4">
                                <label className="info-label">5th Full Name</label>
                                    <input type="text" placeholder="Full Name" className="service-input" onChange={handleNameInput4} required/>
                                <label className="info-label">5th License Plate</label>
                                    <input type="text" placeholder="License Plate" className="service-input" onChange={handleLicenseInput4} required/>
                                <label className="info-label">5th Vehicle Make & Model</label>
                                    <input type="text" placeholder="Vehicle Make & Model" className="service-input" onChange={handleVehicleInput4} required/>
                            </form>
                        )}
                    </div>
                </div>
                <div className="service-summary-2">
                    <p className="canvas-title-service">Mark the location(s) of the repair</p>
                        <Canvas
                            onChange={handleDraw}
                            onRetry={resetCanvas}
                        />
                    {/* Check items array and return true if any of the mainRepairItems are present */}
                    {items.some(i=> mainRepairItems.indexOf(i) >= 0) && drawStatus === true &&  userIDInput !== "" && (
                        <button
                            className="checkout-btn done"
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            onClick={handleGo}
                        >GO
                        </button>
                    )}
                </div>
            </div>
            <button
                className="back-button"
                onClick={handleBackButton}>
                <ArrowBackIcon></ArrowBackIcon>
            </button>
    </div>
    )
}

export default Service;