import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userLogoutAction } from "../redux/actions/actionCreators";
import { loginUserThunk } from "../redux/thunks/userThunks";

const useUser = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const loginUser = (user) => {
    dispatch(loginUserThunk(user));
  };

  const logoutUser = () => {
    dispatch(userLogoutAction());
  };

  return { user, loginUser, logoutUser };
};

export default useUser;
