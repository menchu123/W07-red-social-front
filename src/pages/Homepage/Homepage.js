import { useEffect } from "react";
import User from "../../components/User/User";
import useUser from "../../hooks/useUser";
import useUserList from "../../hooks/useUserList";
import "./Homepage.css";

const Homepage = () => {
  const { loadUserList, userList } = useUserList();
  const { loadCurrentUser } = useUser();
  useEffect(() => {
    loadUserList();
  }, [loadUserList]);

  loadCurrentUser();
  return (
    <ul className="user-list">
      {userList.map((user, index) => (
        <li className="user-list-item" key={index}>
          <User key={user.id} user={user} />
        </li>
      ))}
    </ul>
  );
};

export default Homepage;
