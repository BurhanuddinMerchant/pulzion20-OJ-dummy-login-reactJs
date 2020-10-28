const registerReducer = (
  state = {
    id: new Date().getTime(),
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  },
  action
) => {
  switch (action.type) {
    case "FORM_FIELD_CHANGE":
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case "CLEAR_FIELD":
      return { ...state, [action.payload.name]: "" };
    default:
      return state;
  }
};
export default registerReducer;
