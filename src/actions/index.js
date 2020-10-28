export const formField = (target) => {
  return {
    type: "FORM_FIELD_CHANGE",
    payload: target,
  };
};
export const clearField = (target) => {
  return {
    type: "CLEAR_FIELD",
    payload: target,
  };
};
