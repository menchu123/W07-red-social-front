import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import configureStore from "../../redux/store/index";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Given a Login component", () => {
  describe("When the user hasn't typed a username", () => {
    test("Then it should have a disabled button", () => {
      const store = configureStore();
      render(
        <Router>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </Router>
      );
      const addButton = screen.getByRole("button", {
        name: "LOGIN",
      });

      expect(addButton).toBeDisabled();
    });
  });

  describe("When the user hasn't typed a password", () => {
    test("Then it should have a disabled button", () => {
      const store = configureStore();
      render(
        <Router>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </Router>
      );

      const usernameInput = screen.getByPlaceholderText("Username");
      userEvent.type(usernameInput, "nombresito");
      const addButton = screen.getByRole("button", {
        name: "LOGIN",
      });

      expect(addButton).toBeDisabled();
    });
  });

  describe("When the user has typed an username and a password", () => {
    test("Then login button should not be clickable", () => {
      const store = configureStore();

      render(
        <Router>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </Router>
      );

      const usernameInput = screen.getByPlaceholderText("Username");
      const passwordInput = screen.getByPlaceholderText("Contraseña");
      userEvent.type(usernameInput, "nombresito");
      userEvent.type(passwordInput, "contraseñita");
      const addButton = screen.getByRole("button", {
        name: "LOGIN",
      });
      userEvent.click(addButton);

      expect(addButton).not.toBeDisabled();
    });
  });
});
