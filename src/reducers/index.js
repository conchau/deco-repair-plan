import setPlanPriceReducer from "./setPlanPrice";
import setRenewalReducer from "./setRenewal";
import setDiscountReducer from "./setDiscount";
import setPlanReducer from "./setPlan";
import { combineReducers } from "redux";
import setRepairPriceReducer from "./setRepairPrice";
import setTaxesReducer from "./setTaxes";
import setAdditional1Reducer from "./setAdditional1";
import setAdditional2Reducer from "./setAdditional2";
import setAdditional3Reducer from "./setAdditional3";
import setAdditional4Reducer from "./setAdditional4";

const allReducers = combineReducers({
    plan: setPlanReducer,
    planPrice: setPlanPriceReducer,
    renewal: setRenewalReducer,
    repairPrice: setRepairPriceReducer,
    discount: setDiscountReducer,
    taxes: setTaxesReducer,
    additional1: setAdditional1Reducer,
    additional2: setAdditional2Reducer,
    additional3: setAdditional3Reducer,
    additional4: setAdditional4Reducer
});

export default allReducers;