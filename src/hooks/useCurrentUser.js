import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCurrentUserThunk } from "../redux/thunks/currentUserThunk";

const useCurrentUser = () => {
  const currentUser = useSelector(({ currentUser }) => currentUser);
  const dispatch = useDispatch();

  const loadCurrentUser = useCallback(() => {
    dispatch(loadCurrentUserThunk());
  }, [dispatch]);

  return { currentUser, loadCurrentUser };
};

export default useCurrentUser;
