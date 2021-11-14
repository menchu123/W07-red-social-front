import { useEffect } from "react";
import User from "../../components/User/User";
import useUserList from "../../hooks/useUserList";
import "./Homepage.css";

const Homepage = () => {
  const { loadUserList, userList } = useUserList();

  useEffect(() => {
    loadUserList();
  }, [loadUserList]);

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
