import jwtDecode from "jwt-decode";
import { loadCurrentUserAction } from "../actions/actionCreators";

const urlApi = "https://red-social-back-menchu.herokuapp.com/";

export const loadCurrentUserThunk = () => async (dispatch) => {
  const token = JSON.parse(
    localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
  );
  if (token) {
    const currentUserId = jwtDecode(token.token).id;
    const response = await fetch(urlApi + `users/${currentUserId}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token.token,
      },
    });
    const currentUser = await response.json();

    dispatch(loadCurrentUserAction(currentUser));
  }
};
