const setTaxesReducer = (state = 0, action) => {
    switch (action.type) {
      case "SELECT_AB":
        return state = 0.05;
      case "SELECT_BC":
        return state = 0.12;
      case "SELECT_MB":
        return state = 0.12;
      case "SELECT_ON":
        return state = 0.13;
      case "SELECT_SK":
        return state = 0.11;
      case "SELECT_YT":
        return state = 0.05;
      default:
        return state;
    }
  };

export default setTaxesReducer;