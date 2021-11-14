import { render, screen } from "@testing-library/react";
import configureStore from "../../redux/store/index";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import MyProfile from "./MyProfile";

describe("Given a MyProfile component", () => {
  describe("When it is loaded", () => {
    test("Then it should render a profile card", () => {
      const store = configureStore();
      render(
        <Router>
          <Provider store={store}>
            <MyProfile />
          </Provider>
        </Router>
      );
      const usernameTag = screen.getByText("@");

      expect(usernameTag).toBeInTheDocument();
    });
  });
});
