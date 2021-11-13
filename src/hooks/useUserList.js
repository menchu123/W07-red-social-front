import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserThunk,
  loadUsersThunk,
} from "../redux/thunks/userListThunks";

const useUserList = () => {
  const userList = useSelector(({ userList }) => userList);
  const dispatch = useDispatch();

  const loadUserList = useCallback(() => {
    dispatch(loadUsersThunk());
  }, [dispatch]);

  const createUser = useCallback(
    (user) => {
      dispatch(createUserThunk(user));
    },
    [dispatch]
  );

  return {
    userList,
    loadUserList,
    createUser,
  };
};

export default useUserList;
