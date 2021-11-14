import { render, screen } from "@testing-library/react";
import configureStore from "../../redux/store/index";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import SignUpForm from "./SignUpForm";

describe("Given a Signup component", () => {
  describe("When the user hasn't typed a username", () => {
    test("Then it should have a disabled button", () => {
      const store = configureStore();
      render(
        <Router>
          <Provider store={store}>
            <SignUpForm />
          </Provider>
        </Router>
      );
      const singupButton = screen.getByRole("button", {
        name: "SIGN UP",
      });

      expect(singupButton).toBeDisabled();
    });
  });

  describe("When the user hasn't typed a password", () => {
    test("Then it should have a disabled button", () => {
      const store = configureStore();
      render(
        <Router>
          <Provider store={store}>
            <SignUpForm />
          </Provider>
        </Router>
      );

      const usernameInput = screen.getByPlaceholderText("Username");
      const nameInput = screen.getByPlaceholderText("Name");
      userEvent.type(nameInput, "nombresito2");
      userEvent.type(usernameInput, "nombresito");
      const singupButton = screen.getByRole("button", {
        name: "SIGN UP",
      });

      expect(singupButton).toBeDisabled();
    });
  });

  describe("When the user has typed an username, a name and a password", () => {
    test("Then signup button should not be clickable", () => {
      const store = configureStore();

      render(
        <Router>
          <Provider store={store}>
            <SignUpForm />
          </Provider>
        </Router>
      );

      const usernameInput = screen.getByPlaceholderText("Username");
      const passwordInput = screen.getByPlaceholderText("Contraseña");
      const nameInput = screen.getByPlaceholderText("Name");
      userEvent.type(nameInput, "nombresito2");
      userEvent.type(usernameInput, "nombresito");
      userEvent.type(passwordInput, "contraseñita");

      const singupButton = screen.getByRole("button", {
        name: "SIGN UP",
      });
      userEvent.click(singupButton);

      expect(singupButton).not.toBeDisabled();
    });
  });
});
