import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/LoginForm/LoginForm";
import { useEffect } from "react";
import useUser from "./hooks/useUser";
import { useDispatch } from "react-redux";
import { userLoginAction } from "./redux/actions/actionCreators";
import jwtDecode from "jwt-decode";
import Homepage from "./pages/Homepage/Homepage";
import SignUpForm from "./pages/SignUpForm/SignUpForm";

function App() {
  const { user } = useUser();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
    );
    if (token) {
      dispatch(userLoginAction(jwtDecode(token.token)));
    }
  }, [dispatch]);

  return (
    <>
      <h1 className="frenemies-logo">frenemies</h1>
      <Router>
        <Routes>
          <Route
            path="/*"
            element={user.isAuthenticated ? <Homepage /> : <LoginForm />}
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
