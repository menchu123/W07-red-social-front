import actionTypes from "../actions/actionTypes";

const currentUserReducer = (currentUser = {}, action) => {
  let newCurrentUser;

  switch (action.type) {
    case actionTypes.loadCurrentUser:
      newCurrentUser = { ...action.currentUser };
      break;
    default:
      return { ...currentUser };
  }

  return newCurrentUser;
};

export default currentUserReducer;
