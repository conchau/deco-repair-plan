const setAdditional1Reducer = (state = 0, action) => {
    switch (action.type) {
      case "ADD_PREMIUM_1":
        return state = 40;
      case "ADD_BASIC_1":
        return state = 30;
      case "REMOVE_PLAN_1":
        return state = 0;
      default:
        return state;
    }
  };

export default setAdditional1Reducer;