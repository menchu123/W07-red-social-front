import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from "../redux/actions/actionCreators";
import { loginUserThunk } from "../redux/thunks/userThunks";
import jwtDecode from "jwt-decode";

const urlApi = "https://red-social-back-menchu.herokuapp.com/";

const useUser = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const loginUser = async (user) => {
    const response = await dispatch(loginUserThunk(user));
    return response;
  };

  const logoutUser = () => {
    dispatch(userLogoutAction());
  };

  const loadCurrentUser = async () => {
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
      return currentUser;
    }
  };

  return { user, loginUser, logoutUser, loadCurrentUser };
};

export default useUser;
