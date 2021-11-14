import { useEffect } from "react";
import User from "../../components/User/User";
import useCurrentUser from "../../hooks/useCurrentUser";
import useUserList from "../../hooks/useUserList";
import "./Homepage.css";

const Homepage = () => {
  const { loadUserList, userList } = useUserList();
  const { loadCurrentUser, currentUser } = useCurrentUser();

  useEffect(() => {
    loadCurrentUser();
  }, [loadCurrentUser]);

  useEffect(() => {
    loadUserList();
  }, [loadUserList]);

  return userList.length ? (
    <ul className="user-list">
      {userList
        .filter((user) => user.username !== currentUser.username)
        .map((user, index) => (
          <li className="user-list-item" key={index}>
            <User key={user.id} user={user} />
          </li>
        ))}
    </ul>
  ) : (
    <h2 className="loading">loading...</h2>
  );
};

export default Homepage;
