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
    async (user) => {
      const responseStatus = await dispatch(createUserThunk(user));
      return responseStatus;
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
