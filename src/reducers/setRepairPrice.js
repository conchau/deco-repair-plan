const setRepairPriceReducer = (state = 0, action) => {
    switch (action.type) {
        case "CHARGE_PREMIUM":
            return state = 0;
        case "CHARGE_BASIC":
            return state = 0;
        case "ADD_SMALL_CHIP":
            return state + 60;
        case "ADD_BIG_CHIP":
            return state + 90;
        case "ADD_CRACK_REPAIR":
            return state + 120;
        case "ADD_CRACK_STOP":
            return state + 60;
        case "ADD_ADDITIONAL_CHIP":
            return state + 30;
        case "ADD_ADDITIONAL_SYRINGE":
            return state + 30;
        case "ADD_MOBILE_FEE":
            return state + 20;
        case "REMOVE_SMALL_CHIP":
            return state - 60;
        case "REMOVE_BIG_CHIP":
            return state - 90;
        case "REMOVE_CRACK_REPAIR":
            return state - 120;
        case "REMOVE_CRACK_STOP":
            return state - 60;
        case "REMOVE_ADDITIONAL_CHIP":
            return state - 30;
        case "REMOVE_ADDITIONAL_SYRINGE":
            return state - 30;
        case "REMOVE_MOBILE_FEE":
            return state - 20;
        default:
            return state;
    }
  };

export default setRepairPriceReducer;