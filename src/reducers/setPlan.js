const setPlanReducer = (state = "", action) => {
    switch (action.type) {
      case "CHARGE_PREMIUM":
        return state = "Premium";
      case "CHARGE_BASIC":
        return state = "Basic";
      default:
        return state;
    }
  };

export default setPlanReducer;