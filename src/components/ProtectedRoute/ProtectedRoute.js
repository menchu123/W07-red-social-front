import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector(({ user }) => user.isAuthenticated);
  console.log(isAuthenticated);
  return isAuthenticated ? children : "no";
};

export default ProtectedRoute;
