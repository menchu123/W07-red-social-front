import "./LoginForm.css";
import { useEffect, useState } from "react";
import useUser from "../../hooks/useUser";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const { loginUser } = useUser();
  let navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialValues);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (userData.username !== "" && userData.password !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [userData.password, userData.username]);

  const onChange = (event) => {
    setUserData({ ...userData, [event.target.id]: event.target.value });
  };

  const onLogin = async (event) => {
    event.preventDefault();
    try {
      await loginUser(userData);
      navigate("/");
      setUserData(initialValues);
    } catch {
      console.log("nah");
    }
  };

  return (
    <form
      className="login-form"
      noValidate
      autoComplete="off"
      onSubmit={onLogin}
    >
      <h5 className="login-title">Login</h5>
      <div className="form-inputs">
        <input
          type="text"
          className="input input--username"
          id="username"
          placeholder="Username"
          value={userData.username}
          onChange={(event) => onChange(event)}
        />

        <input
          type="password"
          className="input input--password"
          id="password"
          placeholder="Contraseña"
          value={userData.password}
          onChange={(event) => onChange(event)}
        />

        <button type="submit" className="login-btn" disabled={isDisabled}>
          LOGIN
        </button>
        <Link to="/signup">
          <button className="sign-up-suggestion">
            Don't have an account? Sign up!
          </button>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
