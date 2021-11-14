import { useEffect } from "react";
import User from "../../components/User/User";
import useUserList from "../../hooks/useUserList";
import "./Homepage.css";

const Homepage = () => {
  const { loadUserList } = useUserList();

  useEffect(() => {
    loadUserList();
  }, [loadUserList]);
  return (
    <ul className="user-list">
      <li className="col mt-3">
        <User />
      </li>
      <li className="col mt-3">
        <User />
      </li>
      <li className="col mt-3">
        <User />
      </li>
      <li className="col mt-3">
        <User />
      </li>
      <li className="col mt-3">
        <User />
      </li>
      <li className="col mt-3">
        <User />
      </li>
      <li className="col mt-3">
        <User />
      </li>
      <li className="col mt-3">
        <User />
      </li>
    </ul>
  );
};

export default Homepage;
