const loginReducer = (
  state = {
    id: new Date().getTime(),
    email: "",
    password: "",
  },
  action
) => {
  switch (action.type) {
    case "FORM_FIELD_CHANGE":
      const { name, value } = action.payload.target;
      return { ...state, [name]: value };
    default:
      return state;
  }
};
export default loginReducer;
