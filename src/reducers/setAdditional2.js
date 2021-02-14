const setAdditional2Reducer = (state = 0, action) => {
    switch (action.type) {
      case "ADD_PREMIUM_2":
        return state = 40;
      case "ADD_BASIC_2":
        return state = 30;
      case "REMOVE_PLAN_2":
        return state = 0;
      default:
        return state;
    }
  };

export default setAdditional2Reducer;