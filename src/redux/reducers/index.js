import { combineReducers } from "redux";
import userListReducer from "./userListReducer";
import userReducer from "./userReducer";
import currentUserReducer from "./currentUserReducer";

const rootReducer = combineReducers({
  user: userReducer,
  userList: userListReducer,
  currentUser: currentUserReducer,
});

export default rootReducer;
