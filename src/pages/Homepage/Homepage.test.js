import { render, screen, waitFor } from "@testing-library/react";
import configureStore from "../../redux/store/index";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./Homepage";

describe("Given a Homepage component", () => {
  describe("When it is rendered", () => {
    test("Then it should render a loading message", () => {
      const store = configureStore();
      render(
        <Router>
          <Provider store={store}>
            <Homepage />
          </Provider>
        </Router>
      );
      const loading = screen.getByRole("heading", { name: "loading..." });

      expect(loading).toBeInTheDocument();
    });
  });
});
