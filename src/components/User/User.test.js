import { render, screen } from "@testing-library/react";
import ReactTestRenderer from "react-test-renderer";

import User from "./User";

describe("Given a User component", () => {
  describe("When it is passed a user object with the name 'Ramón'", () => {
    test("Then it should render a card with the user's name", () => {
      const name = "Ramón";
      const user = {
        name: name,
        password: "damedecome",
        username: "elsithecroc",
        photo: "",
        bio: "",
      };

      render(<User user={user} />);

      const userName = screen.getByText("Ramón");

      expect(userName).toBeInTheDocument();
    });
  });

  describe("When it recives and object", () => {
    test("then it should render a card with the object info inside", () => {
      const user = {
        name: "Ramón",
        password: "damedecome",
        username: "elsithecroc",
        photo: "",
        bio: "",
      };

      const userCard = ReactTestRenderer.create(<User user={user} />);
      expect(userCard.toJSON()).toMatchSnapshot();
    });
  });
});
