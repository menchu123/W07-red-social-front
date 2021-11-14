import { useDispatch, useSelector } from "react-redux";
import { loadCurrentUserThunk } from "../redux/thunks/currentUserThunk";

const useCurrentUser = () => {
  const currentUser = useSelector(({ currentUser }) => currentUser);
  const dispatch = useDispatch();

  const loadCurrentUser = () => {
    dispatch(loadCurrentUserThunk());
  };

  return { currentUser, loadCurrentUser };
};

export default useCurrentUser;
