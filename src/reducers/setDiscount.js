const setDiscountReducer = (state = 0, action) => {
    switch(action.type){
        case "DISCOUNT_ADDED":
            return state = action.payload;
        default:
            return state;
    }
};

export default setDiscountReducer;