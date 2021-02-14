const setAdditional3Reducer = (state = 0, action) => {
    switch (action.type) {
      case "ADD_PREMIUM_3":
        return state = 40;
      case "ADD_BASIC_3":
        return state = 30;
      case "REMOVE_PLAN_3":
        return state = 0;
      default:
        return state;
    }
  };

export default setAdditional3Reducer;