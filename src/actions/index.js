export const chargeBasic = () => {
    return {
      type: "CHARGE_BASIC"
    };
};

export const chargePremium = () => {
    return {
      type: "CHARGE_PREMIUM"
    };
};

export const addDiscount = discountInput => {
  return {
    type: "DISCOUNT_ADDED",
    payload: discountInput
  };
};

export const addItemPremium = () => {
  return {
    type: "ADD_ITEM_PREMIUM"
  };
};

export const addItemBasic = () => {
  return {
    type: "ADD_ITEM_BASIC"
  };
};

export const addNoRepairPremium = () => {
  return {
    type: "ADD_NO_REPAIR_PREMIUM"
  };
};

export const addNoRepairBasic = () => {
  return {
    type: "ADD_NO_REPAIR_BASIC"
  };
};

export const addSmallChip = () => {
  return {
    type: "ADD_SMALL_CHIP"
  };
};

export const addBigChip = () => {
  return {
    type: "ADD_BIG_CHIP"
  };
};

export const addCrackRepair = () => {
  return {
    type: "ADD_CRACK_REPAIR"
  };
};

export const addCrackStop = () => {
  return {
    type: "ADD_CRACK_STOP"
  };
};

export const addAdditionalChip = () => {
  return {
    type: "ADD_ADDITIONAL_CHIP"
  };
};

export const addAdditionalSyringe = () => {
  return {
    type: "ADD_ADDITIONAL_SYRINGE"
  };
};

export const addMobileFee = () => {
  return {
    type: "ADD_MOBILE_FEE"
  };
};

export const removeSmallChip = () => {
  return {
    type: "REMOVE_SMALL_CHIP"
  };
};

export const removeBigChip = () => {
  return {
    type: "REMOVE_BIG_CHIP"
  };
};

export const removeCrackRepair = () => {
  return {
    type: "REMOVE_CRACK_REPAIR"
  };
};

export const removeCrackStop = () => {
  return {
    type: "REMOVE_CRACK_STOP"
  };
};

export const removeAdditionalChip = () => {
  return {
    type: "REMOVE_ADDITIONAL_CHIP"
  };
};

export const removeAdditionalSyringe = () => {
  return {
    type: "REMOVE_ADDITIONAL_SYRINGE"
  };
};

export const removeMobileFee = () => {
  return {
    type: "REMOVE_MOBILE_FEE"
  };
};

export const selectAB = () => {
  return {
    type: "SELECT_AB"
  };
};

export const selectBC = () => {
  return {
    type: "SELECT_BC"
  };
};

export const selectMB = () => {
  return {
    type: "SELECT_MB"
  };
};

export const selectON = () => {
  return {
    type: "SELECT_ON"
  };
};

export const selectSK = () => {
  return {
    type: "SELECT_SK"
  };
};

export const selectYT = () => {
  return {
    type: "SELECT_YT"
  };
};

export const addPremium1 = () => {
  return {
    type: "ADD_PREMIUM_1"
  };
};

export const addBasic1 = () => {
  return {
    type: "ADD_BASIC_1"
  };
};

export const removePlan1 = () => {
  return {
    type: "REMOVE_PLAN_1"
  };
};

export const addPremium2 = () => {
  return {
    type: "ADD_PREMIUM_2"
  };
};

export const addBasic2 = () => {
  return {
    type: "ADD_BASIC_2"
  };
};

export const removePlan2 = () => {
  return {
    type: "REMOVE_PLAN_2"
  };
};

export const addPremium3 = () => {
  return {
    type: "ADD_PREMIUM_3"
  };
};

export const addBasic3 = () => {
  return {
    type: "ADD_BASIC_3"
  };
};

export const removePlan3 = () => {
  return {
    type: "REMOVE_PLAN_3"
  };
};

export const addPremium4 = () => {
  return {
    type: "ADD_PREMIUM_4"
  };
};

export const addBasic4 = () => {
  return {
    type: "ADD_BASIC_4"
  };
};

export const removePlan4 = () => {
  return {
    type: "REMOVE_PLAN_4"
  };
};