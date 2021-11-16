import "./App.css";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate, Navigate } from "react-router-dom";

import LoginForm from "./pages/LoginForm/LoginForm";
import { useEffect } from "react";
import useUser from "./hooks/useUser";
import { useDispatch } from "react-redux";
import { userLoginAction } from "./redux/actions/actionCreators";
import jwtDecode from "jwt-decode";
import Homepage from "./pages/Homepage/Homepage";
import SignUpForm from "./pages/SignUpForm/SignUpForm";
import MyProfile from "./pages/MyProfile/MyProfile";
import EditProfile from "./pages/EditProfile/EditProfile";

function App() {
  const { user, logoutUser } = useUser();
  let navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const token = JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
    );
    if (token) {
      dispatch(userLoginAction(jwtDecode(token.token)));
    }
  }, [dispatch]);

  const onLogout = (event) => {
    event.preventDefault();
    logoutUser();
    localStorage.removeItem(process.env.REACT_APP_LOCAL_STORAGE);
  };

  return (
    <>
      <header className="header">
        {user.isAuthenticated ? (
          <div className="header__friend-buttons">
            <button className="header__friend-button header__friend-button--friend">
              :)
            </button>
            <button className="header__friend-button header__friend-button--enemy">
              :(
            </button>
          </div>
        ) : (
          ""
        )}
        <Link to="/">
          <h1 className="frenemies-logo">frenemies</h1>
        </Link>
        {user.isAuthenticated ? (
          <div className="toplinks">
            <button
              className="top-button top-button--logout"
              onClick={(event) => {
                onLogout(event);
                navigate("/");
              }}
            >
              Log out
            </button>
            <Link className="top-button top-button--profile" to="/myprofile">
              My Profile
            </Link>
          </div>
        ) : (
          ""
        )}
      </header>
      <Routes>
        <Route
          path="/"
          element={user.isAuthenticated ? <Homepage /> : <LoginForm />}
        />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/myprofile"
          element={
            user.isAuthenticated ? <MyProfile /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/editprofile"
          element={
            user.isAuthenticated ? <EditProfile /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/signup"
          element={user.isAuthenticated ? <Navigate to="/" /> : <SignUpForm />}
        />
      </Routes>
    </>
  );
}

export default App;
