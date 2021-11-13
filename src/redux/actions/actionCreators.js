import actionTypes from "./actionTypes";

export const userLoginAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});

export const userLogoutAction = () => ({
  type: actionTypes.logoutUser,
});

export const loadUsersAction = (users) => ({
  type: actionTypes.loadUsers,
  users,
});

export const createUserAction = (user) => ({
  type: actionTypes.createUser,
  user,
});
