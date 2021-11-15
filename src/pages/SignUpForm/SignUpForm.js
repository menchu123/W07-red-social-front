import "./SignUpForm.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useUserList from "../../hooks/useUserList";
import { useNavigate } from "react-router";

const SignUpForm = () => {
  const { createUser } = useUserList();
  let navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
    name: "",
  };

  const [newUserData, setNewUserData] = useState(initialValues);
  const [isDisabled, setIsDisabled] = useState(true);
  const [usernameTaken, setUsernameTaken] = useState(false);

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

  const onSignUp = async (event) => {
    setUsernameTaken(false);
    event.preventDefault();
    const newUser = {
      name: newUserData.name,
      password: newUserData.password,
      username: newUserData.username,
    };
    const responseStatus = await createUser(newUser);
    setNewUserData(initialValues);
    if (responseStatus === 200) {
      navigate("/login");
    } else {
      setUsernameTaken(true);
    }
  };

  return (
    <>
      <form
        className={`signup-form${usernameTaken ? " shake" : ""}`}
        noValidate
        autoComplete="off"
        onSubmit={onSignUp}
      >
        <h5 className="signup-title">Sign up</h5>
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

          <button type="submit" className="signup-btn" disabled={isDisabled}>
            SIGN UP
          </button>
          <Link to="/login">
            <button className="sign-up-suggestion">
              Already have an account? Log in!
            </button>
          </Link>
        </div>
      </form>
      {usernameTaken ? (
        <h5 className="username-error">Username already taken</h5>
      ) : (
        ""
      )}
    </>
  );
};

export default SignUpForm;
