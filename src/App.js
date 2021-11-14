import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./pages/LoginForm/LoginForm";
import { useEffect } from "react";
import useUser from "./hooks/useUser";
import { useDispatch } from "react-redux";
import { userLoginAction } from "./redux/actions/actionCreators";
import jwtDecode from "jwt-decode";
import Homepage from "./pages/Homepage/Homepage";
import SignUpForm from "./pages/SignUpForm/SignUpForm";
import MyProfile from "./pages/MyProfile/MyProfile";

function App() {
  const { user, logoutUser } = useUser();

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
      <Router>
        <header className="header">
          <div className="header__friend-buttons">
            <button className="header__friend-button header__friend-button--friend">
              :)
            </button>
            <button className="header__friend-button header__friend-button--enemy">
              :(
            </button>
          </div>
          <Link to="/">
            <h1 className="frenemies-logo">frenemies</h1>
          </Link>
          {user.isAuthenticated ? (
            <div className="toplinks">
              <button
                className="top-button top-button--logout"
                onClick={onLogout}
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
            path="/*"
            element={user.isAuthenticated ? <Homepage /> : <LoginForm />}
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
