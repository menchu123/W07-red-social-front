import actionTypes from "./actionTypes";

export const userLoginAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});

export const userLogoutAction = () => ({
  type: actionTypes.logoutUser,
});

export const loadUsersAction = (userList) => ({
  type: actionTypes.loadUsers,
  userList,
});

export const createUserAction = (user) => ({
  type: actionTypes.createUser,
  user,
});

export const loadCurrentUserAction = (currentUser) => ({
  type: actionTypes.loadCurrentUser,
  currentUser,
});
