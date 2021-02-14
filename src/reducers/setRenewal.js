//REDUCER
const setRenewalReducer = (state = 0, action) => {
    switch (action.type) {
      case "CHARGE_PREMIUM":
        return state = 80;
      case "CHARGE_BASIC":
        return state = 60;
      default:
        return state;
    }
  };

export default setRenewalReducer;