export const REMOVE_FEATURE = "REMOVE_FEATURE"

export const removeFeature = item => {
    // dispatch
    return { type: REMOVE_FEATURE, payload: item }
  };