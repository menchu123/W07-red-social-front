import axios from "axios";
import jwtDecode from "jwt-decode";
import { userLoginAction } from "../actions/actionCreators";

const urlApi = "https://red-social-back-menchu.herokuapp.com/";

export const loginUserThunk = (user) => async (dispatch) => {
  const response = await axios.post(urlApi + "users/login", user);
  if (response.status === 200) {
    const token = response.data.token;
    const user = jwtDecode(token);
    dispatch(userLoginAction(user));
    localStorage.setItem(
      process.env.REACT_APP_LOCAL_STORAGE,
      JSON.stringify({ token: token })
    );
  }
};
