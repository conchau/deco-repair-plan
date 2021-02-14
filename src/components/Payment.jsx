import React, {useRef, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { chargeBasic, chargePremium, addItemPremium, addItemBasic, addNoRepairPremium, addNoRepairBasic, addSmallChip, addBigChip, addCrackRepair, addCrackStop, addAdditionalChip, addAdditionalSyringe, addMobileFee, removeSmallChip, removeBigChip, removeCrackRepair, removeCrackStop, removeAdditionalChip, removeAdditionalSyringe, removeMobileFee, addDiscount, selectAB, selectBC, selectMB, selectON, selectSK, selectYT, addPremium1, addBasic1, removePlan1, addPremium2, addBasic2, removePlan2, addPremium3, addBasic3, removePlan3, addPremium4, addBasic4, removePlan4 } from "../actions";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import amaLogo from "../images/ama-rewards-logo.png";
import ProvinceMenu from "./ProvinceMenu";
import RepairItemMenu from "./RepairItemMenu";
import RepairItem from "./RepairItem";
import Canvas from "./Canvas";
import Coupon from "./Coupon";

function Payment(props) {
    //Provide access to states in Redux store
    const plan = useSelector(state => state.plan);
    const planPrice = useSelector(state => state.planPrice);
    const repairPrice = useSelector(state => state.repairPrice);
    const renewal = useSelector(state => state.renewal);
    const taxes = useSelector(state => state.taxes);
    const additional1 = useSelector(state => state.additional1);
    const additional2 = useSelector(state => state.additional2);
    const additional3 = useSelector(state => state.additional3);
    const additional4 = useSelector(state => state.additional4);
    const dispatch = useDispatch();
    const history = useHistory();

    const [provinceSelect, setProvinceSelect] = useState(false);
    const [province, setProvince] = useState("");
    const [mainRepair, setMainRepair] = useState(false);
    const [noRepair, setNoRepair] = useState(false);
    const [amaDisplay, setAmaDisplay] = useState(false);
    const [amaText, setAmaText] = useState("Add");

    //DISCOUNT STATES
    const [discountDisplay, setDiscountDisplay] = useState(false);
    const [discountText, setDiscountText] = useState("Add");
    const [discountInput, setDiscountInput] = useState(0);
    const [discountAmount, setDiscountAmount] = useState(0);
    // const [couponAmount, setCouponAmount] = useState(0);

    const [items, setItems] = useState([]);

    const mainRepairItems = ["No Repair", "Small Chip", "Big Chip", "Crack Repair", "Crack Stop"];

    //Only necessary if the "Info" component is used
    // const customerInfo = props.location;

    //PRICE STATES
    const taxesText = Math.round({taxes}.taxes * 100).toFixed(2);
    const repairPlanFee = ({planPrice}.planPrice + {additional1}.additional1 + {additional2}.additional2 +{additional3}.additional3 + {additional4}.additional4);
    const preDiscountSubtotal = ({repairPrice}.repairPrice + {planPrice}.planPrice + {additional1}.additional1 + {additional2}.additional2 +{additional3}.additional3 + {additional4}.additional4);
    // const discountTotal = (discountAmount);
    const subtotal = ({repairPrice}.repairPrice + {planPrice}.planPrice + {additional1}.additional1 + {additional2}.additional2 +{additional3}.additional3 + {additional4}.additional4 - discountAmount);
    const totalPrice = ((subtotal) * (1 + taxes)).toFixed(2);
    const [maxDiscount, setMaxDiscount] = useState(0);

    //CUSTOMER INFO SECTION
    const [customerNameInput, setCustomerNameInput] = useState("");
    const [phoneNumberInput, setPhoneNumberInput] = useState("");
    const [licensePlateInput, setLicensePlateInput] = useState("");
    const [vehicleInfoInput, setVehicleInfoInput] = useState("");
    const [userIDInput, setUserIDInput] = useState("");

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
    // const [basicCount2, setBasicCount2] = useState(0);
    // const [premiumCount2, setPremiumCount2] = useState(0);
    // const [basicCount3, setBasicCount3] = useState(0);
    // const [premiumCount3, setPremiumCount3] = useState(0);
    // const [basicCount4, setBasicCount4] = useState(0);
    // const [premiumCount4, setPremiumCount4] = useState(0);

    // const totalAdditionalBasics = (basicCount1 + basicCount2 + basicCount3 + basicCount4);
    // const totalAdditionalPremiums = (premiumCount1 + premiumCount2 + premiumCount3 + premiumCount4);

    const [drawStatus, setDrawStatus] = useState(false);

    // INFO INPUTS
        function handleNameInput(event) {
            setCustomerNameInput(event.target.value);
        }
        function handlePhoneInput(event) {
            setPhoneNumberInput(event.target.value);
        }
        function handleLicenseInput(event) {
            setLicensePlateInput(event.target.value);
        }
        function handleVehicleInput(event) {
            setVehicleInfoInput(event.target.value);
        }
        function handleUserIDInput(event) {
            setUserIDInput(event.target.value);
        }

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

    function checkout() {
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

        history.push({
            pathname: "/checkout",
            state: {
                userID: userIDInput,
                province: province,
                fullName: customerNameInput,
                licensePlate: licensePlateInput,
                vehicleInfo: vehicleInfoInput,
                phoneNumber: phoneNumberInput,
                planType: plan,
                basicCount: basicCount,
                premiumCount: premiumCount,
                serviceRepair: 0,
                repairItems: items.toString(),
                subtotalBeforeDiscount: preDiscountSubtotal,
                discount: discountAmount,
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
    };

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

        //Update the Plan Price
        if ({plan}.plan === "Premium" && newItem != "No Repair") {
            dispatch(addItemPremium());
        } else if ({plan}.plan === "Basic" && newItem != "No Repair") {
            dispatch(addItemBasic());
        }

        //Update the Repair Price
        if (newItem === "No Repair" && {plan}.plan === "Premium") {
            dispatch(addNoRepairPremium());
        } else if (newItem === "No Repair" && {plan}.plan === "Basic") {
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

        //Reset the discount to avoid setting the price too low
        setDiscountAmount(0);
    }

    //NEW REPAIR ITEM DELETIONS
    function deleteItem(id, name) {
        console.log(name);
        //call an action to delete
        if (name === "No Repair") {
            setNoRepair(false);
            setMainRepair(false);
            if ({plan}.plan === "Premium") {
                dispatch(chargePremium());
            } else if ({plan}.plan === "Basic") {
                dispatch(chargeBasic());
            }
        } else if (name === "Small Chip") {
            dispatch(removeSmallChip());
            setMainRepair(false);
            if ({plan}.plan === "Premium") {
                dispatch(chargePremium());
            } else if ({plan}.plan === "Basic") {
                dispatch(chargeBasic());
            }
        } else if (name === "Big Chip") {
            dispatch(removeBigChip());
            setMainRepair(false);
            if ({plan}.plan === "Premium") {
                dispatch(chargePremium());
            } else if ({plan}.plan === "Basic") {
                dispatch(chargeBasic());
            }
        } else if (name === "Crack Repair") {
            dispatch(removeCrackRepair());
            setMainRepair(false);
            if ({plan}.plan === "Premium") {
                dispatch(chargePremium());
            } else if ({plan}.plan === "Basic") {
                dispatch(chargeBasic());
            }
        } else if (name === "Crack Stop") {
            dispatch(removeCrackStop());
            setMainRepair(false);
            if ({plan}.plan === "Premium") {
                dispatch(chargePremium());
            } else if ({plan}.plan === "Basic") {
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

        //Reset the discount to avoid setting the price too low
        setDiscountAmount(0);
    }

    function handleAmaClick() {
        setAmaDisplay(true);

        if (amaText === "Add") {
            setAmaText("Remove");
        } else {
            setAmaText("Add");
            setAmaDisplay(false);
        }
    }

    function handleDiscountClick() {
        if (discountDisplay === false && subtotal > 100) {
            setDiscountDisplay(true);
            setDiscountText("Remove");
        } else if (discountDisplay === true) {
            setDiscountDisplay(false);
            setDiscountText("Add");
            setDiscountAmount(0);
        }
    }

    function handleDiscountInput(event) {
        setDiscountInput(event.target.value);
    }

    function handleUpdateClick(event) {
        if (discountInput < 0) {
            setDiscountAmount(0);
        } else {
            updateDiscountAmount();
        }
        event.preventDefault();
    }

    function handleCouponClick(name) {
        if (name === "- - Coupon - -") {
            setDiscountAmount(0);
        } else if (name === "$10 Coupon") {
            setDiscountAmount(10);
        }
    }

    function updateDiscountAmount() {
        const requestedDiscount = (discountInput);
        const requestedSubtotal = preDiscountSubtotal - requestedDiscount;

        if (requestedSubtotal < 100 ) {
            setDiscountAmount(preDiscountSubtotal - 100);
        } else if (requestedSubtotal >= 100) {
            setDiscountAmount(requestedDiscount);
        }
    }

    function handleDraw() {
        setDrawStatus(true);
    }

    function resetCanvas() {
        setDrawStatus(false);
    }

    function updateProvince(name) {
        setProvinceSelect(true);
        setProvince(name);
        if (name === "AB") {
            dispatch(selectAB());
        } else if (name === "BC") {
            dispatch(selectBC());
        } else if (name === "MB") {
            dispatch(selectMB());
        } else if (name === "ON") {
            dispatch(selectON());
        } else if (name === "SK") {
            dispatch(selectSK());
        } else if (name === "YT") {
            dispatch(selectYT());
        }
    }

    function handleBackButton(){
        history.push("/option")
        dispatch(chargePremium());
        dispatch(removePlan1());
        dispatch(removePlan2());
        dispatch(removePlan3());
        dispatch(removePlan4());
    }

    return (
    <div className="page-container">
        <h1 className="page-header payment-header">Payment Information</h1>
        <ProvinceMenu
            onSelect={updateProvince}
        />
        {provinceSelect === true && (
            <div className="payment-container">
                <div className="payment-input-section">
                    <h1 className="new-plan info-text">{plan} Plan</h1>
                    <div className="info-summary">
                        <form name="primary-plan">
                            <label className="info-label">Customer's Full Name</label>
                                <input type="text" placeholder="Full Name" className="info-input-sm" onChange={handleNameInput} required/>
                            <label className="info-label">Phone Number</label>
                                <input type="text" placeholder="Phone Number" className="info-input-sm" maxLength="10" pattern="[0-9]{10}" onChange={handlePhoneInput} required/>
                            <label className="info-label">License Plate</label>
                                <input type="text" placeholder="License Plate" className="info-input-sm" onChange={handleLicenseInput} required/>
                            <label className="info-label">Vehicle Make & Model</label>
                                <input type="text" placeholder="Vehicle Make & Model" className="info-input-sm" onChange={handleVehicleInput} required/>
                            <label className="info-label">User ID</label>
                                <input type="text" placeholder="User ID" className="info-input-sm" maxLength="4" pattern="\d{4}" onChange={handleUserIDInput} required/>
                        </form>

                        {/* ADDITIONAL PLAN 1 */}
                        {plan !== "" && customerNameInput !== "" && phoneNumberInput !== "" && licensePlateInput !== "" && vehicleInfoInput !== "" && userIDInput !== "" && mainRepair === true && addButtonDisplay1 === true && (
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
                                    <input type="text" placeholder="Full Name" className="info-input-sm" onChange={handleNameInput1} required/>
                                <label className="info-label">2nd License Plate</label>
                                    <input type="text" placeholder="License Plate" className="info-input-sm" onChange={handleLicenseInput1} required/>
                                <label className="info-label">2nd Vehicle Make & Model</label>
                                    <input type="text" placeholder="Vehicle Make & Model" className="info-input-sm" onChange={handleVehicleInput1} required/>
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
                                    <input type="text" placeholder="Full Name" className="info-input-sm" onChange={handleNameInput2} required/>
                                <label className="info-label">3rd License Plate</label>
                                    <input type="text" placeholder="License Plate" className="info-input-sm" onChange={handleLicenseInput2} required/>
                                <label className="info-label">3rd Vehicle Make & Model</label>
                                    <input type="text" placeholder="Vehicle Make & Model" className="info-input-sm" onChange={handleVehicleInput2} required/>
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
                                    <input type="text" placeholder="Full Name" className="info-input-sm" onChange={handleNameInput3} required/>
                                <label className="info-label">4th License Plate</label>
                                    <input type="text" placeholder="License Plate" className="info-input-sm" onChange={handleLicenseInput3} required/>
                                <label className="info-label">4th Vehicle Make & Model</label>
                                    <input type="text" placeholder="Vehicle Make & Model" className="info-input-sm" onChange={handleVehicleInput3} required/>
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
                                    <input type="text" placeholder="Full Name" className="info-input-sm" onChange={handleNameInput4} required/>
                                <label className="info-label">5th License Plate</label>
                                    <input type="text" placeholder="License Plate" className="info-input-sm" onChange={handleLicenseInput4} required/>
                                <label className="info-label">5th Vehicle Make & Model</label>
                                    <input type="text" placeholder="Vehicle Make & Model" className="info-input-sm" onChange={handleVehicleInput4} required/>
                            </form>
                        )}
                    </div>
                </div>
                <div className="payment-summary-section">
                    <div className="repair-item-section">
                        <RepairItemMenu
                            noRepair={noRepair}
                            mainRepair={mainRepair}
                            onAdd={addItem}
                            onSelect={updateDropDown}
                        />
                        {items.map((item, index) => {
                            return (
                                <RepairItem
                                    key={index}
                                    id={index}
                                    itemName={item}
                                    onDelete={deleteItem}
                                />
                            );
                        })}
                    </div>
                    <div className="payment-report-section">
                        <div className="ama">
                            <button
                                className="ama-add"
                                onClick={handleAmaClick}
                                >{amaText}
                                <img className="ama-logo" src={amaLogo} alt="ama-rewards-logo" />
                            </button>
                            {amaDisplay === true && (
                            <div>
                                <label className="ama-label">AMA Number</label>
                                    <input type="text" placeholder="620XXXXXXXXXXXXX" className="ama-input" maxLength="16" pattern="\d{16}"/>
                                <div className="ama-verify">
                                <button
                                    className="ama-check"
                                    >Check AMA Status
                                </button>
                                <CheckCircleIcon fontSize="large" className="ama-status"></CheckCircleIcon>
                                </div>
                            </div>
                            )}
                        </div>
                        <div className="detail-summary-section">
                            <div className="discount-section">
                                {preDiscountSubtotal > 100 && (
                                <div className="discount">
                                    <div className="discount-add">
                                        <button
                                            onClick={handleDiscountClick}
                                            >{discountText} Discount
                                        </button>
                                    </div>
                                    {discountDisplay === true && (
                                        <form
                                            className="discount-form"
                                        >
                                            <input
                                                id="discount-amount"
                                                type="number"
                                                placeholder="0"
                                                className="discount-amount"
                                                onChange={handleDiscountInput}
                                            />
                                            <button
                                                className="discount-submit"
                                                onClick={handleUpdateClick}
                                                >
                                                ADD
                                            </button>
                                        </form>
                                    )}
                                </div>
                                )}
                                    {plan === "Basic" && preDiscountSubtotal < 100 && (
                                    <div className="coupon-menu">
                                            <Coupon
                                                plan={plan}
                                                onClick={handleCouponClick}
                                            />
                                    </div>
                                    )}
                            </div>
                            <div className="payment-detail">
                                <div className="payment-detail-text">
                                    <p>Repair Items Subtotal:</p>
                                    <p>Repair Plan Fee:</p>
                                    <p>Discount:</p>
                                    <p>Taxes:</p>
                                    <p><strong>Final Total:</strong></p>
                                </div>
                                <div className="payment-detail-amount">
                                    <p>${repairPrice}</p>
                                    <p>${repairPlanFee}</p>
                                    <p>${discountAmount}</p>
                                    <p>{taxesText}%</p>
                                    <p><strong>${totalPrice}</strong></p>
                                </div>
                            </div>
                        </div>
                        <p className="canvas-title">Mark the location(s) of the repair</p>
                        <Canvas
                            id="canvas"
                            onChange={handleDraw}
                            onRetry={resetCanvas}
                        />
                        <div className="checkout">
                            {/* Check items array and return true if any of the mainRepairItems are present */}
                            {items.some(i=> mainRepairItems.indexOf(i) >= 0) && drawStatus === true && plan !== "" && customerNameInput !== "" && phoneNumberInput !== "" && licensePlateInput !== "" && vehicleInfoInput !== "" && userIDInput !== "" && (
                            <button
                                className="checkout-btn"
                                onClick={checkout}
                                >CHECKOUT
                            </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )}
        <div className="lookup-footer">
            <button
                className="back-button"
                onClick={() => history.push("/option")}>
                <ArrowBackIcon></ArrowBackIcon>
            </button>
            <Footer />
        </div>
    </div>
    )
}

export default Payment;