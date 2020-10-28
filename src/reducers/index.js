import loginReducer from "./loginForm";
import registerReducer from "./registerForm";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
});
export default allReducers;
