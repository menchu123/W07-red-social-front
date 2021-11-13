import { createUserAction, loadUsersAction } from "../actions/actionCreators";

const urlApi = "https://red-social-back-menchu.herokuapp.com";

export const loadUsersThunk = () => async (dispatch) => {
  const { token } = JSON.parse(
    localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
  );
  const response = await fetch(urlApi + "/users", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const userList = await response.json();

  dispatch(loadUsersAction(userList));
};

export const createUserThunk = (user) => async (dispatch) => {
  const response = await fetch(urlApi + "/users/register", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  user = await response.json();
  dispatch(createUserAction(user));
};
