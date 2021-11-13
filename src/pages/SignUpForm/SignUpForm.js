import "./SignUpForm.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const initialValues = {
    username: "",
    password: "",
    name: "",
  };

  const [newUserData, setNewUserData] = useState(initialValues);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (
      newUserData.username !== "" &&
      newUserData.password !== "" &&
      newUserData.name !== ""
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [newUserData.name, newUserData.password, newUserData.username]);

  const onChange = (event) => {
    setNewUserData({ ...newUserData, [event.target.id]: event.target.value });
  };

  const onSignUp = (event) => {
    event.preventDefault();
    // create user
    setNewUserData(initialValues);
  };

  return (
    <form
      className="login-form"
      noValidate
      autoComplete="off"
      onSubmit={onSignUp}
    >
      <h5 className="login-title">Sign up</h5>
      <div className="form-inputs">
        <input
          type="text"
          className="input input--name"
          id="name"
          placeholder="Name"
          value={newUserData.name}
          onChange={(event) => onChange(event)}
        />

        <input
          type="text"
          className="input input--username"
          id="username"
          placeholder="Username"
          value={newUserData.username}
          onChange={(event) => onChange(event)}
        />

        <input
          type="password"
          className="input input--password"
          id="password"
          placeholder="Contraseña"
          value={newUserData.password}
          onChange={(event) => onChange(event)}
        />

        <button type="submit" className="login-btn" disabled={isDisabled}>
          SIGN UP
        </button>
        <Link to="/login">
          <button className="sign-up-suggestion">
            Already have an account? Log in!
          </button>
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
