//REDUCER
const setPlanPriceReducer = (state = 0, action) => {
    switch (action.type) {
      case "CHARGE_PREMIUM":
        return state = 99.95;
      case "CHARGE_BASIC":
        return state = 89.95;
      case "ADD_ITEM_PREMIUM":
        return state = 40;
      case "ADD_ITEM_BASIC":
        return state = 30;
      case "ADD_NO_REPAIR_PREMIUM":
        return state = 99.95;
      case "ADD_NO_REPAIR_BASIC":
        return state = 89.95;
      default:
        return state;
    }
  };

export default setPlanPriceReducer;