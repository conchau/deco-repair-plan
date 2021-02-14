const setAdditional4Reducer = (state = 0, action) => {
    switch (action.type) {
      case "ADD_PREMIUM_4":
        return state = 40;
      case "ADD_BASIC_4":
        return state = 30;
      case "REMOVE_PLAN_4":
        return state = 0;
      default:
        return state;
    }
  };

export default setAdditional4Reducer;