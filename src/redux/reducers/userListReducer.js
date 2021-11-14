import actionTypes from "../actions/actionTypes";

const userListReducer = (userList = [], action) => {
  let newUserList;

  switch (action.type) {
    case actionTypes.loadUsers:
      newUserList = [...action.userList];
      break;
    case actionTypes.createUser:
      newUserList = [...userList, action.user];
      break;
    default:
      return [...userList];
  }

  return newUserList;
};

export default userListReducer;
